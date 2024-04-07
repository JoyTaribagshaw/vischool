import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles/aboutNav.css';

const AboutNav = ({ links }) => {
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="side-menu">
      {links.map((link) => (
        <NavLink
          key={link.label}
          to={link.to}
          onClick={(e) => handleClick(e, link.id)}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

AboutNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
};

AboutNav.defaultProps = {
  links: [],
};

export default AboutNav;
