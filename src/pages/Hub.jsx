import React from 'react';
import { Link } from 'react-router-dom';

const Hub = () => {
    return (
        <main class="hub-container">
            <header class="hub-hero">
                <h1 class="hub-title">Flash Fiction</h1>
                <p class="hub-subtitle">A series of very short stories for the summer.</p>
            </header>

            <div class="story-grid">
                <article class="story-card">
                    <div class="story-card-content">
                        <h2 class="story-card-title"><Link to="/story">“The Reliable Source”</Link></h2>
                        <div class="story-card-meta">
                            <span class="byline">By <span class="author">Doyoun Choi, KMLA 30th waver</span></span>
                            <time class="date">February 10, 2026</time>
                        </div>
                    </div>
                    <div class="story-card-image">
                        <Link to="/story">
                            <img src="/kmla_hero_final.webp" alt="Illustration for The Reliable Source" />
                        </Link>
                    </div>
                </article>
            </div>
        </main>
    );
};

export default Hub;
