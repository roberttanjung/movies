'use client';

import Link from "next/link";

const Nav = () => {
  return (     
    <nav className="sidebar-nav">
    <Link href="/view" className="nav-link active">
      <span style={{width:8, height:8, borderRadius:'50%', background:'white'}}></span>
      Daftar Film
    </Link>
    <Link href="/movie/add" className="nav-link">
      <span style={{width:8, height:8, borderRadius:'50%', border:'1px solid gray'}}></span>
      Tambah Film
    </Link>
  </nav>

  );
};

export default Nav;