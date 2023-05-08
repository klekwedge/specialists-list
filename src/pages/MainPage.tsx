import { useState, useEffect } from "react";
import Search from "../Components/Search/Search";
import SpecialistList from "../Components/SpecialistList/SpecialistList";
import Tabs from "../Components/Tabs/Tabs";
import { SortValues } from "../types/user";
import InternetError from "../Components/InternetError/InternetError";

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
  const [isInternetError, setIsInternetError] = useState(false);

  const changeSort = (newSort: SortValues) => {
    setSort(newSort);
  };

  const changeInputValue = (inputValue: string) => {
    setInputValue(inputValue);
  };

  const changeActiveTab = (tabAllias: string) => {
    setActiveTab(tabAllias);
  };

  function checkOnlineState() {
    if (navigator.onLine) {
      setIsInternetError(false);
    } else {
      setIsInternetError(true);
    }
  }

  useEffect(() => {
    window.addEventListener("online", checkOnlineState);
    window.addEventListener("offline", checkOnlineState);
  }, []);

  return (
    <>
      {isInternetError ? (
        <InternetError />
      ) : (
        <Search
          inputValue={inputValue}
          sortValue={sort}
          changeInputValue={changeInputValue}
          changeSortValue={changeSort}
        />
      )}
      <div className="_containter">
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          changeActiveTab={changeActiveTab}
        />
        <SpecialistList sort={sort} search={inputValue} filter={activeTab} />
      </div>
    </>
  );
}

export default MainPage;
