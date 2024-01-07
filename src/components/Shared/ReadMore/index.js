import React, { useState } from 'react';

import cx from 'classnames';

import styles from './ReadMore.module.scss';

const ReadMore = ({
  className,
  data,
  showLessText,
  showMoreText,
  initialNumOfCharsToShow,
  shouldInlineInnerHtml,
  collapsedData,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getTruncatedData = () => {
    return collapsedData || data.slice(0, initialNumOfCharsToShow);
  };

  const truncatedData = getTruncatedData();
  const canExpand = data.length > truncatedData.length;

  const setInnerHTML = () => {
    if (!canExpand || isExpanded) return data;

    return truncatedData;
  };

  return (
    <div className={className}>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: setInnerHTML(),
        }}
        className={cx(styles.inline, {
          [styles.shouldInlineInnerHtml]: shouldInlineInnerHtml,
        })}
      />
      {canExpand && (
        <button
          type="button"
          className={styles.expandBtn}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {!isExpanded ? `... ${showMoreText}` : showLessText}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
