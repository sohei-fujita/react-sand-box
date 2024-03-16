import styled from "styled-components";
import { SearchInput } from "../molecures/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `fujita-${val}`,
    image:
      "https://source.unsplash.com/brown-short-coated-dog-in-orange-hoodie-oU6KZTXhuvk",
    email: "12345@example.com",
    phone: "090-11111-1111",
    company: {
      name: "test company",
    },
    website: "https://google.com",
  };
});

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

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
