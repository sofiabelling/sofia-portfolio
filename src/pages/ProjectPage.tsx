import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import nixHero from "../imports/nix/nix-hero.jpg";
import nix57 from "../imports/nix/page-57.jpg";
import nix65 from "../imports/nix/page-65.jpg";
import nix76 from "../imports/nix/page-76.jpg";
import nix77 from "../imports/nix/page-77.jpg";
import nix82 from "../imports/nix/page-82.jpg";
import nix83 from "../imports/nix/page-83.jpg";
import nix86 from "../imports/nix/page-86.jpg";
import nix87 from "../imports/nix/page-87.jpg";
import nix88 from "../imports/nix/page-88.jpg";
import nix89 from "../imports/nix/page-89.jpg";
import nix90 from "../imports/nix/page-90.jpg";
import nix91 from "../imports/nix/page-91.jpg";
import nix96 from "../imports/nix/page-96.jpg";
import nix98 from "../imports/nix/page-98.jpg";
import nix99 from "../imports/nix/page-99.jpg";
import nix100 from "../imports/nix/page-100.jpg";


import BepnProject from "../components/BepnProject";
import CopecProject from "../components/CopecProject";


function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="case-label">{children}</p>;
}

function Divider() {
  return <div className="case-divider" />;
}

function NixCaseStudy() {
  const navigate = useNavigate();

  return (
    <main className="nix-case">
      <section className="nix-hero">
        <img src={nixHero} alt="NIX interactive shadow installation" />
        <div className="nix-hero-shade" />
        <button className="nix-back" onClick={() => navigate("/work")}>← Work</button>
        <div className="nix-hero-copy">
          <p className="nix-kicker">THESIS · INTERACTION DESIGN · 2017</p>
          <h1>NIX</h1>
          <p className="nix-hero-subtitle">
            Turning fear of the dark into play through projection, shadows and interaction.
          </p>
        </div>
      </section>

      <article className="nix-content">
        <section className="nix-intro-grid">
          <div>
            <SectionLabel>01 — OVERVIEW</SectionLabel>
            <h2 className="nix-display">
              What if darkness became a space for curiosity instead of fear?
            </h2>
          </div>
          <div className="nix-intro-copy">
            <p>
              NIX is my final degree project: an interactive storytelling experience designed for children aged 4–7 who are afraid of the dark. It uses the child’s own shadow as the interface, transforming a feared environment into a place for discovery and play.
            </p>
            <p>
              A Kinect v2 tracks the child’s gestures while Processing and computer-vision logic recognise hand and body shapes. When a gesture is completed, projected creatures respond — a bird flies, a snail crawls, a spider moves — making the child an active character in the story.
            </p>
          </div>
        </section>

        <Divider />

        <section className="nix-meta-grid">
          <div><span>ROLE</span><strong>Research · Interaction · Visual Design · Prototyping</strong></div>
          <div><span>TOOLS</span><strong>Processing · Kinect v2 · After Effects · Projection</strong></div>
          <div><span>CONTEXT</span><strong>Universidad del Desarrollo · Santiago, Chile</strong></div>
          <div><span>AUDIENCE</span><strong>Children aged 4–7</strong></div>
        </section>

        <Divider />

        <section className="nix-two-col">
          <div>
            <SectionLabel>02 — THE PROBLEM</SectionLabel>
            <h2>Fear is normal. Avoidance can make it stronger.</h2>
          </div>
          <div className="nix-body-copy">
            <p>
              The project began by studying childhood fear and the point at which a common developmental fear can become disruptive. The design goal was not to eliminate fear, but to support a positive, gradual relationship with darkness before avoidance patterns become entrenched.
            </p>
            <p>
              Research with psychology literature and specialists pointed toward play, progressive exposure and symbolic storytelling as useful ways to help children approach a feared stimulus without turning the experience into a clinical exercise.
            </p>
          </div>
        </section>

        <figure className="nix-wide-figure">
          <img src={nix57} alt="NIX observations and testing with children" />
          <figcaption>Early observation and testing with the target audience.</figcaption>
        </figure>

        <section className="nix-quote-block">
          <p className="nix-quote">DARKNESS = FEAR</p>
          <span>becomes</span>
          <p className="nix-quote">DARKNESS = PLAY = CURIOSITY</p>
        </section>

        <Divider />

        <section className="nix-two-col">
          <div>
            <SectionLabel>03 — DESIGN PRINCIPLE</SectionLabel>
            <h2>Use the thing that creates the fear as the material for play.</h2>
          </div>
          <div className="nix-body-copy">
            <p>
              Shadows became the core interaction material. They belong naturally to darkness, require no conventional controller, and invite children to experiment with their hands, bodies and imagination.
            </p>
            <p>
              Instead of asking a child to watch a story, NIX makes them participate in it. Their body completes scenes, activates characters and changes what happens next.
            </p>
          </div>
        </section>

        <div className="nix-image-pair">
          <figure><img src={nix65} alt="Hand-shadow research from NIX thesis" /><figcaption>Shadow language and hand-form references.</figcaption></figure>
          <figure><img src={nix83} alt="Child testing hand shadows" /><figcaption>User testing of shadow gestures.</figcaption></figure>
        </div>

        <Divider />

        <section>
          <SectionLabel>04 — INTERACTION</SectionLabel>
          <div className="nix-section-heading-row">
            <h2 className="nix-display">The child becomes part of the projected world.</h2>
            <p>
              Each chapter guides the child toward a gesture. NIX recognises the gesture and responds with animation and sound. The first and final moments are lighter, while the story gradually moves through darker scenes.
            </p>
          </div>
        </section>

        <div className="nix-story-grid">
          {[nix86, nix87, nix88, nix89, nix90, nix91].map((image, index) => (
            <img key={image} src={image} alt={`NIX storyboard sequence ${index + 1}`} />
          ))}
        </div>
        <p className="nix-caption">Storyboard and interaction sequence for the first chapter.</p>

        <Divider />

        <section className="nix-tech-section">
          <SectionLabel>05 — TECHNOLOGY</SectionLabel>
          <h2 className="nix-display">A physical interface built with Kinect + Processing.</h2>
          <div className="nix-tech-grid">
            <div className="nix-tech-card">
              <span>01</span><h3>Kinect v2</h3><p>Depth sensing and body tracking allowed the interaction to work in a dark room without requiring the child to hold a controller.</p>
            </div>
            <div className="nix-tech-card">
              <span>02</span><h3>Computer Vision</h3><p>Depth data was reduced to a usable range so the system could isolate the child and recognise the required forms.</p>
            </div>
            <div className="nix-tech-card">
              <span>03</span><h3>Processing</h3><p>I programmed blob-presence logic, assigned IDs to detected blobs and tracked their positions to trigger the next state of the experience.</p>
            </div>
          </div>
        </section>

        <div className="nix-processing-feature">
          <div className="nix-processing-copy">
            <p className="case-label">PROCESSING TESTS</p>
            <h3>Turning depth information into an interaction.</h3>
            <p>
              I created a depth-data matrix as a 3D point cloud, then adjusted minimum and maximum thresholds to isolate a specific set of pixels. Blob tracking made the gesture recognition more precise: if the child’s hand shape was not correct, the next animation would not trigger.
            </p>
          </div>
          <div className="nix-processing-images">
            <img src={nix76} alt="Processing depth threshold test" />
            <img src={nix77} alt="Processing blob tracking test" />
          </div>
        </div>

        <Divider />

        <section className="nix-two-col">
          <div>
            <SectionLabel>06 — TESTING & ITERATION</SectionLabel>
            <h2>Testing the body, the technology and the darkness itself.</h2>
          </div>
          <div className="nix-body-copy">
            <p>
              I tested hand-shadow difficulty with children, compared alternative tracking hardware, and experimented with projection backgrounds. A dark grey background gave the strongest result: it preserved the feeling of darkness while keeping the projected silhouettes legible and shadow-like.
            </p>
          </div>
        </section>

        <div className="nix-image-pair nix-test-pair">
          <figure><img src={nix82} alt="NIX shadow gesture user testing" /><figcaption>Gesture testing with children aged 4–6.</figcaption></figure>
          <figure><img src={nix96} alt="NIX projection background tests" /><figcaption>Projection and background-colour experiments.</figcaption></figure>
        </div>

        <Divider />

        <section>
          <SectionLabel>07 — PROTOTYPE</SectionLabel>
          <div className="nix-section-heading-row">
            <h2 className="nix-display">A first working chapter, tested in the environment it was designed for.</h2>
            <p>
              The final thesis prototype brought the research, story, sound, shadows and tracking together in a single interactive chapter. The experience was designed to take place inside a child’s room, where the same darkness that usually creates anxiety becomes the condition that makes the interaction possible.
            </p>
          </div>
        </section>

        <div className="nix-prototype-grid">
          <img src={nix98} alt="NIX prototype overview" />
          <img src={nix99} alt="NIX prototype user test" />
          <img src={nix100} alt="NIX prototype interaction" />
        </div>

        <section className="nix-ending">
          <p className="case-label">OUTCOME</p>
          <h2>Designing with fear, rather than designing around it.</h2>
          <p>
            NIX became an exploration of how research, interaction design and emerging technology can create an experience beyond the screen. It remains one of the projects that most shaped the way I think about digital design: the interface does not have to be a rectangle — it can be a room, a body, a shadow and a story.
          </p>
          <button onClick={() => navigate("/work")}>← Back to all work</button>
        </section>
      </article>
    </main>
  );
}


