import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Courses from "../Courses/Courses";
import CourseInfo from "../CourseInfo/CourseInfo";
import CreateCourse from "../CreateCourse/CreateCourse";

const Main = () => {
  return (
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route exact path="/courses" component={Courses}/>
      <Route exact path="/courses/add" component={CreateCourse}/>
      <Route path="/courses/:courseId" component={CourseInfo}/>
    </Switch>
  );
}

export default Main;