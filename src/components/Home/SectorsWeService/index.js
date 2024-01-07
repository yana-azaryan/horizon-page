import PropTypes from 'prop-types';

import ButtonLink from '../../Shared/Buttons/ButtonLink';
import InfoCard from '../../Shared/Cards/InfoCard';

import styles from './SectorsWeService.module.scss';

const SectorsWeService = ({ title, btnProps, data }) => {
  const { content, size, href } = btnProps;

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <ButtonLink
        className={styles.ctaButton}
        href={href}
        btnContent={content}
        size={size}
      />
      <div className={styles.cardsContainer}>
        {data.map((card, index) => (
          <InfoCard
            href={card.href}
            title={card.title}
            key={index}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

SectorsWeService.propTypes = {
  title: PropTypes.string.isRequired,
  btnProps: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

SectorsWeService.defaultProps = {
  title: 'Take your business where',
  btnProps: {
    content: 'it needs to go',
    href: '/sectors/',
    size: 'large',
  },
};

export default SectorsWeService;
