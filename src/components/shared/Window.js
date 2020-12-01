function Window({ children }) {
  return (
    <div className="max-w-max bg-gray-50 border rounded-md border-gray-200 shadow-lg">
      {children}
    </div>
  );
}

export default Window;
