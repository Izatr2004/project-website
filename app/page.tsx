export default function Home() {
  return (
    <main>
      <header className="page-header">
        <p className="course-label">CS 180 · Project 0 · Fall 2026</p>
        <h1>Becoming Friends with My Camera</h1>
        <p className="intro">
          A short exploration of how camera position and focal length affect
          perspective.
        </p>
      </header>

      <section>
        <h2>Part 1: Selfie — The Wrong Way vs. The Right Way</h2>

        <div className="image-pair">
          <figure>
            <a href="/images/part1-close.jpg" target="_blank" rel="noreferrer">
              <img
                src="/images/part1-close.jpg"
                alt="Close-up portrait taken with a wide lens"
              />
            </a>
            <figcaption>Close up</figcaption>
          </figure>

          <figure>
            <a href="/images/part1-zoom.jpg" target="_blank" rel="noreferrer">
              <img
                src="/images/part1-zoom.jpg"
                alt="Portrait taken from farther away while zoomed in"
              />
            </a>
            <figcaption>Farther away and zoomed in</figcaption>
          </figure>
        </div>

        <p className="description">
          In the close-up photo, the center of the face is much closer to the
          camera than the sides, so features like the nose appear exaggerated.
          Moving farther away reduces those relative depth differences. Zooming
          in restores similar framing while keeping the more natural-looking
          proportions.
        </p>
      </section>

      <section>
        <h2>Part 2: Architectural Perspective Compression</h2>

        <div className="image-pair">
          <figure>
            <a href="/images/part2-wide.jpg" target="_blank" rel="noreferrer">
              <img
                src="/images/part2-wide.jpg"
                alt="Glass building photographed from farther away with zoom"
                loading="lazy"
              />
            </a>
            <figcaption>Farther away and zoomed in</figcaption>
          </figure>

          <figure>
            <a href="/images/part2-zoom.jpg" target="_blank" rel="noreferrer">
              <img
                src="/images/part2-zoom.jpg"
                alt="The same glass building photographed from closer up"
                loading="lazy"
              />
            </a>
            <figcaption>Closer with a wider view</figcaption>
          </figure>
        </div>

        <p className="description">
          From farther away, the differences in depth across the building are
          small compared with the total camera distance, so the scene looks
          flatter and more compressed. From closer up, nearby parts of the scene
          appear larger relative to distant parts, creating a stronger sense of
          depth.
        </p>
      </section>

      <section>
        <h2>Part 3: The Dolly Zoom</h2>

        <figure className="dolly-zoom">
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
        </figure>

        <p className="description">
          I moved the camera backward while zooming in, trying to keep the main
          subject about the same size in every frame. The changing camera
          position alters the perspective while the zoom compensates for the
          subject&apos;s size, making the background appear to move around it.
        </p>
      </section>

      <footer>CS 180 · Project 0 · Fall 2026</footer>
    </main>
  );
}
