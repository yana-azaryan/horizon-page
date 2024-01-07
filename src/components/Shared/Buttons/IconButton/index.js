import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './IconButton.module.scss';

const IconButton = ({ icon, className, size, theme, variant }) => {
  return (
    <button
      className={cx(
        className,
        styles.iconButton,
        styles[theme],
        styles[size],
        styles[variant],
      )}
    >
      {icon}
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.element,
  className: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
  variant: PropTypes.string,
};

IconButton.defaultProps = {
  size: 'medium',
  theme: 'light',
  variant: 'noFill',
};

export default IconButton;
