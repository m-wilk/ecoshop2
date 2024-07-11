const Button = (props) => {
  return (
    <button className={`${props.className} btn`} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
