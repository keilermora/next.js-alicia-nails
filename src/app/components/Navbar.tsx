import { getScopedI18n } from "@/src/locales/server";
import NavItem from "./NavItem";

export default async function Navbar() {
  const scopedT = await getScopedI18n("components.header.navItems");

  const navItems = [
    { href: "/", label: scopedT("home") },
    { href: "/available-colors", label: scopedT("availableColors") },
    { href: "/about", label: scopedT("about") },
    {
      href: "/chosen-colors?ids=A098P,IT02,SS1816",
      label: scopedT("chosenColors"),
    },
  ];

  return (
    <nav className="h-full">
      <ul className="h-full flex gap-8">
        {navItems.map((item) => (
          <li key={item.href}>
            <NavItem href={item.href} label={item.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
