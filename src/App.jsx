import { BrowserRouter, Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { Router } from "./router/Router";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecures/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import "./styles.css";

export default function App() {
  return <Router />;
}
