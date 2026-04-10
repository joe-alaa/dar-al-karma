import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookCard } from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { getFeaturedBooks, getBestSellers, categories } from "@/data/books";
import { ArrowLeft, BookOpen, Users, Globe } from "lucide-react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "دار الكرم للنشر والتوزيع والترجمة" },
      { name: "description", content: "دار الكرم - دار نشر عربية متخصصة في نشر وتوزيع وترجمة أفضل الكتب" },
      { property: "og:title", content: "دار الكرم للنشر والتوزيع والترجمة" },
      { property: "og:description", content: "دار نشر عربية متخصصة في نشر وتوزيع وترجمة أفضل الكتب" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = getFeaturedBooks();
  const bestSellers = getBestSellers();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 sm:w-64 h-40 sm:h-64 rounded-full border border-primary-foreground/20" />
          <div className="absolute bottom-10 left-10 sm:left-20 w-60 sm:w-96 h-60 sm:h-96 rounded-full border border-primary-foreground/10" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-32 relative">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            <div className="flex-1 text-center md:text-right order-2 md:order-1">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-black text-primary-foreground text-shadow-soft leading-tight">
                دار الكرم
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 mt-2 sm:mt-3 font-heading">
                للنشر والتوزيع والترجمة
              </p>
              <p className="text-primary-foreground/70 mt-4 sm:mt-6 text-base sm:text-lg max-w-lg leading-relaxed mx-auto md:mx-0">
                نفتح لك أبواب المعرفة من خلال مجموعة متنوعة من أفضل الكتب العربية والمترجمة
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center md:justify-start">
                <Link to="/books">
                  <Button variant="hero" size="lg">
                    تصفح الكتب
                    <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="heroOutline" size="lg">
                    من نحن
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 order-1 md:order-2">
              <img src={logo} alt="دار الكرم" className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full shadow-2xl border-4 border-primary-foreground/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {[
            { icon: BookOpen, label: "كتاب متاح", value: "+500" },
            { icon: Users, label: "قارئ سعيد", value: "+10,000" },
            { icon: Globe, label: "دولة", value: "+15" },
            { icon: BookOpen, label: "مؤلف", value: "+200" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5 sm:gap-2">
              <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-gold" />
              <span className="text-xl sm:text-2xl font-bold text-foreground">{stat.value}</span>
              <span className="text-xs sm:text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">كتب مميزة</h2>
            <Link to="/books" className="text-primary text-sm font-medium hover:underline">عرض الكل</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {featured.slice(0, 4).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 sm:py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">التصنيفات</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to="/books"
                search={{ category: cat.slug }}
                className="bg-card rounded-xl p-4 sm:p-6 text-center card-hover border border-border group"
              >
                <span className="text-3xl sm:text-4xl block mb-2 sm:mb-3">{cat.icon}</span>
                <h3 className="font-heading font-bold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">🔥 الأكثر مبيعًا</h2>
            <Link to="/books" search={{ category: "best-sellers" }} className="text-primary text-sm font-medium hover:underline">عرض الكل</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {bestSellers.slice(0, 4).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 sm:py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">آراء القراء</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: "أحمد محمد", text: "مكتبة رائعة وتوصيل سريع. الكتب بحالة ممتازة والأسعار مناسبة جداً.", rating: 5 },
              { name: "سارة علي", text: "أفضل دار نشر تعاملت معها. مجموعة متنوعة من الكتب وخدمة عملاء ممتازة.", rating: 5 },
              { name: "محمد حسن", text: "تجربة شراء سلسة ومريحة. أنصح بها بشدة لكل محبي القراءة.", rating: 4 },
            ].map((review, i) => (
              <div key={i} className="bg-card rounded-xl p-5 sm:p-6 border border-border">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <span key={j} className="text-gold">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{review.text}"</p>
                <p className="font-bold text-foreground text-sm">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
