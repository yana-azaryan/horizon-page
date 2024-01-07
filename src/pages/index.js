import styles from '../styles/pages/HomePage.module.scss';

import Container from '../components/Shared/Container';

import MainBanner from '../components/Home/MainBanner';
import Possibilities from '../components/Home/Possibilities';
import Process from '../components/Home/Process';
import OurValues from '../components/Home/OurValues';
import StoryBanner from '../components/Home/StoryBanner';
import Call from '../components/Shared/Call';
import Calendly from '../components/Shared/Calendly';

import possibilitiesData from '../constants/possibilities';
import { storyData, processData, valuesData } from '../constants/our-approach';

const HomePage = () => {
  return (
    <>
      <section className={styles.theme} data-theme="dark">
        <MainBanner />

        <Container>
          <Possibilities data={possibilitiesData} />
        </Container>
      </section>

      <section className={styles.theme} data-theme="dark">
        <Container>
          <StoryBanner data={storyData} />
        </Container>
      </section>

      <section className={styles.theme} data-theme="light">
        <Container>
          <Process data={processData} />
          <OurValues values={valuesData} />
        </Container>
      </section>

      <section className={styles.theme} data-theme="dark">
        <Container>
          <Call size={'small'} hasImage={false} />
        </Container>
        <Calendly className={styles.calendly} />
      </section>
    </>
  );
};

export default HomePage;
