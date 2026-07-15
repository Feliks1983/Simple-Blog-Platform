import PageList from "./PageList";

const popularTags = ["one", "something", "chinese", "english", "frensh"];

export default function Sidbar() {
  return (
    <div className="sidbar">
      <div className="page-popular_tags">
        <span>Popular tags</span>
      </div>
      <div className="page-component_list">
        {popularTags.map((tags) => (
          <PageList key={tags} tags={tags} />
        ))}
      </div>
    </div>
  );
}
