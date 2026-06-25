export default function Saidbar() {
  return (
    <div className="saidbar">
      <div className="page-popular_tags">
        <span>Popular tags</span>
      </div>
      <div className="page-component_list">
        <button className="page-component_item">
          <span className="page-component_item-one">one</span>
        </button>
        <button className="page-component_item">
          <span className="page-component_item-something">something</span>
        </button>
        <button className="page-component_item">
          <span className="page-component_item-chinese">chinese</span>
        </button>
        <button className="page-component_item">
          <span className="page-component_item-english">english</span>
        </button>
        <button className="page-component_item">
          <span className="page-component_item-frensh">frensh</span>
        </button>
      </div>
    </div>
  );
}
