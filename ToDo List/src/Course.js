const Course = (props) => {
  console.log(props);

  const isComponent = props.course.isCompeleted;

  return (
    <div className="ListItem">
      <h1
        style={{
          backgroundColor: isComponent ? "#9DC183" : "white",
          marginLeft: "auto",
          marginRight: "auto",
          width: "150px",
          height: "50px",
        }}
      >
        {props.course.courseName}
      </h1>
      <button onClick={() => props.deleteCourse(props.course.id)}>x</button>
      <button onClick={() => props.CompleteCourse(props.course.id)}>
        Compelete
      </button>
    </div>
  );
};

export default Course;
