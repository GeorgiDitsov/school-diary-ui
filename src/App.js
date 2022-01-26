import React, { useEffect, useState } from "react";
import { getTokenCookie } from "./utils/cookie";
import { useTranslation } from "react-i18next";
import AuthenticationService from "./services/AuthenticationService";
import LocalizationContext from "./contexts/localization-context";
import PrincipalContext from "./contexts/principal-context";
import Loading from "./components/Loading";
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoute from "./components/routes/PublicRoute";
import AuthenticatedRoute from "./components/routes/AuthenticatedRoute";
import AdminRoute from "./components/routes/AdminRoute";
import StudentRoute from "./components/routes/StudentRoute";
import ParentRoute from "./components/routes/ParentRoute";
import TeacherRoute from "./components/routes/TeacherRoute";
import * as paths from "./utils/url";
import Login from "./containers/Login";
import Logout from "./containers/Logout";
import Home from "./components/Home";
import Info from "./components/Info";
import UsersPage from "./components/pages/UsersPage";
import StudentsPage from "./components/pages/StudentsPage";
import ParentsPage from "./components/pages/ParentsPage";
import TeachersPage from "./components/pages/TeachersPage";
import SchoolCoursesPage from "./components/pages/SchoolCoursesPage";
import SchoolSubjectsPage from "./components/pages/SchoolSubjectsPage";
import SchoolGroupsPage from "./components/pages/SchoolGroupsPage";
import SchoolSemestersPage from "./components/pages/SchoolSemestersPage";
import SchoolYearsPage from "./components/pages/SchoolYearsPage";
import GradesPage from "./components/pages/GradesPage";
import StudentGradesPage from "./components/pages/MyGradesPage";
import ChildrenPage from "./components/pages/ChildrenPage";
import ChildGradesPage from "./components/pages/ChildGradesPage";
import TeacherSchoolCoursesPage from "./components/pages/TeacherSchoolCoursesPage";
import TeacherStudentsPage from "./components/pages/TeacherStudentsPage";
import NotFoundError from "./components/error/NotFoundError";
import "./App.css";

let tokenCookie = getTokenCookie();

export default function App() {
  const [principal, setPrincipal] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { t: translate } = useTranslation();

  useEffect(() => {
    if (tokenCookie) {
      AuthenticationService.getAuthenticatedUser().then((user) => {
        setPrincipal(user);
        setIsLoading(false);
      });
    } else setIsLoading(false);
  }, []);

  return (
    <LocalizationContext.Provider value={translate}>
      <PrincipalContext.Provider value={principal}>
        {isLoading ? (
          <Loading />
        ) : (
          <BrowserRouter>
            <Switch>
              <PublicRoute path={paths.LOGIN_PATH} component={Login} />
              <AuthenticatedRoute path={paths.LOGOUT_PATH} component={Logout} />
              <AuthenticatedRoute path={paths.HOME_PATH} component={Home} />
              <AuthenticatedRoute path={paths.INFO_PATH} component={Info} />
              <AdminRoute path={paths.USERS_PATH} component={UsersPage} />
              <AdminRoute path={paths.STUDENTS_PATH} component={StudentsPage} />
              <AdminRoute path={paths.PARENTS_PATH} component={ParentsPage} />
              <AdminRoute path={paths.TEACHERS_PATH} component={TeachersPage} />
              <AdminRoute
                path={paths.COURSES_PATH}
                component={SchoolCoursesPage}
              />
              <AdminRoute
                path={paths.SUBJECTS_PATH}
                component={SchoolSubjectsPage}
              />
              <AdminRoute
                path={paths.CLASSES_PATH}
                component={SchoolGroupsPage}
              />
              <AdminRoute
                path={paths.SEMESTERS_PATH}
                component={SchoolSemestersPage}
              />
              <AdminRoute path={paths.YEARS_PATH} component={SchoolYearsPage} />
              <AdminRoute path={paths.GRADES_PATH} component={GradesPage} />
              <StudentRoute
                exact
                path={paths.MY_GRADES_PATH}
                component={StudentGradesPage}
              />
              <ParentRoute
                exact
                path={paths.CHILDREN_PATH}
                component={ChildrenPage}
              />
              <ParentRoute
                exact
                path={`${paths.CHILDREN_PATH}/:id/grades`}
                component={ChildGradesPage}
              />
              <TeacherRoute
                exact
                path={paths.MY_SCHOOL_COURSES_PATH}
                component={TeacherSchoolCoursesPage}
              />
              <TeacherRoute
                exact
                path={`${paths.MY_SCHOOL_COURSES_PATH}/:id/students`}
                component={TeacherStudentsPage}
              />
              <AuthenticatedRoute
                exact
                path={paths.INVALID_PATH}
                component={NotFoundError}
              />
            </Switch>
          </BrowserRouter>
        )}
      </PrincipalContext.Provider>
    </LocalizationContext.Provider>
  );
}
