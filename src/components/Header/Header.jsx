import { Badge, Image, Menu, Space } from "antd";
import React, { useState } from "react";
import DynamicIcon from "../../common/IconComponent";
import logo from "../../assets/smart_x_logo.png";
import MenuDrawer from "../Main/MenuDrawer/MenuDrawer";
import { items, menuData } from "../../data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomMenu from "../../ReuseableComponents/CustomMenu";

const Header = () => {
  
  // hooks
  let navegate = useNavigate();
  let loc = useLocation();
  let pathName = loc?.pathname;

  const [openDrawer, setOpenDrawer] = useState(false);
  const showDrawer = () => {
    setOpenDrawer(true);
  };
  const onClose = () => {
    setOpenDrawer(false);
  };
  return (
    <header
      id="header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 3,
        width: "100%",
        display: "flex",
        alignItems: "center",
        background: "#ffffff",
        justifyContent: "space-between",
        padding: "0px 20px",
        height: "50px",
      }}
    >
      <Image src={logo} id="header_logo" />

      <div className="flex items-center gap-4  h-full">
        <ul className="flex gap-4 items-center" id="lg_menu">
          {items.map((item) => (
            <li>
              <Link
                to={item?.path}
                className={
                  item.path.includes(pathName) && pathName !== "/"
                    ? "menu-item active-menu-item"
                    : "menu-item"
                }
              >
                {item?.label}
              </Link>
            </li>
          ))}
        </ul>

        <div
          id="lg_menu"
          style={{ border: "1px solid lightgray", height: "100%" }}
        ></div>

        <ul className="flex gap-4 items-center">
          <li>
            <div
              className={
                pathName.includes("cart")
                  ? "w-9 h-9 bg-customActiveBgColor rounded-full flex justify-center items-center"
                  : "flex justify-center items-center"
              }
            >
              <Badge color="orange" count={1} size="small">
                <DynamicIcon
                  iconName="FaCartShopping"
                  color="#ff1f59c4"
                  onClickHandel={() => navegate("/cart")}
                  size={22}
                  iconTooltipTitle="Cart"
                />
              </Badge>
            </div>
          </li>
          <li>
            <div
              className={
                pathName.includes("notification")
                  ? "w-9 h-9 bg-customActiveBgColor rounded-full flex justify-center items-center"
                  : "flex justify-center items-center"
              }
            >
              <Badge color="orange" count={1} size="small">
                <DynamicIcon
                  iconName="IoNotifications"
                  color="#ff1f59c4"
                  size={22}
                  onClickHandel={() => navegate("/notification")}
                  iconTooltipTitle="Notification"
                />
              </Badge>
            </div>
          </li>
          <li>
            <div>
              {/* <DynamicIcon
                iconName="FaUser"
                color="#ff1f59c4"
                size={20}
                // onClickHandel={}
                iconTooltipTitle="User Details"
              /> */}
              <CustomMenu />
            </div>
          </li>
        </ul>

        <div id="sm_menu" className="flex items-center">
          <DynamicIcon
            iconName="MdMenuOpen"
            size={30}
            onClickHandel={showDrawer}
          />
        </div>

        <MenuDrawer
          drawerState={openDrawer}
          onClose={onClose}
          menuList={menuData}
        />
      </div>
    </header>
  );
};

export default Header;
