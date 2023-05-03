import { CartItems } from "component/Main/Cart/CartItems";
export default function TotalPrice() {
  let price = 0;
  CartItems.forEach((item) => {
    price += item.price * item.quantity;
  });
  price += 60;
  return price;
}
