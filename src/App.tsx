import React from 'react';
import './App.css';

function App() {
  return (
      <div className="App">
          {/*<div className="wrap">*/}
          {/*<header>Header</header>*/}
          {/*<main>Content</main>*/}
          {/*<footer>Footer</footer>*/}
          {/*</div>*/}
          <div className="flex-container">
              <div className="myDiv">I am div</div>
              <img className='myImg' src='https://sitedelkino.ru/images/rasdel_css/Flexbox2.jpg' alt=""></img>
              <input className="myInput" type="text" placeholder="I am input"></input>
              <p className="myText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus,
                  finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus.
                  Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi
                  tristique nibh, mollis vehicula lectus tortor eu purus. </p>
              <span className="mySpan">I am span</span>
          </div>

      </div>
  );
}

export default App;
