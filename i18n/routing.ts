// i18n/routing.ts
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["ar", "en"],

    // اللغة الافتراضية
    defaultLocale: "ar",

    // المسارات المترجمة
    pathnames: {
        "/": "/",
        "/products": {
            ar: "/منتجات",
            en: "/products",
        },
        "/about": {
            ar: "/عن-الموقع",
            en: "/about",
        },
    },
});
export type Routing = typeof routing;