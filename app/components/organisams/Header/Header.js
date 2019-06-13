import Anchor from './../../atoms/Anchor';
import Button from './../../atoms/Button';

const Header = () => (
    <header id="navbar-main" className="navbar navbar-default hide-logo">
        <div className="header-bg">
            <div className="container">
                <nav className="header-nav clearfix" role="navigation">
                    <div className="navbar-header">
                        <Button onClick={() => {
                            var navigation = document.querySelector('.navigation');
                            if(navigation.style.left == '' || navigation.style.left == '-250px') {
                                navigation.style.left = 0;
                                navigation.style.top = '40px';
                                navigation.style.zIndex = 3000;
                                navigation.style.backgroundColor = '#FFF';
                                navigation.style.transition = 'all 1s';
                            } else {
                                navigation.style.top = '40px';
                                navigation.style.left = '-250px';
                            }
                        }} type="button" className="navbar-toggle">
                            <span className="sr-only">Toggle navigation</span>
                            <i className="pgicon pgicon-menu"></i>
                        </Button>
                        <a className="navbar-brand" href="/" title="PropertyGuru"><span>PropertyGuru</span></a>
                    </div>
                    <div className="navigation">
                        <div className="nav-container">
                            <ul className="nav navbar-nav">
                            <li className="">
                                    <Anchor href={{ pathname: "/"}} as="/" title="Home"  className="main-nav-a">Home</Anchor>
                                </li>
                                <li className="">
                                    <Anchor href={{ pathname: "/property-for-sale"}} as="/property-for-sale" title="Property for Sale in Singapore" className="main-nav-a">Buy</Anchor>
                                </li>
                                <li>
                                    <Anchor href={{ pathname: "/property-for-rent"}}  as="/property-for-rent" title="Property for Rent in Singapore" className="main-nav-a">Rent</Anchor>
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
