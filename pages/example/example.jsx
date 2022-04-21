import Modal from "../../components/Modal";
import { useRecoilState } from "recoil";
import { exampleTableState } from "../../state/tableState";
import TableCommon from "../../components/example-components/Table";
import NavbarMember from "../../components/NavbarMember";

export default function Example() {
  const [tableData, setTableData] = useRecoilState(exampleTableState);
  return (
    <div>
      <NavbarMember></NavbarMember>
      <div className="container shadow-sm">
        <h4 className="mt-3 mb-3">Modal</h4>
        <Modal button_name="Click To Popup Modal" modal_content="hoam"></Modal>

        <h4 className="mt-3 mb-3">Table</h4>
        <hr className="mt-2 mb-3" />
        <TableCommon tableData={tableData}></TableCommon>
      </div>
    </div>
  );
}
