import React from "react";
import "./../style.scss";
import "./style.scss";
import { Visit } from "./Visit";
import { HeartLogo } from "../common/HeartLogo";

export const ViewLandingPage = () => (
  <div className="landing-page">
    <pre>Demo of some react comps</pre>
    <HeartLogo />
    <Visit />
  </div>
);
