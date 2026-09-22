import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import nixHero from "../imports/nix/nix-hero.webp";
import ToolBadges from "../components/ToolBadges";
import kinectIcon from "../imports/nix/tool-icons/kinect.png";
import processingIcon from "../imports/nix/tool-icons/processing.png";
import projectorIcon from "../imports/nix/tool-icons/projector.png";
import nixRefMuseum from "../imports/nix/references/page_060_image_01_1693x1664.jpeg";
import nixRefBirdcage from "../imports/nix/references/page_061_image_01_780x900.png";
import nixRefWings from "../imports/nix/references/page_062_image_01_780x802.png";
import nixRefBook from "../imports/nix/references/page_064_image_02_434x461.jpeg";
import nixProcBlob from "../imports/nix/Processing tests/page_077_image_01_939x709.jpeg";
import nixProcDepth from "../imports/nix/Processing tests/page_077_image_02_340x299.jpeg";
import nixStoryboard from "../imports/nix/storyboard.webp";
import nixKidsBird1 from "../imports/nix/kids testing/proyector2.jpeg";
import nixKidsBird2 from "../imports/nix/kids testing/proyector4.jpeg";
import nixHandsTest from "../imports/nix/manosprueba1.MOV";
import nixResearch1 from "../imports/nix/research-extracted/observation-01.png";
import nixResearch2 from "../imports/nix/research-extracted/observation-02.png";
import nixResearch3 from "../imports/nix/research-extracted/observation-03.png";
import nixResearch4 from "../imports/nix/research-extracted/observation-04.png";
import nixResearch5 from "../imports/nix/research-extracted/observation-05.png";
import nixLeapDevice from "../imports/nix/leap motion and kinect test/page_092_image_02_707x393.jpeg";
import nixLeapTest1 from "../imports/nix/leap motion and kinect test/page_093_image_01_1323x1361.jpeg";


import BepnProject from "../components/BepnProject";
import CopecProject from "../components/CopecProject";

