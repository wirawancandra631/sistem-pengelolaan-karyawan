import React from 'react';
import { createPortal } from 'react-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io';

function Modal({ children, visible = true, onClose }) {
  if (visible) {
    const modal = (
      <section className="w-full h-screen overflow-y-auto fixed top-0 bottom-0 bg-[rgba(0,0,0,0.5)] p-10 flex items-center justify-center">
        <div className="modal-animation-zoom w-[567px] bg-white rounded-md">
          <div className="w-full p-3">
            <button type="button" className="block ml-auto cursor-pointer" onClick={onClose}>
              <IoIosCloseCircleOutline className="text-xl" />
            </button>
          </div>
          <div className="w-full p-3">{children}</div>
        </div>
      </section>
    );
    return createPortal(modal, document.getElementById('modal'));
  }
  return null;
}

export function ModalDialogConfirmation({ visible, onClose, onSuccess }) {
  const modal = (
    <section className="w-full h-screen overflow-y-auto fixed top-0 bottom-0 bg-[rgba(0,0,0,0.5)] p-10 flex items-center justify-center">
      <div className="modal-animation-confirmation w-[567px] bg-white rounded-md">
        <div className="w-full p-8">
          <p className="text-center font-bold text-xl">Are you sure ?</p>
          <div className="w-full flex justify-center space-x-8 mt-4 ">
            <button
              type="button"
              className="flex  items-center p-3 bg-red-500 text-white rounded-md cursor-pointer hover:shadow-lg"
              onClick={onClose}
            >
              <span className="mr-2">Cancel</span>
              <IoIosCloseCircleOutline />
            </button>
            <button
              type="button"
              className="flex  items-center p-3 bg-green-500 text-white rounded-md cursor-pointer hover:shadow-lg"
              onClick={onSuccess}
              tabIndex="0"
            >
              <span className="mr-2">Yes</span>
              <FaCheckCircle />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
  if (visible) {
    return createPortal(modal, document.getElementById('modal'));
  } else {
    return null;
  }
}
export function ModalLarge({ children, visible = true, onClose }) {
  if (visible) {
    const modal = (
      <section className="w-full h-screen overflow-y-auto fixed top-0 bottom-0 bg-[rgba(0,0,0,0.5)] p-10 ">
        <div className="modal-animation-fade-down w-[768px] bg-white rounded-md mx-auto">
          <div className="w-full p-3">
            <button type="button" className="block ml-auto cursor-pointer" onClick={onClose}>
              <IoIosCloseCircleOutline className="text-xl" />
            </button>
          </div>
          <div className="w-full p-3">{children}</div>
        </div>
      </section>
    );
    return createPortal(modal, document.getElementById('modal'));
  }
  return null;
}
export default Modal;
