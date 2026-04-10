import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLocationPricing } from "@/hooks/use-location-pricing";
import { Trash2, Plus, Minus, ShoppingCart, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "السلة - دار الكرمة" },
      { name: "description", content: "سلة المشتريات - دار الكرمة" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, removeFromCart, updateQuantity, totalEGP, totalUSD, itemCount, clearCart } = useCart();
  const { formatPrice, isEgypt, currencySymbol } = useLocationPricing();
  const [showCheckout, setShowCheckout] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const totalPrice = isEgypt ? totalEGP : totalUSD;

  const handleCheckout = () => {
    const booksList = items
      .map((item) => `- ${item.book.title} (×${item.quantity}) = ${formatPrice(item.book.priceEGP * item.quantity, item.book.priceUSD * item.quantity)}`)
      .join("\n");

    const message = encodeURIComponent(
      `🛒 طلب جديد من دار الكرمة\n\n` +
      `👤 الاسم: ${name}\n` +
      `📱 الهاتف: ${phone}\n` +
      `📍 العنوان: ${address}\n\n` +
      `📚 الكتب:\n${booksList}\n\n` +
      `💰 الإجمالي: ${totalPrice} ${currencySymbol}`
    );

    window.open(`https://wa.me/20123456789?text=${message}`, "_blank");
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <ShoppingCart className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">السلة فارغة</h1>
          <p className="text-muted-foreground mb-8">لم تضف أي كتب بعد</p>
          <Link to="/books" search={{ category: undefined }}>
            <Button size="lg">تصفح الكتب</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-6">السلة ({itemCount} كتاب)</h1>

        <div className="space-y-4 mb-8">
          {items.map((item) => (
            <div key={item.book.id} className="bg-card rounded-xl p-4 border border-border flex items-center gap-4">
              <div className="w-16 h-20 bg-gradient-to-br from-primary/60 to-secondary/60 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground text-xs font-bold text-center px-1 leading-tight">{item.book.title}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold text-foreground text-sm truncate">{item.book.title}</h3>
                <p className="text-xs text-muted-foreground">{item.book.author}</p>
                <p className="text-sm font-bold text-primary mt-1">{formatPrice(item.book.priceEGP, item.book.priceUSD)}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.book.id, item.quantity - 1)}>
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-8 text-center font-bold text-foreground">{item.quantity}</span>
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.book.id, item.quantity + 1)}>
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              <Button variant="ghost" size="icon" className="text-destructive" onClick={() => removeFromCart(item.book.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-xl p-6 border border-border mb-6">
          <div className="flex items-center justify-between text-lg">
            <span className="font-heading font-bold text-foreground">الإجمالي</span>
            <span className="font-bold text-primary text-2xl">{totalPrice} {currencySymbol}</span>
          </div>
        </div>

        {!showCheckout ? (
          <Button size="xl" className="w-full gap-2" onClick={() => setShowCheckout(true)}>
            <MessageCircle className="h-5 w-5" />
            إتمام الطلب عبر واتساب
          </Button>
        ) : (
          <div className="bg-card rounded-xl p-6 border border-border space-y-4">
            <h2 className="font-heading text-xl font-bold text-foreground">بيانات التوصيل</h2>
            <input
              type="text"
              placeholder="الاسم الكامل"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="tel"
              placeholder="رقم الهاتف"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              placeholder="العنوان بالتفصيل"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <Button
              size="xl"
              className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white"
              onClick={handleCheckout}
              disabled={!name || !phone || !address}
            >
              <MessageCircle className="h-5 w-5" />
              إرسال الطلب عبر واتساب
            </Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
