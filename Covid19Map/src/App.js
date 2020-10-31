import React, { Component } from 'react';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
class App extends Component {

  state = {

  };

  handleChange = () => {
    this.setState({
      count : this.state.count + 1,
    });
  };

  componentDidMount(){

  }

  componentDidUpdate(){

  }

  componentWillUnmount(){

  }

  render() {
    return (
      <div className="App">

        <div id = "selectZone">
          <div id = "seacrchingTitle">
            Searching Information
          </div>
          <p>검색 지역 설정</p>

          <p>검색 세부 지역 설정</p>

          <p>검색 반경 설정</p>

          <p>설정 완료 상태</p>
        </div>

        <div id = "mapZone">
          지도표시
        </div>
      </div>
    );
  }
}

class InsideApp extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
