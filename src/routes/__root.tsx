import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../lib/i18n";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
 head: () => ({
  meta: [
    { charSet: "utf-8" },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },

    // SEO
    {
      title:
        "German Language Classes in Chennai | Goethe Exam Coaching | Kee German Academy",
    },
    {
      name: "description",
      content:
        "Join Kee German Academy in Chennai for A1, A2, B1 & B2 German language courses. Learn from certified trainers with Goethe exam preparation, online and offline classes. Call +91 9941987164.",
    },
    {
      name: "keywords",
      content:
        "German classes Chennai, German language institute Chennai, Learn German Chennai, Goethe exam coaching Chennai, German A1 course Chennai, German A2 course Chennai, German B1 course Chennai, German B2 course Chennai, German language training Chennai",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "author",
      content: "Kee German Academy",
    },

    // Open Graph
    {
      property: "og:title",
      content:
        "German Language Classes in Chennai | Kee German Academy",
    },
    {
      property: "og:description",
      content:
        "A1 to B2 German courses with Goethe exam preparation in Chennai.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:site_name",
      content: "Kee German Academy",
    },
    {
      property: "og:url",
      content: "https://kee-german-academy.netlify.app/",
    },
    {
      property: "og:image",
      content: "https://kee-german-academy.netlify.app/og-image.jpg",
    },

    // Twitter
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content:
        "German Language Classes in Chennai | Kee German Academy",
    },
    {
      name: "twitter:description",
      content:
        "Certified German language training and Goethe exam coaching in Chennai.",
    },
    {
      name: "twitter:image",
      content: "https://kee-german-academy.netlify.app/og-image.jpg",
    },

    // Theme
    {
      name: "theme-color",
      content: "#090909",
    },
  ],

  links: [
    {
      rel: "canonical",
      href: "https://kee-german-academy.netlify.app/",
    },
    { rel: "stylesheet", href: appCss },
    { rel: "icon", href: "/favicon.ico" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap",
    },
  ],
}),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LanguageSchool",
    name: "Kee German Academy",
    url: "https://kee-german-academy.netlify.app/",
    telephone: "+91-9941987164",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />

        {/* SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </QueryClientProvider>
    </I18nextProvider>
  );
}
