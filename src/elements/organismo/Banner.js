import Link from '../components/Link'
import Chicago from './Chicago';

function Banner() {
  return (
    <>
      <div>
        <Chicago />
        <Link href='./booking' variant={'button'}>Reserva a table</Link>
      </div>
      <img src="./assets/restauranfood.jpg" alt=""/>
    </>
  );
}

export default Banner;
