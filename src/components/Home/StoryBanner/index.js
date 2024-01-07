import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import ButtonLink from '../../Shared/Buttons/ButtonLink';

import styles from './StoryBanner.module.scss';

const StoryBanner = ({ data, order, btnProps }) => {
  const { title, slogan, descriptions } = data;

  return (
    <div className={styles.wrapper}>
      <div className={cx(styles.container, styles[order])}>
        <div className={styles.introduction}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          {slogan && (
            <>
              <div className={styles.divider} />
              <div className={styles.slogan}>{slogan}</div>
            </>
          )}
        </div>
        <div className={styles.descriptionContainer}>
          {descriptions.map((description, index) => (
            <div className={styles.description} key={index}>
              {description}
            </div>
          ))}
        </div>
      </div>
      {btnProps && (
        <ButtonLink
          className={styles.ctaButton}
          btnContent={btnProps.content}
          href={btnProps.href}
          size={btnProps.size}
        />
      )}
    </div>
  );
};

StoryBanner.propTypes = {
  data: PropTypes.object.isRequired,
  order: PropTypes.string,
  btnProps: PropTypes.object,
};

StoryBanner.defaultProps = {
  order: 'default',
};

export default StoryBanner;
