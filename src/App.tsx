import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Your project</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
