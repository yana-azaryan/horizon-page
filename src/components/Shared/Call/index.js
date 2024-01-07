import cx from 'classnames';
import PropTypes from 'prop-types';

import Calendly from '../Calendly';

import styles from './Call.module.scss';

const Call = ({ title, subtitle, className, description, size }) => {
  return (
    <div className={cx(styles.container, styles[size], className)}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <span className={styles.subtitle}>{subtitle}</span>
        <p className={styles.description}>{description}</p>
      </div>
      <Calendly className={styles.scheduleCall} />
    </div>
  );
};

Call.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string,
  size: PropTypes.string,
};

Call.defaultProps = {
  theme: 'dark',
  title: 'Schedule a call',
  subtitle: 'With Our Managers',
  description: `Our experienced team of managers is ready to assist you. Whether you
    have questions, need guidance, or want to discuss potential
    collaborations, scheduling a call with us is easy and convenient.
    Simply choose a time that suits you, and we will be in touch!`,
  size: 'large',
};

export default Call;
