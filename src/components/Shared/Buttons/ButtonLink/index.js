import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './ButtonLink.module.scss';

const ButtonLink = ({
  className,
  href,
  target = '_blank',
  btnContent,
  size = 'medium',
}) => {
  const ArrowRightIcon = (
    <svg
      class="fs-icon fs-icon--arrow-right"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M12.6 6.4l4.6 4.6H3v2h14.2l-4.6 4.6L14 19l7-7-7-7z" />
    </svg>
  );

  return (
    <div className={cx(styles.buttonLinkContainer, className)}>
      <a
        className={cx(styles.buttonLink, styles[size])}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noreferrer' : ''}
      >
        {btnContent}
        {ArrowRightIcon}
      </a>
    </div>
  );
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  btnContent: PropTypes.string.isRequired,
};

export default ButtonLink;
