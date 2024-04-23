import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { SwapLeftOutlined } from "@ant-design/icons";
import "../App.scss";

export default function Archive() {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="return-zone">
        <Button type="dashed" onClick={() => navigate(-1)}>
          <SwapLeftOutlined />
        </Button>
        <span>Back</span>
      </h2>
      <div>Archive</div>
    </>
  );
}
