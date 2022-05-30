export default function ImageSlider() {
  return (
    <>
      {" "}
      <div
        id="carousel-controls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" alt src="/assets/images/index.png" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" alt src="/assets/images/index.png" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carousel-controls"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel-controls"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </>
  );
}
