import nixHero from "../imports/nix/nix-hero.png";
import bepnHero from "../imports/bepn_curated_assets/country-explorer.png";
import copecCaseHero from "../imports/copec_case.png";
import copecThumbnail from "../imports/copec/copec-hero.png";
import joelSartoreCaseHero from "../imports/Joel Sartore/joelsartoreinspo.png";

export type Tag = "UX" | "UI" | "Research" | "Interaction" | "Animation" | "3D" | "Branding" | "Mobile";

export interface Project {
  slug: string;
  title: string;
  headline: string;
  client: string;
  industry: string;
  year: string;
  tags: Tag[];
  description: string;
  body: string;
  bg: string;
  img: string;
  /** CSS object-position for the thumbnail crop, e.g. "center 36%" — for a source image whose best framing isn't dead-center. */
  imgPosition?: string;
  /** Overrides `img` for the case-study page's hero banner only — the grid thumbnail keeps using `img`. */
  caseImg?: string;
  tools: { name: string; icon: string }[];
  featured: boolean;
  /** Short uppercase editorial metadata lines, e.g. ["PRODUCT DESIGN · UX/UI", "MOBILE · RESEARCH"] */
  meta?: string[];
  /** Standout impact metric, e.g. "5M+ DOWNLOADS" */
  impact?: string;
}

