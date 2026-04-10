import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا - دار الكرمة" },
      { name: "description", content: "تواصل مع دار الكرمة للنشر والتوزيع والترجمة" },
      { property: "og:title", content: "تواصل معنا - دار الكرمة" },
      { property: "og:description", content: "تواصل مع دار الكرمة للنشر والتوزيع والترجمة" },
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
          {[
            { icon: Phone, title: "الهاتف", value: "+20 123 456 789" },
            { icon: Mail, title: "البريد الإلكتروني", value: "info@daralkarma.com" },
            { icon: MapPin, title: "العنوان", value: "القاهرة، مصر" },
            { icon: MessageCircle, title: "واتساب", value: "+20 123 456 789" },
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border flex items-start gap-4">
              <item.icon className="h-8 w-8 text-gold flex-shrink-0" />
              <div>
                <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground mt-1">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a <a href="https://wa.me/201289482247" target="_blank" rel="noopener noreferrer"> target="_blank" rel="noopener noreferrer">
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
