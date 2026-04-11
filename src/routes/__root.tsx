import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { LocationPricingProvider } from "@/hooks/use-location-pricing";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          الصفحة غير موجودة
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "دار الكرم للنشر والتوزيع والترجمة" },
      { name: "description", content: "دار الكرم - دار نشر عربية متخصصة في نشر وتوزيع وترجمة أفضل الكتب" },
      { name: "author", content: "دار الكرم" },
      { property: "og:title", content: "دار الكرم للنشر والتوزيع والترجمة" },
      { property: "og:description", content: "دار الكرم - دار نشر عربية متخصصة في نشر وتوزيع وترجمة أفضل الكتب" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "دار الكرم للنشر والتوزيع والترجمة" },
      { name: "twitter:description", content: "دار الكرم - دار نشر عربية متخصصة في نشر وتوزيع وترجمة أفضل الكتب" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/07b4b841-0216-4169-b5b8-af50cc437050/id-preview-2b60b9d3--cbc6f16c-1a34-4645-96ce-f47ed51b26d3.lovable.app-1775847476997.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/07b4b841-0216-4169-b5b8-af50cc437050/id-preview-2b60b9d3--cbc6f16c-1a34-4645-96ce-f47ed51b26d3.lovable.app-1775847476997.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <LocationPricingProvider>
      <Outlet />
    </LocationPricingProvider>
  );
}
