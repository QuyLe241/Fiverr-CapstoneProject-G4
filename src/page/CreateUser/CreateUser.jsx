import React from "react";
import InputCustom from "../../components/Input/InputCustom";

const CreateUser = () => {
  return (
    <div>
      <h2>Tạo người dùng trong hệ thống</h2>
      <form action="">
        <InputCustom contentLable={"Name"} />
        <InputCustom contentLable={"Email"} />
        <InputCustom contentLable={"Phone"} />
        <InputCustom contentLable={"Password"} type="password" />
      </form>
    </div>
  );
};

export default CreateUser;
