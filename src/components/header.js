import React, { Component } from 'react';
import LogoSpotify from '../assets-global/img/logo-small.svg';

class Header extends Component {
    render () {
        return (
            <header className="sticky top left right">
                <section>
                    <nav>
                        <div className="p-2">
                            <div className="logo">
                                <a href="#">
                                    <img src={ LogoSpotify } alt="logo spotify" />
                                </a>
                            </div>
                        </div>
                    </nav>
                </section>
            </header>
        );
    }
}
export default Header;