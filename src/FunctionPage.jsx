import  React, {useState} from "react";
import { getRandomUser } from "./Utility/api";
import InstructorClass from "./InstructorClass";

const FunctionPage = () => {
  const [state, setState] = useState(() => {
    return {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
    };
  });

  const [inputName, setInputName] = useState(() => {
    return "";
  });
  const [inputFeedback, setInputFeedback] = useState(() => {
    return "";
  });

  /* constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem("classStateLocalStorage")) || {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
      inputName: "",
      inputFeedback: "",
    };
  } */

  /*   componentDidMount = async () => {
    console.log("Component Did Mount");
    if (JSON.parse(localStorage.getItem("classStateLocalStorage"))) {
      this.setState(JSON.parse(localStorage.getItem("classStateLocalStorage")));
    } else {
      const response = await getRandomUser();
      console.log(response);
      this.setState((prevState) => {
        return {
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        };
      });
    }
  };

  componentDidUpdate = async (previousProps, previousState) => {
    console.log("Component Did Update");
    localStorage.setItem("classStateLocalStorage", JSON.stringify(this.state));
    console.log("Old State - " + previousState.studentCount);
    console.log("New State - " + this.state.studentCount);
    if (previousState.studentCount < this.state.studentCount) {
      const response = await getRandomUser();
      this.setState((prevState) => {
        return {
          studentList: [
            ...prevState.studentList,
            {
              name: response.data.first_name + " " + response.data.last_name,
              gender: response.data.gender,
              avatar: response.data.avatar,
            },
          ],
        };
      });
    } else if (previousState.studentCount > this.state.studentCount) {
      this.setState((prevState) => {
        return {
          studentList: [],
        };
      });
    }
  };

  componentWillUnmount() {
    console.log("Component Will Unmount");
  } */

  const handleAddStudent = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: prevState.studentCount + 1,
      };
    });
  };

  const handleRemoveAllStudents = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: 0,
      };
    });
  };

  const handleToggleInstructor = () => {
    setState((prevState) => {
      return {
        ...prevState,
        hideInstructor: !prevState.hideInstructor,
      };
    });
  };

  return (
    <div>
      <div className="p-3">
        <span className=" h4 text-success">Instructor &nbsp;</span>
        <i
          className={`bi ${
            state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
          } btn btn-success btn-sm`}
          onClick={handleToggleInstructor}
        ></i>

        {!state.hideInstructor && state.instructor ? (
          <InstructorClass instructor={state.instructor} />
        ) : null}
      </div>

      <div className="p-3">
        <span className="h4 text-success">Feedback</span>
        <br />
        <input
          type="text"
          value={state.inputName}
          placeholder="Name.."
          onChange={(e) => {
            setInputName( e.target.value );
          }}
        ></input>
        Value: {inputName}
        <br />
        <textarea
          value={inputFeedback}
          onChange={(e) => {
            setInputFeedback( e.target.value );
          }}
          placeholder="Feedback..."
        ></textarea>
        Value: {inputFeedback}
      </div>
      <div className="p-3">
        <span className="h4 text-success">Students</span> <br />
        <div>Student Count: {state.studentCount}</div>
        <button className="btn btn-success btn-sm" onClick={handleAddStudent}>
          Add Student
        </button>
        &nbsp;
        <button
          className="btn btn-danger btn-sm"
          onClick={handleRemoveAllStudents}
        >
          Remove All Students
        </button>
        {state.studentList.map((student, index) => {
          return (
            <>
              <div className="text-white" key={index}>
                - <img src={student.avatar} alt="" height="30px" />{" "}
                {student.name} ({student.gender})
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FunctionPage;