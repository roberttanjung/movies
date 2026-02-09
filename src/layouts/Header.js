'use client';

const Header = () => {
  const onTooggleMenu = () => {
    const getSidebar = document.getElementById('sidebar');

    if (getSidebar) getSidebar.classList.toggle('active');
  };

  return (
    <header className="header">
      <div className="search-box">
        <button className="burger-icon" onClick={onTooggleMenu}>Menu</button>
        <div className="search-box-inner">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>
        <div className="user-avatar" style={{backgroundColor:'#475569'}}></div>
    </header>
  );
};

export default Header;