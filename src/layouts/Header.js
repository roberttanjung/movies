'use client';

const Header = () => {
  return (
    <header className="header">
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
        <div className="user-avatar" style={{backgroundColor:'#475569'}}></div>
    </header>
  );
};

export default Header;