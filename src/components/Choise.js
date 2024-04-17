import { RollbackOutlined } from "@ant-design/icons";
import React from "react";

export default function Choise() {
  return (
    <>
      <h1>
        <button>
          <RollbackOutlined />
        </button>
        <span>Choise</span>
      </h1>
      <div class="container">
        <div class="element" routerLink="/new/card">
          <mat-icon>credit_card</mat-icon>
          Карту
        </div>
        <div class="element" routerLink="/new/transaction">
          <mat-icon>paid</mat-icon>
          Переказ
        </div>
        <div class="element" routerLink="/new/paynum">
          <mat-icon>smartphone</mat-icon>
          Поповнення рахунку
        </div>
        <div class="element" routerLink="/history">
          <mat-icon>history</mat-icon>
          Архів
        </div>
      </div>
    </>
  );
}
