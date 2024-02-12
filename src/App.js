import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

const menuLink = [
  {
    url:'./',
    label:'Home'
  },
  {
    url:'./About',
    label:'About'
  },
  {
    url:'./',
    label:'Menu'
  },
  {
    url:'./',
    label:'Reservations'
  },
  {
    url:'./',
    label:'Order Online'
  },
  {
    url:'./',
    label:'Login'
  },
]

function App() {
  return (
    <>
      <Header urlImage='./assets/logo.svg'>
        <Nav
          list={menuLink}
        />
      </Header>
      <Main>

      </Main>
      <Footer/>
    </>
  );
}

export default App;
