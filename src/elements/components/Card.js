function Card({title, price, description, urlImage, url}){
  return (
    <div className="white-bg">
      <img src={urlImage} alt='' className="imageCard"/>
      <div className='groupTextCard'>
        <span>
          <h3>{title}</h3>
          <p className="none-lineheight">{price}</p>
        </span>
        <p>{description}</p>
        <a href={url.href}>{url.label}</a>
      </div>
    </div>
  )
}

export default Card;