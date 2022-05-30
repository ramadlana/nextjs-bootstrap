export default function PricingCard() {
  return (
    <>
      <div className="col-sm-6 col-lg-3">
        <div className="card card-md">
          <div className="card-body text-center">
            <div className="text-uppercase text-muted font-weight-medium">
              Free
            </div>
            <div className="display-5 fw-bold my-3">$0</div>
            <ul className="list-unstyled lh-lg">
              <li>
                <strong>3</strong> Users
              </li>
              <li>
                {/* Download SVG icon from http://tabler-icons.io/i/check */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon me-1 text-success"
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
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                Sharing Tools
              </li>
              <li>
                {/* Download SVG icon from http://tabler-icons.io/i/x */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon me-1 text-danger"
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
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
                Design Tools
              </li>
              <li>
                {/* Download SVG icon from http://tabler-icons.io/i/x */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon me-1 text-danger"
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
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
                Private Messages
              </li>
              <li>
                {/* Download SVG icon from http://tabler-icons.io/i/x */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon me-1 text-danger"
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
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
                Twitter API
              </li>
            </ul>
            <div className="text-center mt-4">
              <a href="#" className="btn w-100">
                Choose plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
