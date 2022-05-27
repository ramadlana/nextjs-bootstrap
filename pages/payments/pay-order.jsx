import { useEffect, useState } from "react";
import axios from "axios";

export default function PayOrder({ query }) {
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = process.env.MIDTRANS_SNAP_JS_URL;
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
        `${process.env.BACKEND_SERVER}/pay-order?id=${cid}`,
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
      <div className="card">
        <div className="card-body">
          <div className="modal-content">
            <div className="modal-status bg-success" />
            <div className="modal-body text-center py-4">
              {/* Download SVG icon from http://tabler-icons.io/i/circle-check */}
              {/* SVG icon code with class="mb-2 text-green icon-lg" */}
              <h3>Pembayaran Online</h3>
              <div className="text-muted">
                Lanjutkan proses pembayaran dengan melakukan klik tombol bayar
                dibawah
              </div>

              <a
                className="btn btn-success btn-pill mt-4"
                onClick={() => handlePaySnap(parseInt(query.id))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-cash"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <desc>
                    Download more icon variants from
                    https://tabler-icons.io/i/cash
                  </desc>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x={7} y={9} width={14} height={10} rx={2} />
                  <circle cx={14} cy={14} r={2} />
                  <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
                </svg>
                {isLoading ? "Memproses Permintaan.." : "Bayar"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const query = context.query;
  // Pass data to the page via props
  return { props: { query: query } };
}
