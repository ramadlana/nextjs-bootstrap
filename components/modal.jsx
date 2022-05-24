// Please Add modal-form for clear form
export default function Modal({
  modal_id,
  button_name,
  button_init_click,
  modal_content,
  onClickAction,
  modal_title,
}) {
  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary btn-sm m-1"
        data-bs-toggle="modal"
        data-bs-target={"#" + modal_id}
        onClick={button_init_click}
      >
        {button_name}
      </button>
      {/* Modal */}
      <div
        className="modal modal-blur fade"
        id={modal_id}
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {modal_title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  document.getElementById("modal-form").reset();
                }}
              />
            </div>
            <div className="modal-body">{modal_content}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {
                  document.getElementById("modal-form").reset();
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onClickAction}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
