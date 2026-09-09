import { useNavigate } from "react-router";
import "./CopecProject.css";

import hero from "../imports/copec/copec-hero.png";
import researchStation from "../imports/copec/copec-research-station.png";
import researchProcess from "../imports/copec/copec-research-process.png";
import onboarding from "../imports/copec/copec-onboarding_illustrations.png";
import productOverview from "../imports/copec/copec-product-overview.png";
import home from "../imports/copec/home.png";
import coupons from "../imports/copec/coupons.png";
import map1 from "../imports/copec/map-1.png";
import map2 from "../imports/copec/map-2.png";
import map3 from "../imports/copec/map-3.png";
import transactions from "../imports/copec/transactions.png";
import loyalty from "../imports/copec/loyalty.png";
import rateService from "../imports/copec/rate-service.png";
import load from "../imports/copec/load.png";
import typeStyles from "../imports/copec/copec-type-styles.png";
import colorStyles from "../imports/copec/copec-color-accessibility.png";
import buttonStyles from "../imports/copec/copec-button-states.png";
import blockStyles from "../imports/copec/copec-block-components.png";
import billboard from "../imports/copec/copec-billboard.jpg";
import splashScreen from "../imports/copec/splash-screen.mp4";

const screens = [
  { src: home, label: "Home" },
  { src: coupons, label: "Coupons" },
  { src: map1, label: "Station discovery" },
  { src: transactions, label: "Transactions" },
  { src: loyalty, label: "Loyalty" },
  { src: rateService, label: "Service feedback" },
  { src: map2, label: "Search" },
  { src: map3, label: "Filters" },
  { src: load, label: "Payment" },
];

