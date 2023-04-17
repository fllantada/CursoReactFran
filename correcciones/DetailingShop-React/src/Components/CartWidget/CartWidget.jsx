
import cart from './assets/cart.svg'
function CartWidget() {
  return (
    <div className="fixed right-5 top-20 ">
      <div className="flex items-center ">
        <img src={cart} alt="cart-widget" />
        0
      </div>
    </div>
  )
}

export default CartWidget
