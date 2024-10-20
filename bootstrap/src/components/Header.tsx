import { BsJustify } from "react-icons/bs";
import "./Header.scss";
import { useIsBelowWidth } from "../hooks/useIsBelowWidth";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const { isBelowWidth } = useIsBelowWidth();

  return (
    <header className="header">
      <div className="logo-wrapper">
        {isBelowWidth && <BsJustify onClick={toggleSidebar} />}
        <span className="logo">Logo</span>
      </div>
      <span className="profile">
        Profile
        {/* <button onClick={() => setTheme("dark")}>Dark</button>
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("amoled")}>Amoled</button> */}
      </span>
    </header>
  );
};

export default Header;
