export const Input = ({ value, setValue, placeholder, type }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="input-group mb-3">
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
