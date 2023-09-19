import './App.css';
import Title from './components/Title';
import TransactionsInfo from './components/TransactionsInfo';
import {useEffect, useState} from "react";

function App() {

  return (
    <main>
        <Title />
        <TransactionsInfo />
      </main>
  );
}

export default App;
