import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا - دار الكرم" },
      { name: "description", content: "تواصل مع دار الكرم للنشر والتوزيع والترجمة" },
      { property: "og:title", content: "تواصل معنا - دار الكرم" },
      { property: "og:description", content: "تواصل مع دار الكرم للنشر والتوزيع والترجمة" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading text-4xl font-bold text-foreground text-center mb-12">تواصل معنا</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card rounded-xl p-6 border border-border flex items-start gap-4">
            <MessageCircle className="h-8 w-8 text-gold flex-shrink-0" />
            <div>
              <h3 className="font-heading font-bold text-foreground">واتساب للطلب</h3>
              <p className="text-muted-foreground mt-1" dir="ltr">+20 128 948 2247</p>
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border flex items-start gap-4">
            <Phone className="h-8 w-8 text-gold flex-shrink-0" />
            <div>
              <h3 className="font-heading font-bold text-foreground">التواصل هاتفياً للطلب</h3>
              <p className="text-muted-foreground mt-1" dir="ltr">+20 115 805 5158</p>
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border flex items-start gap-4">
            <Mail className="h-8 w-8 text-gold flex-shrink-0" />
            <div>
              <h3 className="font-heading font-bold text-foreground">لإرسال الأعمال للنشر</h3>
              <p className="text-muted-foreground mt-1">darelkarm@gmail.com</p>
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border flex items-start gap-4">
            <MapPin className="h-8 w-8 text-gold flex-shrink-0" />
            <div>
              <h3 className="font-heading font-bold text-foreground">الموقع</h3>
              <p className="text-muted-foreground mt-1">القاهرة، مصر</p>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="bg-card rounded-xl p-6 border border-border mb-12">
          <h2 className="font-heading text-xl font-bold text-foreground mb-4 text-center">منصاتنا</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.facebook.com/share/16XWvn1gR8/" target="_blank" rel="noopener noreferrer" className="bg-muted rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">📘 فيسبوك</a>
            <a href="https://www.tiktok.com/@darelkarm12" target="_blank" rel="noopener noreferrer" className="bg-muted rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">🎵 تيك توك</a>
            <a href="https://www.instagram.com/darelkarm12" target="_blank" rel="noopener noreferrer" className="bg-muted rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">📸 انستغرام</a>
          </div>
        </div>

        <div className="text-center">
          <a href="https://wa.me/201289482247" target="_blank" rel="noopener noreferrer">
            <Button size="xl" className="gap-2 bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="h-5 w-5" />
              تواصل عبر واتساب
            </Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