function GenericProject({ isMobile }: { isMobile: boolean }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug)!;
  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  const sentences = project.description.split(". ").filter(Boolean);
  const insight = sentences[0] ? sentences[0] + "." : "";
  const rest = sentences.slice(1).join(". ");
  const bodySentences = project.body.split(". ").filter(Boolean);
  // Only pull a distinct closing line when the body has more than one
  // sentence — otherwise it would just repeat the PROCESS paragraph verbatim.
  const outcome = bodySentences.length > 1 ? bodySentences[bodySentences.length - 1] : null;

  return (
    <div className="generic-project">
      <div className="generic-hero" style={{ aspectRatio: isMobile ? "3/4" : "16/10", background: project.bg }}>
        <img
          src={project.caseImg ?? project.img}
          alt={project.title}
          style={{ objectPosition: project.caseImg ? "center" : (project.imgPosition ?? "center") }}
        />
        <div className="generic-scrim" />
        <button className="generic-back" onClick={() => navigate(-1)}>← Work</button>
        <div className="generic-hero-copy">
          <p className="mono-label" style={{ color: "rgba(255,255,255,.72)" }}>
            {(project.meta ?? [project.industry.toUpperCase()]).join(" · ")}
            {project.impact ? ` · ${project.impact}` : ""}
          </p>
          <h1>{project.headline}</h1>
        </div>
      </div>



      <article className="generic-content page-container">
        <SectionLabel>01 — CONTEXT</SectionLabel>
        <blockquote>“{insight}”</blockquote>
        {rest && <p className="generic-copy">{rest}</p>}
        <Divider />
        <div className="generic-meta">
          <div><span>Client</span><strong>{project.client}</strong></div>
          <div><span>Discipline</span><strong>{project.industry}</strong></div>
          <div><span>Year</span><strong>{project.year}</strong></div>
          {project.impact && (
            <div><span>Impact</span><strong style={{ color: "#7257E8" }}>{project.impact}</strong></div>
          )}
        </div>
        <Divider />
        <SectionLabel>02 — PROCESS</SectionLabel>
        <p className="generic-copy">{project.body}</p>
        <Divider />
        <SectionLabel>03 — TOOLS</SectionLabel>
        <p className="generic-tools">{project.tools.map((tool) => tool.name).join(" · ")}</p>
        {outcome && (
          <>
            <Divider />
            <SectionLabel>04 — OUTCOME</SectionLabel>
            <p className="generic-insight">{outcome}</p>
          </>
        )}

        <div className="generic-next">
          <p>Next project</p>
          <button onClick={() => navigate(`/work/${next.slug}`)}>{next.title} ↗</button>
        </div>
      </article>
    </div>
  );
}
export default function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);

    check();

    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="project-not-found">
        <p>Project not found.</p>

        <button onClick={() => navigate("/work")}>
          ← Back to work
        </button>
      </div>
    );
  }

  // Custom case studies
  if (slug === "nix") {
    return <NixCaseStudy />;
  }

  if (slug === "bepn") {
    return <BepnProject project={project} />;
  }

  if (slug === "copec") {
    return <CopecProject />;
  }

  // Standard layout for the rest
  return <GenericProject isMobile={isMobile} />;
}