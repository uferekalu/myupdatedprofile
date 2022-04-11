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
          Node Js, React Js, Next Js, Nest js, GraphQL, MySQL, AWS etc.,
          in building web solutions that are mobile-friendly, user-oriented
          among other client requirements. I have keen interest in collaborating
          and contributing to development teams..
        </p>
      </div>
      <div className="experience">
        <h2 className="experience__title">January 2018 - August 2021</h2>
        <h3 className="experience__stack">
          React Js, Next Js, Node Js, AWS MySQL, SASS and Git
        </h3>
        <h3 className="job__type">Australia, Remote</h3>
        <p>
          Utopia Tech is a Startup in Online Technology which focuses on
          e-commerce services to various countries across the globe. Created
          responsive navigation headers for pages to adapt to different screen
          sizes: mobile, mini-tablet, tablet and desktop. Built the Order UI
          component. Created and tested various API endpoints: CRUD for auth,
          product, vendor etc. Reviewed feature pull requests from Team Members
          ensuring code quality and testing to meet the requirements. Maintained
          project repositories by merging feature branches to development branch
          with CI/CD pipeline
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
          interviewees on different stacks based on the role they applied for.
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
          and Deleting products with Add-To-Cart and checkout functionalities
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
