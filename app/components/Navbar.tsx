"use client";
import { Cart, ControlPanel, DefaultLogo, EnAr, Logout, Products, Promocode, Settings, Shipping } from '../icons/icons'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import LangSwitch from './NavBtn/LangSwitch';
import { useTranslations } from 'next-intl';


const Navbar = () => {
  const pathName = usePathname();
  const locale = pathName?.split('/')[1];
  const t = useTranslations();

  const NavLinks = [
    {
      href: `/${locale}`,
      label: t('navbar.board'),
      icon: <ControlPanel />
    },
    {
      href: `/${locale}/products`,
      label: t('navbar.Products'),
      icon: <Products />
    },
    {
      href: `/${locale}/orders`,
      label: t('navbar.orders'),
      icon: <Cart />
    },
    {
      href: `/${locale}/promocodes`,
      label: t('navbar.promocodes'),
      icon: <Promocode />
    },
    {
      href: `/${locale}/shippingZone`,
      label: t('navbar.shipping'),
      icon: <Shipping />
    },
    {
      href: `/${locale}/settings`,
      label: t('navbar.settings'),
      icon: <Settings />
    }
  ]


  return (
    <div className='h-screen bg-[#CCE7FF]  '>
      <nav>
        <header className='flex gap-2.5 items-center mb-10 justify-end border-b-2 border-[#99CFFF] p-7.5'>
          <div className='flex flex-col items-end'>
            <h1 className="font-bold text-xl text-right">
              {t('navbar.board')}
            </h1>
            <p className="text-right">{t('navbar.user')}</p>
          </div>

          <div className='h-15 w-15 py-0.75  px-1.25 bg-[#99CFFF] rounded-sm flex justify-center items-center'> <DefaultLogo /> </div>

        </header>

        <aside className='p-7.5 '>
          <div className='flex  flex-col gap-4 '>
            {NavLinks.map((link) => (
              <div key={link.href} className={`${pathName === link.href ? 'text-[#0088FF] hover:text-[#49a7fa] active:text-[#034fa5] transition duration-300' : 'text-black hover:text-[#0088FF] transition duration-300 active:text-[#034fa5] '} `}>
                <Link href={link.href} className='mr-7 flex items-center justify-end  gap-2' >
                  <p className='text-xl font-semibold'>{link.label}</p>
                  <p>{link.icon}</p>
                </Link>
              </div>
            ))}
          </div>
        </aside>

        <footer className='border-t-2 border-[#99CFFF] mt-10 p-7.5'>
          <div className='flex flex-col gap-4'>
            <LangSwitch />
            <div className='border-2 border-[#99CFFF] rounded-md p-1 flex items-cent justify-center gap-2 hover:cursor-pointer hover:bg-[#ff383b24] hover:border-[#FF383C] active:bg-[#FF383C] active:text-white transition duration-300 text-[#FF383C] '>
              <button>تسجيل الخروج</button>
              <Logout />
            </div>
          </div>
        </footer>
      </nav>
    </div>
  )
}

export default Navbar
