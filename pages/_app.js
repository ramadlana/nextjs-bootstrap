import "bootstrap/dist/css/bootstrap.css";
import { RecoilRoot } from "recoil";

function RootApp({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default RootApp;
