import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const isHub = location.pathname === '/';

    if (!isHub) {
        // Simple Story Header
        return (
            <header class="site-header">
                <div class="logo-container">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h1 class="logo"><img src="/the-new-yorker-seeklogo.png" alt="The New Yorker" width="250" /></h1>
                    </Link>
                </div>
            </header>
        );
    }

    // Complex Hub Header
    return (
        <header class="site-header hub-header">
            <div class="header-top">
                <div class="header-left">
                    <span>$2.50</span> <strong>$1 a week for one year.</strong>
                </div>
                <div class="logo-container">
                    <h1 class="logo"><img src="/the-new-yorker-seeklogo.png" alt="The New Yorker" width="350" /></h1>
                </div>
                <div class="header-right">
                    <a href="#">Newsletter</a>
                    <a href="#">Sign In</a>
                    <button class="subscribe-btn">Subscribe</button>
                    <span class="search-icon">🔍</span>
                </div>
            </div>
            <nav class="main-nav">
                <ul>
                    <li><a href="#">The Latest</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Books & Culture</a></li>
                    <li><a href="#">Fiction & Poetry</a></li>
                    <li><a href="#">Humor & Cartoons</a></li>
                    <li><a href="#">Magazine</a></li>
                    <li><a href="#">Puzzles & Games</a></li>
                    <li><a href="#">Video</a></li>
                    <li><a href="#">Podcasts</a></li>
                    <li><a href="#">Goings On</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">100th Anniversary</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
