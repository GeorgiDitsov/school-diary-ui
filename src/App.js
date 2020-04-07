import React from 'react'
import { getTokenCookie } from './utils/cookie'
import { TokenContext } from './context/context'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from './components/routes/AuthenticatedRoute'
import { LOGIN_PATH, LOGOUT_PATH, HOME_PATH, INFO_PATH, INVALID_PATH, 
  CUSTOMERS_PATH, STUDENTS_PATH, PARENTS_PATH, TEACHERS_PATH, SCHOOL_SUBJECTS_PATH, 
  COURSES_PATH, GROUPS_OF_STUDENTS_PATH, SEMESTERS_PATH, GRADES_PATH, STUDENT_GRADES_PATH, PARENT_CHILDREN_PATH } from './utils/url'
import Login from './containers/Login'
import Logout from './containers/Logout'
import Home from './components/Home'
import Info from './components/Info'
import Customers from './components/lists/Customers'
import Students from './components/lists/Students'
import Parents from './components/lists/Parents'
import Teachers from './components/lists/Teachers'
import SchoolSubjects from './components/lists/SchoolSubjects'
import Courses from './components/lists/Courses'
import GroupsOfStudents from './components/lists/GroupsOfStudents'
import Semesters from './components/lists/Semesters'
import Grades from './components/lists/Grades'
import Children from './components/lists/Children'
import NotFoundError from './components/error/NotFoundError'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends React.Component {
  
  constructor() {
    super()
    this.state={
      token: getTokenCookie()
    }
  }

  render() {
    return (
      <TokenContext.Provider value={this.state.token.value}>
        <BrowserRouter>
          <Switch>
            <Route path={LOGIN_PATH} component={Login}/>
            <AuthenticatedRoute path={LOGOUT_PATH} component={Logout}/>
            <AuthenticatedRoute path={HOME_PATH} component={Home}/>
            <AuthenticatedRoute path={INFO_PATH} component={Info}/>
            <AuthenticatedRoute path={CUSTOMERS_PATH} component={Customers}/>
            <AuthenticatedRoute path={STUDENTS_PATH} component={Students}/>
            <AuthenticatedRoute path={PARENTS_PATH} component={Parents}/>
            <AuthenticatedRoute path={TEACHERS_PATH} component={Teachers}/>
            <AuthenticatedRoute path={SCHOOL_SUBJECTS_PATH} component={SchoolSubjects}/>
            <AuthenticatedRoute path={COURSES_PATH} component={Courses}/>
            <AuthenticatedRoute path={GROUPS_OF_STUDENTS_PATH} component={GroupsOfStudents}/>
            <AuthenticatedRoute path={SEMESTERS_PATH} component={Semesters}/>
            <AuthenticatedRoute path={GRADES_PATH} component={Grades}/>
            <AuthenticatedRoute path={STUDENT_GRADES_PATH} component={Grades}/>
            <AuthenticatedRoute path={PARENT_CHILDREN_PATH} component={Children}/>
            <AuthenticatedRoute exact path={INVALID_PATH} component={NotFoundError}/>
          </Switch>
        </BrowserRouter>
      </TokenContext.Provider>
    )
  }
}

export default App