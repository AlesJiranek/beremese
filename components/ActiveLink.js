import { withRouter } from 'next/router';

const ActiveLink = ({ children, router, href }) => {
  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  const active = router.pathname === href;
  const className = active ? 'active' : '';
  return (
    <li onClick={handleClick} className={className}>
      <a href={href}>{children}</a>
    </li>
  );
};

export default withRouter(ActiveLink);
