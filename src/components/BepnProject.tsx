import { useNavigate } from "react-router"
import { useEffect, useState } from "react"

import signupScreen from "../imports/bepn_curated_assets/signup-screen.png"
import welcomeScreen from "../imports/bepn_curated_assets/welcome-screen.png"
import onboardingRocket from "../imports/bepn_curated_assets/onboarding-rocket.png"
import locationDetected from "../imports/bepn_curated_assets/location-detected.png"
import countryExplorer from "../imports/bepn_curated_assets/country-explorer.png"
import countrySelect from "../imports/bepn_curated_assets/country-select.png"
import connectedState from "../imports/bepn_curated_assets/connected-state.png"
import disconnectedState from "../imports/bepn_curated_assets/disconnected-state.png"

import wireframe1 from "../imports/bepn_curated_assets/wireframe-01.png"
import wireframe2 from "../imports/bepn_curated_assets/wireframe-02.png"
import wireframe3 from "../imports/bepn_curated_assets/wireframe-03.png"
import wireframe4 from "../imports/bepn_curated_assets/wireframe-04.png"

interface BepnProjectProps {
  project: any
}

const DARK = "#171F28"
const DARKER = "#10171F"
const PAPER = "#F3F5F2"
const CYAN = "#16F4E7"
const TEXT = "#111820"

const labelStyle = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "10px",
  fontWeight: 500,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
}

const bodyStyle = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "16px",
  lineHeight: 1.65,
}

const headingStyle = {
  fontFamily: "'Bricolage Grotesque', sans-serif",
  fontWeight: 600,
  letterSpacing: "-0.055em",
  lineHeight: 0.94,
  margin: 0,
}

function Caption({
  children,
  dark = false,
}: {
  children: React.ReactNode
  dark?: boolean
}) {
  return (
    <p
      style={{
        ...labelStyle,
        fontSize: "9px",
        color: dark
          ? "rgba(255,255,255,.45)"
          : "rgba(0,0,0,.42)",
        margin: "10px 0 0",
      }}
    >
      {children}
    </p>
  )
}

