import { useState, useEffect, createContext, useContext, type ReactNode } from "react";
import React from "react";

interface PricingContext {
  isEgypt: boolean;
  currency: string;
  currencySymbol: string;
  formatPrice: (egp: number, usd: number) => string;
  loading: boolean;
}

const defaultCtx: PricingContext = {
  isEgypt: true,
  currency: "EGP",
  currencySymbol: "ج.م",
  formatPrice: (egp) => `${egp} ج.م`,
  loading: true,
};

const LocationPricingContext = createContext<PricingContext>(defaultCtx);

let cachedResult: { isEgypt: boolean } | null = null;

export function LocationPricingProvider({ children }: { children: ReactNode }) {
  const [isEgypt, setIsEgypt] = useState(cachedResult?.isEgypt ?? true);
  const [loading, setLoading] = useState(!cachedResult);

  useEffect(() => {
    if (cachedResult) {
      setIsEgypt(cachedResult.isEgypt);
      setLoading(false);
      return;
    }
    async function detectLocation() {
      try {
        // Try multiple geo APIs for reliability
        let countryCode = "";
        try {
          const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3000) });
          if (res.ok) {
            const data = await res.json();
            countryCode = data.country_code;
          }
        } catch {
          // fallback API
          try {
            const res = await fetch("https://ip2c.org/s", { signal: AbortSignal.timeout(3000) });
            if (res.ok) {
              const text = await res.text();
              // Format: "1;CC;CCC;Country Name"
              const parts = text.split(";");
              if (parts.length >= 2) countryCode = parts[1];
            }
          } catch {
            // default to Egypt
          }
        }
        const result = countryCode === "EG" || countryCode === "";
        cachedResult = { isEgypt: result };
        setIsEgypt(result);
      } catch {
        cachedResult = { isEgypt: true };
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

  const value = { isEgypt, currency, currencySymbol, formatPrice, loading };

  return React.createElement(LocationPricingContext.Provider, { value }, children);
}

export function useLocationPricing(): PricingContext {
  return useContext(LocationPricingContext);
}
