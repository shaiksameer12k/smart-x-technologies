import React from "react";
import { Dropdown, Menu } from "antd";
import { FaUser, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DynamicIcon from "../common/IconComponent";

const UserMenu = () => {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    if (e.key === "profile") {
      navigate("/profile");
    } else if (e.key === "login") {
      navigate("/login");
    } else if (e.key === "logout") {
      // Handle logout logic here
      console.log("Logged out");
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile" icon={<FaUser />}>
        Profile
      </Menu.Item>
      <Menu.Item key="login" icon={<FaSignInAlt />}>
        Login
      </Menu.Item>
      <Menu.Item key="logout" icon={<FaSignOutAlt />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["hover"]}>
      <div className="flex items-center cursor-pointer">
        <DynamicIcon
          iconName="FaUser"
          color="#ff1f59"
          size={22}
        />
      </div>
    </Dropdown>
  );
};

export default UserMenu;
