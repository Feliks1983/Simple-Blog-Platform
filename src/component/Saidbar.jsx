import PageList from "./PageList";

export default function Saidbar() {
  return (
    <div className="saidbar">
      <div className="page-popular_tags">
        <span>Popular tags</span>
      </div>
      <PageList />
    </div>
  );
}
