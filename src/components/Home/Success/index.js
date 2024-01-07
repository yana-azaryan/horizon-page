import cx from 'classnames';
import PropTypes from 'prop-types';

import ButtonCta from '../../Shared/Buttons/ButtonCta';

import styles from './Success.module.scss';

const Success = ({ className, title, subtitle, btnProps }) => {
  const { content, size, href } = btnProps || {};

  return (
    <div className={cx(styles.success, className)}>
      <div className={styles.title}>{title}</div>
      {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      <ButtonCta
        href={href}
        btnContent={content}
        size={size}
        className={styles.buttonCta}
      />
    </div>
  );
};

Success.propTypes = {
  btnProps: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

Success.defaultProps = {
  title: 'Tomorrow’s Success Starts Today.',
  size: 'large',
  btnProps: {
    content: 'Contact Us',
    href: '/contact-us',
    size: 'large',
  },
};

export default Success;
