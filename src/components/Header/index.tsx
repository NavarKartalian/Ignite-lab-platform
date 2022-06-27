import { List, X } from "phosphor-react";
import { Logo } from "../Logo";
import { LogoMobile } from "../LogoMobile";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

export function Header({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) {
  return (
    <header className="w-full flex justify-between lg:justify-center py-4 lg:py-[19px] bg-gray-700 border-b border-gray-600 px-6 items-center">
      <div className="hidden lg:block">
        <Logo />
      </div>

      <div className="lg:hidden">
        <LogoMobile />
      </div>

      <div className="flex items-center gap-2 lg:hidden">
        <p className="text-xs">Aulas</p>
        
        <button className={`${isSidebarOpen && 'hidden'}`} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <List size={32} className='text-blue-500' />
        </button>

        <button className={`${!isSidebarOpen && 'hidden'}`} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <X size={32} className='text-blue-500' />
        </button>
      </div>
    </header>
  );
}