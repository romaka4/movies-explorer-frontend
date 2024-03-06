import './NavTab.css';
function NavTab() {
  return (
      <nav className="nav-tab">
          <a href="#about" className="nav-tab__link">О проекте</a>
          <a href="#techs" className="nav-tab__link">Технологии</a>
          <a href="#aboutMe" className="nav-tab__link">Студент</a>
      </nav>
  )
}
export default NavTab