// Auth Page New

import dynamic from "next/dynamic";

// Disable SSR on Auth components so it can call localStorage
const Auth = dynamic(() => import("../components/Auth"), { ssr: false });

export default function Protected() {
  // Final display / After Auth Components here
  const auth_page = <h1>Successfully authenticated</h1>;
  //   Auth Component as Wrapper
  return (
    <Auth
      auth_page={auth_page}
      url={`${process.env.BACKEND_SERVER}/dashboard`}
    ></Auth>
  );
}