export default function BepnProject({
  project,
}: BepnProjectProps) {
  const navigate = useNavigate()

  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(
        window.innerWidth >= 768 &&
          window.innerWidth < 1050
      )
    }

    check()
    window.addEventListener("resize", check)

    return () =>
      window.removeEventListener("resize", check)
  }, [])

  const side = isMobile
    ? "20px"
    : isTablet
      ? "36px"
      : "44px"

  const sectionY = isMobile
    ? "82px"
    : isTablet
      ? "100px"
      : "120px"

  const grid = (
    desktop: string,
    gap = "70px"
  ) => ({
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : desktop,
    gap: isMobile ? "40px" : gap,
  })

  return (
    <main
      style={{
        width: "100%",
        overflowX: "hidden",
        background: PAPER,
        color: TEXT,
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: isMobile
            ? "100svh"
            : "100vh",
          background: DARKER,
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* decorative space field */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              radial-gradient(circle at 70% 32%, rgba(22,244,231,.14), transparent 22%),
              radial-gradient(circle at 20% 70%, rgba(22,244,231,.06), transparent 22%),
              linear-gradient(180deg, #18232d 0%, #10171f 100%)
            `,
          }}
        />

        {/* tiny stars */}
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              left: `${8 + ((i * 17) % 86)}%`,
              top: `${7 + ((i * 23) % 76)}%`,
              width: i % 4 === 0 ? "4px" : "2px",
              height: i % 4 === 0 ? "4px" : "2px",
              borderRadius: "50%",
              background:
                i % 5 === 0
                  ? CYAN
                  : "rgba(255,255,255,.45)",
              opacity: 0.7,
            }}
          />
        ))}

        <button
          onClick={() => navigate(-1)}
          style={{
            position: "absolute",
            top: isMobile ? "28px" : "52px",
            left: side,
            zIndex: 10,
            border: 0,
            background: "none",
            color: "#fff",
            padding: 0,
            cursor: "pointer",
            opacity: 0.75,
            ...labelStyle,
          }}
        >
          ← Work
        </button>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            minHeight: isMobile
              ? "100svh"
              : "100vh",
            padding: isMobile
              ? `110px ${side} 34px`
              : `130px ${side} 52px`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div />

          <div
            style={{
              ...grid(
                "1fr .72fr",
                "60px"
              ),
              alignItems: "end",
            }}
          >
            <div>
              <p
                style={{
                  ...labelStyle,
                  color: CYAN,
                  marginBottom: "18px",
                }}
              >
                UX/UI · MOBILE CONCEPT
              </p>

              <h1
                style={{
                  fontFamily:
                    "'Bricolage Grotesque', sans-serif",
                  fontSize: isMobile
                    ? "clamp(92px, 31vw, 145px)"
                    : "clamp(130px, 19vw, 280px)",
                  lineHeight: 0.72,
                  letterSpacing: "-0.08em",
                  fontWeight: 700,
                  margin: "0 0 42px",
                }}
              >
                Bepn
              </h1>

              <h2
                style={{
                  ...headingStyle,
                  color: "#fff",
                  fontSize: isMobile
                    ? "clamp(34px, 10vw, 48px)"
                    : "clamp(38px, 4vw, 62px)",
                  maxWidth: "800px",
                }}
              >
                A VPN experience
                <br />
                built like a universe
                <br />
                to explore.
              </h2>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: isMobile
                  ? "center"
                  : "flex-end",
              }}
            >
              <img
                src={onboardingRocket}
                alt="Bepn onboarding rocket illustration"
                style={{
                  width: isMobile
                    ? "58%"
                    : "min(310px, 75%)",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 01 CONCEPT */}
      <section
        style={{
          padding: `${sectionY} ${side}`,
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            ...labelStyle,
            marginBottom: "28px",
          }}
        >
          01 — THE CONCEPT
        </p>

        <div
          style={grid(
            "1fr .8fr",
            "90px"
          )}
        >
          <h2
            style={{
              ...headingStyle,
              fontSize: isMobile
                ? "clamp(50px, 14vw, 70px)"
                : "clamp(62px, 7vw, 112px)",
            }}
          >
            Connecting
            <br />
            became
            <br />
            exploring.
          </h2>

          <div style={{ alignSelf: "end" }}>
            <p
              style={{
                fontFamily:
                  "'Bricolage Grotesque', sans-serif",
                fontSize: isMobile
                  ? "22px"
                  : "28px",
                lineHeight: 1.25,
                letterSpacing: "-.025em",
                margin: 0,
              }}
            >
              Bepn reimagines a VPN as a small
              universe where countries become
              destinations rather than items in a
              server list.
            </p>

            <p
              style={{
                ...bodyStyle,
                color: "rgba(0,0,0,.56)",
                marginTop: "28px",
              }}
            >
              The flow stays intentionally simple:
              sign up, onboarding, location,
              country selection, connection and
              monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* 02 VISUAL WORLD */}
      <section
        style={{
          background: DARK,
          color: "#fff",
          padding: `${sectionY} ${side}`,
        }}
      >
        <div
          style={{
            maxWidth: "1500px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              ...labelStyle,
              color: CYAN,
              marginBottom: "28px",
            }}
          >
            02 — VISUAL DIRECTION
          </p>

          <div
            style={{
              ...grid(
                "1.1fr .9fr",
                "90px"
              ),
              marginBottom: isMobile
                ? "56px"
                : "90px",
            }}
          >
            <h2
              style={{
                ...headingStyle,
                color: "#fff",
                fontSize: isMobile
                  ? "clamp(50px, 14vw, 70px)"
                  : "clamp(62px, 7vw, 108px)",
              }}
            >
              Dark space.
              <br />
              Electric cyan.
              <br />
              Tiny worlds.
            </h2>

            <p
              style={{
                ...bodyStyle,
                opacity: 0.65,
                alignSelf: "end",
                margin: 0,
              }}
            >
              The visual system borrows from
              space exploration: dark navy
              backgrounds, glowing cyan actions,
              floating flags, orbit-like maps and
              isometric illustrations.
            </p>
          </div>

          <div
            style={{
              ...grid(
                "repeat(3, 1fr)",
                "14px"
              ),
            }}
          >
            <div
              style={{
                background: DARKER,
                padding: isMobile
                  ? "30px"
                  : "42px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "460px",
              }}
            >
              <img
                src={welcomeScreen}
                alt="Bepn welcome screen"
                style={{
                  height: isMobile
                    ? "460px"
                    : "520px",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <div
              style={{
                background: DARKER,
                padding: isMobile
                  ? "30px"
                  : "42px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "460px",
              }}
            >
              <img
                src={onboardingRocket}
                alt="Bepn onboarding illustration"
                style={{
                  height: isMobile
                    ? "460px"
                    : "520px",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <div
              style={{
                background: DARKER,
                padding: isMobile
                  ? "30px"
                  : "42px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "460px",
              }}
            >
              <img
                src={locationDetected}
                alt="Bepn location detected screen"
                style={{
                  height: isMobile
                    ? "460px"
                    : "520px",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 03 COUNTRY EXPLORER */}
      <section
        style={{
          padding: `${sectionY} ${side}`,
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            ...labelStyle,
            marginBottom: "28px",
          }}
        >
          03 — COUNTRY EXPLORER
        </p>

        <div
          style={{
            ...grid(
              ".8fr 1.2fr",
              "90px"
            ),
            alignItems: "end",
            marginBottom: isMobile
              ? "56px"
              : "80px",
          }}
        >
          <h2
            style={{
              ...headingStyle,
              fontSize: isMobile
                ? "clamp(48px, 14vw, 68px)"
                : "clamp(58px, 6.5vw, 102px)",
            }}
          >
            Countries
            <br />
            became a
            <br />
            galaxy.
          </h2>

          <p
            style={{
              ...bodyStyle,
              color: "rgba(0,0,0,.56)",
              maxWidth: "620px",
              margin: 0,
            }}
          >
            Instead of relying only on a
            conventional dropdown, the main
            selection experience turns server
            choice into exploration. Flags float
            through the interface like destinations
            on a map.
          </p>
        </div>

        <div
          style={{
            background: DARK,
            borderRadius: isMobile
              ? "18px"
              : "28px",
            padding: isMobile
              ? "36px 18px"
              : "60px",
          }}
        >
          <div
            style={{
              ...grid(
                "1fr 1fr",
                "30px"
              ),
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={countryExplorer}
                alt="Bepn country explorer"
                style={{
                  height: isMobile
                    ? "580px"
                    : "690px",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={countrySelect}
                alt="Bepn country selection state"
                style={{
                  height: isMobile
                    ? "580px"
                    : "690px",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 04 PRIMARY ACTION */}
      <section
        style={{
          background: "#fff",
          padding: `${sectionY} ${side}`,
        }}
      >
        <div
          style={{
            maxWidth: "1500px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              ...labelStyle,
              marginBottom: "28px",
            }}
          >
            04 — PRIMARY ACTION
          </p>

          <div
            style={{
              ...grid(
                "1.05fr .95fr",
                "90px"
              ),
              alignItems: "end",
              marginBottom: isMobile
                ? "56px"
                : "80px",
            }}
          >
            <h2
              style={{
                ...headingStyle,
                fontSize: isMobile
                  ? "clamp(50px, 14vw, 68px)"
                  : "clamp(62px, 7vw, 108px)",
              }}
            >
              One action
              <br />
              always stays
              <br />
              obvious.
            </h2>

            <p
              style={{
                ...bodyStyle,
                color: "rgba(0,0,0,.56)",
                margin: 0,
              }}
            >
              The large bottom control is always
              the strongest visual element because
              connecting or disconnecting is the
              core task of the product.
            </p>
          </div>

          <div
            style={{
              ...grid(
                "1fr 1fr",
                "14px"
              ),
            }}
          >
            <div
              style={{
                background: DARK,
                padding: isMobile
                  ? "30px"
                  : "50px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={disconnectedState}
                alt="Bepn disconnected state"
                style={{
                  height: isMobile
                    ? "590px"
                    : "700px",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <div
              style={{
                background: DARK,
                padding: isMobile
                  ? "30px"
                  : "50px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={connectedState}
                alt="Bepn connected state"
                style={{
                  height: isMobile
                    ? "590px"
                    : "700px",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 05 ONBOARDING */}
      <section
        style={{
          background: DARKER,
          color: "#fff",
          padding: `${sectionY} ${side}`,
        }}
      >
        <div
          style={{
            maxWidth: "1500px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              ...labelStyle,
              color: CYAN,
              marginBottom: "28px",
            }}
          >
            05 — ONBOARDING
          </p>

          <div
            style={{
              ...grid(
                "1fr .8fr",
                "90px"
              ),
              marginBottom: isMobile
                ? "50px"
                : "80px",
            }}
          >
            <h2
              style={{
                ...headingStyle,
                color: "#fff",
                fontSize: isMobile
                  ? "clamp(48px, 14vw, 68px)"
                  : "clamp(58px, 6.5vw, 102px)",
              }}
            >
              The astronaut
              <br />
              sets the tone.
            </h2>

            <p
              style={{
                ...bodyStyle,
                opacity: 0.64,
                alignSelf: "end",
                margin: 0,
              }}
            >
              Isometric scenes introduce the app
              as a playful journey rather than a
              technical utility. The user becomes
              the explorer before they ever reach
              the server map.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(3, 1fr)",
              gap: isMobile
                ? "28px"
                : "14px",
            }}
          >
            {[signupScreen, welcomeScreen, onboardingRocket].map(
              (img, i) => (
                <div
                  key={i}
                  style={{
                    background: DARK,
                    padding: isMobile
                      ? "26px"
                      : "38px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={img}
                    alt="Bepn onboarding screen"
                    style={{
                      height: isMobile
                        ? "540px"
                        : "620px",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 06 WIREFRAMES — very light */}
      <section
        style={{
          padding: `${sectionY} ${side}`,
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            ...labelStyle,
            marginBottom: "28px",
          }}
        >
          06 — FROM FLOW TO INTERFACE
        </p>

        <div
          style={{
            ...grid(
              ".8fr 1.2fr",
              "90px"
            ),
            alignItems: "end",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              ...headingStyle,
              fontSize: isMobile
                ? "clamp(46px, 13vw, 65px)"
                : "clamp(56px, 6vw, 96px)",
            }}
          >
            Keeping the
            <br />
            structure simple.
          </h2>

          <p
            style={{
              ...bodyStyle,
              color: "rgba(0,0,0,.52)",
              margin: 0,
              maxWidth: "600px",
            }}
          >
            The early flow focused on the few
            actions users actually needed:
            onboarding, choosing a country and
            connecting.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr 1fr"
              : "repeat(4, 1fr)",
            gap: "12px",
          }}
        >
          {[wireframe1, wireframe2, wireframe3, wireframe4].map(
            (img, i) => (
              <div
                key={i}
                style={{
                  background: "#111",
                  padding: "20px",
                }}
              >
                <img
                  src={img}
                  alt={`Bepn wireframe ${i + 1}`}
                  style={{
                    width: "100%",
                    display: "block",
                  }}
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* 07 OUTCOME */}
      <section
        style={{
          background: DARK,
          color: "#fff",
          padding: isMobile
            ? `90px ${side}`
            : `140px ${side}`,
          minHeight: isMobile
            ? "auto"
            : "88vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1500px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              ...labelStyle,
              color: CYAN,
              marginBottom: "42px",
            }}
          >
            07 — OUTCOME
          </p>

          <h2
            style={{
              ...headingStyle,
              color: "#fff",
              fontSize: isMobile
                ? "clamp(52px, 15vw, 74px)"
                : "clamp(72px, 8.5vw, 138px)",
              maxWidth: "1350px",
            }}
          >
            A technical utility,
            <br />
            reframed as
            <br />
            <span style={{ color: CYAN }}>
              exploration.
            </span>
          </h2>

          <p
            style={{
              ...bodyStyle,
              fontSize: isMobile
                ? "17px"
                : "20px",
              maxWidth: "680px",
              opacity: 0.65,
              marginTop: isMobile
                ? "46px"
                : "75px",
            }}
          >
            Bepn turns the most functional parts
            of a VPN — choosing a server and
            connecting — into a playful visual
            journey without making the core flow
            more complicated.
          </p>

          <div
            style={{
              borderTop:
                "1px solid rgba(255,255,255,.18)",
              marginTop: isMobile
                ? "56px"
                : "82px",
              paddingTop: "28px",
              display: "flex",
              flexWrap: "wrap",
              gap: isMobile
                ? "12px"
                : "24px",
              alignItems: "center",
              fontFamily:
                "'Bricolage Grotesque', sans-serif",
              fontSize: isMobile
                ? "clamp(25px, 8vw, 38px)"
                : "clamp(34px, 4vw, 65px)",
              fontWeight: 600,
            }}
          >
            <span>CHOOSE</span>
            <span style={{ opacity: 0.25 }}>→</span>
            <span>EXPLORE</span>
            <span style={{ opacity: 0.25 }}>→</span>
            <span style={{ color: CYAN }}>
              CONNECT
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}