export const projects: Project[] = [
  {
    slug: "nix",
    title: "NIX",
    headline: "NIX — Turning fear of the dark into play",
    client: "Bachelor Thesis · Universidad del Desarrollo",
    industry: "Interaction Design · Research · Creative Technology",
    year: "2017",
    tags: ["Research", "Interaction", "Animation"],
    description:
      "NIX is an interactive storytelling experience designed to help children aged 4–7 reframe their relationship with darkness through play. Children use their own shadows to interact with projected characters and trigger animations inside a guided story.",
    body: "The project combined psychological research, observation, shadow-play experimentation, user testing and a working interactive prototype. Kinect v2 captured depth and body information, while Processing and computer-vision techniques tracked gestures and blob positions to recognise hand shapes and trigger animated responses.",
    bg: "#0a0a0a",
    img: nixHero,
    tools: [
      { name: "Processing", icon: "⌘" },
      { name: "Kinect v2", icon: "◉" },
      { name: "After Effects", icon: "🎬" },
      { name: "Projection", icon: "▣" },
    ],
    featured: true,
    meta: ["INTERACTION · RESEARCH", "CREATIVE TECHNOLOGY"],
  },
  {
    slug: "bepn",
    title: "Bepn",
    headline: "Bepn — A playful VPN experience",
    client: "Personal concept",
    industry: "UX/UI · Mobile app · Concept",
    year: "2021",
    tags: ["UX", "UI", "Animation", "Mobile"],
    description:
      "VPN interfaces often prioritize technical information over the experience of choosing where you want to connect. Bepn reframes that moment: instead of relying only on conventional server lists, countries become part of a visual, interactive selection experience.",
    body: "The flow stays intentionally simple: sign up, onboarding, location detection, country selection, connection and monitoring. Each step reduces friction while giving the user a clear sense of where they are and what is happening. Motion plays a key role in communicating connection state.",
    bg: "#0d1a2b",
    img: bepnHero,
    imgPosition: "center 36%",
    tools: [
      { name: "Figma", icon: "🎨" },
      { name: "After Effects", icon: "🎬" },
    ],
    featured: true,
    meta: ["UX/UI · INTERACTION", "MOBILE"],
  },
  {
    slug: "copec",
    title: "Copec",
    headline: "Copec — Fuel, reimagined for mobile",
    client: "Copec",
    industry: "UX/UI · Mobile app · Branding",
    year: "2023",
    tags: ["UX", "UI", "Research", "Branding"],
    description:
      "Copec is one of Latin America's largest fuel and convenience networks. The mobile project set out to unify a fragmented set of loyalty, payment, and location features into a single, coherent product.",
    body: "The work spanned discovery research with petrol station workers and drivers, service blueprinting, and a full design system build that could scale across Copec's entire digital estate.",
    bg: "#0f3db5",
    img: copecThumbnail,
    caseImg: copecCaseHero,
    tools: [
      { name: "Figma", icon: "🎨" },
      { name: "Maze", icon: "🧪" },
    ],
    featured: true,
    meta: ["PRODUCT DESIGN · UX/UI", "MOBILE · RESEARCH"],
    impact: "5M+ DOWNLOADS",
  },
  {
    slug: "joel-sartore",
    title: "Joel Sartore",
    headline: "Joel Sartore — A living archive of endangered species",
    client: "Joel Sartore / National Geographic",
    industry: "Photography · Editorial",
    year: "2022",
    tags: ["UX", "UI", "Research"],
    description:
      "Joel Sartore has spent decades photographing endangered species for the Photo Ark project. The challenge was designing a digital experience that honours the weight of that mission — letting the animals hold the frame, without letting the interface disappear entirely.",
    body: "The design strips away decoration to focus on imagery. Navigation is minimal and peripheral. Each animal gets its own moment. The project called for deep research into conservation storytelling and careful decisions around contrast, type scale, and negative space.",
    bg: "#111118",
    img: joelSartoreCaseHero,
    imgPosition: "62% 42%",
    tools: [
      { name: "Figma", icon: "🎨" },
      { name: "After Effects", icon: "🎬" },
    ],
    featured: true,
    meta: ["EDITORIAL · UX/UI", "RESEARCH"],
  },
  {
    slug: "dashboard",
    title: "Dashboard",
    headline: "Dashboard — A workspace that works for you",
    client: "Internal product",
    industry: "UX/UI · SaaS",
    year: "2023",
    tags: ["UX", "UI", "Research"],
    description:
      "Productivity dashboards tend to surface data without helping users understand it. This project rethinks the workspace as an active collaborator — surfacing what matters, hiding what doesn't, and reducing cognitive load at every step.",
    body: "The design process began with a two-week research sprint: diary studies, contextual interviews, and heuristic audits of five competing tools. The resulting component system uses progressive disclosure to keep the interface calm at rest and powerful on demand.",
    bg: "#eef0f8",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=800&fit=crop&auto=format",
    tools: [
      { name: "Figma", icon: "🎨" },
      { name: "Maze", icon: "🧪" },
    ],
    featured: true,
  },
  {
    slug: "tujki",
    title: "Tujki",
    headline: "Tujki — Technology events, made social",
    client: "Tujki",
    industry: "UX/UI · Mobile app",
    year: "2022",
    tags: ["UX", "UI", "Mobile"],
    description:
      "Tujki is an event platform built around the technology community in Stockholm. The brief called for a product that could surface niche events without feeling overwhelming — social without being noisy.",
    body: "The visual language draws on early internet aesthetics filtered through a contemporary lens: bold type, deliberate asymmetry, and a purple palette that stands apart from the usual tech-startup blue. Interaction patterns were prototyped and tested across three rounds of usability testing.",
    bg: "#3d1560",
    img: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=1200&h=800&fit=crop&auto=format",
    tools: [
      { name: "Figma", icon: "🎨" },
      { name: "Principle", icon: "✦" },
    ],
    featured: false,
  },
  {
    slug: "concept",
    title: "Concept",
    headline: "Concept — Rethinking the boarding pass",
    client: "Personal concept",
    industry: "UX/UI · Mobile app · Motion",
    year: "2022",
    tags: ["UI", "Animation", "Mobile"],
    description:
      "Airport wayfinding is one of the most stressful digital touchpoints in travel. This concept reimagines the boarding pass as a live, contextual companion that adapts as your journey unfolds.",
    body: "Transitions between states — check-in, boarding, in-flight, arrival — use spatial metaphors rather than flat page swaps. The motion language communicates progress without demanding attention.",
    bg: "#1e1852",
    img: "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?w=1200&h=800&fit=crop&auto=format",
    tools: [
      { name: "Figma", icon: "🎨" },
      { name: "After Effects", icon: "🎬" },
    ],
    featured: false,
  },
];

export const allTags: Tag[] = ["UX", "UI", "Research", "Interaction", "Animation", "3D", "Branding", "Mobile"];
