import cx from 'classnames';
import styles from '../styles/pages/FAQsPage.module.scss';

import Container from '../components/Shared/Container';

import FAQ from '../components/Home/FAQ';
import Success from '../components/Home/Success';
import ButtonCta from '../components/Shared/Buttons/ButtonCta';

import SectorsWeService from '../components/Home/SectorsWeService';

import { faqsData, sectorsWeService } from '../constants/faq';

const FAQsPage = () => {
  return (
    <>
      <section className={styles.theme} data-theme="dark">
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.title}>Get Answers</div>
            <div className={cx(styles.title, styles.secondaryTitle)}>To</div>
            <div className={styles.title}>All Your Questions</div>
            <ButtonCta
              className={styles.ctaButton}
              href={'/contact-us/'}
              size={'large'}
              border={true}
              btnContent={'Get Custom Proposal'}
            />
          </div>
        </Container>
      </section>

      <section className={styles.theme} data-theme="light">
        <Container>
          <FAQ data={faqsData} />
        </Container>
      </section>

      <section className={styles.theme} data-theme="dark">
        <Container>
          <SectorsWeService data={sectorsWeService} />
        </Container>
        <Success title={'Still have some questions?'} />
      </section>
    </>
  );
};

export default FAQsPage;
