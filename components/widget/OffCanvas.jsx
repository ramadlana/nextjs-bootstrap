import InputForm from "../form/Input";

export default function OffCanvas() {
  {
    /* Off Canvas */
  }
  <div
    className={
      offCanvasTogle
        ? "offcanvas offcanvas-top fade"
        : "offcanvas offcanvas-top show"
    }
    tabIndex={-1}
    id="offcanvasTop"
    aria-labelledby="offcanvasTopLabel"
    style={{ visibility: "visible" }}
    aria-modal="true"
    role="dialog"
  >
    <div className="offcanvas-header">
      <h2 className="offcanvas-title" id="offcanvasTopLabel">
        Edit Data
      </h2>
      <button
        type="button"
        className="btn-close text-reset"
        onClick={() => {
          setOffCanvasTogle(!offCanvasTogle);
        }}
      />
    </div>
    <div className="offcanvas-body">
      <div>
        <InputForm
          id="service_name"
          label="Service Name"
          value={selectedData?.service_name}
          onChange={(element) => inputHandler(element.currentTarget)}
        ></InputForm>
      </div>
      <div className="mt-3">
        <button
          className="btn"
          type="button"
          onClick={() => {
            setOffCanvasTogle(!offCanvasTogle);
          }}
        >
          Close
        </button>
      </div>
    </div>
  </div>;

  {
    /* Backdrop */
  }
  {
    offCanvasTogle ? (
      <div></div>
    ) : (
      <div className="offcanvas-backdrop fade show"></div>
    );
  }

  {
    /* Off Canvas  END */
  }
}
