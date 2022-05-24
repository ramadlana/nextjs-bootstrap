import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Layout({ children }) {
  const menuNavbar = [
    {
      url: "/dashboard",
      menuTitle: "Dashboard",
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-layout-dashboard"
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
              https://tabler-icons.io/i/layout-dashboard
            </desc>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4h6v8h-6z" />
            <path d="M4 16h6v4h-6z" />
            <path d="M14 12h6v8h-6z" />
            <path d="M14 4h6v4h-6z" />
          </svg>
        </>
      ),
    },
    {
      url: "/manageemploye",
      menuTitle: "Manage Employee",
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-users"
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
              Download more icon variants from https://tabler-icons.io/i/users
            </desc>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx={9} cy={7} r={4} />
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
          </svg>
        </>
      ),
    },
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

  const menuNavbarDropdown1 = [
    {
      url: "/migrasi",
      menuTitle: "Migrasi Customer",
    },
  ];

  const menuNavbarDropdown2 = [
    {
      url: "/",
      menuTitle: "#2",
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
      <div className="page">
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
              <Link href="/">
                <a>
                  <Image
                    src="/static/logo-small.svg"
                    width={110}
                    height={32}
                    alt="Tabler"
                    className="navbar-brand-image"
                  ></Image>
                </a>
              </Link>
              Net Manager v1.0
            </h1>
            <div className="navbar-nav flex-row order-md-last">
              <div className="nav-item d-none d-md-flex me-3">
                <div className="btn-list">
                  <a
                    href="https://github.com/tabler/tabler"
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* Download SVG icon from http://tabler-icons.io/i/brand-github */}
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
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                    My Github
                  </a>
                  <a
                    href="https://github.com/sponsors/codecalm"
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail"
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
                        Download more icon variants from
                        https://tabler-icons.io/i/mail
                      </desc>
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                      <polyline points="3 7 12 13 21 7"></polyline>
                    </svg>
                    Contact me
                  </a>
                </div>
              </div>
              <a
                href="?theme=dark"
                className="nav-link px-0 hide-theme-dark"
                title="Enable dark mode"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
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
                title="Enable light mode"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
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
                    style={{
                      backgroundImage: "url(/static/avatars/rama.jpg)",
                    }}
                  />
                  <div className="d-none d-xl-block ps-2">
                    <div>Hidayah Ramadlana</div>
                    <div className="mt-1 small text-muted">
                      System Architect
                    </div>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <a href="#" className="dropdown-item">
                    Settings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="navbar-expand-md">
          <div className="collapse navbar-collapse" id="navbar-menu">
            <div className="navbar navbar-light">
              <div className="container-xl">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link">
                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                          {homeIcon}
                        </span>
                        <span className="nav-link-title">Home</span>
                      </a>
                    </Link>
                  </li>
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
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#navbar-base"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      role="button"
                      aria-expanded="false"
                    >
                      <span className="nav-link-icon d-md-none d-lg-inline-block">
                        {/* Download SVG icon from http://tabler-icons.io/i/package */}
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
                          <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                          <line x1={12} y1={12} x2={20} y2="7.5" />
                          <line x1={12} y1={12} x2={12} y2={21} />
                          <line x1={12} y1={12} x2={4} y2="7.5" />
                          <line x1={16} y1="5.25" x2={8} y2="9.75" />
                        </svg>
                      </span>
                      <span className="nav-link-title">Lain</span>
                    </a>
                    <div className="dropdown-menu">
                      <div className="dropdown-menu-columns">
                        <div className="dropdown-menu-column">
                          {menuNavbarDropdown1.map((menu) => {
                            return (
                              <Link href={menu.url} key={menu.url}>
                                <a className="dropdown-item">
                                  <span className="nav-link-title">
                                    {menu.menuTitle}
                                  </span>
                                </a>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="dropdown-menu-column">
                          {menuNavbarDropdown2.map((menu) => {
                            return (
                              <Link href={menu.url} key={menu.url}>
                                <a className="dropdown-item">
                                  <span className="nav-link-title">
                                    {menu.menuTitle}
                                  </span>
                                </a>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                  <form action="." method="get">
                    <div className="input-icon">
                      <span className="input-icon-addon">
                        {/* Download SVG icon from http://tabler-icons.io/i/search */}
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
                          <circle cx={10} cy={10} r={7} />
                          <line x1={21} y1={21} x2={15} y2={15} />
                        </svg>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search…"
                        aria-label="Search in website"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-wrapper">
          <div className="container-xl"></div>
          <div className="page-body">
            <div className="container-xl d-flex flex-column justify-content-center">
              {children}
            </div>
          </div>
        </div>
      </div>
      {/* Libs JS */}

      {/* Tabler Core */}

      <Script src="/dist/js/tabler.min.js" strategy="afterInteractive"></Script>
      <Script src="/dist/js/demo.min.js" strategy="afterInteractive"></Script>
    </>
  );
}
