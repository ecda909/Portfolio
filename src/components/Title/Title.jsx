import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
    <span className="font-weight-light pl-3 title-text">{title}</span>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
