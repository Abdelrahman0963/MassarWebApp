// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function NavItem({
//   href,
//   label,
// }: {
//   href: string;
//   label: string;
// }) {
//   const pathname = usePathname();
//   const isActive = pathname === href;

//   return (
//     <Link
//       href={href}
//       className={`block px-4 py-2 rounded
//         ${isActive ? "bg-blue-500 text-white" : "text-gray-700"}
//       `}
//     >
//       {label}
//     </Link>
//   );
// }
