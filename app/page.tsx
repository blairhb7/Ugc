import VideoTile from '@/components/VideoTile';
import Hero from '@/components/Hero';

const reels = [
  { src: '/videos/Dot Card Video 1.mov', poster: '/img/poster-dot-card.png', kicker: 'Product demo', title: 'Dot Card' },
  { src: '/videos/Untitled.mov', poster: '/img/Untitled_thumb_v2.jpg', kicker: 'Reel', title: 'Product Review' },
  { src: '/videos/v1.mov', poster: '/img/poster-problem-solution.png', kicker: 'Reel', title: 'Gear Field Test' },
  { src: '/videos/ovis 1.mov', poster: '/img/ovis_1_thumb_v2.jpg', kicker: 'Reel', title: 'Ovis AI' },
  { src: '/videos/lockedin ai trial one.mov', poster: '/img/lockedin_ai_trial_one_thumb_v2.jpg', kicker: 'Reel', title: 'Lockedin AI' },
  { src: '/videos/11labs vid 1.mov', poster: '/img/11labs_vid_1_thumb_v2.jpg', kicker: 'Reel', title: 'Eleven Labs Product Showcase' },
  { src: '/videos/FINAL.mov', poster: '/img/Untitled_2_thumb_v2.jpg', kicker: 'Reel', title: 'Ayaneo Review' },
  { src: '/videos/Dot vid 2.mov', poster: '/img/Dot_vid_2_thumb_v2.jpg', kicker: 'Reel', title: 'Dot Card Brand Video' },
  { src: '/videos/Replit vid 2.mov', poster: '/img/ChatGPT Image Aug 22, 2026, 02_42_05 PM (2).png', kicker: 'Brand pitch', title: 'Replit Pitch' },


];

const openSlots = [
  { badge: '[REEL 5]', title: 'Brand Story Piece' },
  { badge: '[REEL 6]', title: 'Get-Ready-With-Me' },
];

const ads = [
  { id: 'EvbcgxhqQMo', brand: "Tate's Bake Shop", title: 'Cookies' },
  { id: 'OiZFPveocO0', brand: 'Rise', title: 'Nitro Cold Brew' },
  { id: 'dF3xNEm3yAY', brand: 'Popchips', title: 'Snack Spot' },
  { id: 'VtjhlByfoLM', brand: 'Breckenridge Brewery', title: 'Brewery' },
];

const craft = [
  { icon: '◐', title: 'Cinematography', body: 'Composition, lighting & camera movement with intent.' },
  { icon: '◧', title: 'Color Grading', body: 'Warm, high-contrast looks that set the mood.' },
  { icon: '◢', title: 'Editing', body: 'Pacing, rhythm & sound design that hold attention.' },
  { icon: '✍', title: 'Storytelling', body: 'Structure & narrative that make products stick.' },
];

const services = [
  { num: '01', title: 'Camera & Gear Reviews', body: 'Hands-on reviews that make the spec sheet feel real — shot on the gear itself.' },
  { num: '02', title: 'AI Product Demos', body: 'Clear, compelling walkthroughs of AI tools — turning abstract software into a story people get.' },
  { num: '03', title: 'Event Vlogs', body: 'Documentary-style event coverage with the pacing and polish of a short film.' },
  { num: '04', title: 'Tech Unboxings', body: 'First-impression reveals with texture, sound and mood — not just a box on a table.' },
  { num: '05', title: 'Brand Story Pieces', body: "Narrative-driven films that carry a brand's voice and make people feel something." },
];

