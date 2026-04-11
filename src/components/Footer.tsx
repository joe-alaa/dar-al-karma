import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { BookishPattern } from "@/components/BookishPattern";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      <BookishPattern opacity={0.07} className="text-primary-foreground" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="دار الكرم" className="h-12 w-12 sm:h-14 sm:w-14 rounded-full" />
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-bold">دار الكرم</h3>
                <p className="text-xs sm:text-sm text-primary-foreground/70">للنشر والتوزيع والترجمة</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              الكرم في كل صفحة... المعرفة في كل كلمة
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">روابط سريعة</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">الرئيسية</Link>
              <Link to="/books" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">تصفح الكتب</Link>
              <Link to="/about" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">من نحن</Link>
              <Link to="/contact" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">تواصل معنا</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">تواصل معنا</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/50 text-xs">واتساب للطلب</p>
                  <a href="https://wa.me/201289482247" dir="ltr" className="hover:text-primary-foreground transition-colors">+20 128 948 2247</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/50 text-xs">هاتفياً للطلب</p>
                  <a href="tel:+2001158055158" dir="ltr" className="hover:text-primary-foreground transition-colors">+20 115 805 5158</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/50 text-xs">لإرسال الأعمال للنشر</p>
                  <a href="mailto:darelkarm@gmail.com" className="hover:text-primary-foreground transition-colors">darelkarm@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">منصاتنا</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <a href="https://www.facebook.com/share/16XWvn1gR8/" target="_blank" rel="noopener noreferrer" className="block hover:text-primary-foreground transition-colors">📘 فيسبوك: دار الكرم للنشر والتوزيع والترجمة</a>
              <a href="https://www.tiktok.com/@darelkarm12" target="_blank" rel="noopener noreferrer" className="block hover:text-primary-foreground transition-colors">🎵 تيك توك: darelkarm12</a>
              <a href="https://www.instagram.com/darelkarm12" target="_blank" rel="noopener noreferrer" className="block hover:text-primary-foreground transition-colors">📸 انستغرام: darelkarm12</a>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://wa.me/201289482247"
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
          <p>© {new Date().getFullYear()} دار الكرم للنشر والتوزيع والترجمة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
