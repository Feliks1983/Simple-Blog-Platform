import PageList from "./PageList";

export default function Sidbar() {
  return (
    <div className="sidbar">
      <div className="page-popular_tags">
        <span>Popular tags</span>
      </div>
      <PageList />
    </div>
  );
}
