import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutme">
      <h2 className="aboutme__title">BACKGROUND</h2>
      <div className="aboutme__background">
        <p>
          A passionate web developer with 3+ years progressive working
          experience using such technologies as HTML5, CSS3, SASS, JavaScript,
          Typescript, Node Js, React Js, Nest Js, Next Js, GraphQL, MySQL,
          MongoDB, AWS, Firebase etc., in building web solutions that are
          mobile-friendly, user-oriented among other client requirements. I have
          keen interest in collaborating and contributing to development teams.
        </p>
      </div>
      <div className="experience">
        <h2 className="experience__title">Feb 2022 – August 2022</h2>
        <h3 className="experience__stack">
          Position: Full Stack JavaScript Developer
        </h3>
        <h3 className="experience__stack">Job Type: Freelance</h3>
        <p>
          - Developed and orchestrated the state management of an Advertising
          Application by using Redux Toolkit, React Js and Node Js <br />-
          Implemented the Authentication system with Firebase and MongoDB <br />{" "}
          - Developed the various APIs of the Advertising System, ranging from
          surfing the ads, advertising ads, payment integration system etc. with
          Node Js, Express Js MongoDB as the database
        </p>
      </div>
      <div className="experience">
        <h2 className="experience__title">August 2018 – September 2021</h2>
        <h3 className="experience__stack">
          Position: Full Stack JavaScript Developer
        </h3>
        <h3 className="experience__stack">Job Type: Remote</h3>
        <h3 className="experience__stack">
          Company: Utopia Tech Pyt, Sydney, Australia
        </h3>
        <p style={{ textAlign: "justify" }}>
          Utopia Tech is a Startup in Online Technology which focuses on
          e-commerce services to various countries across the globe. <br />{" "}
          <br /> - Created and tested various API endpoints: CRUD for
          authentication, product, vendor etc.; The technologies used are Node
          Js, MySQL, AWS <br /> - Created responsive navigation headers for
          pages to adapt to different screen sizes: mobile, mini-tablet, tablet
          and desktop. The technologies used include React Js, Next Js and SASS{" "}
          <br /> - Built the Order UI component. The technologies used include
          React Js, Next Js and SASS <br /> - Review feature pull requests from
          Team Members ensuring code quality and testing to meet the
          requirements <br /> - Maintain project repositories by merging feature
          branches to development branches with CI/CD pipeline. The technology
          used is Git.
        </p>
      </div>
      <div className="sideproject__one">
        <h2 className="sideproject__one__date">2022</h2>
        <h2 className="sideproject__one__title">Countries Info App:</h2>
        <h3 className="sideproject__one__type">Side Project</h3>
        <p>
          Countries Info App: Consumed countries api to build an application
          which gives information regarding the location, flag, population,
          capital, region and borders of a country.{" "}
          <a
            href="https://ufere-countries-app-task.netlify.app/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            Click here to view
          </a>
        </p>
      </div>
      <div className="sideproject__one">
        <h2 className="sideproject__one__date">2021</h2>
        <h2 className="sideproject__one__title">
          Test Interview Platform with MERN Stack (MongoDB, Express, React Js,
          Node Js and Git)
        </h2>
        <h3 className="sideproject__one__type">Side Project</h3>
        <p>
          This is a multi-choice question assessment platform which tests
          interviewees on different stacks based on the role they apply for. The
          technologies used are MERN (MongoDB, Express, React Js and Node Js){" "}
          <a
            href="https://interview-platform.netlify.app/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            Click here to view
          </a>
        </p>
      </div>
      <div className="sideproject__two">
        <h2 className="sideproject__two__date">2020</h2>
        <h2 className="sideproject__two__title">
          Mini Shopping Cart with React Js, Redux and axios, REST API and Git
        </h2>
        <h3 className="sideproject__two__type">Side Project</h3>
        <p>
          Consumed a fake product API, added some CRUD operations in Retrieving
          and Deleting a product with filtering, search, Add-To-Cart and
          checkout functionalities. The technologies used are React Js, Redux
          and axios.{" "}
          <a
            href="https://ufere-shopping.netlify.app/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            Click here to view
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
