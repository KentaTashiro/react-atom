import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import "./styles.css";

export default function App() {
  const user = {
    name: "たしろ～～",
    image: "https://source.unsplash.com/TzjMd7i5WQI",
    email: "tashiro.co.jp",
    phone: "111-2222-3333",
    company: {
      name: "ココロザシ"
    },
    website: "https://www.youtube.com/"
  };
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <br />
        <SearchInput></SearchInput>
        <br />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
