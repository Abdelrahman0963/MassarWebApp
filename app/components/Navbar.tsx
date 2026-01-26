"use client";

import {
  Cart,
  ControlPanel,
  DefaultLogo,
  Logout,
  Products,
  Promocode,
  Settings,
  Shipping
} from "../icons/icons";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import LangSwitch from "./NavBtn/LangSwitch";

const Navbar = () => {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1];
  const t = useTranslations();

  const isRTL = locale === "ar";

  const navLinks = [
    {
      href: `/${locale}`,
      label: t("navbar.board"),
      icon: <ControlPanel />,
    },
    {
      href: `/${locale}/products`,
      label: t("navbar.Products"),
      icon: <Products />,
    },
    {
      href: `/${locale}/orders`,
      label: t("navbar.orders"),
      icon: <Cart />,
    },
    {
      href: `/${locale}/promocodes`,
      label: t("navbar.promocodes"),
      icon: <Promocode />,
    },
    {
      href: `/${locale}/shippingZone`,
      label: t("navbar.shippingZone"),
      icon: <Shipping />,
    },
    {
      href: `/${locale}/settings`,
      label: t("navbar.settings"),
      icon: <Settings />,
    },
  ];

  return (
    <aside
      className={`
        h-screen w-70 bg-[#CCE7FF] border-r
        flex flex-col
        ${isRTL ? "border-l border-r-0" : ""}
      `}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* ===== Header ===== */}
      <div className="flex items-center gap-3 px-6 py-5 border-b">
        <div className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-100">
          <DefaultLogo />
        </div>

        <div className="flex flex-col">
          <span className="font-semibold text-sm">
            {t("navbar.board")}
          </span>
          <span className="text-xs text-slate-500">
            {t("navbar.user")}
          </span>
        </div>
      </div>

      {/* ===== Nav ===== */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg
                    transition-all duration-200
                    ${isActive
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "text-slate-600 hover:bg-slate-100"
                    }
                    ${isRTL ? "flex-row-reverse text-right" : ""}
                  `}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="text-sm">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ===== Footer ===== */}
      <div className="border-t px-4 py-4 space-y-3">
        <LangSwitch />

        <button
          className="
            w-full flex items-center justify-center gap-2
            px-4 py-2 rounded-lg
            text-red-600 border border-red-200
            hover:bg-red-50
            active:bg-red-600 active:text-white
            transition
          "
        >
          <Logout />
          <span className="text-sm">تسجيل الخروج</span>
        </button>
      </div>
    </aside>
  );
};

export default Navbar;
