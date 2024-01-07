import { cloneElement, Children, useRef } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import subnavigationData from '../../../constants/subnavItems';

import styles from './PageLayout.module.scss';
import { Meta } from '../../../layout/Meta.tsx';
import { AppConfig } from '../../../utils/AppConfig.ts';

const PageLayout = ({ children }) => {
  const {
    props: { theme },
  } = children;
  const contentRef = useRef(null);

  const scrollToBottom = () => {
    const bottomElement = contentRef.current;
    const scrollPosition = bottomElement.offsetTop - 800;

    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  };

  const childrenWithProp = Children.map(children, (child) =>
    cloneElement(child, {
      theme,
    }),
  );

  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header
        data-theme={theme}
        items={subnavigationData}
        onButtonClick={scrollToBottom}
      />
      <main className={styles.pageLayout} data-theme={theme}>
        <div>{childrenWithProp}</div>
      </main>
      <Footer theme="dark" _ref={contentRef} />
    </>
  );
};

export default PageLayout;
