import Link from "../components/Link";
import Card from "../components/Card";

function Gallery({title, link, listCards}){
  return (
    <>
      <div className="titleMemu">
        <h2>{title}</h2>
        <Link variant='button' href={link.href}>{link.label}</Link>
      </div>

      <div className="cardsList">
        {listCards && listCards.map ((itemList, index) => (
          <Card
            key={index}
            title = {itemList.title}
            price = {itemList.price}
            description = {itemList.description}
            urlImage = {itemList.urlImage}
            url = {itemList.url}
          />
        ))}
      </div>
    </>
  )
}

export default Gallery;