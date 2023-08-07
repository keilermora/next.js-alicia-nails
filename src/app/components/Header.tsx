import Navbar from "./Navbar";

export default async function Header() {
  return (
    <header className="bg-[var(--vista-blue)] px-4 h-16 flex justify-between items-center z-50">
      <h1>Logo</h1>
      <Navbar />
    </header>
  );
}
