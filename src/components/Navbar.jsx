import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-links">
      <Link className="link" index to="/">
        Pocetna
      </Link>
      <Link to="/about">O nama</Link>
      {/* <Link to="/history">History</Link> */}
      <Link to="/contact">Kontakt</Link>
    </nav>
  );
};
export default Navbar;
