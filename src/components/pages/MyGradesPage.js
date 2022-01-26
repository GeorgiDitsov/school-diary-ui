import React, { useContext, useEffect, useState } from "react";
import PrincipalContext from "../../contexts/principal-context";
import RequestService from "../../services/RequestService";
import { API_URL } from "../../utils/url";
import List from "../List";
import {
  SchoolCourseSimpleColumns,
  SchoolCourseSimpleRow,
} from "../lists/items/SchoolCourse";
import Loading from "../Loading";

export default function MyGradesPage() {
  const principal = useContext(PrincipalContext);

  const [student, setStudent] = useState();
  const [studentSuccess, setStudentSuccess] = useState();
  const [schoolSemester, setSchoolSemester] = useState();
  const [schoolCourses, setSchoolCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    RequestService.getData(`${API_URL}/v1/people?userId=${principal.id}`).then(
      (people) =>
        RequestService.getData(`${API_URL}/v1/school-semesters/current`).then(
          (schoolSemester) => {
            const student = people[0];
            Promise.all([
              RequestService.getData(
                `${API_URL}/v1/students/${student.id}/school-courses?schoolSemesterId=${schoolSemester.value}`
              ),
              RequestService.getData(
                `${API_URL}/v1/grades?studentId=${student.id}&schoolSemesterId=${schoolSemester.value}`
              ),
              RequestService.getData(
                `${API_URL}/v1/students/${student.id}/success?schoolSemesterId=${schoolSemester.value}`
              ),
            ]).then(([schoolCourses, grades, studentSuccess]) => {
              schoolCourses.forEach((schoolCourse) => {
                schoolCourse.grades = grades.filter(
                  (g) => g.subject.value === schoolCourse.subject.value
                );
              });

              setStudent(student);
              setStudentSuccess(studentSuccess);
              setSchoolSemester(schoolSemester);
              setSchoolCourses(schoolCourses);
              setIsLoading(false);
            });
          }
        )
    );
  }, [principal]);

  return isLoading ? (
    <Loading />
  ) : (
    <React.Fragment>
      <h2 className="text-center">{`${student.firstName} ${student.lastName}'s courses`}</h2>
      <h5 className="text-center mb-3">{`${schoolSemester.label}: ${
        studentSuccess || "-"
      }`}</h5>
      <List
        columns={<SchoolCourseSimpleColumns />}
        rows={schoolCourses.map((schoolCourse, index) => (
          <SchoolCourseSimpleRow key={index} schoolCourse={schoolCourse} />
        ))}
      />
    </React.Fragment>
  );
}
