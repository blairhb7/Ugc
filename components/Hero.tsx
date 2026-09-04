'use client';

import { useState } from 'react';

export default function Hero() {
  const [muted, setMuted] = useState(true);

  return (
    <header id="top" className="hero">
      {/* blurred still of the pitch clip — gives the hero its color without cropping the video */}
      <div className="heroBlur" />
      <div className="heroScrim" />

      <div className="heroSplit">
        <div>
          <div className="kicker rise">
            <span className="kickerRule" />
            <span className="kickerText">Videographer &amp; UGC Creator</span>
          </div>

          <h1 className="anton heroName rise">
            Blair<br />Chappell
          </h1>

          <div className="tags rise">
            <span>Tech</span><span className="dot">·</span>
            <span>AI</span><span className="dot">·</span>
            <span>Camera Reviews</span><span className="dot">·</span>
            <span>Event Vlogs</span>
          </div>

          <p className="lede rise">
            I make tech look <span className="serif">worth wanting</span> — ads, reviews and stories for AI tools,
            cameras and the brands building what&apos;s next.
          </p>

          <div className="ctaRow rise">
            <a href="#contact" className="btn">Let&apos;s collaborate</a>
            <a href="#work" className="btnGhost">View work</a>
          </div>

          <div className="status rise">
            <span className="statusDot" />
            <span>Available for brand collaborations</span>
          </div>
        </div>

        <div className="heroReel rise">
          <div className="heroReelFrame">
            <video
              src="/videos/pitch video final.mp4"
              poster="/img/poster-the-pitch.png"
              autoPlay
              muted={muted}
              controls
              playsInline
              preload="metadata"
            />
            <div className="heroReelScrim" />

            <div className="heroReelBadge">
              <span className="heroReelBadgeDot" />
              <span>The pitch</span>
            </div>

            <button
              type="button"
              className="soundBtn"
              onClick={(e) => {
                const next = !muted;
                setMuted(next);
                const v = e.currentTarget.parentElement?.querySelector('video');
                if (v) {
                  v.muted = next;
                  if (!next) v.play().catch(() => {});
                }
              }}
            >
              {muted ? 'Sound off' : 'Sound on'}
            </button>

            <div className="heroReelCaption">
              <p className="serif">who I am, in 40 seconds</p>
              <p>My work, my process, and the brands I want to build with.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="scrollHint">Scroll</div>
    </header>
  );
}
