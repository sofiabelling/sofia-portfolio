import { useNavigate } from "react-router";
import "./CopecProject.css";

import hero from "../imports/copec/copec-hero.png";
import billboard from "../imports/copec/copec-billboard.jpg";
import logo from "../imports/copec/copec-logo.jpg";
import onboarding from "../imports/copec/copec-onboarding.png";
import demoVideo from "../imports/copec/copec-case-study-demo.mp4";

import researchProcess from "../imports/copec/copec-research-process.png";
import researchStation from "../imports/copec/copec-research-station.png";

import typeStyles from "../imports/copec/copec-type-styles.png";
import colorStyles from "../imports/copec/copec-color-accessibility.png";
import buttonStyles from "../imports/copec/copec-button-states.png";
import blockStyles from "../imports/copec/copec-block-components.png";

import productOverview from "../imports/copec/copec-product-overview.png";
import socialCampaign from "../imports/copec/copec-social-campaign.png";

export default function CopecProject() {
  const navigate = useNavigate();

  return (
    <main className="copec-case">
      {/* =========================================================
          HERO — same editorial language as NIX / BEPN
      ========================================================== */}
      <section className="copec-hero">
        <img
          className="copec-hero-bg"
          src={hero}
          alt="Muevo Copec application shown across multiple screens"
        />
        <div className="copec-hero-shade" />

        <button className="copec-back" onClick={() => navigate("/work")}>
          ← Work
        </button>

        <div className="copec-hero-copy">
          <p className="copec-kicker">PRODUCT DESIGN · UX/UI · RESEARCH · 2019–2020</p>
          <h1>Copec</h1>
          <p className="copec-hero-subtitle">
            Designing a digital experience for the physical world.
          </p>
        </div>
      </section>

      {/* =========================================================
          01 — OVERVIEW
      ========================================================== */}
      <section className="copec-section copec-overview">
        <div>
          <p className="copec-label">01 — OVERVIEW</p>
          <h2>From service station to digital ecosystem.</h2>
        </div>

        <div className="copec-overview-copy">
          <p className="copec-lead">
            I contributed to the early creation and launch of Copec’s consumer app,
            helping connect the service-station experience with payments, benefits
            and everyday services.
          </p>

          <div className="copec-stats">
            <div>
              <strong>5M+</strong>
              <span>APP DOWNLOADS</span>
            </div>
            <div>
              <strong>On-site</strong>
              <span>USER TESTING</span>
            </div>
            <div>
              <strong>Phygital</strong>
              <span>SERVICE EXPERIENCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          02 — DESIGNING IN CONTEXT
      ========================================================== */}
      <section className="copec-context">
        <div className="copec-section copec-section-heading">
          <div>
            <p className="copec-label">02 — DESIGNING IN CONTEXT</p>
            <h2>We didn't design the service station experience from behind a desk.</h2>
          </div>

          <p className="copec-lead">
            We repeatedly tested proposals with customers directly at Copec service
            stations. Observing people in context helped us identify friction,
            validate comprehension and refine the experience before implementation.
          </p>
        </div>

        <figure className="copec-field-photo">
          <img
            src={researchStation}
            alt="On-site research at a Copec service station"
          />
          <figcaption>On-site testing at a Copec service station.</figcaption>
        </figure>

        <div className="copec-section copec-process">
          <span>Observe</span>
          <i>→</i>
          <span>Prototype</span>
          <i>→</i>
          <span>Test on-site</span>
          <i>→</i>
          <span>Refine</span>
        </div>

        <figure className="copec-research-process">
          <img src={researchProcess} alt="Copec research and collaborative design process" />
          <figcaption>Research, collaboration and proposal validation.</figcaption>
        </figure>
      </section>

      {/* =========================================================
          03 — FROM RESEARCH TO PRODUCT
      ========================================================== */}
      <section className="copec-product">
        <div className="copec-section copec-section-heading">
          <div>
            <p className="copec-label">03 — FROM RESEARCH TO PRODUCT</p>
            <h2>Turning a complex service ecosystem into one simple interface.</h2>
          </div>

          <p className="copec-lead">
            Muevo introduced new behaviours around paying, scanning, promotions and
            station services. The interface needed to make those unfamiliar actions
            feel clear, quick and recognizably Copec.
          </p>
        </div>

        <figure className="copec-onboarding">
          <img src={onboarding} alt="Muevo onboarding screens" />
        </figure>

        <div className="copec-section copec-product-grid">
          <figure className="copec-product-overview">
            <img src={productOverview} alt="Overview of Muevo product screens" />
          </figure>

          <figure className="copec-prototype">
            <video src={demoVideo} autoPlay muted loop playsInline />
            <figcaption>Splash screen</figcaption>
          </figure>
        </div>
      </section>

      {/* =========================================================
          BRAND BREAK
      ========================================================== */}
      <section className="copec-brand-break">
        <img src={logo} alt="Muevo Copec" />
      </section>

      {/* =========================================================
          04 — DESIGN SYSTEM
      ========================================================== */}
      <section className="copec-system">
        <div className="copec-section copec-section-heading">
          <div>
            <p className="copec-label">04 — BUILDING THE LANGUAGE</p>
            <h2>A system built to scale.</h2>
          </div>

          <div className="copec-system-copy">
            <p className="copec-lead">
              Muevo Design System is based on Atomic Design, consolidating,
              standardizing and documenting interface decisions so design and
              development could work from the same language.
            </p>
            <p className="copec-body">
              Typography, color, buttons and reusable blocks were designed as one
              connected system — from visual foundations to repeatable interface
              patterns.
            </p>
          </div>
        </div>

        <div className="copec-section copec-system-library">
          <figure className="copec-system-item copec-system-item-wide">
            <div className="copec-system-crop copec-system-crop-type">
              <img src={typeStyles} alt="Muevo typography styles" />
            </div>
            <figcaption>
              <span>01</span>
              <strong>Typography</strong>
            </figcaption>
          </figure>

          <figure className="copec-system-item">
            <div className="copec-system-crop copec-system-crop-color">
              <img src={colorStyles} alt="Muevo color and accessibility styles" />
            </div>
            <figcaption>
              <span>02</span>
              <strong>Color & accessibility</strong>
            </figcaption>
          </figure>

          <figure className="copec-system-item">
            <div className="copec-system-crop copec-system-crop-buttons">
              <img src={buttonStyles} alt="Muevo button components and states" />
            </div>
            <figcaption>
              <span>03</span>
              <strong>Buttons & states</strong>
            </figcaption>
          </figure>

          <figure className="copec-system-item copec-system-item-wide">
            <div className="copec-system-crop copec-system-crop-blocks">
              <img src={blockStyles} alt="Muevo reusable block components" />
            </div>
            <figcaption>
              <span>04</span>
              <strong>Reusable blocks</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* =========================================================
          05 — FROM INTERFACE TO BRAND
      ========================================================== */}
      <section className="copec-brand-world">
        <div className="copec-section copec-section-heading">
          <div>
            <p className="copec-label">05 — FROM INTERFACE TO BRAND</p>
            <h2>A product that became part of the Copec brand.</h2>
          </div>

          <p className="copec-lead">
            The Muevo visual language moved beyond the interface into digital
            communication and physical environments, creating continuity across
            the customer journey.
          </p>
        </div>

        <figure className="copec-social">
          <img src={socialCampaign} alt="Muevo social campaign applications" />
        </figure>

        <figure className="copec-billboard">
          <img src={billboard} alt="Muevo Copec billboard in the city" />
        </figure>
      </section>

      {/* =========================================================
          OUTCOME
      ========================================================== */}
      <section className="copec-outcome">
        <div className="copec-section">
          <p className="copec-label">OUTCOME</p>
          <h2>One experience,<br />across the entire journey.</h2>

          <p className="copec-lead">
            Muevo brought station discovery, payments, promotions, scanning and
            customer services into a single experience designed around how people
            actually use Copec.
          </p>

          <div className="copec-outcome-flow">
            Research <i>→</i> Product Design <i>→</i> Testing <i>→</i>
            Design System <i>→</i> Launch
          </div>
        </div>

        <figure className="copec-final">
          <img src={hero} alt="Muevo Copec final product experience" />
        </figure>

        <button className="copec-bottom-back" onClick={() => navigate("/work")}>
          ← Back to all work
        </button>
      </section>
    </main>
  );
}
