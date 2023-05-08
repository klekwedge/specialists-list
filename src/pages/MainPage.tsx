import { useState } from "react";
import Search from "../Components/Search/Search";
import SpecialistList from "../Components/SpecialistList/SpecialistList";
import Tabs from "../Components/Tabs/Tabs";
import { SortValues } from "../types/user";

const tabs = [
  {
    name: "Все",
    allias: "all",
  },
  {
    name: "Designers",
    allias: "design",
  },
  {
    name: "Analysts",
    allias: "analytics",
  },
  {
    name: "iOS",
    allias: "ios",
  },
  {
    name: "Android",
    allias: "android",
  },
];



function MainPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [inputValue, setInputValue] = useState("");
  const [sort, setSort] = useState<SortValues>("alphabet");

  const changeSort = (newSort: SortValues) => {
    setSort(newSort);
  };

  const changeInputValue = (inputValue: string) => {
    setInputValue(inputValue);
  };

  const changeActiveTab = (tabAllias: string) => {
    setActiveTab(tabAllias);
  };

  return (
    <div className="_containter">
      <Search
        inputValue={inputValue}
        sortValue={sort}
        changeInputValue={changeInputValue}
        changeSortValue={changeSort}
      />
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        changeActiveTab={changeActiveTab}
      />
      <SpecialistList sort={sort} search={inputValue} filter={activeTab} />
    </div>
  );
}

export default MainPage;
