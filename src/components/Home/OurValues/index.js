import PropTypes from 'prop-types';

import Accordion from '../../Shared/Accordion/Accordion';

import styles from './OurValues.module.scss';

const OurValues = ({ values, title, slogan }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.slogan}>{slogan}</div>
      </div>
      {values.length > 0 && (
        <div className={styles.values}>
          {values.map((value, index) => (
            <div className={styles.accordionContainer} key={index}>
              <Accordion header={value.title} isAccordionOpen={index === 0}>
                <div className={styles.description}>{value.description}</div>
              </Accordion>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

OurValues.propTypes = {
  values: PropTypes.array.isRequired,
  title: PropTypes.string,
  slogan: PropTypes.string,
};

OurValues.defaultProps = {
  values: PropTypes.array.isRequired,
  title: 'Discover Our Values',
  slogan: `Our values are the cornerstone of everything we do. They define who we
    are, how we work, and the impact we aim to create in the digital
    world.`,
};

export default OurValues;
