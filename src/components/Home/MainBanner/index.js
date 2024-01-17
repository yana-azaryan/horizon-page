import PropTypes from 'prop-types';

import ButtonCta from '../../Shared/Buttons/ButtonCta';

import styles from './MainBanner.module.scss';

const MainBanner = ({ title, description, buttonProps }) => {
  const { content, href, size, border } = buttonProps || {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <ButtonCta
        border={border}
        btnContent={content}
        className={styles.ctaButton}
        href={href}
        size={size}
      />
      <div className={styles.description}>{description}</div>
    </div>
  );
};

MainBanner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonProps: PropTypes.object.isRequired,
  hasImage: PropTypes.bool,
};

MainBanner.defaultProps = {
  title: 'Your Remote Customer Support Team Awaits',
  description:
    'Empower Your Business. Partner with Us to Build Your Ultimate Remote Customer Support Team and Ignite Positive Change!',
  buttonProps: {
    content: 'Learn More',
    href: '/faqs',
    size: 'large',
  },
};

export default MainBanner;
