import { BrowserRouter, Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { Router } from "./router/Router";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
    </div>
  );
}
