import cx from 'classnames';
import React from 'react';

import styles from './Container.module.scss';

const Container = ({
  className,
  maxWidth = 'xl',
  disableGutters,
  children,
}) => {
  return (
    <div
      className={cx(className, styles.container, {
        [styles[`container-${maxWidth}`]]: maxWidth,
        [styles.disableGutters]: disableGutters,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
