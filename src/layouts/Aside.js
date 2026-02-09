'use client';

import Nav from "./Nav";

const Aside = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <div className="sidebar-logo">
        <span>Vanda</span> Movie
      </div>
      <Nav />
      <div className="sidebar-footer">
        <span style={{fontSize:'0.9rem', color:'white'}}></span>
      </div>
    </aside>
  );
};

export default Aside;