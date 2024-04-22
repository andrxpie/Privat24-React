import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from './components/Layout';
import Choise from './components/Choise';
import NewCardForm from './components/NewCardForm';
import NewTransactionForm from './components/NewTransactionForm';
import PayNumForm from './components/PayNumForm';
import Archive from './components/Archive';
import Home from './components/Home';
import Cards from './components/Cards';
import NoPage from './components/NoPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cards" element={<Cards />} />
          <Route path="new" element={<Choise />} />
          <Route path="new/card" element={<NewCardForm />} />
          <Route path="new/transaction" element={<NewTransactionForm />} />
          <Route path="new/paynum" element={<PayNumForm />} />
          <Route path="archive" element={<Archive />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;