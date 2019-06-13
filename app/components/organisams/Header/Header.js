
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
                    <h2 className="sticky-listing-info">30,674 Results of Property For Rent in Singapore</h2>


                    <div className="navigation">
                        <div className="nav-container">
                            <ul className="nav navbar-nav">
                                <li className="">
                                    <a href="/property-for-sale" title="Property for Sale in Singapore" data-tracking="Buy" className="main-nav-a">Buy</a>
                                </li>
                                <li className=" active">
                                    <a href="/property-for-rent" title="Property for Rent in Singapore" data-tracking="Rent" className="main-nav-a">Rent</a>
                                </li>
                                <li className="">
                                    <a href="/condo-directory" title="Singapore Condos" data-tracking="Condos" className="main-nav-a">Condos</a>
                                </li>
                                <li className="">
                                    <a href="/singapore-property-listing/hdb" title="Singapore HDB Flats" data-tracking="HDB" className="main-nav-a">HDB</a>
                                </li>
                                <li className="">
                                    <a href="/new-project-launch" title="New Property Launches" data-tracking="New Projects" className="main-nav-a">New Projects</a>
                                </li>
                                <li className="">
                                    <a href="/overseas-property-for-sale" title="Singapore Overseas Property" data-tracking="Overseas" className="main-nav-a">Overseas</a>
                                </li>
                                <li id="commercial-nav" className="visible-xs-block visible-sm-block">
                                    <a href="//www.commercialguru.com.sg/" title="CommercialGuru" data-tracking="Commercial" className="main-nav-a">Commercial</a>
                                </li>
                                <li className="">
                                    <a href="/property-agent-directory" title="Find Singapore Property Agent" data-tracking="Find Agent" className="main-nav-a">Find Agent</a>
                                </li>
                                <li className="">
                                    <a href="/market-news" title="Singapore Property Market Information" data-tracking="News" className="main-nav-a">News</a>
                                </li>
                                <li className=" dropdown">
                                    <a href="#" data-target="#" title="More" data-tracking="More" className="main-nav-a dropdown-toggle" data-toggle="dropdown">More</a>
                                    <ul className="dropdown-menu" role="menu">
                                        <li className="">
                                            <a href="/mortgage" title="Singapore Property Mortgages" data-tracking="Mortgages">Mortgages</a>
                                        </li>
                                        <li className="mainnav-areainsider">
                                            <a href="/areainsider" title="Learn more about the areas in Singapore" data-tracking="AreaInsider">AreaInsider</a>
                                        </li>
                                        <li className="">
                                            <a href="/property-investment-questions" title="AskGuru for Singapore Real Estate Questions and Answers" data-tracking="AskGuru">AskGuru</a>
                                        </li>
                                        <li className="">
                                            <a href="/service-apartments" title="Serviced Apartments in Singapore" data-tracking="Serviced Apartments">Serviced Apartments</a>
                                        </li>
                                        <li className=" accordion">
                                            <a href="#" title="PropertyGuru Business Directory" data-tracking="Lifestyle" className="collapsed" data-toggle="collapse" data-target="#main-nav-accordion-1">Lifestyle<i className="pgicon pgicon-arrow-down"></i><i className="pgicon pgicon-arrow-up"></i></a>
                                            <ul className="accordion-menu collapse" id="main-nav-accordion-1">
                                                <li className="">
                                                    <a href="/lifestyle" title="PropertyGuru Business Directory" data-tracking="Overview">Overview</a>
                                                </li>
                                                <li className="">
                                                    <a href="/lifestyle/section/24/home-servicing" title="Home Servicing" data-tracking="Home Servicing">Home Servicing</a>
                                                </li>
                                                <li className="">
                                                    <a href="/lifestyle/section/2/finance-legal" title="Finance &amp; Legal" data-tracking="Finance &amp; Legal">Finance &amp; Legal</a>
                                                </li>
                                                <li className="">
                                                    <a href="/lifestyle/section/1/renovate-furnish" title="Renovate &amp; Furnish" data-tracking="Renovate &amp; Furnish">Renovate &amp; Furnish</a>
                                                </li>
                                                <li className="">
                                                    <a href="/lifestyle/section/3/move-store" title="Move &amp; Store" data-tracking="Move &amp; Store">Move &amp; Store</a>
                                                </li>
                                                <li className="">
                                                    <a href="/lifestyle/section/4/home-lifestyle" title="Home &amp; Lifestyle" data-tracking="Home &amp; Lifestyle">Home &amp; Lifestyle</a>
                                                </li>
                                                <li className="">
                                                    <a href="/lifestyle/directory" title="Services Directory" data-tracking="Services Directory">Services Directory</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className=" accordion">
                                            <a href="#" title="Guides to help buy Property in Singapore" data-tracking="Guides" className="collapsed" data-toggle="collapse" data-target="#main-nav-accordion-2">Guides<i className="pgicon pgicon-arrow-down"></i><i className="pgicon pgicon-arrow-up"></i></a>
                                            <ul className="accordion-menu collapse" id="main-nav-accordion-2">
                                                <li className="">
                                                    <a href="/singapore-property-resources" title="Guides to help buy Property in Singapore" data-tracking="Overview">Overview</a>
                                                </li>
                                                <li className="">
                                                    <a href="/singapore-property-resources/singapore-buy-property-guides" title="I Want to Buy a Property" data-tracking="Buying Property Guide">Buying Property Guide</a>
                                                </li>
                                                <li className="">
                                                    <a href="/singapore-property-resources/singapore-sell-property-guides" title="I Want to Sell My Property" data-tracking="Selling Property Guide">Selling Property Guide</a>
                                                </li>
                                                <li className="">
                                                    <a href="/singapore-property-resources/singapore-for-rent-guides" title="I Want to Rent Out My Property" data-tracking="For Rent Guide">For Rent Guide</a>
                                                </li>
                                                <li className="">
                                                    <a href="/singapore-property-resources/singapore-to-rent-guides" title="I am Looking for a Property to Rent" data-tracking="To Rent Guide">To Rent Guide</a>
                                                </li>
                                                <li className="">
                                                    <a href="/singapore-property-resources/singapore-relocation-guides" title="I am Moving to Singapore" data-tracking="Expat/Relocation Guide">Expat/Relocation Guide</a>
                                                </li>
                                                <li className="">
                                                    <a href="/singapore-property-resources/singapore-agents-guides" title="Working with Agents" data-tracking="Working with Agents">Working with Agents</a>
                                                </li>
                                                <li className="">
                                                    <a href="/mortgage/calculators" title="Mortgage Calculators" data-tracking="Mortgage Calculators">Mortgage Calculators</a>
                                                </li>
                                                <li className="">
                                                    <a href="/singapore-property-resources/real-estate-jobs" title="Real Estate Careers" data-tracking="Real Estate Careers">Real Estate Careers</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className=" accordion">
                                            <a href="#" title="For Agents" data-tracking="For Agents" className="collapsed" data-toggle="collapse" data-target="#main-nav-accordion-3">For Agents<i className="pgicon pgicon-arrow-down"></i><i className="pgicon pgicon-arrow-up"></i></a>
                                            <ul className="accordion-menu collapse" id="main-nav-accordion-3">
                                                <li className="">
                                                    <a href="https://agentofferings.propertyguru.com.sg" title="Agent Offerings" data-tracking="Agent Offerings" target="_blank" rel="noopener">Agent Offerings</a>
                                                </li>
                                                <li className="">
                                                    <a href="http://agentnet.propertyguru.com.sg" title="AgentNet" data-tracking="AgentNet">AgentNet</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <ul className="nav-tools"><li className="dropdown showWhenAuthenticated hide my-account">
                        <a className="pgicon pgicon-user dropdown-toggle" href="/user-profile" id="dropdownMenu1" data-toggle="dropdown" title="My Account">
                            <span className="hidden-xs hidden-sm">My Account</span>
                        </a>
                        <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                            <li><a href="/user-profile" title="Profile &amp; Settings">Profile &amp; Settings</a></li>
                            <li className="divider" role="presentation"></li>
                            <li><a href="/shortlist" title="My Saved Properties">My Saved Properties</a></li>
                            <li><a href="/alerts" title="My Saved Searches">My Saved Searches</a></li>
                            <li><a href="/alerts" title="My Email Alerts">My Email Alerts</a></li>
                            <li><a href="/myenquiries" title="My Enquiries">My Enquiries</a></li>
                            <li><a href="/myquestions" title="My Questions">My Questions</a></li>
                            <li><a href="//agentnet.propertyguru.com.sg/ex_home" title="AgentNet" className="hide show-when-role_agent">AgentNet</a></li>
                            <li><a href="/feedback" title="Feedback">Feedback</a></li>
                            <li className="divider" role="presentation"></li>
                            <li><a href="/logout" title="Log out">Log out</a></li>
                        </ul>
                    </li><li className="login showWhenNotAuthenticated">
                            <a className="pgicon pgicon-user" href="#" data-href="/login?redirect=https%3A//www.propertyguru.com.sg/property-for-rent%3Fmarket%3Dresidential" title="Log In" id="modal-login-nav" data-toggle="modal" data-target="#modal-login">
                                <span className="hidden-xs hidden-sm">Log In</span>
                            </a>
                            <span className="header-ab-test hidden-xs hidden-sm"><b>or</b></span>
                            <a className="header-ab-test pgicon pgicon-users hidden-xs hidden-sm" href="#" data-href="/register" title="Sign Up" id="modal-login-nav" data-toggle="modal" data-target="#modal-signup">
                                <span className="hidden-xs hidden-sm">Sign Up</span>
                            </a>
                        </li><li className="view-saved-listing shortlist-dropdown dropdown">
                            <a data-target="#" href="#shortlist" className="dropdown-toggle" data-toggle="dropdown" title="My Shortlist"><span className="js-session-saved-properties">0</span><i className="pgicon pgicon-heart-o"></i></a>
                            <div className="dropdown-menu">
                                <div id="multiple-enquire" className="multiple-enquire" data-get-shortlists-url="/sf2-search/ajax/shortlist">
                                    <form action="/contact-multiple" method="post">
                                        <input type="hidden" value="true" name="from_listings" />
                                            <fieldset className="mltp-splash">
                                                <legend>My Shortlist</legend>
                                                <div>
                                                    <h4>My Shortlist</h4>
                                                    <p className="shortlist-loading hide"><i className="pgicon pgicon-loading pgicon-spin"></i></p>
                                                    <p>Click on <i className="pgicon pgicon-heart-o"></i> to save properties and they will appear here.</p>
                                                </div>
                                            </fieldset>
                                            <fieldset className="mltp-selected">
                                                <legend>My Shortlist</legend>
                                                <div className="mltp-header">
                                                    <span>Recently Shortlisted <i className="pgicon pgicon-loading pgicon-spin shortlist-loading hide"></i></span>
                                                    <a href="/shortlist" className="mltp-all mltp-see" title="See All">See All</a>
                                                </div>
                                                <div className="mltp-listings-items-container"></div>
                                                <div className="mltp-btns">
                                                    <input type="hidden" name="redirect_url" value="https://www.propertyguru.com.sg/property-for-rent?market=residential" />
                                                        <a className="btn btn-main-inverted btn-loginToSave" href="#" data-href="/login?redirect=https%3A//www.propertyguru.com.sg/property-for-rent%3Fmarket%3Dresidential" id="modal-login-nav" data-toggle="modal" data-target="#modal-login" title="Login to Save">Login to Save</a>
                                                        <input type="submit" value="Send Enquiries" className="btn btn-primary pgicon pgicon-mail-o" title="Send Enquiries" />
                                              </div>
                                            </fieldset>
                                          </form>
                                        </div>
                                    </div>
                                </li><li className="legacy-shortlist-link"><a href="/shortlist" title="My Shortlist"><span className="js-session-saved-properties">0</span><i className="pgicon pgicon-heart-o"></i></a></li><li className="nav-search visible-xs-inline-block"><a className="pgicon pgicon-search" href="#" title="Search Again"><span className="search-btn-title">Search Again</span></a></li></ul>
                      </nav>
                    </div>
                </div>

                    <div className="header-wobg">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
                                    <a href="/" itemprop="url"><span itemprop="title">Home</span></a>
                                </li>
                                <li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
                                    <a href="https://www.propertyguru.com.sg/property-for-rent?market=residential" itemprop="url"><span itemprop="title">Find Property</span></a>
                                </li>
                            </ol>
                            <nav className="users-tools">
                                <ul></ul>
                            </nav>
                        </div>
                    </div>
            </header>
                );

                export default Header;
