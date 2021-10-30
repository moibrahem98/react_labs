import { Input } from "../";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./../../contexts/AuthContext";

export const AddStudent = (props) => {
  const [stid, setStid] = useState("");
  const [stName, setStName] = useState("");
  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState("");
  // const isLoggedIn = localStorage.getItem("token") === "123";
  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const handleSubmit = () => {
    props.addstudent({ stid, stName, course, grade });
  };

  const handleLogOut = () => {
    authCtx.logout();
    history.replace("/login");
  };

  return (
    <div className="card p-3 m-2">
      <Input
        value={stid}
        setValue={setStid}
        label="ID"
        placeholder={"Enter Student ID"}
      />
      <Input
        value={stName}
        setValue={setStName}
        label="St. Name"
        placeholder={"Enter Student Name"}
      />
      <Input
        value={course}
        setValue={setCourse}
        label="Course"
        placeholder={"Enter Course Name"}
      />
      <Input
        value={grade}
        setValue={setGrade}
        label="Grade"
        placeholder={"Enter Student Grade"}
      />
      {props.alreadyExists && (
        <div className="alert alert-danger"> Student ID already Exists</div>
      )}
      <button onClick={handleSubmit} className="btn btn-primary m-2 ">
        Add Student
      </button>
      <button onClick={handleLogOut} className="btn btn-danger m-2 ">
        Log out
      </button>
    </div>
  );
};
