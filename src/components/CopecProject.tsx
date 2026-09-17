import { useNavigate } from "react-router";
import ToolBadges from "./ToolBadges";
import "./CopecProject.css";

const COPEC_TOOLS = [
  { name: "Figma", bg: "#2c2c34", fg: "#a259ff", glyph: "F" },
  { name: "LottieFiles", bg: "#00ddb3", fg: "#ffffff", glyph: "L" },
  { name: "Photoshop", bg: "#001e36", fg: "#31a8ff", glyph: "Ps" },
  { name: "InVision", bg: "#ff3366", fg: "#ffffff", glyph: "In" },
  { name: "Rive App", bg: "#000000", fg: "#ffffff", glyph: "R" },
];

import heroDesktop from "../imports/copec/copec-hero.png";
import heroMobile from "../imports/copec/copec-product-overview.png";
import researchStation from "../imports/copec/copec-research-station.png";
import onboarding from "../imports/copec/copec-onboarding_illustrations.png";
import iconos from "../imports/copec/iconos.gif";
import home from "../imports/copec/Home.png";
import map1 from "../imports/copec/map-1.png";
import map2 from "../imports/copec/map-2.png";
import map3 from "../imports/copec/map-3.png";
import transactions from "../imports/copec/transactions.png";
import loyalty from "../imports/copec/Loyalty.png";
import rateService from "../imports/copec/rate-service.png";
import load from "../imports/copec/Load.png";
import menu from "../imports/copec/menu.png";
import typeStyles from "../imports/copec/copec-type-styles.png";
import buttonStyles from "../imports/copec/copec-button-states.png";
import blockStyles from "../imports/copec/copec-block-components.png";
import billboard from "../imports/copec/copec-billboard.jpg";
import promo1 from "../imports/copec/promotional-1.png";
import promo2 from "../imports/copec/promotional-2.jpeg";
import promo3 from "../imports/copec/promotional-3.webp";
import splashScreen from "../imports/copec/splash-screen.mp4";
import fieldUniformSolo from "../imports/copec/field-uniform-solo.jpg";
import fieldUniformTeam from "../imports/copec/field-uniform-team.jpg";
import driver01 from "../imports/copec/driver-01.jpg";
import driver02 from "../imports/copec/driver-02.jpg";
import driver03 from "../imports/copec/driver-03.jpg";

const screens = [
  { src: home, label: "Home" },
  { src: menu, label: "Menu" },
  { src: load, label: "Payment" },
  { src: map1, label: "Station discovery" },
  { src: map2, label: "Search" },
  { src: map3, label: "Filters" },
  { src: transactions, label: "Transactions" },
  { src: loyalty, label: "Loyalty" },
  { src: rateService, label: "Service feedback" },
];

