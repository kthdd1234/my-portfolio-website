const headerList = [
  { title: 'HOME', focus: 'home' },
  { title: 'ABOUT', focus: 'about' },
  { title: 'EDUCATION', focus: 'education' },
  { title: 'PROJECTS', focus: 'projects' },
  { title: 'CONTACT', focus: 'contact' },
];

const HeaderBar = () => {
  return (
    <div className='header-bar-container'>
      <ul className='header-bar-wrap'>
        {headerList.map((section, key) => (
          <li
            key={key}
            className='header-bar-section'
            onClick={() => (window.location.hash = `#${section.focus}`)}
          >
            {section.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderBar;
