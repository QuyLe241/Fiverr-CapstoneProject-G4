import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoHeader from "../../assets/svg/logoHeader.svg";
import IconLogoHeader from "../../icon/IconLogoHeader";
import { pathDefault } from "../../common/path.js";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button, Modal } from "antd";
// import { Button, Modal } from 'antd';
import "./header.scss";
import LinkCustom from "../LinkCustom/LinkCustom.jsx";
import FormSearchProduct from "../FormSearchProduct/FormSearchProduct.jsx";
import IconEng from "./IconEng.jsx";
import SetLanguage from "./SetLanguage.jsx";
import LoginPage from "../../page/Login/LoginPage.jsx";

const Header = () => {
  const fiverrPro = [
    {
      key: "0",
      label: <Link to={"#"}> item 1</Link>,
    },
    {
      key: "1",
      label: <Link to={"#"}> item 2</Link>,
    },
  ];

  const explore = [
    {
      key: "0",
      label: <Link to={"/dang-nhap"}> ex1</Link>,
    },
    {
      key: "1",
      label: <Link to={"#"}> ex2</Link>,
    },
  ];

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    //    chỉnh container tại file configTailwind
    <header className="py-5 env_header" style={{ zIndex: "999" }}>
      <div className="container mx-auto px-2">
        <div
          style={{ fontWeight: 600, fontSize: "17px" }}
          className="header_content flex items-center justify-between"
        >
          <div className="header_logo flex items-center space-x-3">
            {/*   Sử dụng thẻ svg bằng cách tạo ra component chứa thẻ svg và gọi đến component header */}
            <Link to={pathDefault.homePage}>
              <IconLogoHeader />
            </Link>
            <FormSearchProduct />
          </div>
          <nav className="header_navigation space-x-5">
            <Dropdown
              menu={{
                items: fiverrPro,
              }}
              trigger={["click"]}
              className="cursor-pointer py-2 px-4 hover:bg-gray-100 rounded-sm duration-300"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Fiverr Pro
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>

            <Dropdown
              menu={{
                items: explore,
              }}
              trigger={["click"]}
              className="cursor-pointer py-2 px-4 hover:bg-gray-100 rounded-sm duration-300"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Explore
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            {/* modal */}
            <button className="hover:text-green-500" onClick={showModal}>
              <i class="fa-solid fa-globe "></i>English
            </button>
            <Modal
              title="Select your preferences"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <SetLanguage />
            </Modal>
            {/* modal */}
            <a href="#" className="hover:text-green-500">
              Become a seller
            </a>
            <LinkCustom
              content={"Đăng nhập"}
              to={pathDefault.login}
              className={
                "border border-green-500 text-green-500 btn_login rounded-lg"
              }
            />
            <LinkCustom
              content={"Đăng ký"}
              to={pathDefault.register}
              className={
                "border bg-green-500 text-white btn_register rounded-lg"
              }
            />
            {/* <Link to={"/"}>Đăng ký</Link>
            <Link to={"/"}>Đăng nhập</Link> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
