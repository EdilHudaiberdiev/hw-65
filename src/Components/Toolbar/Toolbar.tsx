import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  const pages = [
    {title: 'About', id: 'about'},
    {title: 'Contacts', id: 'contacts'},
    {title: 'Catalog', id: 'catalog'},
    {title: 'Reviews', id: 'reviews'},
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink to='/' className="navbar-brand">Edil's blog</NavLink>
        <ul className="navbar-nav mr-auto fles-row gap-2 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          {pages.map(page => (
              <li className="nav-item" key={page.id}>
                <NavLink to={`/${page.id}`} className="nav-link">{page.title}</NavLink>
              </li>
          ))}
          <li className="nav-item">
            <NavLink to="/adminPage" className="nav-link">Admin</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Toolbar;