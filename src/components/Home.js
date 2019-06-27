import React from 'react';
import Image from 'Images/image.jpg';

import styles from 'Styles/_styles.scss';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Thank you for checking out my demo React app! The purpose of this app is to serve as a starting point for any web app that uses React, Webpack, Redux, React Final Form, Jest/Enzyme tests, and all of the other packages used in this demo. Not everything is fleshed out, but the very basics are in place (e.g. a form using React Final Form; redux store, reducer and action creators; usage of Bootstrap styles) to give a taste of how each of the tools are used. Each feature can be fleshed out further, depending on the needs of the web app.<br />
    -AH
    </p>

    <div className="center">
      <img src={Image} />
    </div>
  </div>
);

export default Home;
