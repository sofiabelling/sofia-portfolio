export interface ToolBadge {
  name: string;
  bg: string;
  fg: string;
  glyph?: string;
  image?: string;
}

export default function ToolBadges({ tools }: { tools: ToolBadge[] }) {
  return (
    <div className="tool-badges">
      {tools.map((tool) => (
        <div className="tool-badge" key={tool.name}>
          {tool.image ? (
            <img className="tool-badge-icon tool-badge-image" src={tool.image} alt="" />
          ) : (
            <div className="tool-badge-icon" style={{ background: tool.bg, color: tool.fg }}>
              {tool.glyph}
            </div>
          )}
          <span className="tool-badge-label">{tool.name}</span>
        </div>
      ))}
    </div>
  );
}
