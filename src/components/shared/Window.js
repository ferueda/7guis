function Window({ children }) {
  return (
    <div className="max-w-max bg-gray-100 border rounded-md border-gray-300 shadow-lg">
      {children}
    </div>
  );
}

export default Window;
