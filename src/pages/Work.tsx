import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { projects, allTags, type Tag } from "../data/projects";

const VIOLET = "#7257E8";
const NAV = "#1A1940";
const BG = "#FBFBF8";
const SOFT = "#AAA4DE";

const THUMBNAIL_STYLE: Record<
  string,
  { fit?: "cover" | "contain"; position?: string; padding?: string; scale?: number }
> = {
  copec: { fit: "cover", position: "center" },
  nix: { fit: "cover", position: "center 48%" },
  bepn: { fit: "cover", position: "center 36%" },
  dashboard: { fit: "cover", position: "center" },
  "joel-sartore": { fit: "cover", position: "6% 42%" },
};

export default function Work() {
  const navigate = useNavigate();
  const [active, setActive] = useState<Tag | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const filtered = active
    ? projects.filter((project) => project.tags.includes(active))
    : projects;

  return (
    <div style={{ minHeight: "100vh", background: BG, color: NAV, overflowX: "hidden" }}>
      <section
        className="page-container"
        style={{
          maxWidth: "1380px",
          margin: "0 auto",
          paddingTop: isMobile ? "102px" : "138px",
          paddingBottom: isMobile ? "28px" : "46px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0,1fr) auto",
            gap: isMobile ? "18px" : "40px",
            alignItems: "end",
          }}
        >
          <div>
            <p className="mono-label" style={{ margin: "0 0 13px", color: "#9B96CE" }}>
              Project archive
            </p>
            <h1
              style={{
                margin: 0,
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: isMobile ? "clamp(46px,14vw,62px)" : "clamp(72px,6.5vw,104px)",
                fontWeight: 800,
                lineHeight: 0.88,
                letterSpacing: "-0.055em",
                color: VIOLET,
              }}
            >
              All work
            </h1>
          </div>

          <p
            className="mono-label"
            style={{
              margin: 0,
              paddingBottom: isMobile ? 0 : "10px",
              color: "#9B96CE",
            }}
          >
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </p>
        </div>

        <div style={{ marginTop: isMobile ? "34px" : "52px", overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              gap: isMobile ? "20px" : "28px",
              overflowX: "auto",
              paddingBottom: "8px",
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <FilterBtn label="All" isActive={active === null} onClick={() => setActive(null)} />
            {allTags.map((tag) => (
              <FilterBtn
                key={tag}
                label={tag}
                isActive={active === tag}
                onClick={() => setActive(active === tag ? null : tag)}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="page-container"
        style={{
          maxWidth: "1380px",
          margin: "0 auto",
          paddingTop: isMobile ? "18px" : "32px",
          paddingBottom: isMobile ? "140px" : "170px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, minmax(0,1fr))" : "repeat(2, minmax(0,1fr))",
            gap: isMobile ? "30px 10px" : "66px 24px",
            alignItems: "start",
          }}
        >
          {filtered.map((project, index) => (
            <ProjectTile
              key={project.slug}
              project={project}
              index={index}
              isMobile={isMobile}
              isHovered={hovered === project.slug}
              onMouseEnter={() => setHovered(project.slug)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navigate(`/work/${project.slug}`)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectTile({
  project,
  index,
  isMobile,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  project: (typeof projects)[number];
  index: number;
  isMobile: boolean;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}) {
  const metaLines = project.meta ?? [project.industry.toUpperCase()];
  const style = THUMBNAIL_STYLE[project.slug];

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-label={`Open ${project.title} project`}
      style={{
        width: "100%",
        minWidth: 0,
        padding: 0,
        border: 0,
        background: "transparent",
        textAlign: "left",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: isMobile ? "4 / 3.35" : index % 3 === 1 ? "4 / 3.05" : "4 / 3.2",
          overflow: "hidden",
          borderRadius: isMobile ? "8px" : "12px",
          background: project.bg,
        }}
      >
        <img
          src={project.img}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: style?.fit ?? "cover",
            objectPosition: style?.position ?? project.imgPosition ?? "center",
            padding: style?.padding ?? 0,
            transform: `scale(${(style?.scale ?? 1) * (!isMobile && isHovered ? 1.012 : 1)})`,
            transition: "transform .55s cubic-bezier(.2,.75,.25,1)",
            backfaceVisibility: "hidden",
          }}
        />

        {!isMobile && (
          <div
            style={{
              position: "absolute",
              right: "16px",
              bottom: "16px",
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              padding: "8px 11px",
              borderRadius: "999px",
              background: NAV,
              color: "#fff",
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateY(0)" : "translateY(5px)",
              transition: "opacity .2s ease, transform .24s ease",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "9px",
              fontWeight: 500,
              letterSpacing: ".09em",
              textTransform: "uppercase",
            }}
          >
            Open project ↗
          </div>
        )}
      </div>

      <div style={{ marginTop: isMobile ? "10px" : "15px", minWidth: 0 }}>
        <div style={{ marginBottom: isMobile ? "6px" : "8px" }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: isMobile ? "8px" : "9px",
              color: SOFT,
            }}
          >
            {project.year}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "10px" }}>
          <h2
            style={{
              margin: 0,
              minWidth: 0,
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: isMobile ? "16px" : "clamp(23px,1.9vw,30px)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.035em",
              color: NAV,
            }}
          >
            {project.title}
          </h2>
        </div>

        <div
          className="editorial-meta-block"
          style={{
            marginTop: isMobile ? "5px" : "8px",
            fontSize: isMobile ? "8px" : undefined,
            lineHeight: isMobile ? 1.45 : undefined,
          }}
        >
          {metaLines.map((line) => <div key={line}>{line}</div>)}
        </div>
      </div>
    </button>
  );
}

function FilterBtn({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="archive-filter-btn"
      style={{
        borderBottomColor: isActive ? VIOLET : "transparent",
        fontWeight: isActive ? 600 : 400,
        color: isActive ? NAV : hovered ? VIOLET : SOFT,
      }}
    >
      {label}
    </button>
  );
}
