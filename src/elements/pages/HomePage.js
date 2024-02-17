
import Banner from '../organismo/Banner';
import Gallery from '../organismo/Gallery';
import Header from '../global/Header';
import Nav from '../organismo/Nav';
import Footer from '../global/Footer';

function HomePage() {

  const listPlate = [
    {
      title: "Greek salad",
      price: "$12.99",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      urlImage: "./assets/greek_salad.jpg",
      url: {
        href: "./",
        label: "Order a delivery"
      }
    },
    {
      title: "Bruchetta",
      price: "$5.99",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      urlImage: "./assets/bruchetta.svg",
      url: {
        href: "./",
        label: "Order a delivery"
      }
    },
    {
      title: "Lemon Dessert",
      price: "$5.00",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      urlImage: "./assets/lemon_dessert.jpg",
      url: {
        href: "./",
        label: "Order a delivery"
      }
    }
  ]

  const linkGallery = {
    href: "./menu",
    label: "Open menu"
  }

  const customerSay = [
    {
      name: "John Doe",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      photoUser: './lemon_dessert.jpg',
      stars: 4
    },
    {
      name: "Pietra",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      photoUser: './lemon_dessert.jpg',
      stars: 5
    },
    {
      name: "Camilo Silva",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      photoUser: './lemon_dessert.jpg',
      stars: 4
    },
    {
      name: "Gustavo",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      photoUser: './lemon_dessert.jpg',
      stars: 5
    },
  ]

  return (
    <>
    <Header urlImage='./assets/logo.svg'>
      <Nav/>
    </Header>
    <main>

      <section className="banner green-bg">
        <Banner />
      </section>

      <section className="menuSpecials">
        <Gallery
          title="This weeks specials!"
          link={linkGallery}
          listCards={listPlate}
        />
      </section>

      <section className='customerSay'>

      </section>
    </main>

    <Footer/>
    </>
  )
}
export default HomePage;
