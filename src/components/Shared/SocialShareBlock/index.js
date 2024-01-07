import React from 'react';

import cx from 'classnames';

import styles from './SocialShareBlock.module.scss';

const SocialShareBlock = ({
  children,
  className,
  size = 'default',
  variant = 'horizontal',
}) => {
  return (
    <ul
      className={cx(className, styles.container, styles[variant], styles[size])}
    >
      {React.Children.map(children, (child) => (
        <li className={styles.shareItem}>{child}</li>
      ))}
    </ul>
  );
};

export default SocialShareBlock;
