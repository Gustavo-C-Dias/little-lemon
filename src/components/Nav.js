function Nav({list}) {
  return (
    <nav>
      <ul>
        {list.map(itemList => (
          <li key={itemList.label}>
            <a href={itemList.url}>{itemList.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
