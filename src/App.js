import React from "react";

import Search from "./components/Search";
import { InitialData } from "./data/InitialData";

const App = () => {
  return (
    <div className="tc bg-green ma0 pa4 min-vh-100">
      <Search details={InitialData} />
    </div>
  );
};

export default App;
