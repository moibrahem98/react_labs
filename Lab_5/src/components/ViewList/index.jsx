import { StTable } from "../";
export const ViewList = (props) => {
  return (
    <>
      {props.students.map((st, i) => {
        return (
          <StTable
            key={i}
            removestudent={props.removeStudent}
            stid={st.stid}
            stName={st.stName}
            course={st.course}
            grade={st.grade}
          />
        );
      })}
    </>
  );
};
