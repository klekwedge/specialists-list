import { useState } from "react";
import Search from "../Components/Search/Search";
import SpecialistList from "../Components/SpecialistList/SpecialistList";
import Tabs from "../Components/Tabs/Tabs";

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

  const changeActiveTab = (tabAllias: string) => {
    setActiveTab(tabAllias)
  }

  return (
    <div className="_containter">
      <Search />
      <Tabs tabs={tabs} activeTab={activeTab} changeActiveTab={changeActiveTab}/>
      <SpecialistList filter={activeTab}/>
    </div>
  );
}

export default MainPage;
