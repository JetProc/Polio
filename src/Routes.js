import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch, spring } from "react-router-transition";
import App from "./App";
import Main from "./components/pages/MainScreen/main";
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}
const bounceTransition = {
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};
export default () => (
  <Router>
    <AnimatedSwitch
      atEnter={bounceTransition.atEnter}
      atLeave={bounceTransition.atLeave}
      atActive={bounceTransition.atActive}
      mapStyles={mapStyles}
      className="switch-wrapper"
    >
      <Route exact path="/" component={App} />
      <Route exact path="/main" component={Main} />
    </AnimatedSwitch>
  </Router>
);
