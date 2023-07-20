export default function Footer() {
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <footer className="bg-[var(--black)] p-4 text-center">
      <small className="text-[var(--white)]">
        © 2022-{currentYear} Alicia Nails - Todos los derechos reservados
      </small>
    </footer>
  );
}
