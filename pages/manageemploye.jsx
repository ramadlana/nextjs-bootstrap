// Auth Page New

import dynamic from "next/dynamic";
import TableManageEmployee from "../components/table/TableManageEmployee";

// Disable SSR on Auth components so it can call localStorage
const AuthWrapper = dynamic(() => import("../components/AuthWrapper"), {
  ssr: false,
});

export default function ManageEmployee() {
  // Final display / After Auth Components here
  const auth_page = <TableManageEmployee></TableManageEmployee>;
  //   Auth Component as Wrapper
  return (
    <AuthWrapper
      auth_page={auth_page}
      url={`${process.env.BACKEND_SERVER}/dashboard`}
    ></AuthWrapper>
  );
}
