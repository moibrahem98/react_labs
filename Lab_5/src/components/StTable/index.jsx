export const StTable = ({ removestudent, stid, stName, course, grade }) => {
  return (
    <>
      <tr>
        <td>{stid}</td>
        <td>{stName}</td>
        <td>{course}</td>
        <td>{grade}</td>
        <td>
          <button className="btn btn-danger m-1" onClick={removestudent}>
            X
          </button>
        </td>
      </tr>
    </>
  );
};
