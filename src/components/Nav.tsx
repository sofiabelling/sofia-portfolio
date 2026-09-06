import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";

const VIOLET = "#7257E8";
const LILAC = "#C9BEFF";

type IconProps = {
  active?: boolean;
};

/* =========================================================
   HOME — magical arched doorway
========================================================= */

function IconHome({ active = false }: IconProps) {
  return (
    <svg
      className="nav-custom-icon nav-icon-home"
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      {/* outer arch */}
      <path
        d="M7 26V13.2C7 7.9 10.8 4 16 4C21.2 4 25 7.9 25 13.2V26"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        fill={active ? "rgba(114,87,232,.10)" : "none"}
      />

      {/* inner arch */}
      <path
        d="M11 26V14.5C11 11.45 13.2 9 16 9C18.8 9 21 11.45 21 14.5V26"
        fill={active ? VIOLET : "none"}
        stroke="currentColor"
        strokeWidth="1.6"
      />

      {/* door panels */}
      <path
        d="M13.3 15.2H18.7"
        stroke={active ? LILAC : "currentColor"}
        strokeWidth="1"
        opacity=".75"
      />

      <path
        d="M13.3 18.2H18.7"
        stroke={active ? LILAC : "currentColor"}
        strokeWidth="1"
        opacity=".55"
      />

      {/* handle */}
      <circle
        cx="18.1"
        cy="21.2"
        r=".75"
        fill={active ? LILAC : "currentColor"}
      />

      {/* base stones */}
      <path
        d="M9.5 26H22.5M11 28H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* keystone */}
      <path
        d="M14.8 5.1L16 3.8L17.2 5.1L16 6.4Z"
        fill={active ? LILAC : "currentColor"}
      />

      {/* sparkle */}
      <path
        className="nav-sparkle"
        d="M26.8 5.1C26.8 6.55 25.65 7.7 24.2 7.7C25.65 7.7 26.8 8.85 26.8 10.3C26.8 8.85 27.95 7.7 29.4 7.7C27.95 7.7 26.8 6.55 26.8 5.1Z"
        fill={active ? "#A998FA" : "currentColor"}
      />
    </svg>
  );
}

/* =========================================================
   WORK — overlapping design windows
========================================================= */

function IconWork({ active = false }: IconProps) {
  return (
    <svg
      className="nav-custom-icon nav-icon-work"
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      {/* back window */}
      <rect
        className="work-card-back"
        x="4"
        y="5"
        width="17"
        height="18"
        rx="4"
        fill={active ? "rgba(201,190,255,.75)" : "none"}
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M7 9H18"
        stroke={active ? "#9C8CF6" : "currentColor"}
        strokeWidth="1"
        opacity=".55"
      />

      <circle cx="8" cy="7.4" r=".7" fill="currentColor" opacity=".5" />
      <circle cx="10.3" cy="7.4" r=".7" fill="currentColor" opacity=".35" />

      {/* front window */}
      <rect
        className="work-card-front"
        x="11"
        y="9"
        width="17"
        height="18"
        rx="4"
        fill={active ? VIOLET : "none"}
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M14 13H25"
        stroke={active ? "#D8D0FF" : "currentColor"}
        strokeWidth="1"
        opacity=".8"
      />

      {/* little content blocks */}
      <rect
        x="14"
        y="16"
        width="4"
        height="4"
        rx="1"
        fill={active ? "#D8D0FF" : "currentColor"}
        opacity=".65"
      />

      <path
        d="M20 17H25M20 19H24"
        stroke={active ? "#D8D0FF" : "currentColor"}
        strokeWidth="1"
        strokeLinecap="round"
        opacity=".65"
      />
    </svg>
  );
}

/* =========================================================
   ABOUT — creative portrait
========================================================= */

