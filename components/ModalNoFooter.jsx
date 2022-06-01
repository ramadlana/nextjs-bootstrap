// Please Add modal-form for clear form
export default function ModalNoFooter({
  modal_id,
  button_name,
  button_init_click,
  modal_content,
  modal_title,
  button_className,
}) {
  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className={
          button_className ? button_className : "btn btn-primary btn-sm mx-1"
        }
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
          </div>
        </div>
      </div>
    </>
  );
}
