function Stars({quant}){
    const image = []

    for (let i = 0; i < quant; i++) {
        image.push(<img  className='imageStars'src="./assets/estrela.png" alt="star" key={i} />)
    }

    return image
}

export default Stars;