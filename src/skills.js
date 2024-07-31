import Spline from "@splinetool/react-spline";
import React from "react";
import "./styles.css";

export default function Skills() {
  return (

    <div className="App-3">
      <div className="content-3">
        <h1 className="skill-text">MY SKILLS</h1>
        <p className="skill-para">HTML</p>
        <div class="container">
          <div class="skills html">90%</div>
        </div>

        <p className="skill-para">CSS</p>
        <div class="container">
          <div class="skills css">80%</div>
        </div>

        <p className="skill-para">JavaScript</p>
        <div class="container">
          <div class="skills js">65%</div>
        </div>

        <p className="skill-para">PHP</p>
        <div class="container">
          <div class="skills php">60%</div>
        </div>
      </div>
      <div className="spline-3">
        <Spline scene="https://prod.spline.design/4u2yEyTITTirBwNN/scene.splinecode" />
      </div>
    </div>
  );
}
