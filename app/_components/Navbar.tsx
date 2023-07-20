import NavItem from "./NavItem";

export default function Navbar() {
  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/available-colors", label: "Colores disponibles" },
    { href: "/about", label: "Acerca de" },
    {
      href: "/selected-colors?ids=A098P,IT02,SS1816",
      label: "Colores seleccionados",
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
