import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookOpen, Globe, Users, Award } from "lucide-react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن - دار الكرم" },
      { name: "description", content: "تعرف على دار الكرم للنشر والتوزيع والترجمة - رسالتنا ورؤيتنا" },
      { property: "og:title", content: "من نحن - دار الكرم" },
      { property: "og:description", content: "تعرف على دار الكرم للنشر والتوزيع والترجمة" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <img src={logo} alt="دار الكرم" className="h-32 w-32 rounded-full mx-auto mb-6 shadow-lg" />
          <h1 className="font-heading text-4xl font-bold text-foreground">دار الكرم</h1>
          <p className="text-xl text-muted-foreground mt-2">للنشر والتوزيع والترجمة</p>
        </div>

        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            تأسست دار الكرم بهدف نشر المعرفة والثقافة العربية، وتقديم أفضل الإصدارات الأدبية والفكرية للقارئ العربي.
            نسعى لبناء جسور ثقافية من خلال ترجمة الأعمال العالمية المتميزة ونشر الإبداعات العربية الأصيلة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {[
            { icon: BookOpen, title: "رسالتنا", text: "نشر المعرفة وتوفير كتب عالية الجودة تثري العقل العربي" },
            { icon: Globe, title: "رؤيتنا", text: "أن نكون الوجهة الأولى للقراء العرب حول العالم" },
            { icon: Users, title: "فريقنا", text: "نخبة من المحررين والمترجمين المتخصصين في مختلف المجالات" },
            { icon: Award, title: "قيمنا", text: "الجودة والإبداع والالتزام بتقديم أفضل المحتوى الثقافي" },
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border">
              <item.icon className="h-10 w-10 text-gold mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