export default function CopecProject() {
  const navigate = useNavigate();

  return (
    <main className="copec-case">
      <section className="copec-hero">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroMobile} />
          <img src={heroDesktop} alt="Copec app and service-station experience" />
        </picture>
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
              I worked on the early development and launch of Copec’s consumer app, supporting the company’s broader phygital transformation.
            </p>
            <p>
              Copec is one of Chile’s largest energy and fuel companies, with the country’s most extensive service-station network. The challenge was to bring its physical services — payments, promotions, station discovery and customer services — into one clear and intuitive mobile experience.
            </p>
          </div>
          <div className="copec-meta">
            <div><span>CLIENT</span><strong>Copec</strong></div>
            <div><span>ROLE</span><strong>UX/UI · Research · Design System</strong></div>
            <div><span>CONTEXT</span><strong>Physical + digital services</strong></div>
            <div><span>IMPACT</span><strong>5M+ downloads</strong></div>
            <div className="copec-meta-tools">
              <span>TOOLS</span>
              <ToolBadges tools={COPEC_TOOLS} />
            </div>
          </div>

          <figure className="copec-splash">
            <video src={splashScreen} autoPlay muted loop playsInline />
            <figcaption>Splash screen</figcaption>
          </figure>
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

          <div className="copec-research-notes">
            <div><span>01</span><p>Understand the existing service-station experience.</p></div>
            <div><span>02</span><p>Prototype and test key interactions early.</p></div>
            <div><span>03</span><p>Validate proposals with customers on-site.</p></div>
            <div><span>04</span><p>Feed observations back into product decisions.</p></div>
          </div>

          <div className="copec-field-testing-gallery">
            <div className="copec-field-testing-intro">
              <h3>Research meant getting out of the office.</h3>
              <p>
                We spent time at Copec stations, observing and interviewing people in the
                context where the product would actually be used. Drivers volunteered their
                time so we could put early product ideas in front of real users.
              </p>
            </div>

            <div className="copec-uniform-grid">
              <figure>
                <div className="photo-frame">
                  <img src={fieldUniformSolo} alt="Field testing at a Copec station wearing the station uniform" />
                </div>
                <figcaption>
                  Field testing uniform on — looking official was apparently part of the methodology :)
                </figcaption>
              </figure>
              <figure>
                <div className="photo-frame">
                  <img src={fieldUniformTeam} alt="Copec field testing team at a service station" />
                </div>
                <figcaption>Ready for another round of on-site interviews and usability testing.</figcaption>
              </figure>
            </div>

            <figure className="copec-driver-block">
              <div className="copec-driver-grid">
                {[driver01, driver02, driver03].map((image, index) => (
                  <div className="photo-frame" key={index}>
                    <img src={image} alt={`Copec customer taking part in field research ${index + 1}`} />
                  </div>
                ))}
              </div>
              <figcaption>
                Early concepts tested with drivers on-site — at the pump and in the car, where the app would actually be used.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="copec-system">
          <div className="copec-section copec-heading-grid">
            <div>
              <p className="copec-label">03 — MUEVO DESIGN SYSTEM</p>
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
            <figure className="wide">
              <div className="copec-system-image"><img src={buttonStyles} alt="Copec button states" /></div>
              <figcaption><b>02</b> Buttons & states</figcaption>
            </figure>
            <figure className="wide">
              <div className="copec-system-image"><img src={blockStyles} alt="Copec reusable components" /></div>
              <figcaption><b>03</b> Reusable components</figcaption>
            </figure>
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

          <figure className="copec-iconos">
            <img src={iconos} alt="Copec iconography in motion" />
            <figcaption>Iconography</figcaption>
          </figure>
        </section>

        <section className="copec-scale">
          <div className="copec-section copec-heading-grid">
            <div>
              <p className="copec-label">05 — INTO THE REAL WORLD</p>
              <h2>The product became part of the physical brand.</h2>
            </div>
            <div className="copec-copy">
              <p className="copec-lead">
                The digital language extended into Copec’s wider communication and physical environment — closing the loop between the app and the service-station ecosystem it was designed for.
              </p>
            </div>
          </div>

          <div className="copec-section copec-screen-grid">
            {screens.map((screen) => (
              <figure key={screen.label}>
                <div><img src={screen.src} alt={`Copec ${screen.label} screen`} /></div>
                <figcaption>{screen.label}</figcaption>
              </figure>
            ))}
          </div>

          <div className="copec-section copec-promo-grid">
            {[
              { src: promo1, alt: "Customer paying at a Copec pump from the app", caption: "Paying at the pump, straight from the app." },
              { src: promo2, alt: "Customer scanning a code at a Copec station", caption: "Scanning on-site to start a service." },
              { src: promo3, alt: "Customer using the Copec app from their car", caption: "The experience carries on from the car." },
            ].map((promo) => (
              <figure key={promo.caption}>
                <div className="photo-frame"><img src={promo.src} alt={promo.alt} /></div>
                <figcaption>{promo.caption}</figcaption>
              </figure>
            ))}
          </div>

          <figure className="copec-billboard">
            <img src={billboard} alt="Copec app campaign billboard" />
          </figure>
        </section>

        <section className="copec-outcome">
          <div className="copec-section">
            <p className="copec-label light">06 — OUTCOME</p>
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
