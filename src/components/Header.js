
function Header({urlImage, children}) {
    return (
        <header className="header">
            <img className='logo' src={urlImage} alt="Little Lemon"/>
            {children}
        </header>
    );
}

export default Header;
