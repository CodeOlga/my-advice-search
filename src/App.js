import './App.css';
import { useEffect, useState } from 'react';
import MyAdviceComponent from './MyAdviceComponent';


function App() {

  // const MY_ID = "";
  // const MY_KEY = "";

  const [mySearch, setMySearch] = useState('');
  const [myAdvice, setMyAdvice] = useState('');

  useEffect (() => {
    const getAdvice = async() => {
      const response = await fetch (`https://www.boredapi.com/api/activity/`);
      const data = await response.json();
      console.log(data)
      setMyAdvice(data.activity)
    }
    getAdvice();
  }, [])

  const myAdviceSearch = (e) => {
    console.log(e.target.value)
    setMySearch(e.target.value)
  }

  return (
    <div className="App">
      <div className="container">
        <p>ADVICE</p>
      </div>

      <div className="container">
        <form>
          <input className='search' type="text" placeholder='Search...' onChange={myAdviceSearch} value={mySearch}/>
          <div className="container">
            <button>Click</button>
          </div>
        </form>
      </div>

      {myAdvice => (
        <MyAdviceComponent/>
      )} 
      

    </div>
  
  );
}

export default App;
