import React from 'react';

import cx from 'classnames';

import styles from './SocialShareItem.module.scss';

const SocialShareItem = ({ name, icon, link, className }) => {
  return (
    <a href={link} className={cx(styles.shareItem, styles[name], className)}>
      {icon}
    </a>
  );
};

export default SocialShareItem;
