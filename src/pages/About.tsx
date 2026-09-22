import React, { useEffect, useState } from "react";
import portrait from "../imports/IMG_5673.jpg";

const NAV = "var(--text)";
const VIOLET = "var(--accent)";
const BG = "var(--bg)";
const TEXT = "var(--text-muted)";

const experience = [
  {
    role: "Product Designer / UI/UX Designer",
    company: "Epiceros",
    period: "Aug 2020 – Dec 2025",
    years: "2020–2025",
    location: "Stockholm, Sweden",
    impact: null as string | null,
    desc: [
      "Designed and optimized web and mobile products for casino and sports betting platforms across European and international markets.",
      "Led UX/UI work across complex product areas including KYC, deposits, payments, and promotional experiences — balancing user needs, business objectives, technical constraints, and regulatory requirements.",
      "Built and evolved design systems and reusable components, improving consistency and scalability across multiple digital products.",
      "Optimized critical deposit and payment flows, focusing on reducing friction and improving acceptance rates.",
      "Collaborated closely with stakeholders, Data Scientists, Front-end and Back-end Engineers, translators, and other cross-functional teams throughout the product development process.",
    ] as string | string[],
  },
  {
    role: "Junior UX/UI Designer",
    company: "Agencia Match x Copec",
    period: "May 2019 – Feb 2020",
    years: "2019–2020",
    location: "Santiago, Chile",
    impact: "5M+ Downloads",
    desc: "Contributed to the early creation and launch of Copec's consumer app, helping shape the product from its initial stages through its release — now at 5M+ downloads. Conducted on-site user research and usability testing at Copec service stations, observing customers in real-world contexts. Used field research, usability testing, heuristic evaluation, A/B testing, and data analysis to uncover user needs and inform key functionalities before launch. Contributed to the Copec Design System, creating and evolving UI guidelines, components, and brand assets.",
  },
  {
    role: "Digital Designer Intern",
    company: "Redo",
    period: "Dec 2015 – Feb 2016",
    years: "2015–2016",
    location: "Santiago, Chile",
    impact: null as string | null,
    desc: "Contributed with website interfaces and branded digital assets across multiple client projects.",
  },
];

const education = [
  {
    degree: "Bachelor's Degree in Human–Computer Interaction / Digital Design",
    school: "Universidad del Desarrollo",
    location: "Santiago, Chile",
    year: "2013 – 2017",
    desc: "Multidisciplinary program combining UX/UI, interaction design, visual communication, animation and emerging technologies. Focused on designing user-centered digital and interactive experiences across web, mobile, audiovisual media, data visualization, 3D, VR and physical computing.",
  },
  {
    degree: "Exchange Programme — Digital Design",
    school: "Universitat Politècnica de Catalunya (UPC)",
    location: "Barcelona, Spain",
    year: "2016 – 2017",
    desc: null as string | null,
  },
];

const expertise = [
  "Product Design",
  "UX/UI Design",
  "Interaction Design",
  "User Research",
  "Field Research",
  "Information Architecture",
  "Usability Testing",
  "A/B Testing",
  "Heuristic Evaluation",
  "Design Systems",
  "Wireframing",
  "Visual Design",
  "Storyboarding",
  "Motion Design",
  "Animation",
  "3D Design",
];

const languages = [
  { lang: "Spanish", level: "Native" },
  { lang: "English", level: "Professional" },
  { lang: "Swedish", level: "Basic" },
];

