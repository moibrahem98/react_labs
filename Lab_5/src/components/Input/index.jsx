export const Input = (props) => {
  // const handleChange = (e) => {
  //   props.setValue(e.target.value);
  // };

  return (
    <div className="input-group input-group-lg m-2">
      <div className="input-group-prepend"></div>
      <input
        type={props.type}
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.setValue(e.target.value);
        }}
      />
    </div>
  );
};
