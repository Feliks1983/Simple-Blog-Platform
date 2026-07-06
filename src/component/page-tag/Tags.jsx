import "./Tags.css";

export default function Tags({users}) {

  return (
    <div className="page-tags">
      {users?.map((tag) => (
        <div className="page-tag" key={tag}>
          <button>{tag}</button>
        </div>
      ))}
    </div>
  );
}
