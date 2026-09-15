import { useParams, useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import nixHero from "../imports/nix/nix-hero.png";
import nix57 from "../imports/nix/page-57.jpg";
import nixRefPuppetry from "../imports/nix/references/page_044_image_01_3094x2391.png";
import nixRefMuseum from "../imports/nix/references/page_060_image_01_1693x1664.jpeg";
import nixRefBirdcage from "../imports/nix/references/page_061_image_01_780x900.png";
import nixRefWings from "../imports/nix/references/page_062_image_01_780x802.png";
import nixRefBook from "../imports/nix/references/page_064_image_02_434x461.jpeg";
import nixProcBlob from "../imports/nix/Processing tests/page_077_image_01_939x709.jpeg";
import nixProcDepth from "../imports/nix/Processing tests/page_077_image_02_340x299.jpeg";
import nixStoryboard from "../imports/nix/storyboard.png";
import nixKids98 from "../imports/nix/kids testing/page_098_image_01_2086x2400.jpeg";
import nixKids99a from "../imports/nix/kids testing/page_099_image_01_1763x2326.jpeg";
import nixKids99b from "../imports/nix/kids testing/page_099_image_02_1508x2309.jpeg";
import nixKids100a from "../imports/nix/kids testing/page_100_image_01_1594x2400.jpeg";
import nixKids100b from "../imports/nix/kids testing/page_100_image_02_1519x2106.jpeg";
import nixLeapDevice from "../imports/nix/leap motion and kinect test/page_092_image_02_707x393.jpeg";
import nixLeapTest1 from "../imports/nix/leap motion and kinect test/page_093_image_01_1323x1361.jpeg";
import nixLeapTest2 from "../imports/nix/leap motion and kinect test/page_093_image_02_1335x1346.jpeg";


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
  const quoteRef = useRef<HTMLElement | null>(null);

  const handleQuoteMove = (event: React.PointerEvent<HTMLElement>) => {
    // Touch "moves" are usually scroll gestures, not deliberate hovering --
    // following them would make the spotlight jump around while someone
    // just scrolls past. Keep the interactive follow to mouse/pen and let
    // touch devices show the ambient drift on its own.
    if (event.pointerType === "touch") return;
    const el = quoteRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
    el.classList.add("is-lit");
  };

  const handleQuoteLeave = () => {
    quoteRef.current?.classList.remove("is-lit");
  };

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

        <section
          className="nix-quote-block"
          ref={quoteRef as React.RefObject<HTMLElement>}
          onPointerMove={handleQuoteMove}
          onPointerLeave={handleQuoteLeave}
        >
          <div className="nix-quote-spotlight" aria-hidden="true" />
          <p className="nix-quote">DARKNESS = FEAR</p>
          <span>becomes</span>
          <p className="nix-quote">DARKNESS = PLAY = CURIOSITY</p>
        </section>

        <Divider />

        <section className="nix-two-col">
          <div>
            <SectionLabel>03 — REFERENCES</SectionLabel>
            <h2>Shadow as play already had a history.</h2>
          </div>
          <div className="nix-body-copy">
            <p>
              Before designing NIX, I looked at how shadow and darkness have been used as material for play and storytelling elsewhere — from centuries-old shadow puppetry to interactive art installations and children’s books that turn a flashlight into an instrument of discovery rather than a way to check under the bed.
            </p>
          </div>
        </section>

        <div className="nix-reference-grid">
          <figure>
            <div className="nix-reference-frame"><img src={nixRefPuppetry} alt="Traditional shadow puppet theatre" /></div>
            <figcaption>Traditional shadow puppet theatre — storytelling built entirely from light and silhouette.</figcaption>
          </figure>
          <figure>
            <div className="nix-reference-frame"><img src={nixRefMuseum} alt="Children playing with an interactive shadow installation" /></div>
            <figcaption>Interactive shadow installations that already turn projected silhouettes into play.</figcaption>
          </figure>
          <figure>
            <div className="nix-reference-frame"><img src={nixRefBirdcage} alt="Shadow interaction releasing birds from a cage" /></div>
            <figcaption>Shadow-augmented objects — a cage that releases birds, a plant that grows.</figcaption>
          </figure>
          <figure>
            <div className="nix-reference-frame"><img src={nixRefWings} alt="Interactive shadow installation giving a person wings" /></div>
            <figcaption>Gesture-driven shadow characters — wings and birds triggered by the body.</figcaption>
          </figure>
          <figure>
            <div className="nix-reference-frame"><img src={nixRefBook} alt="Cover of Linterna Mágica by Lizi Boyd" /></div>
            <figcaption><em>Linterna Mágica</em> (Lizi Boyd) — a children’s book that treats darkness as a place to explore, not fear.</figcaption>
          </figure>
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

        <figure className="nix-storyboard-figure">
          <img src={nixStoryboard} alt="NIX full storyboard sequence" />
        </figure>
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
            <img src={nixProcDepth} alt="Processing depth data isolating a hand shape" />
            <img src={nixProcBlob} alt="Processing blob tracking test" />
          </div>
        </div>

        <div className="nix-hardware-feature">
          <div className="nix-processing-copy">
            <p className="case-label">HARDWARE TESTS</p>
            <h3>Kinect v2, chosen after testing the alternatives.</h3>
            <p>
              Before settling on Kinect v2, I tested a Leap Motion controller and plain webcam colour-tracking to see which best supported a child’s full-body shadow gesture in a dark room. Leap Motion read hand and finger detail well but expected the user close to the sensor on a desk — not how a child would stand to cast a shadow. Kinect v2’s depth data covered the whole body at a distance, which matched how NIX was actually meant to be used.
            </p>
          </div>
          <div className="nix-hardware-images nix-hardware-images-three">
            <img src={nixLeapDevice} alt="Leap Motion controller being tested with a child" />
            <img src={nixLeapTest1} alt="Child testing hand-tracking on a laptop" />
            <img src={nixLeapTest2} alt="Child testing a gesture-controlled scene" />
          </div>
        </div>

        <Divider />

        <section>
          <SectionLabel>06 — TESTING & PROTOTYPE</SectionLabel>
          <div className="nix-section-heading-row">
            <h2 className="nix-display">A first working chapter, tested in the environment it was designed for.</h2>
            <p>
              I tested hand-shadow difficulty with children, compared alternative tracking hardware, and experimented with projection backgrounds. A dark grey background gave the strongest result: it preserved the feeling of darkness while keeping the projected silhouettes legible and shadow-like.
            </p>
            <p>
              The final thesis prototype brought the research, story, sound, shadows and tracking together in a single interactive chapter. The experience was designed to take place inside a child’s room, where the same darkness that usually creates anxiety becomes the condition that makes the interaction possible.
            </p>
          </div>
        </section>

        <div className="nix-kids-grid">
          <img src={nixKids100b} alt="The NIX title screen projected in a dark room" />
          <img src={nixKids98} alt="Child watching the NIX window scene" />
          <img src={nixKids99a} alt="Child making a bird shadow gesture" />
          <img src={nixKids99b} alt="Bird shadow responding to the child's gesture" />
          <img src={nixKids100a} alt="Full storyworld projected during testing" />
        </div>
        <p className="nix-caption">Testing the final chapter with children, in the dark room it was designed for.</p>

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