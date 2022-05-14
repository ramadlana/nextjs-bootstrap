export default function DashboardCounter() {
  return (
    <div className="row row-cards m-1">
      <div className="col-md-6 col-xl-3">
        <div className="card card-sm">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-auto">
                <span className="bg-blue text-white avatar">
                  {/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
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
                      https://tabler-icons.io/i/currency-dollar
                    </desc>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                    <path d="M12 3v3m0 12v3" />
                  </svg>
                </span>
              </div>
              <div className="col">
                <div className="font-weight-medium">20 new Customer</div>
                <div className="text-muted">10 waiting payments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
