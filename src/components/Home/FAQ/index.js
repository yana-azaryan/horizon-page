import React from 'react';
import PropTypes from 'prop-types';

import ButtonLink from '../../Shared/Buttons/ButtonLink';

import styles from './FAQ.module.scss';

const FAQ = ({ title, data, length, btnProps }) => {
  const formattedData = length ? data.slice(0, length) : data;
  const { content, href } = btnProps;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {formattedData && (
        <div className={styles.container}>
          {formattedData.map((item, index) => (
            <div className={styles.questionCard} key={index}>
              <div className={styles.left}>
                <p className={styles.number}>{index + 1}.</p>
                <p className={styles.question}>{item.question}</p>
              </div>
              <div className={styles.answer}>{item.answer}</div>
            </div>
          ))}
        </div>
      )}
      {length && (
        <ButtonLink
          className={styles.ctaButton}
          href={href}
          btnContent={content}
        />
      )}
    </div>
  );
};

FAQ.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
  btnProps: PropTypes.object,
  length: PropTypes.number,
};

FAQ.defaultProps = {
  title: 'FAQs',
  btnProps: {
    content: 'See More',
    href: '/faqs/',
  },
};

export default FAQ;
