import { useState, useCallback, useEffect } from "react";
import type { Book } from "@/data/books";

export interface CartItem {
  book: Book;
  quantity: number;
}

let globalCart: CartItem[] = [];
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((l) => l());
}

export function useCart() {
  const [, setTick] = useState(0);

  useEffect(() => {
    const listener = () => setTick((t) => t + 1);
    listeners.add(listener);
    return () => { listeners.delete(listener); };
  }, []);

  const addToCart = useCallback((book: Book) => {
    const existing = globalCart.find((item) => item.book.id === book.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      globalCart = [...globalCart, { book, quantity: 1 }];
    }
    globalCart = [...globalCart];
    notify();
  }, []);

  const removeFromCart = useCallback((bookId: string) => {
    globalCart = globalCart.filter((item) => item.book.id !== bookId);
    notify();
  }, []);

  const updateQuantity = useCallback((bookId: string, quantity: number) => {
    if (quantity <= 0) {
      globalCart = globalCart.filter((item) => item.book.id !== bookId);
    } else {
      globalCart = globalCart.map((item) =>
        item.book.id === bookId ? { ...item, quantity } : item
      );
    }
    notify();
  }, []);

  const clearCart = useCallback(() => {
    globalCart = [];
    notify();
  }, []);

  const totalEGP = globalCart.reduce((sum, item) => sum + item.book.priceEGP * item.quantity, 0);
  const totalUSD = globalCart.reduce((sum, item) => sum + item.book.priceUSD * item.quantity, 0);
  const itemCount = globalCart.reduce((sum, item) => sum + item.quantity, 0);

  return {
    items: globalCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalEGP,
    totalUSD,
    itemCount,
  };
}
