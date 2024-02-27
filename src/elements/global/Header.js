import Link from "../components/Link";

function Header({urlImage, children}) {
    return (
        <header className="header">
            <Link href="./" variant={'link'} aria-label="Little Lemon" >
                <img className='logo' src={urlImage} alt=""/>
            </Link>
            {children}
        </header>
    );
}

export default Header;
