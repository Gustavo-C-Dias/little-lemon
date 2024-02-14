import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header urlImage='./assets/logo.svg'>
        <Nav/>
      </Header>
      <Main />
      <Footer/>
    </>
  );
}

export default App;
