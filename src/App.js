import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const App = () => (
  <AnimatePresence>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  </AnimatePresence>
);

export default App;
