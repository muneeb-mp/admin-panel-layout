import { useIsBelowWidth } from "../hooks/useIsBelowWidth";
import "./Sidebar.scss";

const sidebarData = [
  {
    id: 1,
    name: "Link 1",
    link: "link1",
  },
  { id: 2, name: "Link 2", link: "link2" },
  { id: 3, name: "Link 3", link: "#" },
  { id: 4, name: "Link 4", link: "#" },
];

interface SidebarProps {
  className?: string;
  closeSidebar: () => void;
}

const Sidebar = ({ className = "", closeSidebar }: SidebarProps) => {
  const { isBelowWidth } = useIsBelowWidth();

  let linkProps = {};

  if (isBelowWidth) {
    linkProps = {
      onClick: closeSidebar,
    };
  }

  return (
    <aside className={`sidebar ${className}`.trim()}>
      <ul>
        {sidebarData.map((item) => (
          <li key={item.id}>
            <a href={item.link} {...linkProps}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
