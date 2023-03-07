import { INavLink } from '@/types/types';
import Link from 'next/link';

import s from './NavLinkMobile.module.css';

const NavLinkMobile: React.FC<INavLink> = ({ path, name }) => {
  return (
    <li>
      <Link href={path} className={s.navLink}>
        {name}
      </Link>
    </li>
  );
};

export default NavLinkMobile;
