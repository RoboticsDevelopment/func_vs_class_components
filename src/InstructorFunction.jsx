import React from "react";

const InstructorFunction= (props) => {

    return (
      <div className="">
        Name: {props.instructor.name} <br />
        Email: {props.instructor.email} <br />
        Phone: {props.instructor.phone}
      </div>
    );
  }


export default InstructorFunction;
