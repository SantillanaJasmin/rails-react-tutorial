import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;
const { Item } = Menu;

export default () => (
  <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Item key="1">Home</Item>
      <Item key="2">Our Service</Item>
      <Item key="3">Contact</Item>
    </Menu>
  </Header>
);