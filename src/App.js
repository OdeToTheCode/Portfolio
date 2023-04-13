import {Footer, Header, Wrapper } from "./components"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/global.css"
import headShot from "./assets/images/editedHeadShot.jpeg"

function App() {
  const firstName = "Jacob"
  const lastName = "Figueroa"
  const userName = "OdeToTheCode"

  const page = window.location.href.includes("3000") ? window.location.href.split("3000/")[1] : window.location.href.split(".com/")[1]


  return (
    <Wrapper>
      <Header firstName={firstName} lastName={lastName} />
      <div className="container homeContainer">
        <div className="col-12">
          <div className="row">
            <div className="col-6">
              <img className="profilePic" src={headShot} alt="Jacob Figueroa" />
            </div>
            <div className="col-md-6">
              <div className="row justify-content-end">
                <div className="col-md-12">
                  <h1 className="title">Welcome to my portfolio!</h1>
                  <p className="aboutMe">Hello! My name is Jacob, and I'm a web developer with a passion for logic and puzzles. I was drawn to development because I love the challenge of solving complex problems and creating something new from scratch.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="aboutMe2">
        I've been practicing web development for about 6 months now, and I recently completed a bootcamp at the University of Minnesota to improve my skills. I'm proficient in HTML, CSS, Javascript, and I know how to implement node.js, express, and React. I've also worked with databases, both mySQL and mongoDB, and I find them fascinating.
        </p>
        <p className="aboutMe2">
        I've worked on several projects, both individually and in teams. One of my favorite projects was building an e-commerce store from the ground up using the MERN stack and other technologies like axios and Stripe API.
        </p>
        <p className="aboutMe2">
        My approach to web development is rooted in the agile approach, and I'm constantly looking to learn and master new technologies. I'm particularly interested in growing my JavaScript abilities and tackling database projects.
        </p>
        <p className="aboutMe2">
        My goal is to turn my love for coding into a challenging and rewarding career. I'm excited to continue learning and growing as a developer, and I'm open to any type of project that comes my way.
       </p>
        <p className="aboutMe2">
        If you're interested in learning more about me or contacting me for collaboration opportunities, please check out my contact page or connect with me on social media. Thank you for visiting my portfolio website!
        </p>
      </div>
      <Footer firstName={firstName} lastName={lastName} userName={userName} />
    </Wrapper>
  );
}

export default App;
