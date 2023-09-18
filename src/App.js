import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');

  function addTransaction(e) {
    const url = '';
    fetch(url);
  }
  return (
    <main>
        <h1>$400<span>.00</span></h1>
        <form onSubmit={addTransaction}>
          <div className="basics">
            <input type="text"
                   value={name}
                   onChange={ev => setName(ev.target.value)}
                   placeholder={'+200 new tv'}/>
            <input type="datetime-local"
                   value={datetime}
                   onChange={ev => setDatetime(ev.target.value)}/>
          </div>
          <div className="description">
            <input type="text"
                   value={description}
                   placeholder={'description'}
                   onChange={ev => setDescription(ev.target.value)}/>
          </div>
          <button type="submit">Add new transaction</button>
        </form>
        <div className="transactions">
          <div className="transaction">
            <div className="left">
              <div className="name">New TV</div>
              <div className="description">time for new tv</div>
            </div>
            <div className="right">
              <div className="price red">-$500</div>
              <div className="datetime">2022-12-18 15:45</div>
            </div>
          </div>

          <div className="transaction">
            <div className="left">
              <div className="name">made website</div>
              <div className="description">time for new tv</div>
            </div>
            <div className="right">
              <div className="price green">+$400</div>
              <div className="datetime">2022-12-18 15:45</div>
            </div>
          </div>
        </div>
      </main>
  );
}

export default App;
