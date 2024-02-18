import Stars from "./Stars";

function Customer({cards, title}){
  return (
    <>
      <div className="titleMemu">
        <h2 className="white-color">{title}</h2>
      </div>

      <ul className="cardCustomer">
        {cards && cards.map ((itemList) => (
          <li className="itemListMenu">
            <div className="headerCard">
              <div>
                <h3>{itemList.name}</h3>
                <div>
                  <Stars quant={itemList.stars}/>
                </div>
              </div>
              <img className='userPhotoCard' src={itemList.photoUser} alt=""/>
            </div>
            <p>{itemList.description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Customer;