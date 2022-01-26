import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import RequestService from "../../services/RequestService";
import { API_URL } from "../../utils/url";
import Loading from "../Loading";
import NotFoundError from "../error/NotFoundError";
import List from "../List";
import {
  SchoolCourseSimpleColumns,
  SchoolCourseSimpleRow,
} from "../lists/items/SchoolCourse";

export default function ChildGradesPage() {
  const location = useLocation();
  const { id } = useParams();

  const [schoolSemester, setSchoolSemester] = useState();
  const [schoolCourses, setSchoolCourses] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (location.state) {
      if (isLoading) {
        RequestService.getData(`${API_URL}/v1/school-semesters/current`).then(
          (schoolSemester) =>
            Promise.all([
              RequestService.getData(
                `${API_URL}/v1/students/${id}/school-courses?schoolSemesterId=${schoolSemester.value}`
              ),
              RequestService.getData(
                `${API_URL}/v1/grades?studentId=${id}&schoolSemesterId=${schoolSemester.value}`
              ),
            ]).then(([schoolCourses, grades]) => {
              schoolCourses.forEach((schoolCourse) => {
                schoolCourse.grades = grades.filter(
                  (g) => g.subject.value === schoolCourse.subject.value
                );
              });

              setSchoolSemester(schoolSemester);
              setSchoolCourses(schoolCourses);
              setIsLoading(false);
            })
        );
      }
    } else {
      setError(true);
      setIsLoading(false);
    }
  }, [location, isLoading, id]);

  return isLoading ? (
    <Loading />
  ) : error ? (
    <NotFoundError />
  ) : (
    <React.Fragment>
      <h2 className="text-center">{`${location.state?.fullName}, ${location.state?.pin}`}</h2>
      <h5 className="text-center">{`Group: ${
        location.state?.group || "-"
      }`}</h5>
      <h5 className="text-center mb-3">{`${schoolSemester.label}'s Success: ${
        location.state?.success || "-"
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
