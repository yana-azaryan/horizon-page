import cx from 'classnames';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import styles from './ButtonCta.module.scss';

const Button = ({
  size = 'medium',
  border,
  href,
  type,
  icon,
  btnContent,
  onClick,
  className,
}) => {
  const classes = cx(styles.button, styles[size], className, {
    [styles.border]: border,
  });
  const router = useRouter();

  const onButtonClick = () => {
    if (href) {
      router.push(href);
    } else {
      onClick();
    }
  };

  return (
    <button type={type} className={classes} onClick={onButtonClick}>
      {icon && <div className={styles.iconContainer}>{icon}</div>}
      {btnContent}
    </button>
  );
};

Button.propTypes = {
  border: PropTypes.bool,
  btnContent: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
