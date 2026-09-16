import React, { useState, useEffect } from "react"

const NAV = "var(--text)"
const VIOLET = "var(--accent)"

function BarcelonaTime() {
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")

  const update = () => {
    const now = new Date()
    const bcn = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Madrid",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(now)
    const d = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Madrid",
      weekday: "long",
      day: "numeric",
      month: "long",
    }).format(now)
    setTime(bcn)
    setDate(d)
  }

  useEffect(() => {
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <p className="mono-label" style={{ margin: 0, color: "rgba(var(--muted-violet-rgb),0.4)" }}>
      Barcelona — {date} · {time}
    </p>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const fieldWrap: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    borderBottom: "1px solid rgba(114,87,232,0.2)",
    paddingBottom: "12px",
  }

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontSize: "17px",
    fontWeight: 400,
    color: NAV,
    background: "transparent",
    border: "none",
    padding: 0,
    width: "100%",
    outline: "none",
  }

  return (
    <div
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="page-container"
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          paddingTop: isMobile ? "108px" : "150px",
          paddingBottom: isMobile ? "120px" : "160px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1.35fr) minmax(300px, 0.65fr)",
          gap: isMobile ? "60px" : "48px",
          alignItems: "start",
        }}
      >
        {/* =====================================================
            HUGE STATEMENT
        ====================================================== */}

        <div>
          <p className="mono-label" style={{ margin: "0 0 28px" }}>
            Say hello
          </p>

          <h1
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: isMobile ? "clamp(42px, 11vw, 58px)" : "clamp(62px, 6.6vw, 118px)",
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: "-0.045em",
              color: VIOLET,
              margin: 0,
            }}
          >
            LET&rsquo;S MAKE
            <br />
            SOMETHING
            <br />
            WORTH
            <br />
            KEEPING. <span style={{ display: "inline-block" }}>↗</span>
          </h1>

          <p
            style={{
              maxWidth: "460px",
              marginTop: isMobile ? "36px" : "56px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              lineHeight: 1.6,
              color: "rgba(var(--muted-violet-rgb),0.55)",
            }}
          >
            Or email directly:{" "}
            <a
              href="mailto:hello@sofiadsgn.com"
              style={{
                color: "var(--accent)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(var(--muted-violet-rgb),0.3)",
              }}
            >
              hello@sofiadsgn.com
            </a>
          </p>

          <div style={{ marginTop: isMobile ? "36px" : "64px" }}>
            <BarcelonaTime />
          </div>
        </div>

        {/* =====================================================
            FORM
        ====================================================== */}

        <div style={{ paddingTop: isMobile ? "0" : "18px" }}>
          {sent ? (
            <div style={{ borderTop: "1px solid rgba(114,87,232,0.2)", paddingTop: "28px" }}>
              <p
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: "26px",
                  fontWeight: 800,
                  color: NAV,
                  marginBottom: "10px",
                }}
              >
                Message sent ✦
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  color: "rgba(var(--muted-violet-rgb),0.55)",
                }}
              >
                Thanks {form.name.split(" ")[0] || ""}! I&rsquo;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            >
              <div style={fieldWrap}>
                <label className="mono-label" style={{ color: "rgba(var(--muted-violet-rgb),0.5)" }}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <div style={fieldWrap}>
                <label className="mono-label" style={{ color: "rgba(var(--muted-violet-rgb),0.5)" }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <div style={fieldWrap}>
                <label className="mono-label" style={{ color: "rgba(var(--muted-violet-rgb),0.5)" }}>
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                />
              </div>

              <button
                type="submit"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  color: "#fff",
                  background: VIOLET,
                  border: "none",
                  borderRadius: "0",
                  padding: "16px 22px",
                  cursor: "pointer",
                  alignSelf: "flex-start",
                  marginTop: "10px",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Send message →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
