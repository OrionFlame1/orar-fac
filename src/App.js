import React from "react";
import { HashRouter } from 'react-router-dom';
import TimeTable from './table.js';

function App() {
  return (
    <HashRouter>
      <TimeTable />
    </HashRouter>
  );
}

export default App;