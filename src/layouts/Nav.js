'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  const onActiveMenu = (path) => {
    let setClass = 'nav-link';

    if (pathname.startsWith(path)) {
      setClass += ' active';
    }

    return setClass;
  };

  return (     
    <nav className="sidebar-nav">
      <Link href="/view" className={onActiveMenu('/view')}>
        <span style={{width:8, height:8, borderRadius:'50%', background:'white'}}></span>
        Daftar Film
      </Link>
      <Link href="/movie/add" className={onActiveMenu('/movie/')}>
        <span style={{width:8, height:8, borderRadius:'50%', border:'1px solid gray'}}></span>
        Tambah Film
      </Link>
    </nav>
  );
};

export default Nav;