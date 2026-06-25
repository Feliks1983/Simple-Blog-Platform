export default function Button (){
  return (
    <button className="button-likes">
      <img
        className="favorite"
        src="../../../public/assets/icons/favorite.svg"
        alt="favorite"
      />
      <span>0</span>
    </button>
  );
}