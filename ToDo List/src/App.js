import { useState } from "react";
import "./App.css";
import Course from "./Course";

function App() {
  const [courseList, setcourseList] = useState([]);
  const [newcourse, setnewCourse] = useState("");

  const handelleChange = (e) => {
    setnewCourse(e.target.value);
  };

  const AddCourse = () => {
    const course = {
      id:
        courseList.length === 0 ? 1 : courseList[courseList.length - 1].id + 1,
      courseName: newcourse,
      isCompeleted: false,
    };
    setcourseList([...courseList, course]);
    console.log(courseList);
  };

  const deleteCourse = (courseId) => {
    setcourseList(courseList.filter((course) => courseId !== course.id));
  };

  const CompleteCourse = (courseId) => {
    const newcourseList = courseList.map((course) => {
      if (course.id === courseId)
        return { ...course, isCompeleted: !course.isCompeleted };
      else return course;
    });
    setcourseList(newcourseList);
  };
  return (
    <div className="App">
      <div>
        <input maxLength={10} type="text" onChange={handelleChange}></input>
        <button onClick={AddCourse}> Add Course</button>
      </div>
      <div className="List">
        {courseList.map((course, index) => {
          return (
            <Course
              key={index}
              course={course}
              deleteCourse={deleteCourse}
              CompleteCourse={CompleteCourse}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
