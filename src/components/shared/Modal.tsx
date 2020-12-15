import * as React from 'react';

import Button from './Button';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ children, onClose }) => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  const handleKeyUp = React.useCallback(
    (event: KeyboardEvent): void => {
      event.preventDefault();

      if (event.keyCode === 27) {
        onClose();
      }
    },
    [onClose],
  );

  const handleOutsideClick = React.useCallback(
    (event: MouseEvent): void => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    },
    [onClose],
  );

  React.useEffect(() => {
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
};

export default Modal;
