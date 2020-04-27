import React from 'react'
import { getTokenCookie } from './utils/cookie'
import jwt_decode from 'jwt-decode'
import { useTranslation } from 'react-i18next'
import LocalizationContext from './context/localization-context'
import PrincipalContext from './context/principal-context'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from './components/routes/AuthenticatedRoute'
import AdminRoute from './components/routes/AdminRoute'
import * as paths from './utils/url'
import Login from './containers/Login'
import Logout from './containers/Logout'
import Home from './components/Home'
import Info from './components/Info'
import CustomersPage from './components/pages/CustomersPage'
import StudentsPage from './components/pages/StudentsPage'
import ParentsPage from './components/pages/ParentsPage'
import TeachersPage from './components/pages/TeachersPage'
import SchoolSubjectsPage from './components/pages/SchoolSubjectsPage'
import CoursesPage from './components/pages/CoursesPage'
import GroupsOfStudentsPage from './components/pages/GroupsOfStudentsPage'
import SemestersPage from './components/pages/SemestersPage'
import GradesPage from './components/pages/GradesPage'
import Children from './components/lists/Children'
import TeacherCoursesPage from './components/pages/TeacherCoursesPage'
import NotFoundError from './components/error/NotFoundError'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import StudentRoute from './components/routes/StudentRoute'
import ParentRoute from './components/routes/ParentRoute'
import TeacherRoute from './components/routes/TeacherRoute'

let tokenValue = getTokenCookie().value

class App extends React.Component {

  state = {
    principal: tokenValue ? jwt_decode(tokenValue) : undefined
  }

  translate = (code, parameter) => {
    const { t: translate } = useTranslation()
    return parameter ? translate(code, parameter) : translate(code)
  }

  render() {
    return (
      <LocalizationContext.Provider value={this.translate}>
        <PrincipalContext.Provider value={this.state.principal}>
          <BrowserRouter>
            <Switch>
              <Route path={paths.LOGIN_PATH} component={Login}/>
              <AuthenticatedRoute path={paths.LOGOUT_PATH} component={Logout}/>
              <AuthenticatedRoute path={paths.HOME_PATH} component={Home}/>
              <AuthenticatedRoute path={paths.INFO_PATH} component={Info}/>
              <AdminRoute path={paths.CUSTOMERS_PATH} component={CustomersPage}/>
              <AdminRoute path={paths.STUDENTS_PATH} component={StudentsPage}/>
              <AdminRoute path={paths.PARENTS_PATH} component={ParentsPage}/>
              <AdminRoute path={paths.TEACHERS_PATH} component={TeachersPage}/>
              <AdminRoute path={paths.COURSES_PATH} component={CoursesPage}/>
              <AdminRoute path={paths.SCHOOL_SUBJECTS_PATH} component={SchoolSubjectsPage}/>
              <AdminRoute path={paths.GROUPS_OF_STUDENTS_PATH} component={GroupsOfStudentsPage}/>
              <AdminRoute path={paths.SEMESTERS_PATH} component={SemestersPage}/>
              <AdminRoute path={paths.GRADES_PATH} component={GradesPage}/>
              <StudentRoute path={paths.STUDENT_GRADES_PATH} component={GradesPage}/>
              <ParentRoute path={paths.PARENT_CHILDREN_PATH} component={Children}/>
              <TeacherRoute exact path={paths.TEACHER_COURSES_PATH} component={TeacherCoursesPage}/>
              <TeacherRoute 
                path={paths.TEACHER_COURSES_PATH + '/:courseId' + paths.STUDENTS_PATH + '/:studentId'} 
                component={GradesPage}
              />
              <AuthenticatedRoute exact path={paths.INVALID_PATH} component={NotFoundError}/>
            </Switch>
          </BrowserRouter>
        </PrincipalContext.Provider>
      </LocalizationContext.Provider>
    )
  }
}

export default App