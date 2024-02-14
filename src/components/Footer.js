import Nav from './Nav'

function Footer() {
    return (
        <footer className="white-bg">
            <img src="./assets/logo.svg" alt="Little Lemon"/>
            <Nav direction='line'/>
            <div>
                <h3 className='none-lineheight'>Contato</h3>
                <p className='none-lineheight'>Location</p>
            </div>
            <div>
                <h3 className='none-lineheight'>Social Media Links</h3>
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
            </div>
        </footer>
    );
  }

export default Footer;
