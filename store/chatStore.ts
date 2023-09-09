import { create } from "zustand";
import { persist } from "zustand/middleware";

import { typeShtamp } from "helpers/dayjs";
import { StaticImageData } from "next/image";

export interface IMessage {
  authorId: number;
  authorName?: string;
  authorPosition?: string;
  authorAvatar?: StaticImageData;
  text: string;
  photo: StaticImageData[];
  timeShtamp: typeShtamp;
}

interface chatState {}

export const useCartStore = create<chatState>()(
  persist(
    (set) => ({
      // productId: [],
      // productsInCart: [],
      // totalProducts: 0,
      // total: 0,
      // promoCode: "",
      // isPromoCodeValid: false,
      // addProductToCart: (productToAdd) =>
      //   set((state) => ({
      //     productId: [...state.productId, productToAdd.id],
      //     productsInCart: [...state.productsInCart, productToAdd],
      //     totalProducts: state.totalProducts + productToAdd.price,
      //   })),
      // removeProductFromCart: (productToRemove) =>
      //   set((state) => ({
      //     productId: state.productId.filter((id) => id !== productToRemove.id),
      //     productsInCart: state.productsInCart.filter(
      //       (product) => product.id !== productToRemove.id
      //     ),
      //     totalProducts: state.totalProducts - productToRemove.price,
      //   })),
      // clearCart: () =>
      //   set(() => ({
      //     productId: [],
      //     productsInCart: [],
      //     totalProducts: 0,
      //     total: 0,
      //   })),
      // increaseAmount: (productToIncreace) =>
      //   set((state) => {
      //     const productsInCart = state.productsInCart.map((product) => {
      //       if (product.id === productToIncreace.id && product.amount) product.amount++;
      //       return product;
      //     });
      //     return {
      //       productsInCart: productsInCart,
      //       totalProducts: state.totalProducts + productToIncreace.price,
      //     };
      //   }),
      // decreaseAmount: (productToDecreace) =>
      //   set((state) => {
      //     const productsInCart = state.productsInCart.map((product) => {
      //       if (product.id === productToDecreace.id && product.amount) product.amount--;
      //       return product;
      //     });
      //     return {
      //       productsInCart: productsInCart,
      //       totalProducts: state.totalProducts - productToDecreace.price,
      //     };
      //   }),
      // addPromoCode: (promoCodeToAdd) =>
      //   set(() => ({
      //     promoCode: promoCodeToAdd,
      //   })),
      // setIsPromoCodeValid: (isValid) => set(() => ({ isPromoCodeValid: isValid })),
    }),
    { name: "chat-storage" }
  )
);
