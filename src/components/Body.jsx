import React from "react";
import { Sidebar } from "./SideBar";
import { MainContainer } from "./MainContainer";

export const Body = () => {
  return (
    <div className=' flex flex-row h-screen w-screen bg-gray-100'>
      <Sidebar />
      <MainContainer />
    </div>
  );
};
