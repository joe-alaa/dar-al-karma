import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="دار الكرمة" className="h-14 w-14 rounded-full" />
              <div>
                <h3 className="font-heading text-xl font-bold">دار الكرمة</h3>
                <p className="text-sm text-primary-foreground/70">للنشر والتوزيع والترجمة</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              نسعى لنشر المعرفة والثقافة من خلال تقديم أفضل الكتب العربية والمترجمة.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-4">روابط سريعة</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">الرئيسية</Link>
              <Link to="/books" search={{ category: undefined }} className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">تصفح الكتب</Link>
              <Link to="/about" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">من نحن</Link>
              <Link to="/contact" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">تواصل معنا</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-4">تواصل معنا</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>البريد: info@daralkarma.com</p>
              <p>الهاتف: +20 123 456 789</p>
              <p>القاهرة، مصر</p>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://wa.me/20123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                واتساب
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} دار الكرمة للنشر والتوزيع والترجمة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
