import React from "react";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import MiniProjects from "./components/MiniProjects";

const Main = () => {
  return (
    <Layout>
      <Projects />
      <MiniProjects />
    </Layout>
  );
};

export default Main;
