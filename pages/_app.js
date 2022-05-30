import "bootstrap-icons/font/bootstrap-icons.css";

import "../styles/tabler.min.css";

import Layout from "../components/Layout";
import { useRouter } from "next/router";

function RootApp({ Component, pageProps }) {
  const listNoLayout = [
    "/user/login",
    "/user/register",
    "/customer",
    "/customer/me",
    "/404",
    "/payments/pay-order",
  ];
  const router = useRouter();
  return (
    <>
      {listNoLayout.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default RootApp;
