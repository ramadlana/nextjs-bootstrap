import { useEffect, useState } from "react";
import axios from "axios";

export default function PayOrder({ query }) {
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = process.env.MIDTRANS_CLIENT_KEY;

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  let access_token;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    access_token = localStorage.getItem("access_token");
  }

  const handlePaySnap = async (cid) => {
    try {
      setIsloading(true);
      const transaction = await axios.get(
        `${process.env.BACKEND_SERVER}/dashboard/pay-order-snap?id=${cid}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": access_token,
          },
        }
      );
      window.snap.pay(`${transaction.data.transactionDetail.token}`);
      setIsloading(false);
    } catch (error) {
      return "error generate payment";
    }
  };

  return (
    <>
      <h1>Payment page</h1>
      <button
        className="btn btn-primary btn-sm mx-1"
        onClick={() => handlePaySnap(parseInt(query.id))}
      >
        {isLoading ? "Memproses Pembayaran.." : "Bayar"}
      </button>
    </>
  );
}

export async function getServerSideProps(context) {
  const query = context.query;
  // Pass data to the page via props
  return { props: { query: query } };
}
