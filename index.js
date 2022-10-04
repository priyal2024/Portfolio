import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Priyal Patel Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="min-h-screen">
          <nav>

            <h1>Portfolio</h1>
            <ul>
              <li>
                <BsFillMoonStarsFill />
              </li>
              <li><a href="#">Resume</a></li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
