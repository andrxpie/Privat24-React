import {
  CreditCardOutlined,
  DollarOutlined,
  HistoryOutlined,
  PhoneOutlined,
  RollbackOutlined,
  SwapLeftOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Space } from "antd";
import { Button } from "antd";
import React from "react";
import "../App.scss";

export default function Choise() {
  return (
    <>
      <h2 className="return-zone">
        <Button type="dashed">
          <SwapLeftOutlined />
        </Button>
        <span>Back</span>
      </h2>
      <div className="container">
        <Link to="card" className="element">
          <Space>
            <CreditCardOutlined />
            Карту
          </Space>
        </Link>
        <Link to="transaction" className="element">
          <Space>
            <DollarOutlined />
            Переказ
          </Space>
        </Link>
        <Link to="paynum" className="element">
          <Space>
            <PhoneOutlined />
            Поповнення рахунку
          </Space>
        </Link>
        <Link to="../archive" className="element">
          <Space>
            <HistoryOutlined />
            Архів
          </Space>
        </Link>
      </div>
    </>
  );
}