export default function Home() {
  return (
    <>
      <div className="grain" />

      <nav className="nav">
        <a href="#top" className="anton navLogo">Blair Chappell</a>
        <div className="navlinks">
          <a href="#work">Work</a>
          <a href="#ads">Ads</a>
          <a href="#services">What I Do</a>
          <a href="#craft">Craft</a>
          <a href="#contact" className="isContact">Contact</a>
        </div>
      </nav>

   <Hero />

      <section id="work" className="section">
        <div className="wrap">
          <div className="secHead">
            <div>
              <span className="serif eyebrow">selected frames</span>
              <h2 className="anton h2">The Work</h2>
            </div>
            <p className="secHeadNote">
              Vertical short-form, built for the feed. <span>Hover to preview, tap to play with sound.</span>
            </p>
          </div>
          <div className="workgrid">
            {reels.map((r) => (
              <VideoTile key={r.src} {...r} />
            ))}
           
          </div>
          <p className="note">↳ Two 9:16 slots still open — drop in a Reel embed or a cover image linking to the Reel.</p>
        </div>
      </section>

      <section id="ads" className="ads">
        <div className="adsGlow" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="adsHead">
            <div className="adsBadge">
              <span className="rule" />
              <span className="label">Made with FilmDuo · Advertisement Work</span>
              <span className="rule" />
            </div>
            <h2 className="anton adsTitle">
              Ads people <span className="accent">forget</span> to <span className="outline">skip.</span>
            </h2>
            <p className="adsLede">
              The commercial work I&apos;m proudest of —{' '}
              <span className="serif">made to sell, built to stop the thumb.</span>
            </p>
          </div>
          <div className="grid2">
            {ads.map((ad) => (
              <article key={ad.id} className="adCard">
                <div className="adFrame">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${ad.id}`}
                    title={`${ad.brand} — ${ad.title}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="adMeta">
                  <div>
                    <div className="adBrand">{ad.brand}</div>
                    <h3 className="anton adTitle">{ad.title}</h3>
                  </div>
                  <span className="adCredit">
                    Shot &amp; edited<br />· FilmDuo
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="craft" className="section">
        <div className="wrap">
          <div className="craftgrid">
            <div>
              <span className="serif eyebrow">the craft behind it</span>
              <h2 className="anton craftTitle">
                Built on<br />real film<br />work
              </h2>
              <p className="craftText">
                I&apos;m a videographer who got hooked on making tech look <em>worth wanting</em> — the kind of content
                that makes you want the thing before you know what it does. Cameras, AI tools, gadgets: if it&apos;s got a
                story, I&apos;ll find the angle.
              </p>
              <p className="craftText">
                Real sets, real deadlines, real clients — I bring that same discipline to every piece: intentional
                lighting, deliberate color, and edits cut for feeling, not just for the algorithm.
              </p>
              <a href="#contact" className="btn craftCta">Work with me</a>
              <div className="craftCards">
                {craft.map((c) => (
                  <div key={c.title} className="card">
                    <div className="anton cardIcon">{c.icon}</div>
                    <h4>{c.title}</h4>
                    <p>{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="ph headshot">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/blair.jpeg" alt="Blair Chappell" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="wrap">
          <span className="serif eyebrow">how I can help</span>
          <h2 className="anton h2" style={{ margin: '8px 0 46px' }}>What I Do</h2>
          <div className="grid3">
            {services.map((s) => (
              <div key={s.num} className="svcCell">
                <div className="anton svcNum">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
            <div className="svcCta">
              <p className="script">have something else in mind?</p>
              <a href="#contact">Let&apos;s talk →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contactGlow" />
        <div className="contactInner">
          <span className="script contactScript">let&apos;s make something</span>
          <h2 className="anton contactTitle">
            Open to<br />collabs
          </h2>
          <p className="contactLede">
            Building something in tech or AI and want it shot like it matters? I&apos;m currently taking on brand
            collaborations — tell me about your product.
          </p>
          <a href="mailto:blairugc7@gmail.com" className="anton email">blairugc7@gmail.com</a>
          <div className="socials">
            <a href="https://instagram.com/blair.fwd" target="_blank" rel="noopener noreferrer">Instagram — @blair.fwd</a>
            <span className="sep">/</span>
            <a href="https://tiktok.com/@blairfwd" target="_blank" rel="noopener noreferrer">TikTok — @blairfwd</a>
            <span className="sep">/</span>
            <a href="https://youtube.com/@blairfwd" target="_blank" rel="noopener noreferrer">YouTube — @blairfwd</a>
          </div>
        </div>
        <footer className="footer">
          <span>Blair Chappell — Videographer &amp; UGC Creator</span>
          <span>© 2026 · Open to collaborations</span>
        </footer>
      </section>
    </>
  );
}
