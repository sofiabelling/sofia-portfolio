import { useEffect } from "react"

const CYAN = "#55F1F3"
const BLACK = "#090909"
const OFF_WHITE = "#F6F6F2"

const images = {
  // Replace these paths with your exported BEPN images
  hero: "/images/bepn/bepn-hero.png",
  universe: "/images/bepn/bepn-universe.png",

  palette: "/images/bepn/bepn-colors.png",
  illustration: "/images/bepn/bepn-illustration.png",
  icons: "/images/bepn/bepn-icons.png",

  explore1: "/images/bepn/bepn-explore-01.png",
  explore2: "/images/bepn/bepn-explore-02.png",
  explore3: "/images/bepn/bepn-explore-03.png",

  connect: "/images/bepn/bepn-connect.png",

  final1: "/images/bepn/bepn-final-01.png",
  final2: "/images/bepn/bepn-final-02.png",
  final3: "/images/bepn/bepn-final-03.png",
  final4: "/images/bepn/bepn-final-04.png",
}

export default function Bepn() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main
      style={{
        background: BLACK,
        color: OFF_WHITE,
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          padding: "120px 5vw 60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "56px",
        }}
      >
        <div style={{ maxWidth: "1100px" }}>
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "28px",
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              opacity: 0.65,
            }}
          >
            <span>Concept Project</span>
            <span>·</span>
            <span>UX/UI</span>
            <span>·</span>
            <span>Art Direction</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(72px, 12vw, 180px)",
              lineHeight: 0.82,
              letterSpacing: "-0.07em",
              margin: 0,
            }}
          >
            BEPN
          </h1>

          <p
            style={{
              fontSize: "clamp(22px, 3vw, 44px)",
              lineHeight: 1.05,
              maxWidth: "820px",
              marginTop: "34px",
              color: CYAN,
              letterSpacing: "-0.035em",
            }}
          >
            Exploring connection through a digital universe.
          </p>
        </div>

        <div
          style={{
            borderRadius: "28px",
            overflow: "hidden",
            minHeight: "52vh",
            background: "#111",
          }}
        >
          <img
            src={images.hero}
            alt="BEPN VPN interface"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "52vh",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </section>

      {/* CONCEPT */}
      <section
        style={{
          padding: "140px 5vw",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "24px",
          alignItems: "center",
        }}
        className="bepn-concept"
      >
        <div style={{ gridColumn: "1 / span 6" }} className="bepn-half">
          <p
            style={{
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: CYAN,
              marginBottom: "24px",
            }}
          >
            The concept
          </p>

          <h2
            style={{
              fontSize: "clamp(42px, 6vw, 90px)",
              lineHeight: 0.95,
              letterSpacing: "-0.055em",
              maxWidth: "850px",
            }}
          >
            What if choosing a VPN location felt more like exploring a
            universe?
          </h2>

          <p
            style={{
              maxWidth: "580px",
              fontSize: "18px",
              lineHeight: 1.6,
              opacity: 0.72,
              marginTop: "38px",
            }}
          >
            BEPN reimagines the traditional VPN experience as a spatial
            journey. Instead of navigating technical lists and settings,
            users explore countries, connections and signals through a visual
            digital landscape.
          </p>
        </div>

        <div
          style={{
            gridColumn: "8 / span 5",
            borderRadius: "26px",
            overflow: "hidden",
          }}
          className="bepn-half"
        >
          <img
            src={images.universe}
            alt="BEPN universe concept"
            style={{ width: "100%", display: "block" }}
          />
        </div>
      </section>

      {/* TRANSLATION */}
      <section
        style={{
          padding: "120px 5vw 160px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: CYAN,
              marginBottom: "45px",
            }}
          >
            From utility to exploration
          </p>

          <div
            style={{
              display: "grid",
              gap: "26px",
              fontSize: "clamp(28px, 4vw, 58px)",
              lineHeight: 1,
              letterSpacing: "-0.045em",
            }}
          >
            <p>
              VPN server <span style={{ color: CYAN }}>→</span> Destination
            </p>

            <p>
              Connection <span style={{ color: CYAN }}>→</span> Journey
            </p>

            <p>
              Country selection <span style={{ color: CYAN }}>→</span>{" "}
              Exploration
            </p>
          </div>
        </div>
      </section>

      {/* VISUAL SYSTEM */}
      <section
        style={{
          background: OFF_WHITE,
          color: BLACK,
          padding: "140px 5vw",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "22px",
              opacity: 0.55,
            }}
          >
            Visual direction
          </p>

          <h2
            style={{
              fontSize: "clamp(50px, 7vw, 105px)",
              letterSpacing: "-0.06em",
              lineHeight: 0.92,
              marginBottom: "80px",
            }}
          >
            Building the universe.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "22px",
            }}
            className="bepn-grid-3"
          >
            <VisualCard
              eyebrow="Color"
              title="Cyan signals"
              text="Bright cyan details create contrast against the dark interface and act as visual signals throughout the experience."
              image={images.palette}
            />

            <VisualCard
              eyebrow="Illustration"
              title="Space environments"
              text="Isometric illustrations turn the VPN experience into a small exploratory world."
              image={images.illustration}
            />

            <VisualCard
              eyebrow="Icons"
              title="Light navigation"
              text="Linear iconography keeps secondary controls quiet while maintaining the visual language."
              image={images.icons}
            />
          </div>
        </div>
      </section>

      {/* EXPLORING LOCATIONS */}
      <section style={{ padding: "160px 5vw" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <p
            style={{
              color: CYAN,
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "20px",
            }}
          >
            Interaction
          </p>

          <h2
            style={{
              fontSize: "clamp(58px, 8vw, 120px)",
              lineHeight: 0.9,
              letterSpacing: "-0.065em",
            }}
          >
            Not a dropdown.
          </h2>

          <p
            style={{
              maxWidth: "620px",
              fontSize: "18px",
              lineHeight: 1.6,
              opacity: 0.7,
              marginTop: "36px",
            }}
          >
            Server selection becomes an explorable network. Countries behave
            like points within a digital map rather than rows inside a
            conventional menu.
          </p>

          <div
            style={{
              position: "relative",
              minHeight: "760px",
              marginTop: "100px",
            }}
            className="bepn-floating-gallery"
          >
            <FloatingImage
              src={images.explore1}
              style={{
                width: "46%",
                position: "absolute",
                left: "0",
                top: "70px",
                transform: "rotate(-2deg)",
              }}
            />

            <FloatingImage
              src={images.explore2}
              style={{
                width: "46%",
                position: "absolute",
                right: "5%",
                top: "0",
                transform: "rotate(2deg)",
              }}
            />

            <FloatingImage
              src={images.explore3}
              style={{
                width: "40%",
                position: "absolute",
                left: "31%",
                top: "350px",
                transform: "rotate(-1deg)",
              }}
            />
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section
        style={{
          padding: "80px 5vw 170px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="bepn-connect"
        >
          <div>
            <p
              style={{
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: CYAN,
                marginBottom: "22px",
              }}
            >
              Connect
            </p>

            <h2
              style={{
                fontSize: "clamp(48px, 6vw, 88px)",
                lineHeight: 0.95,
                letterSpacing: "-0.055em",
              }}
            >
              One action
              <br />
              at the center.
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                opacity: 0.7,
                maxWidth: "500px",
                marginTop: "34px",
              }}
            >
              The primary connection control remains visually dominant while
              the rest of the interface stays lightweight around it.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                flexWrap: "wrap",
                marginTop: "48px",
                fontSize: "14px",
                letterSpacing: "0.08em",
              }}
            >
              <span>START</span>
              <span style={{ color: CYAN }}>→</span>
              <span>CONNECTING</span>
              <span style={{ color: CYAN }}>→</span>
              <span>CONNECTED</span>
            </div>
          </div>

          <div
            style={{
              borderRadius: "30px",
              overflow: "hidden",
              background: "#111",
            }}
          >
            <img
              src={images.connect}
              alt="BEPN connect interaction"
              style={{ width: "100%", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* FINAL GALLERY */}
      <section
        style={{
          background: OFF_WHITE,
          color: BLACK,
          padding: "150px 5vw",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              opacity: 0.55,
            }}
          >
            Final experience
          </p>

          <h2
            style={{
              fontSize: "clamp(58px, 8vw, 118px)",
              letterSpacing: "-0.065em",
              lineHeight: 0.9,
              marginTop: "20px",
              marginBottom: "85px",
            }}
          >
            BEPN in orbit.
          </h2>

          <GalleryImage src={images.final1} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              marginTop: "24px",
            }}
            className="bepn-gallery-two"
          >
            <GalleryImage src={images.final2} />
            <GalleryImage src={images.final3} />
          </div>

          <div style={{ marginTop: "24px" }}>
            <GalleryImage src={images.final4} />
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section
        style={{
          minHeight: "75vh",
          padding: "100px 5vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: CYAN,
              textTransform: "uppercase",
              fontSize: "12px",
              letterSpacing: "0.12em",
              marginBottom: "32px",
            }}
          >
            BEPN
          </p>

          <h2
            style={{
              fontSize: "clamp(42px, 6vw, 90px)",
              lineHeight: 1,
              letterSpacing: "-0.055em",
            }}
          >
            A familiar utility,
            <br />
            reimagined as exploration.
          </h2>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .bepn-concept {
            display: flex !important;
            flex-direction: column !important;
            gap: 60px !important;
          }

          .bepn-half {
            width: 100% !important;
          }

          .bepn-grid-3 {
            grid-template-columns: 1fr !important;
          }

          .bepn-connect {
            grid-template-columns: 1fr !important;
            gap: 55px !important;
          }

          .bepn-gallery-two {
            grid-template-columns: 1fr !important;
          }

          .bepn-floating-gallery {
            min-height: unset !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 20px !important;
          }

          .bepn-floating-gallery > div {
            position: relative !important;
            width: 100% !important;
            inset: auto !important;
            transform: none !important;
          }
        }
      `}</style>
    </main>
  )
}

function VisualCard({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string
  title: string
  text: string
  image: string
}) {
  return (
    <article>
      <div
        style={{
          aspectRatio: "4 / 5",
          overflow: "hidden",
          borderRadius: "24px",
          background: "#E9E9E4",
        }}
      >
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <p
        style={{
          marginTop: "24px",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          opacity: 0.45,
        }}
      >
        {eyebrow}
      </p>

      <h3
        style={{
          fontSize: "27px",
          marginTop: "8px",
          letterSpacing: "-0.035em",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.55,
          opacity: 0.62,
          marginTop: "12px",
        }}
      >
        {text}
      </p>
    </article>
  )
}

function FloatingImage({
  src,
  style,
}: {
  src: string
  style?: React.CSSProperties
}) {
  return (
    <div
      style={{
        borderRadius: "25px",
        overflow: "hidden",
        boxShadow: "0 30px 80px rgba(0,0,0,.35)",
        ...style,
      }}
    >
      <img
        src={src}
        alt=""
        style={{
          width: "100%",
          display: "block",
        }}
      />
    </div>
  )
}

function GalleryImage({ src }: { src: string }) {
  return (
    <div
      style={{
        overflow: "hidden",
        borderRadius: "26px",
        background: "#E7E7E3",
      }}
    >
      <img
        src={src}
        alt=""
        style={{
          width: "100%",
          display: "block",
        }}
      />
    </div>
  )
}