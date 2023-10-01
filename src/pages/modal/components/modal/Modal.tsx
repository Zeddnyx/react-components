interface IModal {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ isModal, setIsModal }: IModal) => {
  const closeModal = () => {
    setIsModal(false);
  };

  const handleOutsideClick = (e: any) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="container-modal">
      {/* Modal Overlay */}
      <div
        className={`fixed inset-0 ${
          isModal ? "modal-active" : "bg-transparent"
        }`}
        onClick={handleOutsideClick}
      ></div>

      {/* Modal Content */}
      {isModal && (
        <div className="modal-content">
          <p>Modal is active</p>

          <div className="flexCenterCenter mt-5">
            <button className="modal-close" onClick={() => closeModal()}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
