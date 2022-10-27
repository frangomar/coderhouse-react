import '../assets/css/cartWidget.css';
import { BsFillCartFill } from 'react-icons/bs';
const CartWidget = () => {
    return (
        <div className='cart-container'>
            <a href='#'><BsFillCartFill /></a>
        </div>
    )
}

export default CartWidget;

