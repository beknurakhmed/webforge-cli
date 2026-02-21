import type { CartItem } from '../App';

interface CartProps {
  items: CartItem[];
  onRemove: (id: number) => void;
  onClose: () => void;
}

export function Cart({ items, onRemove, onClose }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="cart-close" onClick={onClose}>X</button>
        </div>
        {items.length === 0 ? (
          <p className="cart-empty">Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <span className="cart-item-image">{item.image}</span>
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>Qty: {item.quantity} x ${item.price.toFixed(2)}</p>
                  </div>
                  <button className="cart-item-remove" onClick={() => onRemove(item.id)}>Remove</button>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <button className="checkout-btn">Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