function IconAbout({ active = false }: IconProps) {
  return (
    <svg
      className="nav-custom-icon nav-icon-about"
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      {/* head */}
      <circle
        cx="13.5"
        cy="9"
        r="4"
        fill={active ? LILAC : "none"}
        stroke="currentColor"
        strokeWidth="1.6"
      />

      {/* subtle hair/detail stroke */}
      <path
        d="M10.7 7.7C11.5 6.3 13 5.5 14.7 5.7"
        stroke={active ? VIOLET : "currentColor"}
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity=".75"
      />

      {/* body */}
      <path
        d="M5.7 26C6.2 20.2 9.2 16.7 13.5 16.7C17.8 16.7 20.8 20.2 21.3 26H5.7Z"
        fill={active ? VIOLET : "none"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* little collar/detail */}
      <path
        d="M11.4 17.3L13.5 19.4L15.6 17.3"
        stroke={active ? "#D8D0FF" : "currentColor"}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity=".75"
      />

      {/* sparkle */}
      <path
        className="nav-sparkle about-sparkle"
        d="M25.3 6.2C25.3 7.7 24.1 8.9 22.6 8.9C24.1 8.9 25.3 10.1 25.3 11.6C25.3 10.1 26.5 8.9 28 8.9C26.5 8.9 25.3 7.7 25.3 6.2Z"
        fill={active ? "#A998FA" : "currentColor"}
      />

      {/* tiny orbit dot */}
      <circle
        cx="27.2"
        cy="15"
        r="1"
        fill={active ? LILAC : "currentColor"}
        opacity=".6"
      />
    </svg>
  );
}

/* =========================================================
   CONTACT — friendly conversation
========================================================= */

function IconContact({ active = false }: IconProps) {
  return (
    <svg
      className="nav-custom-icon nav-icon-contact"
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      {/* main bubble */}
      <path
        className="contact-bubble"
        d="M4 7.5C4 5.6 5.55 4 7.5 4H21C23.75 4 26 6.25 26 9V15.5C26 18.25 23.75 20.5 21 20.5H12L7 24V20C5.25 19.6 4 18.05 4 16.2V7.5Z"
        fill={active ? VIOLET : "none"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* message dots */}
      <circle
        cx="10"
        cy="12"
        r="1.15"
        fill={active ? "#DED8FF" : "currentColor"}
      />

      <circle
        cx="15"
        cy="12"
        r="1.15"
        fill={active ? "#DED8FF" : "currentColor"}
      />

      <circle
        cx="20"
        cy="12"
        r="1.15"
        fill={active ? "#DED8FF" : "currentColor"}
      />

      {/* secondary tiny bubble */}
      <path
        d="M20.5 23H24.2L27 25V22.2C28.25 21.75 29 20.6 29 19.3V16"
        stroke={active ? "#B8AAFF" : "currentColor"}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity=".7"
      />

      {/* sparkle */}
      <path
        className="nav-sparkle contact-sparkle"
        d="M27.4 3C27.4 4.25 26.4 5.25 25.15 5.25C26.4 5.25 27.4 6.25 27.4 7.5C27.4 6.25 28.4 5.25 29.65 5.25C28.4 5.25 27.4 4.25 27.4 3Z"
        fill={active ? "#A998FA" : "currentColor"}
      />
    </svg>
  );
}

const MOBILE_LINKS = [
  { label: "Home", to: "/", Icon: IconHome },
  { label: "Work", to: "/work", Icon: IconWork },
  { label: "About", to: "/about", Icon: IconAbout },
  { label: "Contact", to: "/contact", Icon: IconContact },
];

const DESKTOP_LINKS = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <nav className="portfolio-mobile-nav custom-mobile-nav">
        {MOBILE_LINKS.map(({ label, to, Icon }) => {
          const active =
            to === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(to);

          return (
            <button
              key={to}
              className={`custom-nav-item ${
                active ? "active" : "inactive"
              }`}
              onClick={() => navigate(to)}
              aria-label={label}
            >
              <span className="custom-nav-icon-wrap">
                <Icon active={active} />
              </span>

              <span className="custom-nav-label">
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    );
  }

  return (
    <div className="portfolio-nav-wrap">
      <nav className="portfolio-nav nav-gloss">
        <button
          className="portfolio-nav-mark"
          onClick={() => navigate("/")}
          aria-label="Home"
        >
          ✦
        </button>

        {DESKTOP_LINKS.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}