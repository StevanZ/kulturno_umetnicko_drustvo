import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import { BsFlower1 } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <div className="full-name libre-franklin">
          KUD Azanja <BsFlower1 />
        </div>
        {/* <div className="short-name">KUD Azanja</div> */}
      </div>
      <Navbar />
      <SocialLinks />
    </header>
  );
};
export default Header;
