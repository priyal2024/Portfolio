import { useState, useRef } from "react";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Alert } from "@material-ui/lab";
import Image from "next/image";
import devPri from "../public/assets/priyal.png";
import emailjs from "@emailjs/browser";
import { data } from "../public/data";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [message, setMessage] = useState(false);
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const msg = useRef();
  console.log(process.env);

  const sendEmail = (e) => {
    e.preventDefault();
    if (name.current.value && email.current.value && msg.current.value) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_KEY,
          process.env.NEXT_PUBLIC_TEMPLATE_KEY,
          form.current,
          process.env.NEXT_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setMessage(true);
            name.current.value = "";
            email.current.value = "";
            msg.current.value = "";
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setMessage(false);
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Priyal Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">DevelopedByPriyal</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  href="Priyal_Resume.pdf"
                  download="Priyal_Resume"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  <button>Resume</button>
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Priyal Patel
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Web Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl mx-w-lg mx-auto">
              I&lsquo;m a front-end developer specializing in building beautiful
              and engaging web applications with great user experience. Join me
              down below and let&apos;s get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <AiFillLinkedin
              className="cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/priyal-patel20/",
                  "_blank"
                )
              }
            />
            <AiFillGithub
              className="cursor-pointer"
              onClick={() =>
                window.open("https://github.com/priyal2024 ", "_blank")
              }
            />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image
              src={devPri}
              alt="personalImg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I&apos;m a front-end developer from Cambridge, UK. I&apos;have
              more than two years of experience as a front-end developer. Since
              the beginning of my journey as a web developer, I&apos;ve build
              various web application using HTML,CSS, JS, ReactJs, etc. for
              <span className="text-teal-500"> startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use. I&apos;m very enthusiastic,
              passionate and desciplined about my work.
            </p>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Here are some of my work examples. It describes my starting to
              current journey in this domain.
            </p>
          </div>
          <div className="flex flex-row flex-wrap justify-between items-center gap-16 py-10 lg:flex-row lg:flex-wrap">
            {data.map((item) => (
              <div
                key={item.id}
                className="w-[520px] h-[520px] basis-auto flex-1 cursor-pointer bg-tranparent group perspective"
              >
                <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-1000 w-full h-full">
                  <div className="flex flex-col absolute backface-hidden w-full h-full">
                    <Image
                      alt=""
                      className="rounded-lg object-cover"
                      width={"100%"}
                      height={"520px"}
                      layout="responsive"
                      src={item.img}
                    />
                  </div>
                  <div className="md:text-xl absolute backface-hidden md:max-h-full my-rotate-y-180 w-full h-full bg-gray-100 overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-10">
                      <h1 className="text-3xl font-semibold">{item.name}</h1>
                      <p>{item.desc}</p>
                      <button
                        onClick={() => window.open(item.link, "_blank")}
                        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-full font-semibold absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
                      >
                        Watch Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="flex dark:bg-gray-900 lg:px-40 py-45 overflow:hidden">
        <div className="flex bg-gray-900 dark:rounded-md dark:bg-gray-100 rounded-md flex-1 flex-col justify-center items-center">
          <h1 className=" flex items-center justify-start text-3xl py-2 text-teal-500 font-medium md:text-6xl mt-10">
            Contact Me
          </h1>
          <form
            className="flex flex-col items-center justify-center py-10 h-full w-full"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="user_name"
              ref={name}
              placeholder="Your Name"
              className="mb-10 border border-gray-400 border-2 rounded-md p-5 h-14"
            />
            <input
              type="email"
              ref={email}
              name="user_email"
              placeholder="Your Email"
              className="mb-10 border border-gray-400 border-2 rounded-md p-5 h-14"
            />
            <input
              type="text"
              ref={msg}
              name="message"
              placeholder="Message"
              className="mb-8 border border-gray-400 border-2 rounded-md p-5 h-14"
            />
            <button
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 mb-3 py-2 rounded-md"
              type="submit"
            >
              Send
            </button>
            {message && (
              <span className="text-white mt-2 ml-2 mb-2 dark:text-teal-600">
                <Alert severity="success">{"Thanks, I'll reply ASAP :)"}</Alert>
              </span>
            )}
          </form>
        </div>
      </footer>
    </div>
  );
}
