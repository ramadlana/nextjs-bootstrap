export default function DashboardCounter() {
  return (
    <div className="row row-cards">
      {/* Counter 1 */}
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
      {/* Counter 2 */}
      <div className="col-md-6 col-xl-3">
        <div className="card card-sm">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-auto">
                <span className="bg-green text-white avatar">
                  {/* Download SVG icon from http://tabler-icons.io/i/shopping-cart */}
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
                      https://tabler-icons.io/i/shopping-cart
                    </desc>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx={6} cy={19} r={2} />
                    <circle cx={17} cy={19} r={2} />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                  </svg>
                </span>
              </div>
              <div className="col">
                <div className="font-weight-medium">78 Orders</div>
                <div className="text-muted">32 shipped</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter 3 */}
      <div className="col-md-6 col-xl-3">
        <div className="card card-sm">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-auto">
                <span className="bg-red text-white avatar">
                  {/* Download SVG icon from http://tabler-icons.io/i/user */}
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
                      https://tabler-icons.io/i/user
                    </desc>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx={12} cy={7} r={4} />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                </span>
              </div>
              <div className="col">
                <div className="font-weight-medium">1352 Members</div>
                <div className="text-muted">163 registered today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter 4 */}
      <div className="col-md-6 col-xl-3">
        <div className="card card-sm">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-auto">
                <span className="bg-yellow text-white avatar">
                  {/* Download SVG icon from http://tabler-icons.io/i/message */}
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
                      https://tabler-icons.io/i/message
                    </desc>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                    <line x1={8} y1={9} x2={16} y2={9} />
                    <line x1={8} y1={13} x2={14} y2={13} />
                  </svg>
                </span>
              </div>
              <div className="col">
                <div className="font-weight-medium">132 Ticket</div>
                <div className="text-muted">16 waitings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
