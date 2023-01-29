import Layout from "./components/Layout";
import Frame from "./components/Frame";

function App() {
  return (
    <Layout>
      <h1 className="text-5xl font-semibold">[adult swim bump generator]</h1>
      <p className="mt-4 text-xl">
        Because everyone wants to mock [as] aesthetic.
      </p>

      <Frame />

      <section className="mt-16">
        <div className="text-center">
          <h2 className="text-4xl font-semibold">What's a bump?</h2>
          <blockquote
            cite="Someone at [as]"
            className="text-lg mt-2 text-stone-400 font-normal"
          >
            Are you lurking the internet for coming here and not knowing what a
            bumper is? ~ [as] staff
          </blockquote>
        </div>

        <div className="text-lg mt-4 text-justify text-stone-200">
          <p>
            In broadcasting, a commercial bumper, ident bumper, or break-bumper
            (often shortened to bump){" "}
            <span className="font-semibold text-white">
              {" "}
              is a brief announcement, usually two to fifteen seconds in length
              that can contain a voice over, placed between a pause in the
              program and its commercial break,and vice versa.
            </span>{" "}
            The host, the program announcer, or a continuity announcer states
            the title (if any) of the presentation, the name of the program, and
            the broadcast or cable network, though not necessarily in that
            order. On children's television networks, they are sometimes called
            external eyecatches due to the resemblance of internal eyecatches in
            anime and there is usually no voice over, but some bumpers do
            feature one. Bumper music, often a recurring signature or theme
            music segment, is nearly always featured. Bumpers can vary from
            simple text to short films.{" "}
            <span className="font-semibold text-white">
              <a href="https://en.wikipedia.org/wiki/Bumper_(broadcasting)">
                [source: Wikipedia]
              </a>
            </span>
          </p>

          <p className="mt-4">
            The Adult Swim Bumpers were originally shots of senior citizens
            swimming and doing random pool-related activities in public pools.
            The lifeguard is often heard talking through a megaphone and saying
            things such as "Adult Swim, all kids out of the pool!", and
            announcing the forthcoming TV show. The logo was, basically, "ADULT
            SWIM" written in large red/or yellow capital letters (or a alternate
            version of the logo featured "adult swim" in red lowercase letters
            in a black circle with a yellow penumbra, but sometimes the letters
            can be rarely in capital). On Saturdays for the Action Block
            starting February 23, 2002, the shows were announced by a computer
            generated voice and the bumps featured clips of the shows. Adult
            Swim's main theme music was "D-Code", performed by Melbourne artist
            Dust Devil. The song was a remix of "Mambo Gallego" by Tito Puente,
            Sr.{" "}
            <span className="font-semibold text-white">
              <a href="https://adultswim.fandom.com/wiki/Bumps">
                [source: Adult Swim Wiki]
              </a>
            </span>
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default App;
