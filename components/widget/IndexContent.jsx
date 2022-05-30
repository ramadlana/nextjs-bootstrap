export default function IndexContent({ size, title, content }) {
  return (
    <>
      <div className={`col-${size}`}>
        <div className="card card-md">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col">
                <h2 className="h3">{title}</h2>
                <p className="m-0">{content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
