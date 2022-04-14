import Navbar from "../components/navbar";
import Script from "next/script";
import Modal from "../components/modal";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container shadow-sm">
        <h1>Home Page</h1>
        <Modal button_name="Button Name" modal_content="hoam"></Modal>
      </div>
    </div>
  );
}
