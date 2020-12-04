import { useEffect, useRef, useCallback } from 'react';

import Button from './Button';

function Modal({ children, onClose }) {
  const modalRef = useRef(null);

  const handleKeyUp = useCallback(
    (event) => {
      event.preventDefault();

      if (event.keyCode === 27) {
        onClose();
      }
    },
    [onClose],
  );

  const handleOutsideClick = useCallback(
    (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);
    document.addEventListener('click', handleOutsideClick, false);

    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
      document.removeEventListener('click', handleOutsideClick, false);
    };
  }, [handleKeyUp, handleOutsideClick]);

  return (
    <div className="fixed flex items-center justify-center inset-0 bg-modalOverlay opacity-100 z-50 overflow-x-hidden overflow-y-auto p-2">
      <div
        ref={modalRef}
        className="flex relative flex-col bg-white p-2 rounded-md items-center shadow-xl"
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-1.5 cursor-default text-gray-500 hover:text-red-500"
        >
          x
        </button>
        {children}
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
}

export default Modal;
