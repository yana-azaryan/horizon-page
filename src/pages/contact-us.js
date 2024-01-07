import cx from 'classnames';
import styles from '../styles/pages/ContactUsPage.module.scss';

import Container from '../components/Shared/Container';

const ContactUsPage = () => {
  return (
    <>
      <section className={styles.theme} data-theme="dark">
        <Container>
          <div className={styles.content}>
            <div className={styles.wrapper}>
              <div className={styles.title}>Complete the Form</div>
              <div className={cx(styles.title, styles.secondaryTitle)}>And</div>
              <div className={styles.title}>
                Our managers will reach out to you.
              </div>
            </div>
            <iframe
              src="https://share.hsforms.com/1U8wDjhOVQ2ai9vdVW6ELjgqpgeh"
              title="Embedded Form"
              width="100%"
              height="800px"
              frameBorder="0"
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactUsPage;
