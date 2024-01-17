import classNames from 'classnames';
import Image from 'next/image';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

import SocialShareItem from '../SocialShareItem';
import SocialShareBlock from '../SocialShareBlock';
import shareItems from '../../../constants/shareItems';
import Logo from '../../../images/logo.png';

import email from '../../../images/email.png';
import location from '../../../images/location.png';

const Footer = ({ className, theme, _ref }) => (
  <footer
    ref={_ref}
    className={classNames(styles.footer, {
      [className]: className,
    })}
  >
    <div className={styles.wrapper}>
      <div className={styles.contactsContainer} data-theme={theme}>
        <div className={styles.footerLogo}>
          <Image alt="" src={Logo} />

          <SocialShareBlock className={styles.socialShareBlock} size={'large'}>
            {shareItems.map((item) => {
              return (
                <SocialShareItem key={`share-icon-${item.name}`} {...item} />
              );
            })}
          </SocialShareBlock>
        </div>

        <div className={styles.contacts}>
          <div className={styles.email}>
            <Image alt="" src={email} />
            <p>info@logo.com</p>
          </div>
          <div className={styles.location}>
            <Image alt="" src={location} />
            <p>Yerevan, Armenia</p>
          </div>
        </div>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.branding}>
          <div
            className={styles.copyright}
          >{`\u00A9 ${new Date().getFullYear()} Horizon LLC. All Rights Reserved.`}</div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
