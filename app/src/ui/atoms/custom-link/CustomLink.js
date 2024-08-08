const CustomLink = ({ className, children, isArrow }) => {
  return (
    <a
      className={`text-decoration-none rounded d-inline-block es-shop-btn ${className}`}
    >
      {children}
      {isArrow && (
        <span className="ms-2 icon-arrow-right es-fs-07 d-inline-block"></span>
      )}
    </a>
  );
};

export default CustomLink;
