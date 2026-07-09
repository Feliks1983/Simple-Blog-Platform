export default function Button({ favorsCount, isLiked, onClick }) {
  return (
    <button
      className={`button-likes ${isLiked ? "liked" : ""}`}
      onClick={onClick}
    >
      <img
        className="favorite"
        src="../../../public/assets/icons/favorite.svg"
        alt="favorite"
      />
      <span>{favorsCount}</span>
    </button>
  );
}
