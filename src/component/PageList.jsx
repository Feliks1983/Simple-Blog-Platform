export default function PageList(props) {
  const tag = props.tags;
  return (
    <div className="page-component_item">
      <span>{tag}</span>
    </div>
  );
}
