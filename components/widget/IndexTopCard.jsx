export default function IndexTopCard({ size }) {
  return (
    <>
      <div className={`col-sm-6 col-lg-${size}`}>
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="subheader">Sales</div>
            </div>
            <div className="h1 mb-3">75%</div>
            <div className="d-flex mb-2">
              <div>Conversion rate</div>
              <div className="ms-auto">
                <span className="text-green d-inline-flex align-items-center lh-1">
                  7%{" "}
                  {/* Download SVG icon from http://tabler-icons.io/i/trending-up */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon ms-1"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="3 17 9 11 13 15 21 7" />
                    <polyline points="14 7 21 7 21 14" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="progress progress-sm">
              <div
                className="progress-bar bg-blue"
                style={{ width: "75%" }}
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <span className="visually-hidden">75% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