const NIX_TOOLS = [
  { name: "Kinect", bg: "#000000", fg: "#a259ff", image: kinectIcon },
  { name: "Processing", bg: "#1f1f26", fg: "#3e82f7", image: processingIcon },
  { name: "After Effects", bg: "#00005b", fg: "#9999ff", glyph: "Ae" },
  { name: "Photoshop", bg: "#001e36", fg: "#31a8ff", glyph: "Ps" },
  { name: "Projector", bg: "#ee3f62", fg: "#ffffff", image: projectorIcon },
];

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
          <div><span>CONTEXT</span><strong>Universidad del Desarrollo · Santiago, Chile</strong></div>
          <div><span>AUDIENCE</span><strong>Children aged 4–7</strong></div>
          <div className="nix-meta-tools">
            <span>TOOLS</span>
            <ToolBadges tools={NIX_TOOLS} />
          </div>
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

        <section className="nix-quote-block">
          <div className="nix-quote-glow" aria-hidden="true" />
          <p className="nix-quote-kicker">THE SAME SHADOW, A DIFFERENT STORY</p>
          <p className="nix-quote nix-quote-fear"><span>DARKNESS</span><b>=</b><span>FEAR</span></p>
          <span className="nix-quote-divider" aria-hidden="true" />
          <p className="nix-quote nix-quote-play"><span>DARKNESS</span><b>=</b><span>PLAY</span><b>+</b><span>CURIOSITY</span></p>
        </section>

        <Divider />

        <section className="nix-research-section">
          <SectionLabel>03 — USER & PSYCHOLOGY RESEARCH</SectionLabel>

          <div className="nix-research-intro">
            <div>
              <p className="nix-research-eyebrow">THE TARGET WAS A RESEARCH DECISION</p>
              <h2 className="nix-display">Understanding fear before designing for it.</h2>
            </div>
            <p className="nix-research-lede">I began with psychology rather than technology: when does fear of darkness appear, how do children at that age interpret what they see, and what helps them approach a feared stimulus without reinforcing avoidance?</p>
          </div>

          <div className="nix-age-chapter">
            <div className="nix-age-copy">
              <p className="case-label">WHY 4–7?</p>
              <div className="nix-age-number">4–7</div>
              <h3>A small age range with a very particular way of seeing the world.</h3>
              <p>Fear of darkness is especially present during the preschool years — Piaget's intuitive stage, where perception, fantasy and symbolic thinking shape how children read ambiguous things. A shadow is never just a shadow: imagination can turn it into something frightening, or just as easily into a bird, a snail or a character in a story.</p>
            </div>
            <div className="nix-age-visual" aria-label="Target age 4 to 7 years">
              <div className="nix-age-track"><span>2</span><span>3</span><strong>4</strong><strong>5</strong><strong>6</strong><strong>7</strong><span>8</span></div>
              <div className="nix-age-window"><span>fear of darkness</span><b>IMAGINATION · SYMBOLIC PLAY · PERCEPTION</b></div>
              <p>Research focus → preschool / intuitive stage</p>
            </div>
          </div>

          <div className="nix-field-research">
            <div className="nix-field-heading">
              <div><p className="case-label">RESEARCHING THROUGH THEIR WORLD</p><h3>Not only reading about children — observing how they played.</h3></div>
              <p>The methodology combined literature review, interviews with psychology specialists, participant observation and hands-on experimentation. I watched how children responded to darkness and shadows, which forms they could create comfortably, and how quickly an instruction became a game.</p>
            </div>
            <div className="nix-research-gallery">
              <figure className="wide"><img src={nixResearch3} alt="Children participating in NIX research"/><figcaption>Participant observation with the target age group</figcaption></figure>
              <figure><img src={nixResearch1} alt="Child during NIX research"/><figcaption>Observing behaviour and play</figcaption></figure>
              <figure><img src={nixResearch2} alt="Child during shadow research"/><figcaption>Exploring interaction naturally</figcaption></figure>
              <figure><img src={nixResearch4} alt="Shadow experimentation with children"/><figcaption>Shadow + gesture experiments</figcaption></figure>
              <figure><img src={nixResearch5} alt="NIX research activity"/><figcaption>Testing through active participation</figcaption></figure>
            </div>
            <div className="nix-method-chips"><span>Psychology literature</span><span>Expert interviews</span><span>Participant observation</span><span>Play testing</span><span>Shadow experiments</span></div>
          </div>

          <blockquote className="nix-research-thesis">
            <span>THE IDEA THAT UNLOCKED NIX</span>
            <p>What if the imagination creating the fear could also be used to transform it?</p>
          </blockquote>
        </section>

        <Divider />

        <section className="nix-two-col">
          <div>
            <SectionLabel>04 — REFERENCES</SectionLabel>
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
          <SectionLabel>05 — INTERACTION</SectionLabel>
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
          <SectionLabel>06 — TECHNOLOGY</SectionLabel>
          <div className="nix-section-heading-row">
            <h2 className="nix-display">A physical interface built with Kinect + Processing.</h2>
            <p>
              Kinect v2 handled depth sensing and body tracking, while Processing turned that data into gesture recognition. Getting there took a round of hardware testing and iteration on the tracking pipeline.
            </p>
          </div>

          <div className="nix-hardware-images">
            <img src={nixLeapDevice} alt="Leap Motion controller being tested with a child" />
            <img src={nixLeapTest1} alt="Child testing hand-tracking on a laptop" />
          </div>
          <p className="nix-caption">Hardware tests: Leap Motion vs. Kinect v2 for tracking a full body at a distance.</p>

          <div className="nix-processing-images">
            <img src={nixProcDepth} alt="Processing depth data isolating a hand shape" />
            <img src={nixProcBlob} alt="Processing blob tracking test" />
          </div>
          <p className="nix-caption">Processing tests: isolating hand shapes and tracking blob positions in the depth data.</p>
        </section>

        <Divider />

        <section>
          <SectionLabel>07 — TESTING & PROTOTYPE</SectionLabel>
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

        <figure className="nix-testing-video">
          <video src={nixHandsTest} autoPlay muted loop playsInline />
          <figcaption>Hand-gesture testing during prototype development.</figcaption>
        </figure>

        <div className="nix-kids-grid">
          <img src={nixKidsBird1} alt="Child making a bird shadow gesture" />
          <img src={nixKidsBird2} alt="Bird shadow responding to the child's gesture" />
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