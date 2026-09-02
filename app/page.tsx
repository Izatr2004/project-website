const dollyFrames = [
  "/images/dolly-01.jpg",
  "/images/dolly-02.jpg",
  "/images/dolly-03.jpg",
  "/images/dolly-04.jpg",
  "/images/dolly-05.jpg",
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Back to the top">
          <span className="brand-mark" aria-hidden="true" />
          CS 180 / Project 0
        </a>
        <nav className="top-nav" aria-label="Project sections">
          <a href="#portrait">Portrait</a>
          <a href="#architecture">Architecture</a>
          <a href="#dolly">Dolly zoom</a>
        </nav>
      </header>

      <section className="hero shell" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="eyebrow">A study in perspective · Fall 2026</p>
          <h1 id="page-title">
            Becoming friends
            <span>with my camera.</span>
          </h1>
          <p className="hero-dek">
            Three small experiments in how camera position and focal length
            reshape a scene—even when the subject stays nearly the same size.
          </p>
          <div className="hero-meta" aria-label="Project details">
            <span>3 experiments</span>
            <span>9 photographs</span>
            <span>1 dolly zoom</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Featured photographs">
          <a
            className="hero-photo hero-photo-main"
            href="/images/part2-zoom.jpg"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/part2-zoom.jpg"
              alt="A glass building photographed with a zoomed-in lens"
            />
            <span>Perspective study / 02</span>
          </a>
          <a
            className="hero-photo hero-photo-inset"
            href="/images/part1-zoom.jpg"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/part1-zoom.jpg"
              alt="Portrait photographed from farther away with zoom"
            />
          </a>
          <div className="hero-stamp" aria-hidden="true">
            <span>CS</span>
            <strong>180</strong>
          </div>
        </div>
      </section>

      <nav className="chapter-nav shell" aria-label="Jump to an experiment">
        <a href="#portrait">
          <span>01</span>
          <strong>Portrait</strong>
          <small>Distance changes a face</small>
          <i aria-hidden="true">↘</i>
        </a>
        <a href="#architecture">
          <span>02</span>
          <strong>Architecture</strong>
          <small>Space appears compressed</small>
          <i aria-hidden="true">↘</i>
        </a>
        <a href="#dolly">
          <span>03</span>
          <strong>Dolly zoom</strong>
          <small>Movement meets focal length</small>
          <i aria-hidden="true">↘</i>
        </a>
      </nav>

      <section className="project-section shell" id="portrait">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Experiment 01 / Portrait</p>
            <h2>The wrong way.<br />The right way.</h2>
          </div>
          <p>
            The framing is similar, but the geometry is not. Moving the camera
            changes the relative distance from the lens to every facial feature.
          </p>
        </div>

        <div className="comparison-grid portrait-grid">
          <figure className="photo-card warm-card">
            <a href="/images/part1-close.jpg" target="_blank" rel="noreferrer">
              <img
                src="/images/part1-close.jpg"
                alt="Close-up portrait taken with a wide lens"
                loading="lazy"
              />
            </a>
            <figcaption>
              <span>01A</span>
              <div>
                <strong>Close up + wide</strong>
                <p>The nearby lens exaggerates depth across the face.</p>
              </div>
            </figcaption>
          </figure>

          <figure className="photo-card blue-card shifted-card">
            <a href="/images/part1-zoom.jpg" target="_blank" rel="noreferrer">
              <img
                src="/images/part1-zoom.jpg"
                alt="Portrait taken from farther away while zoomed in"
                loading="lazy"
              />
            </a>
            <figcaption>
              <span>01B</span>
              <div>
                <strong>Step back + zoom in</strong>
                <p>Greater distance gives the face a flatter, calmer rendering.</p>
              </div>
            </figcaption>
          </figure>
        </div>

        <aside className="observation">
          <span>What changed?</span>
          <p>
            At close range, the nose and center of the face are proportionally
            much closer to the camera than the ears and sides of the head.
            Stepping back reduces that relative depth difference. Zoom restores
            the composition, but it is camera position that restores the
            proportions.
          </p>
        </aside>
      </section>

      <section className="project-section architecture-section" id="architecture">
        <div className="shell">
          <div className="section-heading light-heading">
            <div>
              <p className="section-kicker">Experiment 02 / Architecture</p>
              <h2>Same building.<br />Different depth.</h2>
            </div>
            <p>
              Repeating the portrait experiment on a larger subject reveals how
              distance changes the apparent spacing between architectural planes.
            </p>
          </div>

          <div className="architecture-grid">
            <figure className="architecture-card">
              <a href="/images/part2-zoom.jpg" target="_blank" rel="noreferrer">
                <img
                  src="/images/part2-zoom.jpg"
                  alt="Zoomed-in view of a glass building from farther away"
                  loading="lazy"
                />
              </a>
              <figcaption>
                <span>Compressed</span>
                <strong>Farther away / zoomed in</strong>
              </figcaption>
            </figure>

            <div className="architecture-note">
              <span className="note-line" aria-hidden="true" />
              <p>
                From farther away, depth differences become small relative to
                the camera distance. The facade reads as flatter and its layers
                appear more tightly packed.
              </p>
              <span className="note-index">02</span>
            </div>

            <figure className="architecture-card lower-card">
              <a href="/images/part2-wide.jpg" target="_blank" rel="noreferrer">
                <img
                  src="/images/part2-wide.jpg"
                  alt="Wide view of the same glass building from closer up"
                  loading="lazy"
                />
              </a>
              <figcaption>
                <span>Expanded</span>
                <strong>Closer / wider view</strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="project-section shell dolly-section" id="dolly">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Experiment 03 / Dolly zoom</p>
            <h2>Move back.<br />Zoom in.</h2>
          </div>
          <p>
            Five stills combine into the classic Vertigo effect: the subject
            holds its scale while the world behind it seems to stretch.
          </p>
        </div>

        <div className="dolly-layout">
          <figure className="gif-card">
            <img
              className="screen-only"
              src="/images/dolly-zoom.gif"
              alt="Animated dolly zoom around a small mechanical model"
              loading="lazy"
            />
            <img
              className="print-only"
              src="/images/dolly-03.jpg"
              alt="Middle frame of the dolly zoom sequence"
            />
            <figcaption>
              <span className="live-dot" aria-hidden="true" />
              Five frames · looping animation
            </figcaption>
          </figure>

          <div className="dolly-copy">
            <p className="pull-quote">
              “The subject stays put. The background does the moving.”
            </p>
            <ol>
              <li>
                <span>01</span>
                Start close with a wider field of view.
              </li>
              <li>
                <span>02</span>
                Step backward while increasing the zoom.
              </li>
              <li>
                <span>03</span>
                Reframe the subject to keep its size nearly constant.
              </li>
            </ol>
            <p className="dolly-explanation">
              The changing camera position alters perspective while the changing
              focal length compensates for subject size. Their combination makes
              the background appear to expand and contract around the subject.
            </p>
          </div>
        </div>

        <div className="filmstrip" aria-label="Dolly zoom source frames">
          {dollyFrames.map((frame, index) => (
            <a key={frame} href={frame} target="_blank" rel="noreferrer">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <img
                src={frame}
                alt={`Dolly zoom frame ${index + 1} of ${dollyFrames.length}`}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <div>
            <span className="brand-mark" aria-hidden="true" />
            <strong>Becoming Friends with My Camera</strong>
          </div>
          <p>CS 180 · Project 0 · Fall 2026</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
