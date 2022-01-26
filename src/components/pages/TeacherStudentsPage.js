import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import LocalizationContext from "../../contexts/localization-context";
import RequestService from "../../services/RequestService";
import { API_URL } from "../../utils/url";
import * as empty from "../../utils/empty-objects";
import Loading from "../Loading";
import Students from "../lists/Students";
import GradeContainer from "../../containers/GradeContainer";
import NotFoundError from "../error/NotFoundError";

export default function TeacherStudentsPage() {
  const location = useLocation();
  const { id } = useParams();
  const translate = useContext(LocalizationContext);

  const [grade, setGrade] = useState();
  const [student, setStudent] = useState();
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (location.state) {
      if (isLoading) {
        Promise.all([
          RequestService.getData(`${API_URL}/v1/school-courses/${id}/students`),
          RequestService.getData(`${API_URL}/v1/grades?schoolCourseId=${id}`),
          RequestService.getData(
            `${API_URL}/v1/grades/school-course-statistics?schoolCourseId=${id}`
          ),
        ]).then(([students, grades, gradesStatistics]) => {
          students.forEach((student) => {
            student.grades = grades.filter(
              (g) => g.student.value === student.value
            );
            student.averageGrade = gradesStatistics.find(
              (stat) => stat.studentId === student.value
            )?.average;
          });

          setStudents(students);
          setIsLoading(false);
        });
      }
    } else {
      setError(true);
      setIsLoading(false);
    }
  }, [location, isLoading, id]);

  const onCreate = (student) => {
    setStudent(student);
    setGrade(empty.grade);
    setShowModal(true);
  };

  const onEdit = (grade) => {
    setGrade(grade);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = (grade) => {
    const submitted = grade.id
      ? RequestService.update(`${API_URL}/v1/grades/${grade.id}`, {
          value: grade.value,
        })
      : RequestService.create(`${API_URL}/v1/grades`, {
          value: grade.value,
          studentId: grade.student?.value || student.value,
          schoolCourseId: id,
        });

    if (submitted) {
      setIsLoading(true);
      setShowModal(false);
    }
  };

  const handleDelete = (gradeId) => {
    if (
      window.confirm(translate("message.confirm")) &&
      RequestService.delete(`${API_URL}/v1/grades/${gradeId}`)
    ) {
      setIsLoading(true);
      setShowModal(false);
    }
  };

  return isLoading ? (
    <Loading />
  ) : error ? (
    <NotFoundError />
  ) : (
    <React.Fragment>
      <h2 className="text-center mb-5">{location.state?.subject?.label}</h2>
      <Students students={students} onCreate={onCreate} onEdit={onEdit} />
      {showModal && (
        <GradeContainer
          grade={grade}
          handleModal={handleCloseModal}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
        />
      )}
    </React.Fragment>
  );
}
