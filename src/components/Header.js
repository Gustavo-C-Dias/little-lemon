
function Header({urlImage, children}) {
    return (
        <header className="header">
            <a aria-label="Little Lemon" href="./">
                <img className='logo' src={urlImage} alt=""/>
            </a>
            {children}
        </header>
    );
}

export default Header;
