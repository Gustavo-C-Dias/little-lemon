import Link from '../components/Link'

function Nav({direction = 'column'}) {

  const menuLink = [
    {
      url:'./',
      label:'Home'
    },
    {
      url:'./About',
      label:'About'
    },
    {
      url:'./',
      label:'Menu'
    },
    {
      url:'./',
      label:'Reservations'
    },
    {
      url:'./',
      label:'Order Online'
    },
    {
      url:'./',
      label:'Login'
    },
  ]

  return (
    <nav>
      <ul className={`listMenu direction-${direction}`}>
        {menuLink.map(itemList => (
          <li key={itemList.label} className="itemListMenu">
            <Link variant={'link'} href={itemList.url}>{itemList.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
