import Link from "next/link";
import Img from "next/image";
import IndexTopCard from "../components/widget/IndexTopCard";
import IndexContent from "../components/widget/IndexContent";
import ImageSlider from "../components/widget/ImageSlider";
import PricingCard from "../components/widget/PricingCards";
import Script from "next/script";
import CardLeftImage from "../components/widget/CardLeftImage";
import CardRightImage from "../components/widget/CardRightImage";

export default function Home() {
  return (
    <div className="page">
      <header className="navbar navbar-expand-md navbar-dark navbar-overlap d-print-none">
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
              <Img
                src="/static/logo-white.svg"
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
            <div className="nav-item dropdown d-none d-md-flex me-3">
              <a
                href="#"
                className="nav-link px-0"
                data-bs-toggle="dropdown"
                tabIndex={-1}
                aria-label="Show notifications"
              >
                {/* Download SVG icon from http://tabler-icons.io/i/bell */}
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
                  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
                <span className="badge bg-red" />
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-card">
                <div className="card">
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus ad amet consectetur exercitationem fugiat in ipsa
                    ipsum, natus odio quidem quod repudiandae sapiente. Amet
                    debitis et magni maxime necessitatibus ullam.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="./index.html">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                    </span>
                    <span className="nav-link-title">Home</span>
                  </a>
                </li>
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
                    <span className="nav-link-title">Interface</span>
                  </a>
                  <div className="dropdown-menu">
                    <div className="dropdown-menu-columns">
                      <div className="dropdown-menu-column">
                        <a className="dropdown-item" href="./empty.html">
                          Empty page
                        </a>
                        <a className="dropdown-item" href="./accordion.html">
                          Accordion
                        </a>
                        <a className="dropdown-item" href="./blank.html">
                          Blank page
                        </a>
                        <a className="dropdown-item" href="./buttons.html">
                          Buttons
                        </a>
                        <a className="dropdown-item" href="./cards.html">
                          Cards
                        </a>
                        <a
                          className="dropdown-item"
                          href="./cards-masonry.html"
                        >
                          Cards Masonry
                        </a>
                        <a className="dropdown-item" href="./colors.html">
                          Colors
                        </a>
                        <a className="dropdown-item" href="./dropdowns.html">
                          Dropdowns
                        </a>
                        <a className="dropdown-item" href="./icons.html">
                          Icons
                        </a>
                        <a className="dropdown-item" href="./modals.html">
                          Modals
                        </a>
                        <a className="dropdown-item" href="./maps.html">
                          Maps
                        </a>
                        <a className="dropdown-item" href="./map-fullsize.html">
                          Map fullsize
                        </a>
                        <a className="dropdown-item" href="./maps-vector.html">
                          Vector maps
                        </a>
                      </div>
                      <div className="dropdown-menu-column">
                        <a className="dropdown-item" href="./navigation.html">
                          Navigation
                        </a>
                        <a className="dropdown-item" href="./charts.html">
                          Charts
                        </a>
                        <a className="dropdown-item" href="./pagination.html">
                          Pagination
                        </a>
                        <a className="dropdown-item" href="./placeholder.html">
                          Placeholder
                        </a>
                        <a className="dropdown-item" href="./tabs.html">
                          Tabs
                        </a>
                        <a className="dropdown-item" href="./tables.html">
                          Tables
                        </a>
                        <a className="dropdown-item" href="./carousel.html">
                          Carousel
                        </a>
                        <a className="dropdown-item" href="./lists.html">
                          Lists
                        </a>
                        <a className="dropdown-item" href="./typography.html">
                          Typography
                        </a>
                        <a className="dropdown-item" href="./offcanvas.html">
                          Offcanvas
                        </a>
                        <a className="dropdown-item" href="./markdown.html">
                          Markdown
                        </a>
                        <div className="dropend">
                          <a
                            className="dropdown-item dropdown-toggle"
                            href="#sidebar-authentication"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            role="button"
                            aria-expanded="false"
                          >
                            Authentication
                          </a>
                          <div className="dropdown-menu">
                            <a href="./sign-in.html" className="dropdown-item">
                              Sign in
                            </a>
                            <a href="./sign-up.html" className="dropdown-item">
                              Sign up
                            </a>
                            <a
                              href="./forgot-password.html"
                              className="dropdown-item"
                            >
                              Forgot password
                            </a>
                            <a
                              href="./terms-of-service.html"
                              className="dropdown-item"
                            >
                              Terms of service
                            </a>
                            <a
                              href="./auth-lock.html"
                              className="dropdown-item"
                            >
                              Lock screen
                            </a>
                          </div>
                        </div>
                        <div className="dropend">
                          <a
                            className="dropdown-item dropdown-toggle"
                            href="#sidebar-error"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            role="button"
                            aria-expanded="false"
                          >
                            Error pages
                          </a>
                          <div className="dropdown-menu">
                            <a
                              href="./error-404.html"
                              className="dropdown-item"
                            >
                              404 page
                            </a>
                            <a
                              href="./error-500.html"
                              className="dropdown-item"
                            >
                              500 page
                            </a>
                            <a
                              href="./error-maintenance.html"
                              className="dropdown-item"
                            >
                              Maintenance page
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./form-elements.html">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      {/* Download SVG icon from http://tabler-icons.io/i/checkbox */}
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
                        <polyline points="9 11 12 14 20 6" />
                        <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                      </svg>
                    </span>
                    <span className="nav-link-title">Forms</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#navbar-extra"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    role="button"
                    aria-expanded="false"
                  >
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                      </svg>
                    </span>
                    <span className="nav-link-title">Extra</span>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="./activity.html">
                      Activity
                    </a>
                    <a className="dropdown-item" href="./gallery.html">
                      Gallery
                    </a>
                    <a className="dropdown-item" href="./invoice.html">
                      Invoice
                    </a>
                    <a className="dropdown-item" href="./search-results.html">
                      Search results
                    </a>
                    <a className="dropdown-item" href="./pricing.html">
                      Pricing cards
                    </a>
                    <a className="dropdown-item" href="./users.html">
                      Users
                    </a>
                    <a className="dropdown-item" href="./license.html">
                      License
                    </a>
                    <a className="dropdown-item" href="./music.html">
                      Music
                    </a>
                    <a className="dropdown-item" href="./uptime.html">
                      Uptime monitor
                    </a>
                    <a className="dropdown-item" href="./widgets.html">
                      Widgets
                    </a>
                    <a className="dropdown-item" href="./wizard.html">
                      Wizard
                    </a>
                  </div>
                </li>
                <li className="nav-item active dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#navbar-layout"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    role="button"
                    aria-expanded="false"
                  >
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      {/* Download SVG icon from http://tabler-icons.io/i/layout-2 */}
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
                        <rect x={4} y={4} width={6} height={5} rx={2} />
                        <rect x={4} y={13} width={6} height={7} rx={2} />
                        <rect x={14} y={4} width={6} height={7} rx={2} />
                        <rect x={14} y={15} width={6} height={5} rx={2} />
                      </svg>
                    </span>
                    <span className="nav-link-title">Layout</span>
                  </a>
                  <div className="dropdown-menu">
                    <div className="dropdown-menu-columns">
                      <div className="dropdown-menu-column">
                        <a
                          className="dropdown-item"
                          href="./layout-horizontal.html"
                        >
                          Horizontal
                        </a>
                        <a
                          className="dropdown-item"
                          href="./layout-vertical.html"
                        >
                          Vertical
                        </a>
                        <a
                          className="dropdown-item"
                          href="./layout-vertical-transparent.html"
                        >
                          Vertical transparent
                        </a>
                        <a
                          className="dropdown-item"
                          href="./layout-vertical-right.html"
                        >
                          Right vertical
                        </a>
                        <a
                          className="dropdown-item"
                          href="./layout-condensed.html"
                        >
                          Condensed
                        </a>
                        <a className="dropdown-item" href="./layout-combo.html">
                          Combined
                        </a>
                      </div>
                      <div className="dropdown-menu-column">
                        <a
                          className="dropdown-item"
                          href="./layout-navbar-dark.html"
                        >
                          Navbar dark
                        </a>
                        <a
                          className="dropdown-item"
                          href="./layout-navbar-sticky.html"
                        >
                          Navbar sticky
                        </a>
                        <a
                          className="dropdown-item active"
                          href="./layout-navbar-overlap.html"
                        >
                          Navbar overlap
                        </a>
                        <a className="dropdown-item" href="./layout-rtl.html">
                          RTL mode
                        </a>
                        <a className="dropdown-item" href="./layout-fluid.html">
                          Fluid
                        </a>
                        <a
                          className="dropdown-item"
                          href="./layout-fluid-vertical.html"
                        >
                          Fluid vertical
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./docs/index.html">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      {/* Download SVG icon from http://tabler-icons.io/i/file-text */}
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
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        <line x1={9} y1={9} x2={10} y2={9} />
                        <line x1={9} y1={13} x2={15} y2={13} />
                        <line x1={9} y1={17} x2={15} y2={17} />
                      </svg>
                    </span>
                    <span className="nav-link-title">Documentation</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* Wrepper */}
      <div className="page-wrapper">
        <div className="container-xl">
          <div className="page-header text-white d-print-none">
            <div className="row align-items-center">
              <div className="col">
                {/* Page pre-title */}
                <div className="page-pretitle">Home</div>
                <h2 className="page-title">COMPANY_NAME</h2>
              </div>
              {/* Page title actions */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <Link href="/dashboard">
                    <a className="btn btn-primary d-none d-sm-inline-block">
                      {/* Download SVG icon from http://tabler-icons.io/i/plus */}
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
                        <line x1={12} y1={5} x2={12} y2={19} />
                        <line x1={5} y1={12} x2={19} y2={12} />
                      </svg>
                      Go To Dashboard
                    </a>
                  </Link>

                  <a
                    href="#"
                    className="btn btn-primary d-sm-none btn-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-report"
                    aria-label="Create new report"
                  >
                    {/* Download SVG icon from http://tabler-icons.io/i/plus */}
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
                      <line x1={12} y1={5} x2={12} y2={19} />
                      <line x1={5} y1={12} x2={19} y2={12} />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content Body */}
        <div className="page-body">
          <div className="container-xl">
            <div className="row row-deck row-cards">
              <IndexTopCard size={3}></IndexTopCard>
              <IndexTopCard size={3}></IndexTopCard>
              <IndexTopCard size={3}></IndexTopCard>
              <IndexTopCard size={3}></IndexTopCard>
              <IndexContent
                size={12}
                title="Internet"
                content="Dengan pertumbuhan teknologi Internet yang kian pesat, banyak aspek kehidupan kita yang semakin bergantung pada Internet. Mulai dari anak-anak, remaja, hingga orang dewasa, mulai dari pagi hingga malam hari, tidak terhitung ada berapa jumlah aktivitas yang kita lakukan melalui Internet.

                Kualitas Internet yang terus meningkat, kecepatan yang terus bertambah, dan jaringan yang semakin luas kini tidak hanya tersedia melalui jaringan selular maupun kabel, namun juga melalui jaringan Wi-Fi. Internet kini telah menjadi kebutuhan baik di rumah, kantor, perjalanan, maupun banyak tempat lainnya, dan semakin banyak orang merasakan manfaat Internet untuk mendukung kegiatan pribadi maupun bisnis.
                
                Biznet merupakan perusahaan infrastruktur digital terintegrasi di Indonesia yang menyediakan layanan Internet, Data Center, Cloud Computing dan IPTV. Kami memiliki komitmen untuk membangun infrastruktur modern dengan tujuan mengurangi kesenjangan digital Indonesia dengan negara berkembang lainnya. Biznet memiliki dan mengoperasikan jaringan Fiber Optic tercanggih dan data center terbesar di Indonesia sejak tahun 2000."
              ></IndexContent>

              <CardLeftImage></CardLeftImage>
              <CardRightImage></CardRightImage>
              <PricingCard></PricingCard>
              <PricingCard></PricingCard>
              <PricingCard></PricingCard>
              <PricingCard></PricingCard>
            </div>
          </div>
        </div>
      </div>
      <Script src="/dist/js/tabler.min.js" strategy="afterInteractive"></Script>
      <Script src="/dist/js/demo.min.js" strategy="afterInteractive"></Script>
    </div>
  );
}
