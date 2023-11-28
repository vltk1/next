import { useState } from "react";
import { createPortal } from "react-dom";

export function Modals({}: any) {
  const [showModal, setShowModal] = useState(false);

  const ModalContent = ({ onClose }: any): any => (
    <div className="modal fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center">
      <div className="modal-content relative max-w-[640px] bg-gray-light">
        <h3>Deactivate account</h3>
        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed from our servers forever. This action
          cannot be undone.
        </p>
        <button
          className="absolute right-1 top-1 border rounded-md w-4"
          onClick={onClose}
        >
          X
        </button>
      </div>
      <style jsx>{`
        .modal {
          background-color: rgba(0,0,0, .5);
        }
          .modal-content {
            border: 1px solid #dcdcdc;
            box-shadow: 2px 2px 2px #f5f5f5;
            padding: 1em;
            border-radius: 4px;
            margin: 2em 0;
            color: #333;
          }
        `}</style>
    </div>
  );

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open modal</button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
