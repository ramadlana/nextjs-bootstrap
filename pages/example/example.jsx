import Navbar from "../../components/Navbar";
import Modal from "../../components/Modal";
import TableCommon from "../../components/common/Table";

export default function Example() {
  return (
    <div>
      <Navbar />
      <div className="container shadow-sm">
        <h1>Example</h1>
        <Modal button_name="Button Name" modal_content="hoam"></Modal>

        <h4 className="mt-3 mb-3">Table</h4>
        <hr className="mt-2 mb-3" />
        <TableCommon></TableCommon>
      </div>
    </div>
  );
}
