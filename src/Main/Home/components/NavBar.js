const headerList = [
  { title: 'HOME', focus: 'focus-home' },
  { title: 'ABOUT', focus: 'focus-about' },
  { title: 'EDUCATION', focus: 'focus-education' },
  { title: 'PROJECTS', focus: 'focus-projects' },
  { title: 'CONTACT', focus: 'focus-contact' },
];

const NavBar = () => {
  return (
    <div className='home-navbar'>
      <ul className='home-navbar-list'>
        {headerList.map((section, key) => (
          <li
            key={key}
            className='home-navbar-list-item'
            onClick={() => (window.location.hash = `#${section.focus}`)}
          >
            {section.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
