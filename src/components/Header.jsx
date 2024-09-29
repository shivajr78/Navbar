import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/#" className="logo">
          Extio Logo
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
