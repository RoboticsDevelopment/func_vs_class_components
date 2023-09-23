import React from "react";

class Instructor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="">
        Name: {this.props.instructor.name} <br />
        Email: {this.props.instructor.email} <br />
        Phone: {this.props.instructor.phone}
      </div>
    );
  }
}

export default Instructor;
