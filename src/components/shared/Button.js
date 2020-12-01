function Button({ children, type = 'button', onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-gray-600 rounded-md bg-white border border-gray-300 px-10 py-1 text-xs cursor-default shadow active:bg-blue-400 active:text-white active:border-blue-500"
    >
      {children}
    </button>
  );
}

export default Button;
