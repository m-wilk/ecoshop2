const SectionTitle = ({ title }) => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-3">
      <h3 className="fw-bold es-h3-xl">{title}</h3>
      <a
        className="text-decoration-none text-black fw-bold es-underline-hover position-relative"
        href="#"
      >
        View All
      </a>
    </div>
  );
};

export default SectionTitle;
