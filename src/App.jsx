import { BrowserRouter, Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { Router } from "./router/Router";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecures/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

const user = {
  name: "fujita",
  image:
    "https://source.unsplash.com/brown-short-coated-dog-in-orange-hoodie-oU6KZTXhuvk",
  email: "12345@example.com",
  phone: "090-11111-1111",
  company: {
    name: "test company",
  },
  website: "https://google.com",
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
