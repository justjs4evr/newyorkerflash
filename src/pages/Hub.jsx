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
                        <p class="story-card-excerpt">By Wednesday, the story had spread from Deokgo Hall through Dasan-gwan and up to the observation deck: Yejoon's father was being investigated. For what, no one agreed.</p>
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

                {/* Placeholder for visual balance */}
                <article class="story-card" style={{ opacity: 0.5, pointerEvents: 'none' }}>
                    <div class="story-card-content">
                        <h2 class="story-card-title">“An Open Heart”</h2>
                        <p class="story-card-excerpt">Sample excerpt just to fill the space visually.</p>
                        <div class="story-card-meta">
                            <span class="byline">By <span class="author">Jamil Jan Kochai</span></span>
                            <time class="date">August 14, 2025</time>
                        </div>
                    </div>
                    <div class="story-card-image">
                        <div style={{ background: '#eee', width: '100%', height: '200px' }}></div>
                    </div>
                </article>
            </div>
        </main>
    );
};

export default Hub;
