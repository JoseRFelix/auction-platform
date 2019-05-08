import React from "react";
import TopBar from "./components/TopBar/TopBar";
import ListingsView from "./components/ListingsView/ListingsView";

const App = () => {
  return (
    <React.Fragment>
      <TopBar />
      <ListingsView />
    </React.Fragment>
  );
};

export default App;
