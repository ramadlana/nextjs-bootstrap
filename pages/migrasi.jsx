// Auth Page New
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
import MigrasiSubsForm from "../components/form/MigrasiSubsForm";

// Disable SSR on Auth components so it can call localStorage
const Auth = dynamic(() => import("../components/AuthWrapper"), { ssr: false });

export default function Protected() {
  // Final display / After Auth Components here
  const auth_page = (
    <>
      <MigrasiSubsForm></MigrasiSubsForm>
    </>
  );
  //   Auth Component as Wrapper
  return (
    <Auth
      auth_page={auth_page}
      url={`${process.env.BACKEND_SERVER}/dashboard`}
    ></Auth>
  );
}
