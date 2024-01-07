import React, { useState } from 'react';

import cx from 'classnames';

import styles from './Accordion.module.scss';

const Accordion = ({ index, header, isAccordionOpen = false, children }) => {
  const [isOpen, setIsOpen] = useState(isAccordionOpen);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionContainer}>
      <button
        className={styles.accordionHeader}
        onClick={handleClick}
        aria-expanded={isOpen}
        type="button"
        id={`accordion-${header}-${index}`}
      >
        <div>{header}</div>
        <div
          className={cx(styles.dropdownIcon, {
            [styles.active]: isOpen,
          })}
        >
          <svg
            class="fs-icon fs-icon--chevron-down"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 13L7.2 8.2 5.8 9.7 12 16l6.2-6.3-1.4-1.5z" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div
          className={styles.accordionContent}
          aria-hidden={!isOpen}
          aria-labelledby={`accordion-${header}-${index}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
