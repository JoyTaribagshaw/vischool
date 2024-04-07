import React from 'react';
import PropTypes from 'prop-types';
import '../styles/intro.css';

const Intro = ({ heading, paragraph }) => (
  <div className="about-us">
    <div className="about-us-div">
      <h2 className="about-us-heading">{heading}</h2>
      <p className="about-us-paragraph">{paragraph}</p>
    </div>
  </div>
);

Intro.propTypes = {
  heading: PropTypes.string,
  paragraph: PropTypes.string,
};

Intro.defaultProps = {
  heading: 'Default Heading',
  paragraph: 'Default Paragraph',
};

export default Intro;
