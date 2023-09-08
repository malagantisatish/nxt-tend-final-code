import Header from '../Header'
import CartListView from '../CartListView'
import EmptyCarView from '../EmptyCartView'
import CartContext from '../../context/CartContext'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showTheEmptyView = cartList.length === 0
      const removeAllBtnClciked = () => {
        removeAllCartItems()
      }
      return (
        <>
          <Header />
          <div className="cart-container">
            <div className="cart-content-container">
              <div className="cart-remove-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  className="remove-all-btn"
                  onClick={removeAllBtnClciked}
                >
                  Remove All
                </button>
              </div>
              {showTheEmptyView ? <EmptyCarView /> : <CartListView />}
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
