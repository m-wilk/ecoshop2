const CountdownRenderer = ({ days, hours, minutes, seconds }) => (
  <div className="d-flex justify-content-start align-items-center gap-3 mb-4">
    <div className="d-flex flex-column justify-content-center align-items-center gap-2">
      <span className="d-flex justify-content-center align-items-center rounded-circle bg-white text-danger fs-4 fw-bold es-circle-small">
        {days}
      </span>
      <span className="fs-5">Days</span>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center gap-2">
      <span className="d-flex justify-content-center align-items-center rounded-circle bg-white text-secondary fs-4 fw-bold es-circle-small">
        {hours}
      </span>
      <span className="fs-5">Hours</span>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center gap-2">
      <span className="d-flex justify-content-center align-items-center rounded-circle bg-white text-primary fs-4 fw-bold es-circle-small">
        {minutes}
      </span>
      <span className="fs-5">Minutes</span>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center gap-2">
      <span className="d-flex justify-content-center align-items-center rounded-circle bg-white text-danger fs-4 fw-bold es-circle-small">
        {seconds}
      </span>
      <span className="fs-5">Seconds</span>
    </div>
  </div>
);

export default CountdownRenderer;
