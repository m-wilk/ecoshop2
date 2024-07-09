const Input = (props) => {
  return (
    <input
      type="text"
      className={`form-control border-0 input-reset ${props.className}`}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
