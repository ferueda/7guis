function Header({ children }) {
  return (
    <header className="flex bg-gray-300 text-gray-600 rounded-t-md justify-center w-full px-1 text-base shadow cursor-default">
      {children}
    </header>
  );
}

export default Header;
