function Header({ children }) {
  return (
    <header className="flex bg-gray-200 text-gray-500 border-b rounded-t-md justify-center w-full px-1 text-base shadow">
      {children}
    </header>
  );
}

export default Header;
