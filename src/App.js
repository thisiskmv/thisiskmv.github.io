import {  useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import resume from "./media/kamal-verma-resume.pdf";
import html5 from "./images/html5.png";
import css3 from "./images/css3.png";
import javascript from "./images/javascript.png";
import typescript from "./images/typescript.png";
import bootstrap from "./images/bootstrap.png";
import react from "./images/react.png";
import firebase from "./images/firebase.png";
import git from "./images/git.png";
import npm from "./images/npm.png";
import command from "./images/command.png";
import vscode from "./images/vs-code.png";
import slack from "./images/slack.png";
import instagram from "./images/instagram.png";

const elemToggleFunc = (elem) => {
  elem.classList.toggle("active");
};

function App() {
  const [state, setState] = useState(false);
  const form = useRef(null);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector("[data-header]");
      const goTopBtn = document.querySelector("[data-go-top]");
      const scrollPosition = window.scrollY;

      if (scrollPosition >= window.innerHeight) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
      }
    });

    /**
     * Navbar toggle
     */
    const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
    const navbar = document.querySelector("[data-navbar]");

    navToggleBtn.addEventListener("click", () => {
      elemToggleFunc(navToggleBtn);
      elemToggleFunc(navbar);
      elemToggleFunc(document.body);
    });

    /**
     * Skills toggle
     */
    const toggleBtnBox = document.querySelector("[data-toggle-box]");
    const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
    const skillsBox = document.querySelector("[data-skills-box]");

    for (let i = 0; i < toggleBtns.length; i++) {
      toggleBtns[i].addEventListener("click", () => {
        elemToggleFunc(toggleBtnBox);
        for (let i = 0; i < toggleBtns.length; i++) {
          elemToggleFunc(toggleBtns[i]);
        }
        elemToggleFunc(skillsBox);
      });
    }

    /**
     * Dark & light theme toggle
     */
    const themeToggleBtn = document.querySelector("[data-theme-btn]");

    themeToggleBtn.addEventListener("click", () => {
      elemToggleFunc(themeToggleBtn);
      // setState(true)

      if (themeToggleBtn.classList.contains("active")) {
        document.querySelector("#top").classList.remove("dark_theme");
        document.querySelector("#top").classList.add("light_theme");

        // localStorage.setItem("theme", "light_theme");
      } else {
        document.querySelector("#top").classList.add("dark_theme");
        document.querySelector("#top").classList.remove("light_theme");

        // localStorage.setItem("theme", "dark_theme");
      }
    });

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light_theme") {
      themeToggleBtn.classList.add("active");
      document.querySelector("#top").classList.remove("dark_theme");
      document.querySelector("#top").classList.add("light_theme");
    } else {
      themeToggleBtn.classList.remove("active");
      document.querySelector("#top").classList.remove("light_theme");
      document.querySelector("#top").classList.add("dark_theme");
    }
  }, []);

  const themeTog = () => {
    setState(!state);
  };

  console.log(state);

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1fMmTmSzdIJsfrblx5IRA_iIAi9AeXNJv/view?usp=sharing",
      "_blank"
    );
  };

  const resetForm = () => {
    const formElement = form.current;
    if (formElement) {
      formElement.reset();
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formElement = form.current;
    const inputs = formElement.querySelectorAll("input, textarea");

    let isValid = true;
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
        setFormError("Please fill in all fields.");
      }
    });

    if (isValid) {
      emailjs
        .sendForm(
          "service_j8eks6s",
          "template_1q184fl",
          formElement,
          "uqKVng8q2vcAoy-Wu"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Email send successfully");
            resetForm();
            setFormError("");
          },
          (error) => {
            console.log(error.text);
            toast.error("Email send failed");
          }
        );
    }
  };

  return (
    <div
      id="top"
      className="dark_theme"
      style={{ backgroundColor: state ? "rgb(230,230,230)" : "rgb(18,18,18)" }}
    >
      <header className="header" data-header="">
        <div className="container">
          <h1 className="h1 logo">
            <a href="#">
              Kamal Verma<span>.</span>
            </a>
          </h1>
          <div className="navbar-actions">
            <button
              className="theme-btn"
              aria-label="Change Theme"
              title="Change Theme"
              data-theme-btn=""
              onClick={themeTog}
            >
              <span className="icon" />
            </button>
          </div>
          <button
            className="nav-toggle-btn"
            aria-label="Toggle Menu"
            title="Toggle Menu"
            data-nav-toggle-btn=""
          >
            <span className="one" />
            <span className="two" />
            <span className="three" />
          </button>

          <nav className="navbar" data-navbar="">
            <ul className="navbar-list">
              <li>
                <a href="#home" className="navbar-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="navbar-link">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="navbar-link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#portfolio" className="navbar-link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="navbar-link">
                  Contact
                </a>
              </li>
              <li onClick={openResume}>
                <a
                  // href={resume}
                  download="kamal-verma-resume"
                  className="navbar-link"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div id="main">
          <div
            id="sec"
            style={{
              backgroundColor: state ? "rgb(230,230,230)" : "rgb(18,18,18)",
            }}
          >
            <div id="left"></div>
            <div id="right"></div>

            <div className="para">
              <p style={{ color: state ? "black" : "white" }}>
                Hello there! As a Full Stack Web Developer, I'm driven by the
                art of turning complex concepts into elegant and intuitive web
                solutions. With a creative mindset and a passion for
                problem-solving, I excel in both front-end and back-end
                development. I take pride in writing clean code and building
                responsive, user-friendly websites that make a positive impact.
                Let's collaborate and build something exceptional that leaves a
                mark on the digital world!
              </p>
              <a
                href="#contact"
                data-text="Get in touch"
                className="btn1 btn-primary1"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
        {/* <ul className="hero-social-list">

          <li>
            <a href="https://github.com/iamFaizee" target='_blank' className="hero-social-link">
              <ion-icon name="logo-github" />
              <div className="tooltip">Github</div>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/iamfaizankhan/" target='_blank' className="hero-social-link">
              <ion-icon name="logo-linkedin" />
              <div className="tooltip">Linkedin</div>
            </a>
          </li>
        </ul> */}
        <article className="container">
          {/* - #HERO*/}

          {/* <section className="hero" id="home"> */}
          {/* <figure className="hero-banner">
              <picture>
                <source
                  srcSet={splash}
                  media="(min-width: 768px)"
                />
                <source
                  srcSet={heroBannerMd}
                  media="(min-width: 500px)"
                />
                <img
                  src={heroBannerSm}
                  alt="A man in a blue shirt with a happy expression"
                  className="w-100"
                />
              </picture>
            </figure> */}

          {/* <div className="hero-content"> */}
          {/* <h2 className="h2 hero-title">
                We Design &amp; Build Creative Products
              </h2> */}

          {/* <a href="#contact" className="btn btn-primary">
                Get in touch
              </a> */}
          {/* </div> */}
          {/* <ul className="hero-social-list">

              <li>
                <a href="https://github.com/iamFaizee" target='_blank' className="hero-social-link">
                  <ion-icon name="logo-github" />
                  <div className="tooltip">Github</div>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/iamfaizankhan/" target='_blank' className="hero-social-link">
                  <ion-icon name="logo-linkedin" />
                  <div className="tooltip">Linkedin</div>
                </a>
              </li>
            </ul> */}
          {/* <a href="#stats" className="scroll-down">
              Scroll
            </a> */}
          {/* </section> */}

          {/* - #STATS*/}
          {/* <section className="stats" id="stats">
            <ul className="stats-list">
              <li>
                <a href="#" className="stats-card">
                  <div className="card-icon">
                    <img
                      src={statsCardIcon1}
                      alt="Badge icon"
                    />
                  </div>
                  <h2 className="h2 card-title">
                    12+ <strong>Years of Experience</strong>
                  </h2>
                  <ion-icon name="chevron-forward-outline" />
                </a>
              </li>
              <li>
                <a href="#" className="stats-card">
                  <div className="card-icon">
                    <img
                      src={statsCardIcon2}
                      alt="Checkmark icon"
                    />
                  </div>
                  <h2 className="h2 card-title">
                    230+ <strong>Completed Projects</strong>
                  </h2>
                  <ion-icon name="chevron-forward-outline" />
                </a>
              </li>
              <li>
                <a href="#" className="stats-card">
                  <div className="card-icon">
                    <img
                      src={statsCardIcon3}
                      alt="Peoples rating icon"
                    />
                  </div>
                  <h2 className="h2 card-title">
                    95+ <strong>Happy Clients</strong>
                  </h2>
                  <ion-icon name="chevron-forward-outline" />
                </a>
              </li>
            </ul>
          </section> */}

          {/* - #ABOUT*/}

          <section className="about" id="about">
            <figure className="about-banner">
              <img
                style={{ width: "450px", height: "450px", borderRadius: "50%" }}
                src={require("./images/kmv.jpg")}
                alt="A man in a alice blue shirt with a thinking expression"
                className="w-100"
              />
            </figure>
            <div className="about-content section-content">
              <p className="section-subtitle">About me</p>
              <h2 className="h3 section-title">
                Need a Creative Product? I can Help You!
              </h2>
              <p className="section-text">
                Hi! I’m Kamal Verma, and I’m a developer who has passion for
                building clean web applications with intuitive functionalities.
                I enjoy the process of turning ideas into reality using creative
                solutions. I’m always curious about learning new skills, tools,
                and concepts. In addition to working on various solo full stack
                projects, I have worked with creative teams, which involves
                daily stand-ups and communications, source control, and project
                management.
              </p>
              <div className="btn-group" onClick={openResume}>
                {/* <button className="btn btn-secondary">Hire me</button> */}
                <a  download="kamal-verma-resume">
                  <button className="btn btn-primary" >
                    Download cv
                  </button>
                </a>
              </div>
            </div>
            <ul className="hero-social-list">
              <li>
                <a
                  href="https://github.com/iamFaizee"
                  target="_blank"
                  className="hero-social-link"
                >
                  <ion-icon name="logo-github" />
                  {/* <div className="tooltip">Github</div> */}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/iamfaizankhannnnnnnn/"
                  target="_blank"
                  className="hero-social-link"
                >
                  <ion-icon name="logo-linkedin" />
                  {/* <div className="tooltip">Linkedin</div> */}
                </a>
              </li>
            </ul>
          </section>

          {/* - #SKILLS*/}

          <section className="skills" id="skills">
            <div className="skills-content section-content">
              <p className="section-subtitle">My skills</p>
              <h2 className="h3 section-title">
                What My Programming Skills Included?
              </h2>
              <p className="section-text">
                I develop simple, intuitive and responsive user interface that
                helps users get things done with less effort and time with those
                technologies.
              </p>
              <div className="skills-toggle" data-toggle-box="">
                <button className="toggle-btn active" data-toggle-btn="">
                  Skills
                </button>
                <button className="toggle-btn" data-toggle-btn="">
                  Tools
                </button>
              </div>
            </div>
            <div className="skills-box" data-skills-box="">
              <ul className="skills-list">
                <li>
                  <div className="skill-card">
                    <div className="tooltip">HTML5</div>
                    <div className="card-icon">
                      <img src={html5} alt="HTML5 logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">CSS3</div>
                    <div className="card-icon">
                      <img src={css3} alt="CSS3 logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">JavaScript</div>
                    <div className="card-icon">
                      <img src={javascript} alt="JavaScript logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">TypeScript</div>
                    <div className="card-icon">
                      <img src={typescript} alt="TypeScript logo" />
                    </div>
                  </div>
                </li>
                {/* <li>
                  <div className="skill-card">
                    <div className="tooltip">jQuery</div>
                    <div className="card-icon">
                      <img src={jQuery} alt="jQuery logo" />
                    </div>
                  </div>
                </li> */}
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Bootstrap</div>
                    <div className="card-icon">
                      <img src={bootstrap} alt="Bootstrap logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">React</div>
                    <div className="card-icon">
                      <img src={react} alt="React logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">React-Native</div>
                    <div className="card-icon">
                      <img
                        src={require("./images/react-native.png")}
                        alt="React-Native logo"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Firebase</div>
                    <div className="card-icon">
                      <img src={firebase} alt="Firebase logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Node JS</div>
                    <div className="card-icon">
                      <img
                        src={require("./images/nodejs.png")}
                        alt="NodeJS logo"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Express JS</div>
                    <div className="card-icon">
                      {/* <img src={} alt="expressjs logo" /> */}
                      {state ? (
                        <img
                          src={require("./images/express.png")}
                          alt="expressjs logo"
                        />
                      ) : (
                        <img
                          src={require("./images/express-white.png")}
                          alt="changed image"
                        />
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">MongoDB</div>
                    <div className="card-icon">
                      <img
                        src={require("./images/mongodb.png")}
                        alt="mongodb logo"
                      />
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="tools-list">
                {/* <li>
                  <div className="skill-card">
                    <div className="tooltip">Ajax</div>
                    <div className="card-icon">
                      <img src={ajax} alt="Ajax logo" />
                    </div>
                  </div>
                </li> */}
                {/* <li>
                  <div className="skill-card">
                    <div className="tooltip">Gulp</div>
                    <div className="card-icon">
                      <img src={gulp} alt="Gulp logo" />
                    </div>
                  </div>
                </li> */}
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Git</div>
                    <div className="card-icon">
                      <img src={git} alt="Git logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Github</div>
                    <div className="card-icon">
                      {state ? (
                        <img
                          src={require("./images/github.png")}
                          alt="Github logo"
                        />
                      ) : (
                        <img
                          src={require("./images/github-white.png")}
                          alt="github image"
                        />
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Npm</div>
                    <div className="card-icon">
                      <img src={npm} alt="Npm logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Command Line</div>
                    <div className="card-icon">
                      <img src={command} alt="Command Line logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">VS Code</div>
                    <div className="card-icon">
                      <img src={vscode} alt="VS Code logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Android Studio</div>
                    <div className="card-icon">
                      <img
                        src={require("./images/android-studio.png")}
                        alt="android-studio logo"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Postman</div>
                    <div className="card-icon">
                      <img
                        src={require("./images/postman.png")}
                        alt="postman logo"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Slack</div>
                    <div className="card-icon">
                      <img src={slack} alt="Slack logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Figma</div>
                    <div className="card-icon">
                      <img
                        src={require("./images/figma.png")}
                        alt="figma logo"
                      />
                    </div>
                  </div>
                </li>
                {/* <li>
                  <div className="skill-card">
                    <div className="tooltip">Adobe XD</div>
                    <div className="card-icon">
                      <img src={adobexd} alt="Adobe XD logo" />
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </section>
          {/* 
  - #PROJECTS
*/}
          <section className="project" id="portfolio">
            <ul className="project-list">
              <li>
                <div className="project-content section-content">
                  <p className="section-subtitle">My Works</p>
                  <h2 className="h3 section-title">
                    See My Works Which Will Amaze You!
                  </h2>
                  <p className="section-text">
                    We develop the best quality website that serves for the
                    long-term. Well-documented, clean, easy and elegant
                    interface helps any non-technical clients.
                  </p>
                </div>
              </li>
              <li>
                <div className="project-card">
                  <figure className="card-banner">
                    <img
                      src={require("./images/pharmaeasy.png")}
                      className="w-100"
                      alt="On a Blue background, a Wacom and a mouse."
                    />
                  </figure>
                  <div className="card-content">
                    <a
                      href="https://pharmeasy-web-site-clone.netlify.app"
                      target="_blank"
                      className="h4 card-title"
                    >
                      PharmaEasy
                    </a>
                    <a
                      href="https://github.com/VinodKumarGgithub/PharmaEasy"
                      target="_blank"
                      className="publish-date"
                      dateTime="2022-04"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="project-card">
                  <figure className="card-banner">
                    <img
                      src={require("./images/images/adventour.png")}
                      className="w-100"
                      alt="On a Blue background, a Wacom and a mouse."
                    />
                  </figure>
                  <div className="card-content">
                    <a
                      href="https://faballey-web.netlify.app/"
                      target="_blank"
                      className="h4 card-title"
                    >
                      Faballey Clothing Brand
                    </a>
                    <a
                      href="https://github.com/BabyGupta05/faballey"
                      target="_blank"
                      className="publish-date"
                      dateTime="2022-04"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="project-card">
                  <figure className="card-banner">
                    <img
                      src={require("./images/images/bigbasket.png")}
                      className="w-100"
                      alt="On a dark liver background, Airport luggage car carrying a luggage."
                    />
                  </figure>
                  <div className="card-content">
                    <a
                      href="http://spotify-two-virid.vercel.app/"
                      target="_blank"
                      className="h4 card-title"
                    >
                      Spotify Music App
                    </a>
                    <a
                      href="https://github.com/thisiskmv/Spotify-Clone"
                      target="_blank"
                      className="publish-date"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="project-card">
                  <figure className="card-banner">
                    <img
                      src={instagram}
                      className="w-100"
                      alt="A Cassette tape on a mellow apricot background."
                    />
                  </figure>
                  <div className="card-content">
                    <a
                      href="https://instagram-clone-ten-indol.vercel.app/"
                      target="_blank"
                      className="h4 card-title"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://github.com/thisiskmv/instagram-clone"
                      target="_blank"
                      className="publish-date"
                      dateTime="2022-04"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="project-card">
                  <figure className="card-banner">
                    <img
                      src={require("./images/kmvPortfolio.png")}
                      className="w-100"
                      alt="Blue digital watch on a dark liver background."
                    />
                  </figure>
                  <div className="card-content">
                    <a href="#" target="_blank" className="h4 card-title">
                      Portfolio
                    </a>
                    <a
                      href="https://github.com/thisiskmv/thisiskmv.github.io"
                      target="_blank"
                      className="publish-date"
                      dateTime="2022-04"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="project-card">
                  <figure className="card-banner">
                    <img
                      src={require("./images/images/expedia.png")}
                      className="w-100"
                      alt="A macintosh on a yellow background."
                    />
                  </figure>
                  <div className="card-content">
                    <a
                      href="https://electon-abhi21121211.vercel.app/"
                      target="_blank"
                      className="h4 card-title"
                    >
                      Electon Website
                    </a>
                    <a
                      href="https://github.com/thisiskmv/Electon-clone"
                      target="_blank"
                      className="publish-date"
                      dateTime="2022-04"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </li>

              {/* <li>
                <a href="#" className="project-card">
                  <figure className="card-banner">
                    <img
                      src={project6}
                      className="w-100"
                      alt="On a yellow background, a digital watch and a glass."
                    />
                  </figure>
                  <div className="card-content">
                    <h3 className="h4 card-title">Lorem Ipsum Dolor 06</h3>
                    <time className="publish-date" dateTime="2022-04">
                      April 2022
                    </time>
                  </div>
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="project-card">
                  <figure className="card-banner">
                    <img
                      src={project7}
                      className="w-100"
                      alt="A fujifilm instant camera on a dark electric blue background."
                    />
                  </figure>
                  <div className="card-content">
                    <h3 className="h4 card-title">Lorem Ipsum Dolor 07</h3>
                    <time className="publish-date" dateTime="2022-04">
                      April 2022
                    </time>
                  </div>
                </a>
              </li> */}
              {/* <li>
                <button className="load-more">Load more work</button>
              </li> */}
            </ul>
          </section>
          <section className="contact" id="contact">
            <div className="contact-content section-content">
              <p className="section-subtitle">Contact</p>
              <h2 className="h3 section-title">
                Have You Any Project? Please Drop a Message
              </h2>
              <p className="section-text">
                Get in touch and let me know how i can help. Fill out the form
                and i’ll be in touch as soon as possible.
              </p>
              <ul className="contact-list">
                <li className="contact-list-item">
                  <div className="contact-item-icon">
                    <ion-icon name="location-outline" />
                  </div>
                  <div className="wrapper">
                    <h3 className="h4 contact-item-title">Address:</h3>
                    <address className="contact-info">
                      Sadulpur Churu, Rajasthan, India - 110027
                    </address>
                  </div>
                </li>
                <li className="contact-list-item">
                  <div className="contact-item-icon">
                    <ion-icon name="call-outline" />
                  </div>
                  <div className="wrapper">
                    <h3 className="h4 contact-item-title">Phone:</h3>
                    <a href="tel:01234567789" className="contact-info">
                      (+91) 7073739289
                    </a>
                    <a href="tel:09765432200" className="contact-info">
                      {/* (09) 765 432 200 */}
                    </a>
                  </div>
                </li>
                <li className="contact-list-item">
                  <div className="contact-item-icon">
                    <ion-icon name="mail-outline" />
                  </div>
                  <div className="wrapper">
                    <h3 className="h4 contact-item-title">Email:</h3>
                    <a href="mailto:info@jack.com" className="contact-info">
                      thisiskmv@gmail.com
                    </a>
                    <a href="mailto:support@jack.com" className="contact-info">
                      {/* support@jack.com */}
                    </a>
                  </div>
                </li>
                <li>
                  <ul className="contac-social-list">
                    <li>
                      <a
                        href="https://github.com/thisiskmv"
                        target="_blank"
                        className="contact-social-link"
                      >
                        {/* <div className="tooltip">Github</div> */}
                        <ion-icon name="logo-github" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/iamfaizankhannnnnn/"
                        target="_blank"
                        className="contact-social-link"
                      >
                        {/* <div className="tooltip">Linkedin</div> */}
                        <ion-icon name="logo-linkedin" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <form
              action=""
              className="contact-form"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="form-wrapper">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="from_name"
                    id="name"
                    required=""
                    placeholder="e.g John Doe"
                    className="input-field"
                  />
                  <ion-icon name="person-circle" />
                </div>
              </div>
              <div className="form-wrapper">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="from_email"
                    id="email"
                    required=""
                    placeholder="e.g johndoe@mail.com"
                    className="input-field"
                  />
                  <ion-icon name="mail" />
                </div>
              </div>
              <div className="form-wrapper">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <div className="input-wrapper">
                  <input
                    type="tel"
                    name="from_phone"
                    id="phone"
                    required=""
                    placeholder="Phone Number"
                    className="input-field"
                  />
                  <ion-icon name="call" />
                </div>
              </div>
              <div className="form-wrapper">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <div className="input-wrapper">
                  <textarea
                    name="message"
                    id="message"
                    required=""
                    placeholder="Write message..."
                    className="input-field"
                    defaultValue={""}
                  />
                  <ion-icon name="chatbubbles" />
                </div>
              </div>
              {formError && <p className="form-error">{formError}</p>}
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
            <Toaster />
          </section>
        </article>
      </main>
      <a href="#top" className="go-top" data-go-top="" title="Go to Top">
        <ion-icon name="arrow-up" />
      </a>
    </div>
  );
}

export default App;
