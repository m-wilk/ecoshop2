const Badge = (props) => {
  return (
    <a href="#" className="nav-link position-relative">
      <span className={props.className}>
        <span className="position-absolute bg-primary rounded-circle d-flex align-items-center justify-content-center text-white es-badge">
          0
        </span>
      </span>
    </a>
  );
};

export default Badge;
