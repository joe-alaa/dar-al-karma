import { Link } from "@tanstack/react-router";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Book } from "@/data/books";
import { useLocationPricing } from "@/hooks/use-location-pricing";
import { useCart } from "@/hooks/use-cart";

export function BookCard({ book }: { book: Book }) {
  const { formatPrice } = useLocationPricing();
  const { addToCart } = useCart();

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-sm card-hover border border-border group">
      <Link to="/books/$bookId" params={{ bookId: book.id }}>
        <div className="aspect-[3/4] relative overflow-hidden">
          {book.cover ? (
            <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center p-6">
              <div className="text-center text-primary-foreground">
                <p className="font-heading text-2xl font-bold leading-tight">{book.title}</p>
                <p className="text-sm mt-2 text-primary-foreground/80">{book.author}</p>
              </div>
            </div>
          )}
          {book.isBestSeller && (
            <span className="absolute top-3 left-3 gold-gradient text-gold-foreground text-xs font-bold px-3 py-1 rounded-full">
              الأكثر مبيعًا
            </span>
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link to="/books/$bookId" params={{ bookId: book.id }}>
          <h3 className="font-heading font-bold text-foreground text-base leading-tight hover:text-primary transition-colors">{book.title}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-1">{book.author}</p>
        <div className="flex items-center gap-1 mt-2">
          <Star className="h-3.5 w-3.5 fill-gold text-gold" />
          <span className="text-xs text-muted-foreground">{book.rating}</span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-primary">{formatPrice(book.priceEGP, book.priceUSD)}</span>
          <Button size="sm" variant="default" onClick={() => addToCart(book)} className="gap-1">
            <ShoppingCart className="h-3.5 w-3.5" />
            أضف
          </Button>
        </div>
      </div>
    </div>
  );
}
