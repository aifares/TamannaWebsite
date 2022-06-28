import logo from "./logo.svg";
import inna_grad from "../src/inna_grad2.jpg";
import ReactRoundedImage from "react-rounded-image";
import "./App.css";
import FadeIn from "react-fade-in";
import "remixicon/fonts/remixicon.css";
import NavBar from "./navbar";

function App() {
  return (
    <div>
      <NavBar />
      <FadeIn>
        {" "}
        <div className="section1Name">Tamanna Inna</div>
      </FadeIn>
      <div className="divder">
        <a name="aboutme"></a>
        <h2>
          <span> About Me</span>
        </h2>
      </div>
      <div className="flex-container">
        <article class="card">
          <div class="card__information" name="aboutme">
            <p class="card__information-description">
              {" "}
              Hello! My name is Tamanna Inna I graduated Magna Cum Laude from
              the University at Buffalo with a degree in Mathematics and I am
              incoming gradute student at Columbia University. I have a natrual
              affinty for problem solving and take great pride in all my work. I
              posess exemplary leadership skills which I gained from my time as
              Medical assistant at Western New York Dermatology. During my
              undergrad I was also a secretary for the Advocates for Girls'
              Education club. I am now looking to apply these to real world
              problems as I look for technial roles in health and tech field
            </p>
          </div>
          <div className="card__image">
            <img className="photo" src={inna_grad}></img>
          </div>
        </article>
      </div>
      <div className="divder">
        <a name="resume"></a>
        <h2>
          <span> Resume </span>
        </h2>
      </div>
      <div className="section-header">
        {" "}
        <u>Education</u>{" "}
      </div>
      <div className="education-info" name="#resume">
        <p>
          <b>
            University at Buffalo, State University of New York | Buffalo, NY
          </b>
        </p>
        <p> </p>
        <p>
          {" "}
          <b>Graduation Date</b> Spring 2022
        </p>
        <p>Bachelor of Arts in Mathematics</p>
      </div>
      <div className="education-info">
        <p>
          <b>Columbia University | New York, NY</b>
        </p>
        <p>
          {" "}
          <b>Graduation Date:</b> Fall 2023
        </p>
        <p>Masters in Human Nutrition</p>
      </div>
      <div className="education-info">
        <p>
          <b>
            Relevant Coursework: Biology 1, Biology 2, Physics 1, Physics 2,
            General Chemistry 1, General Chemistry 2, Biochemistry, Calculus 1,
            Calculus 2, Calculus 3, Introduction to Statistcs, Game Theory
          </b>
        </p>
      </div>
      <div className="section-header">
        {" "}
        <u>Skills</u>{" "}
      </div>
      <div className="skills">
        <ul className="bullet">
          <li>
            Experienced in Python, Jupyter Notebook, JavaScript, Node.js and
            React
          </li>
          <li>
            Solution-oriented and a problem solver, with a high level of
            attention to detail and follow-through.
          </li>
          <li>
            Self-motivated with the ability to work both independently and
            collaboratively.
          </li>
          <li>
            Experience with object-oriented design, algorithm design, data
            structures, and complexity analysis.
          </li>
          <li>
            Ability to prioritize and juggle numerous projects and deadlines.
          </li>
        </ul>
      </div>
      <div className="section-header">
        {" "}
        <u> Work Experience and Research</u>{" "}
      </div>
      <div className="work-exp">
        <div className="work-exp">
          <b>Medical Assistant, Western New York Dermatology</b>{" "}
          <ul>
            <li>
              Maintain safe, secure and healthy work environment by establishing
              and following standards and procedures and complying with legal
              regulations
            </li>
            <li>
              Perform preliminary physical tests; take blood pressure, weight
              and temperature; report patient history summary
            </li>
            <li>
              Secure patient information and maintain patient confidence by
              completing and safeguarding medical records; completing diagnostic
              coding and procedure coding; keeping patient information
              confidential
            </li>
          </ul>
        </div>
        <div className="work-exp">
          <b>
            Researcher, An Artificial Intelligence Algorithm To Detect Brain
            Metastasis in MRI Studies
          </b>{" "}
          <ul>
            <li>
              The purpose of this artificial intelligence research is to develop
              an artificial intelligence algorithm to diagnose brain metastasis
              in MRI studies. MRI dataset of known brain metastasis will be used
              to create and implement an image-based classifier for autonomously
              detecting brain tumors or other anomalies. Simultaneously, brain
              metastasis classification and detection from MRI images using
              Convolutional Neural Network (CNN) based on U-Net architecture.
              The success was in measuring the accuracy of the algorithms in
              training and testing the data set.
            </li>
          </ul>
        </div>
      </div>
      <div className="section-header">
        {" "}
        <u>Leadership Experience and Activites</u>{" "}
      </div>
      <div className="work-exp">
        <li>
          {" "}
          <p>
            <b>Secretary</b>,Advocates for Girls' Education club (UB AGE),
            September 2019 - present
          </p>
        </li>
      </div>

      <div className="divder">
        <a name="contact"></a>
        <h2>
          <span> Social Media </span>
        </h2>
      </div>
      <div class="icons">
        <a
          href="https://www.linkedin.com/in/tamanna-inna-09453b174/"
          class="icon icon--instagram"
        >
          <i class="ri-instagram-line"></i>
        </a>
        <a href="#" class="icon icon--twitter">
          <i class="ri-twitter-line"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/tamanna-inna-09453b174/"
          class="icon icon--linkedin"
        >
          <i class="ri-linkedin-line"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/tamanna-inna-09453b174/"
          class="icon icon--github"
        >
          <i class="ri-github-line"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
