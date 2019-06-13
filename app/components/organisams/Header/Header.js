import Anchor from './../../atoms/Anchor';

const Header = () => (
    <header id="navbar-main" className="navbar navbar-default hide-logo">
        <div className="header-bg">
            <div className="container">
                <nav className="header-nav clearfix" role="navigation">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle">
                            <span className="sr-only">Toggle navigation</span>
                            <i className="pgicon pgicon-menu"></i>
                        </button>
                        <a className="navbar-brand" href="/" title="PropertyGuru"><span>PropertyGuru</span></a>
                    </div>
                    <div className="navigation">
                        <div className="nav-container">
                            <ul className="nav navbar-nav">
                                <li className="">
                                    <Anchor href={{ pathname: "/property-for-sale"}} title="Property for Sale in Singapore" data-tracking="Buy" className="main-nav-a">Buy</Anchor>
                                </li>
                                <li className=" active">
                                    <Anchor href={{ pathname: "/property-for-rent"}} title="Property for Rent in Singapore" data-tracking="Rent" className="main-nav-a">Rent</Anchor>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
);

export default Header;
