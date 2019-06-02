import React from 'react';
import PropTypes from 'prop-types';

import theme from '../../themes/base';

const Button = ({ color, size, children, ...props }) => (
  <button {...props}>
    {children}
    <style jsx>{`
      button {
        background-color: ${theme.colors[color] || color};
        color: ${['light', 'default'].includes(color) ? theme.colors.dark : theme.colors.light};

        padding: ${color !== 'default' ? theme.spacing[size] + 'px' : undefined};

        border-radius: ${theme.edgeSize[size]}px;
      }
    `}</style>
    <style jsx>{`
      button {
        border: 0;
      }

      button,
      button:hover {
        outline: none;
      }

      button:hover {
        opacity: 0.9;
        cursor: pointer;
      }

      button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `}</style>
  </button>
);

Button.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  color: 'default',
  size: 'medium',
  disabled: false
};

export default Button;
