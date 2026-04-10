import { useState, useEffect } from "react";

interface PricingContext {
  isEgypt: boolean;
  currency: string;
  currencySymbol: string;
  formatPrice: (egp: number, usd: number) => string;
  loading: boolean;
}

export function useLocationPricing(): PricingContext {
  const [isEgypt, setIsEgypt] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function detectLocation() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        setIsEgypt(data.country_code === "EG");
      } catch {
        setIsEgypt(true);
      } finally {
        setLoading(false);
      }
    }
    detectLocation();
  }, []);

  const currency = isEgypt ? "EGP" : "USD";
  const currencySymbol = isEgypt ? "ج.م" : "$";

  const formatPrice = (egp: number, usd: number) => {
    const price = isEgypt ? egp : usd;
    return `${price} ${currencySymbol}`;
  };

  return { isEgypt, currency, currencySymbol, formatPrice, loading };
}
