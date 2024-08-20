const CustomLink = ({
  className,
  children,
  isArrow,
  animationClassName = "es-shop-btn",
}) => {
  return (
    <a
      className={`text-decoration-none rounded d-inline-block ${animationClassName} ${className}`}
    >
      {children}
      {isArrow && (
        <span className="ms-2 icon-arrow-right es-fs-07 d-inline-block"></span>
      )}
    </a>
  );
};

export default CustomLink;
