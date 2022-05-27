import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function LayoutCustomer({
  children,
  customer_name,
  customer_service,
}) {
  const menuNavbar = [
    {
      url: "/user/logout",
      menuTitle: "Logout",
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-logout"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <desc>
              Download more icon variants from https://tabler-icons.io/i/logout
            </desc>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
            <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
          </svg>
        </>
      ),
    },
  ];

  const homeIcon = (
    <>
      {/* Download SVG icon from http://tabler-icons.io/i/home */}
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
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="5 12 3 12 12 3 21 12 19 12" />
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
      </svg>
    </>
  );
  return (
    <>
      <header className="navbar navbar-expand-md navbar-light d-print-none">
        <div className="container-xl">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-menu"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
            <a href=".">
              <Image
                src="/static/logo-small.svg"
                width={110}
                height={32}
                alt="Tabler"
                className="navbar-brand-image"
              />
            </a>
          </h1>
          <div className="navbar-nav flex-row order-md-last">
            <a
              href="?theme=dark"
              className="nav-link px-0 hide-theme-dark"
              title
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-original-title="Enable dark mode"
            >
              {/* Download SVG icon from http://tabler-icons.io/i/moon */}
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
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
              </svg>
            </a>
            <a
              href="?theme=light"
              className="nav-link px-0 hide-theme-light"
              title
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-original-title="Enable light mode"
            >
              {/* Download SVG icon from http://tabler-icons.io/i/sun */}
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
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx={12} cy={12} r={4} />
                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
              </svg>
            </a>

            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link d-flex lh-1 text-reset p-0"
                data-bs-toggle="dropdown"
                aria-label="Open user menu"
              >
                <span
                  className="avatar avatar-sm"
                  style={{ backgroundImage: "url(/static/avatars/003m.jpg)" }}
                />
                <div className="d-none d-xl-block ps-2">
                  <div>{customer_name || "unnamed"}</div>
                  <div className="mt-1 small text-muted">
                    Service: {customer_service || "No Service"}
                  </div>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <a href="#" className="dropdown-item">
                  Set status
                </a>
                <a href="#" className="dropdown-item">
                  Profile &amp; account
                </a>
                <a href="#" className="dropdown-item">
                  Feedback
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  Settings
                </a>
                <a href="#" className="dropdown-item">
                  Logout
                </a>
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
              <ul className="navbar-nav">
                {menuNavbar.map((menu) => {
                  return (
                    <li key={menu.url} className="nav-item">
                      <Link href={menu.url} key={menu.url}>
                        <a className="nav-link">
                          <span className="nav-link-icon d-md-none d-lg-inline-block">
                            {menu.icon}
                          </span>
                          <span className="nav-link-title">
                            {menu.menuTitle}
                          </span>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </header>

      <Script src="/dist/js/tabler.min.js" strategy="afterInteractive"></Script>
      <Script src="/dist/js/demo.min.js" strategy="afterInteractive"></Script>
    </>
  );
}
