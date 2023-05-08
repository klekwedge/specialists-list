import { useState } from "react";
import "./Tabs.scss";

type TabsType = {
  [key: string]: string;
};

interface TabsProps {
  tabs: TabsType[];
  activeTab: string;
  changeActiveTab: (tabAllias: string) => void;
}

const Tabs = ({ tabs, activeTab, changeActiveTab }: TabsProps) => {
  return (
    <ul className="specialist__tabs">
      {tabs.map((tab) => (
        <li
          className={`specialist__tab ${
            activeTab === tab.allias ? "_active-tab" : ""
          }`}
          onClick={() => changeActiveTab(tab.allias)}
        >
          {tab.name}
        </li>
      ))}
    </ul>
  );
};
export default Tabs;
