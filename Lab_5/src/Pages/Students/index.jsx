import { useState } from "react";
import { AddStudent } from "../../components";
import { ViewList } from "../../components";

export const Students = () => {
  const [students, setStudents] = useState([]);
  const [alreadyExists, setAlreadyExists] = useState(false);

  const addStudent = (newStudent) => {
    if (!students.some((student) => newStudent.stid === student.stid)) {
      setStudents([...students, newStudent]);
      setAlreadyExists(false);
    } else {
      setAlreadyExists(true);
    }
  };

  const handleDelete = () => {
    setStudents([]);
  };

  const singleDeleteHandler = (deletedId) => {
    setStudents((students) => {
      return students.filter((student) => student.stid !== deletedId);
    });
  };

  const removeStudent = (e) => {
    let fields = e.target.parentNode.parentNode.children;
    singleDeleteHandler(fields[0].innerText);
  };

  return (
    <div className="row">
      <h1>Students</h1>
      <div className="col-6">
        <AddStudent addstudent={addStudent} alreadyExists={alreadyExists} />
      </div>
      <div className="col-6">
        <h1>View List</h1>
        <button className="btn btn-danger m-2" onClick={handleDelete}>
          Reset
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Grade</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <ViewList students={students} removeStudent={removeStudent} />
          </tbody>
        </table>
      </div>
    </div>
  );
};
