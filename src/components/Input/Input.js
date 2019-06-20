import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'theming';

const Input = ({ theme, size, fullWidth, ...props }) => (
  <React.Fragment>
    <input {...props} />
    <style jsx>{`
      box-sizing: border-box;
      &, &:hover, &:active, &:focus {
        box-shadow: none;
        outline: 0;
      }
    `}</style>
    <style jsx>{`
      ${fullWidth ? 'width: 100%;' : ''}
      padding: ${theme.spacing[size]}px;
      border-radius: ${theme.edgeSize[size]}px;
      border: ${theme.borderSize[size]}px solid ${theme.colors.light};
    `}</style>
    <style jsx>{`
      :active, :focus {
        border-color: ${theme.colors.primary};
      }
    `}</style>
  </React.Fragment>
);

Input.propTypes = {
  theme: PropTypes.any,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool
};

Input.defaultProps = {
  size: 'medium',
  fullWidth: false
};

export default withTheme(Input);
