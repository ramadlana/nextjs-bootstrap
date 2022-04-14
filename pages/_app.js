import "bootstrap/dist/css/bootstrap.css";

function RootApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default RootApp;
