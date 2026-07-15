import "./modal.css";

export default function ConfirmModal({
  isOpen,
  onClose,
  onDelete,
  confirming = false,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-actions">
          <button
            className="btn-cancel"
            onClick={onClose}
            disabled={confirming}
          >
            Cancel
          </button>
          <button
            className="btn-delete"
            onClick={onDelete}
            disabled={confirming}
          >
            {confirming ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
