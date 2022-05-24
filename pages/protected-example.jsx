// Auth Page New

import dynamic from "next/dynamic";

// Disable SSR on Auth components so it can call localStorage
const AuthWrapper = dynamic(() => import("../components/AuthWrapper"), {
  ssr: false,
});

export default function Protected() {
  // Final display / After Auth Components here
  const auth_page = <h1>Successfully authenticated</h1>;
  //   Auth Component as Wrapper
  return (
    <AuthWrapper
      auth_page={auth_page}
      url={`${process.env.BACKEND_SERVER}/dashboard`}
    ></AuthWrapper>
  );
}
