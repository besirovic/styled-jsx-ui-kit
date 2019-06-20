import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'theming';

const Card = ({ theme, fullWidth, centered, backgroundColor, borderWidth, borderColor, borderStyle, children, ...props }) => (
  <div {...props}>
    {children}

    <style jsx>{`
      display: inline-flex;
      box-sizing: border-box;
    `}</style>
    <style jsx>{`
      padding: ${theme.spacing.large}px;
      background-color: ${theme.colors[backgroundColor] || backgroundColor};
      ${fullWidth ? `width: 100%;` : ''}
      ${centered ? `justify-content: center;` : ''}
      ${borderWidth && borderColor && borderStyle ? `border: ${borderWidth}px ${borderStyle} ${borderColor};` : ''}
      border-radius: ${theme.edgeSize.medium * 2}px;
    `}</style>
  </div>
);

Card.propTypes = {
  theme: PropTypes.any,
  children: PropTypes.any,
  fullWidth: PropTypes.bool,
  centered: PropTypes.bool,
  backgroundColor: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderColor: PropTypes.string,
  borderStyle: PropTypes.string
};

Card.defaultProps = {
  fullWidth: false,
  centered: false,
  backgroundColor: 'light',
  borderStyle: 'solid'
};

export default withTheme(Card);
