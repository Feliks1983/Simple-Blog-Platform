import "./modal.css";

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  confirming = false,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Delete article</h3>
        <div className="modal-actions">
          <button
            className="btn-delete"
            onClick={onConfirm}
            disabled={confirming}
          >
            {confirming ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
