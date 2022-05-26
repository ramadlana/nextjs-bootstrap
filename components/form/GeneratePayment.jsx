import { useState } from "react";
import axios from "axios";
import Link from "next/link";
export default function GeneratePayment({ cid, access_token }) {
  const [url, setUrl] = useState();
  const [params, setParams] = useState({ isLoading: false });
  // handle Generate Payment
  const handleGeneratePayment = async (cid) => {
    setParams({ isLoading: true });
    try {
      const payment = await axios.get(
        `${process.env.BACKEND_SERVER}/dashboard/checkout?id=${cid}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": access_token,
          },
        }
      );
      setUrl(payment);
      setParams({ isLoading: false });
    } catch (error) {
      return "error generate payment";
    }
  };

  const renderLinkButton = () => {
    if (!url) return <></>;
    if (url)
      return (
        <Link href={url.data.transactionDetail.redirect_url}>
          <a className="btn btn-success btn-pill">
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
                Download more icon variants from https://tabler-icons.io/i/cash
              </desc>
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x={7} y={9} width={14} height={10} rx={2} />
              <circle cx={14} cy={14} r={2} />
              <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
            </svg>
            Click Me to Pay
          </a>
        </Link>
      );
  };

  const renderLoading = () => {
    if (params.isLoading)
      return (
        <>
          <p>Generating payment link, please wait</p>
          <div className="spinner-border spinner-border-sm" role="status"></div>
        </>
      );
    return <></>;
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-6">
          <button
            onClick={() => handleGeneratePayment(cid)}
            className="btn btn-primary"
          >
            Generate Payment Link
          </button>
        </div>
        <div className="col-6">
          {renderLinkButton()}
          {renderLoading()}
          <br />
        </div>
      </div>
    </>
  );
}
