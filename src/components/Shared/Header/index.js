import cx from 'classnames';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../../../images/logo.png';

import styles from './Header.module.scss';
import ButtonCTA from '../Buttons/ButtonCta';

const Header = ({ theme, className, items, btnProps }) => {
  const { content, href } = btnProps;
  const { asPath } = useRouter();
  const subNavItems = items.map((item, index) => (
    <li
      className={cx(styles.subNavItem, {
        [styles.activePage]: asPath === item.href,
      })}
      key={index}
    >
      <a href={item.href} className={styles.subNavItemLink}>
        {item.name}
      </a>
    </li>
  ));

  return (
    <div className={cx(styles.headerWrapper, className)} data-theme={theme}>
      <Link aria-label="logo" className={styles.headerLogo} href={'/'}>
        <Image alt="glitch" src={Logo} />
      </Link>
      <div className={styles.leftContainer}>
        <div className={cx(styles.subNavWrapper, className)} data-theme={theme}>
          <ul className={styles.subNav}>{subNavItems}</ul>
        </div>
        <ButtonCTA
          border
          btnContent={content}
          className={styles.button}
          href={href}
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
  items: PropTypes.array,
  className: PropTypes.string,
  btnProps: PropTypes.object.isRequired,
};

Header.defaultProps = {
  theme: 'dark',
  btnProps: {
    content: 'Free Consultation',
    href: '/contact-us/',
  },
};

export default Header;
