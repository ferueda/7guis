function Button({ children, type = 'button', onClick, isDisabled = false }) {
  console.log(isDisabled);
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`text-gray-600 rounded-md bg-white border border-gray-300 px-10 py-1 text-xs cursor-default shadow ${
        !isDisabled && 'active:bg-blue-400 active:text-white active:border-blue-500'
      } ${isDisabled && 'cursor-not-allowed opacity-50'}`}
    >
      {children}
    </button>
  );
}

export default Button;
