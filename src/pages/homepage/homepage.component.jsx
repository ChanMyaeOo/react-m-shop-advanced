import React from "react";
import Header from "../../components/header/header.component";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./HomePage.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Header />
      <Directory />
    </HomePageContainer>
  );
};
export default HomePage;
