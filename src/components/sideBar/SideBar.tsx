import { FC } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";

interface MenuItem {
  title: string;
  icon: JSX.Element;
  link: string;
}

const SideBar: FC = () => {
  const MenuList: MenuItem[] = [
    {
      title: "Profile",
      icon: <i className="fa fa-home"></i>,
      link: "/admin/profile",
    },
    {
      title: "Publications",
      icon: <i className="fa fa-envelope"></i>,
      link: "/admin/publications",
    },
    {
      title: "Chapters",
      icon: <i className="fa fa-info-circle"></i>,
      link: "/admin/chapters",
    },
    {
      title: "MarketPlace",
      icon: <i className="fa fa-star"></i>,
      link: "/admin/nft-marketplace",
    },
    {
      title: "Create",
      icon: <i className="fa fa-eye"></i>,
      link: "/admin/create-publication",
    },
    {
      title: "Settings",
      icon: <i className="fa fa-cog"></i>,
      link: "/admin/settings",
    },
  ];

  return (
    <div className="flex flex-col space-y-4 p-4">
      {MenuList.map((list, i) => (
        <Link href={list.link} key={i} className="group">
          <div className="flex items-center space-x-4 p-2 rounded-md hover:bg-hover cursor-pointer group-hover:text-primary transition-all duration-500">
            {list.icon}
            <span className="font-medium">{list.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
