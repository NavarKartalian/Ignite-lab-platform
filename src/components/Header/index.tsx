import { Logo } from "../Logo";

export function Header() {
  return (
    <header className="w-full flex justify-center py-[19px] bg-gray-700 border-b border-gray-600">
      <Logo />
    </header>
  );
}