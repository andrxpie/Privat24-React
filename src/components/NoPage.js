import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "antd";
import "../App.scss";

export default function NoPage() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <span>Page Not Found!</span>
      <h2 className="return-zone-wide">
        <Button onClick={() => navigate(-1)}>
          <span>Go Back</span>
        </Button>
      </h2>
    </div>
  );
}
