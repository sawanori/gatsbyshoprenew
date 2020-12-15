import React from 'react';
import CartContext from 'context/CartContext';
import { CartItem, CartHeader, CartFooter, Footer } from './styles';
import { QuantityAdjuster } from '../QuantityAdjuster';
import { RemoveLineItem } from '../RemoveLineItem';
import { Button } from '../Button';
import { navigate } from '@reach/router';

export function CartContents() {
  const { checkout, updateLineItem } = React.useContext(CartContext);

  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };

  return (
    <section>
      <h1>カート</h1>
      {!!checkout?.lineItems && (
        <CartHeader>
          <div>商品</div>
          <div>価格</div>
          <div>個数</div>
          <div>合計</div>
        </CartHeader>
      )}
      {checkout?.lineItems?.map(item => (
        <CartItem key={item.variant.id}>
          <div>
            <div>{item.title}</div>
            <div>
              {item.variant.title === 'Default Title' ? '' : item.variant.title}
            </div>
          </div>
          <div>{item.variant.price}円</div>
          <div>
            <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity} />
          </div>
          <div>{(item.quantity * item.variant.price).toFixed(2)}円</div>
          <div>
            <RemoveLineItem lineItemId={item.id} />
          </div>
        </CartItem>
      ))}
      {!!checkout?.lineItems && (
        <CartFooter>
          <div>
            <strong>合計:</strong>
          </div>
          <div>
            <span>{checkout?.totalPrice}円</span>
          </div>
        </CartFooter>
      )}
      {!checkout?.lineItems && <h4>カートは空です。</h4>}
      <Footer>
        <div>
          <Button onClick={() => navigate(-1)}>買い物を続ける</Button>
        </div>
        <div>
          {!!checkout?.webUrl && (
            <Button
              onClick={() => {
                window.location.href = checkout.webUrl;
              }}
            >
              お会計
            </Button>
          )}
        </div>
      </Footer>
    </section>
  );
}
