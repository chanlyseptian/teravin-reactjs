import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, SubmissionPage, DetailPage } from "../pages";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/submission" element={<SubmissionPage/>}/>
      <Route path="/details/:id" element={<DetailPage />}/>
    </Routes>
  );
};

export default MainRoute;
