import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Process.module.scss';
import SimpleCarousel from '../../Shared/SimpleCarousel';

import ReadMore from '../../Shared/ReadMore';

const Process = ({ data, title }) => {
  const [progress, setProgress] = useState(0);

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div
        style={{
          backgroundColor: '#333',
          borderRadius: '16px',
          height: '10px',
          marginTop: '32px',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgb(95, 122, 203)',
            borderRadius: '16px',
            height: '10px',
            transition: 'width 0s ease-in-out',
            width: `${progress * 100}%`,
          }}
        />
      </div>
      <div className={styles.carousel}>
        <SimpleCarousel showControls={true} onProgress={(p) => setProgress(p)}>
          {data.map((step, index) => (
            <div className={styles.processCard} key={index}>
              <div className={styles.number}>{`0${index + 1}`}</div>
              <div className={styles.title}>{step.title}</div>
              <ReadMore
                className={styles.description}
                showMoreText={'Read More'}
                showLessText={'Read Less'}
                data={step.description}
                initialNumOfCharsToShow={200}
              />
            </div>
          ))}
        </SimpleCarousel>
      </div>
    </div>
  );
};

Process.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};

Process.defaultProps = {
  title: 'How Do Our Services Work',
};

export default Process;
