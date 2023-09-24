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
    <div className="fixed inset-0 flexCenterCenter z-50">
      {/* Modal Overlay */}
      <div
        className={`fixed inset-0 ${isModal ? "bg-gray bg-opacity-50" : "bg-transparent"
          }`}
        onClick={handleOutsideClick}
      ></div>

      {/* Modal Content */}
      {isModal && (
        <div className="bg-gray_cool text-gray shadow-lg w-1/3 rounded-lg p-3 z-50">
          <p>Modal is active</p>

          <div className="flexCenterCenter mt-5">
            <button
              className="px-4 py-2 rounded-lg bg-light1 text-gray_cool hover:bg-red"
              onClick={() => closeModal()}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
