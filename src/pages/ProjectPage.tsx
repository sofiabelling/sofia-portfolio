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

import copecSplashDemo from "../imports/copec-splash-demo.mp4";
import copecMap from "../imports/copec/copec_map.png";
import copecReceipt from "../imports/copec/copec_receipt.png";
import copecHero from "../imports/copec/copec-hero.png";
import copecBillboard from "../imports/copec/copec-billboard.jpg";
import copecLogo from "../imports/copec/copec-logo.jpg";
import copecOnboarding from "../imports/copec/copec-onboarding.png";
import copecDemo from "../imports/copec/copec-case-study-demo.mp4";

import BepnProject from "../components/BepnProject";


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


function CopecCaseStudy() {
  const navigate = useNavigate();

  return (
    <main className="copec-case">
      <style>{`
        .copec-case {
          --copec-blue: #213E9A;
          --copec-electric: #123BFF;
          --copec-green: #00EA78;
          --copec-ink: #173273;
          --copec-muted: #6F7897;
          --copec-paper: #FBFBF8;
          background: var(--copec-paper);
          color: var(--copec-ink);
          overflow: hidden;
        }
        .copec-case * { box-sizing: border-box; }
        .copec-case h1, .copec-case h2, .copec-case h3 {
          font-family: 'Bricolage Grotesque', sans-serif;
          letter-spacing: -.05em;
        }
        .copec-label {
          margin: 0 0 22px;
          font: 600 10px/1.2 'Inter', sans-serif;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: #7C86AA;
        }
        .copec-shell {
          width: min(1180px, calc(100% - 120px));
          margin: 0 auto;
        }
        .copec-display {
          margin: 0;
          font-size: clamp(44px, 5.5vw, 82px);
          line-height: .96;
          font-weight: 700;
        }
        .copec-copy-lg {
          margin: 0;
          font-size: clamp(18px, 1.6vw, 24px);
          line-height: 1.48;
          letter-spacing: -.02em;
        }
        .copec-hero {
          position: relative;
          min-height: 100vh;
          padding: 146px 60px 0;
          background: #F1F4F5;
        }
        .copec-back {
          position: absolute;
          top: 94px;
          left: 60px;
          border: 0;
          padding: 0;
          background: transparent;
          color: #69769D;
          cursor: pointer;
          font: 600 10px 'Inter', sans-serif;
          letter-spacing: .12em;
          text-transform: uppercase;
        }
        .copec-hero-copy {
          width: min(1180px, 100%);
          margin: 0 auto 46px;
        }
        .copec-hero-kicker {
          margin: 0 0 17px;
          color: #7180AA;
          font: 600 10px 'Inter', sans-serif;
          letter-spacing: .16em;
          text-transform: uppercase;
        }
        .copec-hero h1 {
          margin: 0;
          color: var(--copec-blue);
          font-size: clamp(88px, 14vw, 192px);
          line-height: .74;
          font-weight: 800;
        }
        .copec-hero-sub {
          width: min(650px, 100%);
          margin: 38px 0 0;
          color: #566481;
          font-size: clamp(20px, 2vw, 29px);
          line-height: 1.3;
          letter-spacing: -.025em;
        }
        .copec-hero-media {
          width: min(1480px, calc(100vw - 34px));
          margin: 0 auto;
          overflow: hidden;
        }
        .copec-hero-media img {
          display: block;
          width: 100%;
          transform: translateY(6%);
        }
        .copec-overview {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 110px;
          padding: 140px 0;
        }
        .copec-overview-copy { padding-top: 34px; }
        .copec-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 70px;
          padding-top: 26px;
          border-top: 1px solid rgba(33,62,154,.16);
        }
        .copec-stat strong {
          display: block;
          margin-bottom: 8px;
          color: var(--copec-blue);
          font: 700 clamp(24px, 2.4vw, 38px) 'Bricolage Grotesque', sans-serif;
          letter-spacing: -.04em;
        }
        .copec-stat span {
          color: #8A91A9;
          font: 600 9px 'Inter', sans-serif;
          letter-spacing: .12em;
          text-transform: uppercase;
        }
        .copec-billboard {
          width: 100%;
          height: min(82vh, 900px);
          background: #111;
        }
        .copec-billboard img {
          width: 100%; height: 100%; display: block; object-fit: cover;
        }
        .copec-context-copy {
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 100px;
          padding: 130px 0;
        }
        .copec-context-copy .copec-copy-lg { padding-top: 38px; }
        .copec-testing {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: clamp(60px, 8vw, 130px);
          align-items: center;
          padding: 140px max(60px, calc((100vw - 1180px) / 2));
          background: var(--copec-blue);
          color: white;
        }
        .copec-testing .copec-label { color: rgba(255,255,255,.52); }
        .copec-testing-copy p:not(.copec-label) {
          max-width: 560px;
          color: rgba(255,255,255,.78);
          font-size: 17px;
          line-height: 1.65;
        }
        .copec-testing-copy .copec-display { margin-bottom: 34px; }
        .copec-process {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 9px;
          margin-top: 40px;
        }
        .copec-process span {
          padding: 10px 13px;
          border: 1px solid rgba(255,255,255,.28);
          border-radius: 999px;
          font: 600 10px 'Inter', sans-serif;
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .copec-process i { opacity: .45; font-style: normal; }
        .copec-video { margin: 0; text-align: center; }
        .copec-video video {
          display: block;
          width: min(390px, 100%);
          max-height: 730px;
          margin: 0 auto;
          border-radius: 34px;
          box-shadow: 0 40px 90px rgba(0,0,0,.28);
        }
        .copec-video figcaption {
          margin-top: 16px;
          color: rgba(255,255,255,.54);
          font: 400 10px 'Inter', sans-serif;
          letter-spacing: .04em;
        }
        .copec-product {
          padding: 145px 0 65px;
          background: #fff;
        }
        .copec-product-heading {
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          column-gap: 90px;
          margin-bottom: 74px;
        }
        .copec-product-heading .copec-label { grid-column: 1 / -1; }
        .copec-product-heading > p:last-child {
          margin: 18px 0 0;
          color: var(--copec-muted);
          font-size: 17px;
          line-height: 1.65;
        }
        .copec-onboarding {
          width: min(1500px, 96%);
          margin: 0 auto;
        }
        .copec-onboarding img { display: block; width: 100%; height: auto; }
        .copec-brand-break {
          height: min(70vh, 740px);
          overflow: hidden;
          background: var(--copec-blue);
        }
        .copec-brand-break img { width: 100%; height: 100%; object-fit: cover; }
        .copec-system {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 90px;
          padding: 140px 0;
        }
        .copec-system-copy p:not(.copec-copy-lg) {
          margin-top: 28px;
          color: var(--copec-muted);
          font-size: 16px;
          line-height: 1.65;
        }
        .copec-system-flow {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 18px;
          margin-top: 24px;
          padding: 30px 0;
          border-top: 1px solid rgba(33,62,154,.15);
          border-bottom: 1px solid rgba(33,62,154,.15);
        }
        .copec-system-flow span {
          font: 700 clamp(17px, 1.8vw, 25px) 'Bricolage Grotesque', sans-serif;
          letter-spacing: -.03em;
        }
        .copec-system-flow i { color: var(--copec-green); font-style: normal; font-size: 22px; }
        .copec-ui-showcase {
          padding: 120px max(28px, calc((100vw - 1400px) / 2));
          background: #EFF3F5;
        }
        .copec-ui-heading { margin-bottom: 60px; }
        .copec-ui-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 18px;
        }
        .copec-ui-card {
          margin: 0;
          padding: 22px;
          min-height: 560px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #fff;
          overflow: hidden;
        }
        .copec-ui-card img, .copec-ui-card video {
          display: block;
          width: 100%;
          max-height: 520px;
          object-fit: contain;
        }
        .copec-ui-card figcaption {
          margin-top: 18px;
          color: #8A91A9;
          font: 600 9px 'Inter', sans-serif;
          letter-spacing: .11em;
          text-transform: uppercase;
        }
        .copec-outcome {
          padding: 145px 0 78px;
          background: #fff;
        }
        .copec-outcome-copy { margin-bottom: 82px; }
        .copec-outcome-copy .copec-display { max-width: 920px; }
        .copec-outcome-copy > p:not(.copec-label):not(.copec-outcome-meta) {
          max-width: 670px;
          margin: 36px 0 0 auto;
          color: var(--copec-muted);
          font-size: 19px;
          line-height: 1.6;
        }
        .copec-outcome-meta {
          margin: 68px 0 0;
          padding-top: 22px;
          border-top: 1px solid rgba(33,62,154,.15);
          color: var(--copec-blue);
          font: 600 10px 'Inter', sans-serif;
          letter-spacing: .11em;
          text-transform: uppercase;
        }
        .copec-final-image {
          width: 100%;
          max-height: 900px;
          overflow: hidden;
          background: #EDF1F3;
        }
        .copec-final-image img { display: block; width: 100%; transform: scale(1.07); }
        .copec-bottom-back {
          display: block;
          margin: 68px auto 0;
          border: 0;
          background: transparent;
          color: var(--copec-blue);
          cursor: pointer;
          font: 600 10px 'Inter', sans-serif;
          letter-spacing: .12em;
          text-transform: uppercase;
        }
        @media (max-width: 767px) {
          .copec-shell { width: calc(100% - 40px); }
          .copec-hero { min-height: auto; padding: 118px 20px 0; }
          .copec-back { top: 82px; left: 20px; }
          .copec-hero-copy { margin-bottom: 34px; }
          .copec-hero h1 { font-size: clamp(76px, 26vw, 120px); line-height: .78; }
          .copec-hero-sub { margin-top: 28px; font-size: 19px; }
          .copec-hero-media { width: calc(100vw - 14px); }
          .copec-hero-media img { min-height: 390px; object-fit: cover; transform: none; }
          .copec-overview, .copec-context-copy, .copec-system {
            grid-template-columns: 1fr; gap: 40px; padding: 88px 0;
          }
          .copec-overview-copy, .copec-context-copy .copec-copy-lg { padding-top: 0; }
          .copec-stats { grid-template-columns: 1fr; gap: 22px; margin-top: 44px; }
          .copec-billboard { height: 60vh; }
          .copec-testing { grid-template-columns: 1fr; padding: 88px 20px; gap: 62px; }
          .copec-video video { width: min(310px, 82vw); border-radius: 27px; }
          .copec-process i { display: none; }
          .copec-product { padding: 88px 0 28px; }
          .copec-product-heading { grid-template-columns: 1fr; gap: 22px; margin-bottom: 48px; }
          .copec-product-heading .copec-label { grid-column: auto; }
          .copec-onboarding { width: 148%; margin-left: -24%; }
          .copec-brand-break { height: 44vh; }
          .copec-system-flow { grid-template-columns: 1fr; gap: 8px; }
          .copec-system-flow i { transform: rotate(90deg); width: 20px; }
          .copec-ui-showcase { padding: 88px 20px; }
          .copec-ui-grid { grid-template-columns: 1fr; }
          .copec-ui-card { min-height: 430px; }
          .copec-outcome { padding: 88px 0 70px; }
          .copec-outcome-copy > p:not(.copec-label):not(.copec-outcome-meta) { margin-left: 0; }
          .copec-final-image { height: 520px; }
          .copec-final-image img { width: 155%; height: 100%; max-width: none; margin-left: -28%; object-fit: cover; transform: none; }
        }
      `}</style>

      <section className="copec-hero">
        <button className="copec-back" onClick={() => navigate("/work")}>← Work</button>
        <div className="copec-hero-copy">
          <p className="copec-hero-kicker">COPEC · PRODUCT DESIGN · 2019–2020</p>
          <h1>Copec</h1>
          <p className="copec-hero-sub">
            Designing a phygital service experience connecting Copec’s stations,
            payments, benefits and everyday services in one app.
          </p>
        </div>
        <div className="copec-hero-media">
          <img src={copecHero} alt="Copec Muevo mobile application" />
        </div>
      </section>

      <section className="copec-shell copec-overview">
        <div>
          <p className="copec-label">01 — OVERVIEW</p>
          <h2 className="copec-display">From service station to digital ecosystem.</h2>
        </div>
        <div className="copec-overview-copy">
          <p className="copec-copy-lg">
            I contributed to the early creation and launch of Copec’s consumer app,
            helping shape the product from its first stages into a live service experience.
          </p>
          <div className="copec-stats">
            <div className="copec-stat"><strong>5M+</strong><span>App downloads</span></div>
            <div className="copec-stat"><strong>On-site</strong><span>User testing</span></div>
            <div className="copec-stat"><strong>Phygital</strong><span>Service experience</span></div>
          </div>
        </div>
      </section>

      <section className="copec-billboard">
        <img src={copecBillboard} alt="Muevo Copec campaign in a real-world setting" />
      </section>

      <section className="copec-shell copec-context-copy">
        <div>
          <p className="copec-label">02 — IN CONTEXT</p>
          <h2 className="copec-display">Designed for the real world.</h2>
        </div>
        <p className="copec-copy-lg">
          Muevo wasn’t designed in isolation from the service station. Understanding how
          people behaved while fueling, paying and moving through the station was fundamental
          to the experience.
        </p>
      </section>

      <section className="copec-testing">
        <div className="copec-testing-copy">
          <p className="copec-label">03 — USER RESEARCH</p>
          <h2 className="copec-display">Testing where the experience happens.</h2>
          <p>
            User-centered research was a fundamental part of the design process. We repeatedly
            tested different proposals with customers directly at Copec service stations,
            observing how they interacted with the product in its real context of use.
          </p>
          <p>
            These sessions helped us identify friction, validate comprehension and refine flows
            before implementation — reducing confusion and unexpected exits from the app.
          </p>
          <div className="copec-process">
            <span>Observe</span><i>→</i><span>Prototype</span><i>→</i>
            <span>Test on-site</span><i>→</i><span>Refine</span>
          </div>
        </div>
        <figure className="copec-video">
          <video src={copecDemo} autoPlay muted loop playsInline />
          <figcaption>Prototype validation during the design process.</figcaption>
        </figure>
      </section>

      <section className="copec-product">
        <div className="copec-shell copec-product-heading">
          <p className="copec-label">04 — PRODUCT</p>
          <h2 className="copec-display">Creating a new interaction language.</h2>
          <p>
            Every new app asks users to learn a set of behaviours. For Muevo, we created a visual
            language that made new interactions feel simple, recognizable and distinctly Copec.
          </p>
        </div>
        <div className="copec-onboarding">
          <img src={copecOnboarding} alt="Muevo onboarding screens and illustration system" />
        </div>
      </section>

      <section className="copec-brand-break">
        <img src={copecLogo} alt="Muevo Copec" />
      </section>

      <section className="copec-shell copec-system">
        <div>
          <p className="copec-label">05 — DESIGN SYSTEM</p>
          <h2 className="copec-display">A system built to scale.</h2>
        </div>
        <div className="copec-system-copy">
          <p className="copec-copy-lg">
            Muevo Design System is based on Atomic Design, bringing components, patterns and
            documentation into a shared system for both design and development.
          </p>
          <p>
            The goal was not simply to create a UI library, but to establish a consistent visual
            and interaction language shaped around the context in which customers actually use Copec.
          </p>
        </div>
        <div className="copec-system-flow">
          <span>Foundations</span><i>→</i><span>Components</span><i>→</i>
          <span>Patterns</span><i>→</i><span>Experiences</span>
        </div>
      </section>

      <section className="copec-ui-showcase">
        <div className="copec-ui-heading">
          <p className="copec-label">06 — EXPERIENCE DETAILS</p>
          <h2 className="copec-display">A consistent product across the journey.</h2>
        </div>
        <div className="copec-ui-grid">
          <figure className="copec-ui-card">
            <video src={copecSplashDemo} autoPlay loop muted playsInline />
            <figcaption>Splash & motion</figcaption>
          </figure>
          <figure className="copec-ui-card">
            <img src={copecMap} alt="Copec station locator" />
            <figcaption>Station locator</figcaption>
          </figure>
          <figure className="copec-ui-card">
            <img src={copecReceipt} alt="Copec purchase receipt" />
            <figcaption>Receipt & feedback</figcaption>
          </figure>
        </div>
      </section>

      <section className="copec-outcome">
        <div className="copec-shell copec-outcome-copy">
          <p className="copec-label">OUTCOME</p>
          <h2 className="copec-display">One experience, across the entire journey.</h2>
          <p>
            Muevo brought station discovery, payments, promotions, scanning and customer services
            into a single experience designed around how people actually use Copec.
          </p>
          <p className="copec-outcome-meta">
            Research → Product Design → Testing → Design System → Launch
          </p>
        </div>
        <div className="copec-final-image">
          <img src={copecHero} alt="Final Muevo Copec product experience" />
        </div>
        <button className="copec-bottom-back" onClick={() => navigate("/work")}>← Back to all work</button>
      </section>
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
    return <CopecCaseStudy />;
  }

  // Standard layout for the rest
  return <GenericProject isMobile={isMobile} />;
}