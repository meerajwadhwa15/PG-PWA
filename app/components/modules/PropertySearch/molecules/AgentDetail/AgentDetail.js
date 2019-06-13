

export default ({agent, media}) => (
    <div>
      <div className="headline">
        <div className="agent-name"> <span className="hidden-sm hidden-md">-&nbsp;</span> {agent.name}</div>
      </div>
      <div className="agent-image hidden-md hidden-sm">
        <a href="javascript: void(0);" className="lazy-bg-parent" itemScope="" itemType="https://schema.org/Photograph">
          <img itemProp="image" src={media} className="lazy lazy-bg" alt={agent.name}/>
        </a>
      </div>
    </div>
  );
