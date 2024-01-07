import PropTypes from 'prop-types';

import ButtonCta from '../../Shared/Buttons/ButtonCta';

import styles from './Possibilities.module.scss';

const Possibilities = ({ title, data, btnProps }) => {
  const { content, href } = btnProps;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {data && (
        <div className={styles.container}>
          {data.map((possibility, index) => (
            <div className={styles.possibility} key={index}>
              <div className={styles.title}>{possibility.title}</div>
              <div className={styles.description}>
                {possibility.description}
              </div>
            </div>
          ))}
        </div>
      )}

      <ButtonCta
        className={styles.ctaButton}
        href={href}
        size={'large'}
        border
        btnContent={content}
      />
    </div>
  );
};

Possibilities.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnContent: PropTypes.string.isRequired,
};

Possibilities.defaultProps = {
  title: 'Unlock the Possibilities with Us',
  btnProps: {
    content: 'Get Started',
    href: '/contact-us/',
  },
};

export default Possibilities;