export default function CopecProject() {
  const navigate = useNavigate();

  return (
    <main className="copec-case">
      <section className="copec-hero">
        <img src={hero} alt="Copec mobile ecosystem" />
        <div className="copec-hero-shade" />
        <button className="copec-back" onClick={() => navigate("/work")}>← Work</button>
        <div className="copec-hero-copy">
          <p className="copec-kicker">PRODUCT DESIGN · UX/UI · RESEARCH</p>
          <h1>Copec</h1>
          <p>Helping transform a physical service-station ecosystem into a connected phygital experience.</p>
        </div>
      </section>

      <article>
        <section className="copec-section copec-overview">
          <div>
            <p className="copec-label">01 — OVERVIEW</p>
            <h2>From service station to digital ecosystem.</h2>
          </div>
          <div className="copec-copy">
            <p className="copec-lead">
              I worked on the early development and launch of Copec’s consumer app, with the goal of supporting a broader phygital transformation for the client.
            </p>
            <p>
              The challenge was to connect services that already existed across Copec’s physical network — payments, promotions, station discovery and customer services — through one clear mobile experience.
            </p>
          </div>
          <div className="copec-meta">
            <div><span>CLIENT</span><strong>Copec</strong></div>
            <div><span>ROLE</span><strong>UX/UI · Research · Design System</strong></div>
            <div><span>CONTEXT</span><strong>Physical + digital services</strong></div>
            <div><span>IMPACT</span><strong>5M+ downloads</strong></div>
          </div>
        </section>

        <section className="copec-blue-statement">
          <div className="copec-section">
            <p className="copec-label light">THE GOAL</p>
            <h2>Make the digital layer feel like a natural extension of Copec.</h2>
          </div>
        </section>

        <section className="copec-section copec-research">
          <div className="copec-heading-grid">
            <div>
              <p className="copec-label">02 — RESEARCH IN CONTEXT</p>
              <h2>Test early. Then take it to the station.</h2>
            </div>
            <div className="copec-copy">
              <p className="copec-lead">
                Research started early with user interviews and usability testing, helping us understand customer expectations, behaviours and friction before the experience was fully defined.
              </p>
              <p>
                As proposals evolved, I participated in multiple rounds of field testing directly at Copec service stations. Testing in context let us see what customers understood immediately, where they hesitated and which interactions needed to be simplified.
              </p>
            </div>
          </div>

          <figure className="copec-field">
            <img src={researchStation} alt="Field testing at a Copec service station" />
            <figcaption>Field testing at a Copec station — validating proposals where the product would actually be used.</figcaption>
          </figure>

          <div className="copec-research-row">
            <figure>
              <img src={researchProcess} alt="Copec research, workshops and collaboration" />
              <figcaption>Early interviews, usability sessions, workshops and iterative evaluation.</figcaption>
            </figure>
            <div className="copec-research-notes">
              <span>01</span><p>Understand the existing service-station experience.</p>
              <span>02</span><p>Prototype and test key interactions early.</p>
              <span>03</span><p>Validate proposals with customers on-site.</p>
              <span>04</span><p>Feed observations back into product decisions.</p>
            </div>
          </div>
        </section>

        <section className="copec-collaboration">
          <div className="copec-section copec-heading-grid">
            <div>
              <p className="copec-label light">03 — COLLABORATION</p>
              <h2>Designing with the business, not around it.</h2>
            </div>
            <div className="copec-copy light-copy">
              <p className="copec-lead">
                I worked closely with Copec stakeholders and the wider product team throughout the process, connecting customer findings with business and technical requirements.
              </p>
              <p>
                Research results and design proposals were discussed collaboratively, allowing us to align decisions across a large existing service ecosystem while keeping the customer experience coherent.
              </p>
            </div>
          </div>
        </section>

        <section className="copec-product">
          <div className="copec-section copec-heading-grid">
            <div>
              <p className="copec-label">04 — PRODUCT EXPERIENCE</p>
              <h2>One interface for many everyday interactions.</h2>
            </div>
            <div className="copec-copy">
              <p className="copec-lead">
                I helped translate the different services within Copec into a consistent mobile experience across onboarding, promotions, payments, scanning, transaction history, station discovery and feedback.
              </p>
            </div>
          </div>

          <figure className="copec-onboarding">
            <img src={onboarding} alt="Copec onboarding illustrations" />
            <figcaption>Onboarding</figcaption>
          </figure>

          <figure className="copec-splash">
            <video src={splashScreen} autoPlay muted loop playsInline />
            <figcaption>Splash screen</figcaption>
          </figure>
        </section>

        <section className="copec-system">
          <div className="copec-section copec-heading-grid">
            <div>
              <p className="copec-label">05 — MUEVO DESIGN SYSTEM</p>
              <h2>A shared language built to scale.</h2>
            </div>
            <div className="copec-copy">
              <p className="copec-lead">
                As the product expanded, I contributed to the Muevo Design System, based on Atomic Design principles.
              </p>
              <p>
                We standardized typography, color, accessibility, states and reusable interface patterns so design and development could work from the same foundation.
              </p>
            </div>
          </div>

          <div className="copec-section copec-system-grid">
            <figure className="wide">
              <div className="copec-system-image"><img src={typeStyles} alt="Copec typography system" /></div>
              <figcaption><b>01</b> Typography</figcaption>
            </figure>
            <figure>
              <div className="copec-system-image"><img src={colorStyles} alt="Copec color and accessibility system" /></div>
              <figcaption><b>02</b> Color & accessibility</figcaption>
            </figure>
            <figure>
              <div className="copec-system-image"><img src={buttonStyles} alt="Copec button states" /></div>
              <figcaption><b>03</b> Buttons & states</figcaption>
            </figure>
            <figure className="wide">
              <div className="copec-system-image"><img src={blockStyles} alt="Copec reusable components" /></div>
              <figcaption><b>04</b> Reusable components</figcaption>
            </figure>
          </div>
        </section>

        <section className="copec-screens">
          <div className="copec-section copec-screen-grid">
            {screens.map((screen) => (
              <figure key={screen.label}>
                <div><img src={screen.src} alt={`Copec ${screen.label} screen`} /></div>
                <figcaption>{screen.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="copec-scale">
          <div className="copec-section copec-heading-grid">
            <div>
              <p className="copec-label">06 — INTO THE REAL WORLD</p>
              <h2>The product became part of the physical brand.</h2>
            </div>
            <div className="copec-copy">
              <p className="copec-lead">
                The digital language extended into Copec’s wider communication and physical environment — closing the loop between the app and the service-station ecosystem it was designed for.
              </p>
            </div>
          </div>
          <figure className="copec-product-overview">
            <img src={productOverview} alt="Overview of the Copec app experience" />
          </figure>
          <figure className="copec-billboard">
            <img src={billboard} alt="Copec app campaign billboard" />
          </figure>
        </section>

        <section className="copec-outcome">
          <div className="copec-section">
            <p className="copec-label light">07 — OUTCOME</p>
            <h2>A product designed in context, built to operate at scale.</h2>
            <p className="copec-outcome-copy">
              I contributed from early exploration through launch, combining user research, field testing, UX/UI and systems thinking. The app has since reached more than 5 million downloads.
            </p>
            <p className="copec-role-line">UX/UI DESIGN · INTERACTION DESIGN · USER INTERVIEWS · USABILITY TESTING · FIELD TESTING · PROTOTYPING · DESIGN SYSTEMS · STAKEHOLDER COLLABORATION</p>
            <button onClick={() => navigate("/work")}>← Back to all work</button>
          </div>
        </section>
      </article>
    </main>
  );
}
