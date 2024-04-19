import { CreditCardOutlined, DollarOutlined, HistoryOutlined, PhoneOutlined, RollbackOutlined, SwapLeftOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { Button } from "antd";
import React from "react";
import '../App.scss';

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
        <Space className="element" routerLink="/new/card">
          <CreditCardOutlined />
          Карту
        </Space>
        <Space className="element" routerLink="/new/transaction">
          <DollarOutlined />
          Переказ
        </Space>
        <Space className="element" routerLink="/new/paynum">
          <PhoneOutlined />
          Поповнення рахунку
        </Space>
        <Space className="element" routerLink="/history">
         <HistoryOutlined />
          Архів
        </Space>
      </div>
    </>
  );
}
