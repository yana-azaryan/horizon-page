/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { InlineWidget } from 'react-calendly';

const Calendly = ({ className }) => {
  return (
    <div className={className}>
      <InlineWidget url="https://calendly.com/your-horizon/30min" />
    </div>
  );
};

Calendly.propTypes = {
  className: PropTypes.string,
};

export default Calendly;
