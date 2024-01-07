import cx from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './InfoCard.module.scss';

const InfoCard = ({ href, title, description, image, className }) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      {image && <Image src={image} alt={'image'} className={styles.image} />}

      <a
        className={styles.cardLink}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </a>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

InfoCard.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descriptio: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default InfoCard;
