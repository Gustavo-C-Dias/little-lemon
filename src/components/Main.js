function Main() {

  const listPlate = [
    {
      title: "Greek salad",
      price: "$12.99",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      urlImage: "./assets/greek_salad.jpg",
      url: "./"
    },
    {
      title: "Bruchetta",
      price: "$5.99",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      urlImage: "./assets/bruchetta.svg",
      url: "./"
    },
    {
      title: "Lemon Dessert",
      price: "$5.00",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      urlImage: "./assets/lemon_dessert.jpg",
      url: "./"
    }
  ]
  return (
    <main>
      <section className="banner green-bg">
        <div>
          <h1 className="yellow-color none-lineheight">Little Lemon</h1>
          <h2 className="white-color none-lineheight">Chicago</h2>
          <p className="white-color">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <a className='button yellow-bg' href="./reserve-a-table">Reserve a Table</a>
        </div>
        <img src="./assets/restauranfood.jpg" alt=""/>
      </section>
      <section className="menuSpecials">
        <div className="titleMemu">
          <h2 className="none-lineheight">This weeks specials!</h2>
          <a className="button yellow-bg" href="./menu">Open Menu</a>
        </div>
        <div className="cardsList">
          {listPlate.map (itemList => (
            <div key={itemList.label} className="white-bg">
              <img src={itemList.urlImage} alt={itemList.label} className="imageCard"/>
              <div className='groupTextCard'>
                <span>
                  <h3 className="none-lineheight">{itemList.title}</h3>
                  <p className="none-lineheight">{itemList.price}</p>
                </span>
                <p>{itemList.description}</p>
                <a href="./delivery">Order a delivery</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
export default Main;
