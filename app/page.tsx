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
          In the close-up photo, the center of the face is closer to the camera
          than the sides. Because of this, I think the features in the center
          appear larger than those near the sides, giving the face a more
          triangular-looking shape.
        </p>
        <p className="description follow-up">
          The second picture was taken from farther away, which seems to reduce
          the relative depth difference that makes the center look larger. This
          results in a flatter image. Zooming in mainly keeps me about the same
          size in the frame, making the change in perspective easier to compare.
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
          In the photo taken from farther away, the differences in depth across
          the building seem smaller compared with the total distance to the
          camera. I think this makes the building look flatter and more
          compressed. In the closer photo, parts of the building that are nearer
          to the camera appear larger than parts that are farther away, creating
          a stronger sense of depth.
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
          subject about the same size in every frame. I think the changing
          camera position changes the perspective, while the zoom makes up for
          the change in the subject&apos;s size. This seems to make the
          background shift around the subject even though the subject stays
          roughly the same size.
        </p>
      </section>

      <footer>CS 180 · Project 0 · Fall 2026</footer>
    </main>
  );
}
