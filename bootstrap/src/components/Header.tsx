import { BsJustify } from "react-icons/bs";
import "./Header.scss";
import { useIsBelowWidth } from "../hooks/useIsMobile";
import { useEffect } from "react";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const { isBelowWidth } = useIsBelowWidth();

  useEffect(() => {
    console.log(isBelowWidth);
  }, [isBelowWidth]);

  return (
    <header className="header">
      <div className="logo-wrapper">
        {isBelowWidth && <BsJustify onClick={toggleSidebar} />}
        <span className="logo">Logo</span>
      </div>
      <span className="profile">Profile</span>
    </header>
  );
};

export default Header;