const personalBits = [
  "Photography",
  "Nature",
  "Creative technology",
  "Dogs",
  "Good coffee",
];

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: NAV,
        overflowX: "hidden",
      }}
    >
      <div
        className="page-container"
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          paddingTop: isMobile ? "88px" : "124px",
          paddingBottom: isMobile ? "130px" : "160px",
        }}
      >
        {/* =====================================================
            HERO
        ====================================================== */}
        <section style={{ marginBottom: isMobile ? "90px" : "128px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "minmax(0,1.06fr) minmax(340px,.94fr)",
              gap: isMobile ? "32px" : "70px",
              alignItems: "start",
            }}
          >
            <div>
              <h1
                style={{
                  margin: 0,
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: isMobile ? "clamp(48px,13vw,66px)" : "clamp(68px,6.2vw,106px)",
                  fontWeight: 800,
                  lineHeight: 0.92,
                  letterSpacing: "-0.055em",
                  color: VIOLET,
                }}
              >
                Digital designer.
                <br />
                Curious human.
              </h1>

              <p
                style={{
                  maxWidth: "560px",
                  margin: isMobile ? "28px 0 0" : "36px 0 0",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: isMobile ? "17px" : "19px",
                  lineHeight: 1.65,
                  color: TEXT,
                }}
              >
                I’m Sofia, a Product Designer with 6+ years of experience
                creating useful, beautiful and human digital products across
                international markets.
              </p>

              <p
                style={{
                  maxWidth: "560px",
                  margin: "18px 0 0",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: isMobile ? "15px" : "16px",
                  lineHeight: 1.7,
                  color: "#8A8CA2",
                }}
              >
                My background sits between product design, visual design,
                interaction and creative technology. I’m especially drawn to
                projects where research and experimentation can live together.
              </p>

              {!isMobile && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginTop: "30px",
                  }}
                >
                  {["Product design", "Interaction", "Visual culture", "Creative technology"].map(
                    (item) => (
                      <span
                        key={item}
                        style={{
                          padding: "8px 11px",
                          border: "1px solid rgba(114,87,232,.13)",
                          borderRadius: "999px",
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "10px",
                          letterSpacing: ".07em",
                          textTransform: "uppercase",
                          color: "#9994C9",
                        }}
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              )}
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: isMobile ? "290px" : "430px",
                justifySelf: isMobile ? "center" : "end",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "3 / 4",
                  overflow: "hidden",
                  borderRadius: isMobile ? "22px" : "30px",
                  background: "var(--surface-alt-2)",
                  boxShadow: "0 26px 70px rgba(60,45,130,.10)",
                }}
              >
                <img
                  src={portrait}
                  alt="Sofia Bellinghausen"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "center",
                    filter: "saturate(.94)",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(25,15,55,.15), transparent 34%)",
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    right: "14px",
                    bottom: "14px",
                    padding: "7px 11px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,.80)",
                    border: "1px solid rgba(255,255,255,.65)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    color: "#675F8C",
                  }}
                >
                  Currently in Barcelona
                </div>
              </div>

              <span
                aria-hidden
                style={{
                  position: "absolute",
                  top: isMobile ? "-20px" : "-24px",
                  right: isMobile ? "12px" : "-20px",
                  color: "#9C8CF6",
                  fontSize: isMobile ? "24px" : "30px",
                }}
              >
                ✦
              </span>

              {!isMobile && (
                <span
                  className="mono-label"
                  style={{
                    position: "absolute",
                    left: "-50px",
                    bottom: "24px",
                    color: "#A7A2D6",
                    transform: "rotate(-90deg)",
                    transformOrigin: "left bottom",
                  }}
                >
                  that’s me ↗
                </span>
              )}
            </div>
          </div>

        </section>

        {/* =====================================================
            STORY / PLACES
        ====================================================== */}
        <section style={{ marginBottom: isMobile ? "88px" : "118px" }}>
          <SectionHeader>02 — A little context</SectionHeader>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : ".9fr 1.1fr",
              gap: isMobile ? "30px" : "64px",
              alignItems: "start",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: isMobile ? "35px" : "clamp(42px,4vw,62px)",
                lineHeight: 1.02,
                letterSpacing: "-0.045em",
                color: NAV,
              }}
            >
              Santiago → Stockholm → Barcelona.
            </h2>

            <div>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: isMobile ? "16px" : "18px",
                  lineHeight: 1.7,
                  color: TEXT,
                }}
              >
                I studied Digital Design in Santiago, spent part of my studies
                in Barcelona, later worked internationally from Stockholm, and
                eventually returned to Barcelona.
              </p>

              <p
                style={{
                  margin: "18px 0 0",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: isMobile ? "15px" : "16px",
                  lineHeight: 1.7,
                  color: "#8B8DA2",
                }}
              >
                That mix of places also shaped the way I work: structured when
                a product needs clarity, exploratory when an idea needs room,
                and always interested in how digital experiences feel — not
                only how they function.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,minmax(0,1fr))",
              gap: isMobile ? "10px" : "18px",
              marginTop: isMobile ? "34px" : "48px",
            }}
          >
            {[
              ["Santiago", "Design foundations"],
              ["Stockholm", "International product work"],
              ["Barcelona", "Current chapter"],
            ].map(([city, note], index) => (
              <div
                key={city}
                style={{
                  position: "relative",
                  padding: isMobile ? "18px 14px" : "24px 22px",
                  borderTop: "1px solid rgba(114,87,232,.16)",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-4px",
                    left: 0,
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: index === 2 ? VIOLET : "#C8C1F5",
                  }}
                />
                <p
                  style={{
                    margin: 0,
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: isMobile ? "17px" : "20px",
                    fontWeight: 700,
                    color: NAV,
                  }}
                >
                  {city}
                </p>
                <p
                  style={{
                    margin: "7px 0 0",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: isMobile ? "10px" : "12px",
                    lineHeight: 1.45,
                    color: "#999AB0",
                  }}
                >
                  {note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            EXPERIENCE
        ====================================================== */}
        <section style={{ marginBottom: isMobile ? "84px" : "112px" }}>
          <SectionHeader>03 — Experience</SectionHeader>

          {experience.map((item, index) => (
            <div
              key={item.company}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "190px minmax(0,1fr)",
                gap: isMobile ? "12px" : "42px",
                padding: isMobile ? "26px 0" : "32px 0",
                borderTop:
                  index === 0 ? "none" : "1px solid rgba(114,87,232,.10)",
              }}
            >
              <div>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "#AAA7CE",
                  }}
                >
                  {item.years}
                </p>
                <p
                  style={{
                    margin: "7px 0 0",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    color: "#AAA7CE",
                  }}
                >
                  {item.location}
                </p>
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontSize: isMobile ? "23px" : "29px",
                      fontWeight: 800,
                      lineHeight: 1,
                      letterSpacing: "-0.025em",
                      color: NAV,
                    }}
                  >
                    {item.company}
                  </h3>

                  {item.impact && (
                    <span
                      className="mono-label"
                      style={{
                        color: VIOLET,
                      }}
                    >
                      {item.impact}
                    </span>
                  )}
                </div>

                <p
                  style={{
                    margin: "7px 0 0",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "#9189BD",
                  }}
                >
                  {item.role}
                </p>

                {Array.isArray(item.desc) ? (
                  <ul
                    style={{
                      maxWidth: "760px",
                      margin: "15px 0 0",
                      paddingLeft: "18px",
                      listStyle: "disc",
                    }}
                  >
                    {item.desc.map((line, lineIndex) => (
                      <li
                        key={lineIndex}
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: isMobile ? "14px" : "15px",
                          lineHeight: 1.6,
                          color: "#717388",
                          marginBottom: lineIndex === item.desc.length - 1 ? 0 : "10px",
                        }}
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p
                    style={{
                      maxWidth: "760px",
                      margin: "15px 0 0",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: isMobile ? "14px" : "15px",
                      lineHeight: 1.72,
                      color: "#717388",
                    }}
                  >
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* =====================================================
            EXPERTISE + TOOLS
        ====================================================== */}
        <section style={{ marginBottom: isMobile ? "84px" : "112px" }}>
          <SectionHeader>04 — What I work with</SectionHeader>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1.1fr .9fr",
              gap: isMobile ? "40px" : "72px",
            }}
          >
            <div>
              <p className="mono-label" style={{ margin: "0 0 16px", color: "#9994C9" }}>
                Expertise
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "9px" }}>
                {expertise.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "8px 12px",
                      borderRadius: "999px",
                      border: "1px solid rgba(114,87,232,.12)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "12px",
                      color: "#787991",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mono-label" style={{ margin: "0 0 16px", color: "#9994C9" }}>
                Tools
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  lineHeight: 2,
                  color: "#74768B",
                }}
              >
                Figma · Maze · Principle · After Effects · Blender · Miro · Notion
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            EDUCATION
        ====================================================== */}
        <section style={{ marginBottom: isMobile ? "84px" : "112px" }}>
          <SectionHeader>05 — Education</SectionHeader>

          {education.map((item, index) => (
            <div
              key={item.school}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "190px minmax(0,1fr)",
                gap: isMobile ? "10px" : "42px",
                padding: isMobile ? "24px 0" : "28px 0",
                borderTop:
                  index === 0 ? "none" : "1px solid rgba(114,87,232,.10)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: ".08em",
                  color: "#AAA7CE",
                }}
              >
                {item.year}
              </p>

              <div>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: isMobile ? "19px" : "22px",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: NAV,
                  }}
                >
                  {item.degree}
                </h3>

                <p
                  style={{
                    margin: "8px 0 0",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    color: "#918FA6",
                  }}
                >
                  {item.school} · {item.location}
                </p>

                {item.desc && (
                  <p
                    style={{
                      maxWidth: "760px",
                      margin: "13px 0 0",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: "#74768B",
                    }}
                  >
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* =====================================================
            PERSONAL + LANGUAGES + CTA
        ====================================================== */}
        <section>
          <SectionHeader>06 — Outside the screen</SectionHeader>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1.15fr .85fr",
              gap: isMobile ? "42px" : "74px",
              alignItems: "start",
            }}
          >
            <div>
              <h2
                style={{
                  maxWidth: "620px",
                  margin: 0,
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: isMobile ? "32px" : "clamp(38px,3.5vw,54px)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.04em",
                  color: VIOLET,
                }}
              >
                I like making things,
                noticing things,
                and occasionally overthinking them.
              </h2>

              <p
                style={{
                  maxWidth: "580px",
                  margin: "20px 0 0",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: isMobile ? "15px" : "16px",
                  lineHeight: 1.7,
                  color: TEXT,
                }}
              >
                Away from product work, I’m usually taking photos, looking at
                nature, experimenting with visual ideas, or hanging out with a dog.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "9px",
                  marginTop: "24px",
                }}
              >
                {personalBits.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "8px 11px",
                      borderRadius: "999px",
                      background: "rgba(114,87,232,.065)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      letterSpacing: ".06em",
                      color: "#8E87C5",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mono-label" style={{ margin: "0 0 16px", color: "#9994C9" }}>
                Languages
              </p>

              <div style={{ display: "grid", gap: "13px" }}>
                {languages.map(({ lang, level }) => (
                  <div
                    key={lang}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "18px",
                      paddingBottom: "12px",
                      borderBottom: "1px solid rgba(114,87,232,.10)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: NAV,
                      }}
                    >
                      {lang}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "12px",
                        color: "#AAA7CE",
                      }}
                    >
                      {level}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="/cv-sofia-bellinghausen.pdf"
                download
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                  marginTop: "28px",
                  padding: "12px 20px",
                  borderRadius: "999px",
                  background: VIOLET,
                  color: "#fff",
                  textDecoration: "none",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  boxShadow: "0 8px 24px rgba(114,87,232,.18)",
                }}
              >
                ↓ Download CV
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing: ".1em",
        textTransform: "uppercase",
        color: "rgba(114,87,232,.6)",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </p>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        marginBottom: "26px",
      }}
    >
      <SectionLabel>{children}</SectionLabel>
      <div
        style={{
          flex: 1,
          height: "1px",
          background:
            "linear-gradient(to right, rgba(114,87,232,.22), rgba(114,87,232,.05), transparent)",
        }}
      />
    </div>
  );
}
