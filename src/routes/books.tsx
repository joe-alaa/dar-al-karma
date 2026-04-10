import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookCard } from "@/components/BookCard";
import { books, categories, getBooksByCategory } from "@/data/books";
import { useState } from "react";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "تصفح الكتب - دار الكرمة" },
      { name: "description", content: "تصفح مجموعتنا المتنوعة من الكتب العربية والمترجمة" },
      { property: "og:title", content: "تصفح الكتب - دار الكرمة" },
      { property: "og:description", content: "تصفح مجموعتنا المتنوعة من الكتب العربية والمترجمة" },
    ],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    category: (search.category as string) || undefined,
  }),
  component: BooksPage,
});

function BooksPage() {
  const { category } = Route.useSearch();
  const [selectedCategory, setSelectedCategory] = useState(category || "");
  const [sortBy, setSortBy] = useState("default");

  let filteredBooks = selectedCategory
    ? getBooksByCategory(selectedCategory)
    : books;

  if (sortBy === "price-asc") {
    filteredBooks = [...filteredBooks].sort((a, b) => a.priceEGP - b.priceEGP);
  } else if (sortBy === "price-desc") {
    filteredBooks = [...filteredBooks].sort((a, b) => b.priceEGP - a.priceEGP);
  } else if (sortBy === "rating") {
    filteredBooks = [...filteredBooks].sort((a, b) => b.rating - a.rating);
  }

  const currentCategoryName = categories.find((c) => c.slug === selectedCategory)?.name || "جميع الكتب";

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-6">{currentCategoryName}</h1>

        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setSelectedCategory("")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              !selectedCategory ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            الكل
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === cat.slug ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">{filteredBooks.length} كتاب</p>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="default">ترتيب افتراضي</option>
            <option value="price-asc">السعر: من الأقل</option>
            <option value="price-desc">السعر: من الأعلى</option>
            <option value="rating">التقييم</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">لا توجد كتب في هذا التصنيف</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
