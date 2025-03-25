function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <nav>
        <a className="px-2 hover:text-gray-400" href="#about">About</a>
        <a className="px-2 hover:text-gray-400" href="#projects">Projects</a>
        <a className="px-2 hover:text-gray-400" href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
