import React from 'react';
import { Link, IndexLink } from 'react-router';
import NavLink from './NavLink';
import utils from '../../utils/helpers'
import jquery from 'jquery';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.navLinkOnClick = this.navLinkOnClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  navLinkOnClick(event) {
    let href = event.currentTarget.getAttribute('href');
    jquery('html, body').stop().animate({
        scrollTop: (jquery(href).offset().top - 50)
    }, 1250);
    event.preventDefault();
  }

  isHomeLink() {
    return window.location.pathname === '/';
  }

  handleScroll(event) {
    const sticky = event.target.querySelector('[data-toggle="sticky-onscroll"]');
    const stickyHeight = sticky.clientHeight;
    const stickyTop = sticky.offsetTop;
    const scrollTop = document.body.scrollTop;

    if (scrollTop > stickyHeight + stickyTop){
      utils.addClass(sticky, 'is-sticky');
    } else if (scrollTop <= stickyTop) {
      if (this.isHomeLink()) {
        utils.removeClass(sticky, 'is-sticky');
      }
    }

  }

  render() {
    let stickyClass = this.isHomeLink() ? '' : 'is-sticky';
    return (
      <nav id="top-nav" className={`navbar navbar-full navbar-custom navbar-fixed-top ${stickyClass}`} data-toggle="sticky-onscroll">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggler hidden-md-up pull-xs-right pull-sm-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
              &#9776;
            </button>
            <Link to="#page-top" className="navbar-brand page-scroll nav-link" onClick={this.navLinkOnClick}>
              <img src={require('../../../img/savenaija-logo-small.png')}/>
              SaveNaija
            </Link>
          </div>
          <div className="collapse navbar-toggleable-sm" id="collapsingNavbar">
            <ul className="nav navbar-nav pull-md-right">
              <NavLink
                path="#page-top"
                name="Home"
                navLinkOnClick={this.navLinkOnClick}
              />
              <NavLink
                path="#who-we-are"
                navLinkOnClick={this.navLinkOnClick}
                name="Who we are" />
              <NavLink
                path="#what-we-do"
                navLinkOnClick={this.navLinkOnClick}
                name="What we do" />
              <NavLink
                path="#join-us"
                navLinkOnClick={this.navLinkOnClick}
                name="Join us" />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
