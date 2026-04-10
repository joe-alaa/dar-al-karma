import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getBookById } from "@/data/books";
import { useLocationPricing } from "@/hooks/use-location-pricing";
import { useCart } from "@/hooks/use-cart";
import { ShoppingCart, Star, ArrowRight, BookOpen, Calendar } from "lucide-react";

export const Route = createFileRoute("/books/$bookId")({
  head: ({ params }) => {
    const book = getBookById(params.bookId);
    return {
      meta: [
        { title: book ? `${book.title} - دار الكرمة` : "كتاب - دار الكرمة" },
        { name: "description", content: book?.description || "" },
        { property: "og:title", content: book ? `${book.title} - دار الكرمة` : "كتاب" },
        { property: "og:description", content: book?.description || "" },
      ],
    };
  },
  component: BookDetailPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground">الكتاب غير موجود</h1>
        <Link to="/books" search={{}} className="text-primary mt-4 inline-block">العودة للكتب</Link>
      </div>
    </div>
  ),
});

function BookDetailPage() {
  const { bookId } = Route.useParams();
  const book = getBookById(bookId);
  const { formatPrice } = useLocationPricing();
  const { addToCart } = useCart();

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground text-lg">الكتاب غير موجود</p>
      </div>
    );
  }

  const colors = [
    "from-primary/80 to-secondary/80",
    "from-secondary/80 to-primary/60",
    "from-primary/60 to-secondary/60",
    "from-secondary/70 to-primary/70",
  ];
  const colorClass = colors[parseInt(book.id) % colors.length];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/books" search={{}} className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline mb-6">
          <ArrowRight className="h-4 w-4" />
          العودة للكتب
        </Link>

        <div className="grid md:grid-cols-2 gap-10">
          <div className={`aspect-[3/4] bg-gradient-to-br ${colorClass} rounded-2xl flex items-center justify-center p-10 relative`}>
            <div className="text-center text-primary-foreground">
              <p className="font-heading text-4xl font-bold text-shadow-soft leading-tight">{book.title}</p>
              <p className="text-lg mt-4 text-primary-foreground/80">{book.author}</p>
            </div>
            {book.isBestSeller && (
              <span className="absolute top-4 left-4 gold-gradient text-gold-foreground text-sm font-bold px-4 py-2 rounded-full">
                الأكثر مبيعًا
              </span>
            )}
          </div>

          <div>
            <h1 className="font-heading text-3xl font-bold text-foreground">{book.title}</h1>
            <p className="text-lg text-muted-foreground mt-2">{book.author}</p>

            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-gold text-gold" />
                <span className="font-medium text-foreground">{book.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <BookOpen className="h-4 w-4" />
                {book.pages} صفحة
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <Calendar className="h-4 w-4" />
                {book.year}
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted rounded-xl">
              <span className="text-3xl font-bold text-primary">{formatPrice(book.priceEGP, book.priceUSD)}</span>
            </div>

            <p className="mt-6 text-muted-foreground leading-relaxed">{book.description}</p>

            <div className="mt-8 flex gap-4">
              <Button size="xl" onClick={() => addToCart(book)} className="gap-2 flex-1">
                <ShoppingCart className="h-5 w-5" />
                أضف إلى السلة
              </Button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="text-muted-foreground">التصنيف</p>
                <p className="font-bold text-foreground mt-1">{book.category}</p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="text-muted-foreground">سنة النشر</p>
                <p className="font-bold text-foreground mt-1">{book.year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
