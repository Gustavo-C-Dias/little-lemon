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
            <a  className='link' href={itemList.url}>{itemList.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
