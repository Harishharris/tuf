import { PlusCircle } from 'lucide-react';
import { ModeToggle } from './dark-mode';

export default function Header() {
  return (
    <nav className="sticky flex items-center justify-between bg-slate-900 px-8 py-4">
      <div className="text-white">LOGO</div>
      <div className="flex gap-6">
        <ul className="flex items-center justify-between gap-16">
          <li className="text-white hover:cursor-pointer">Codes</li>
          <li>
            <div className="text-white flex gap-1 hover:cursor-pointer">
              <PlusCircle />
              <a href="#create" className="text-white">
                Create
              </a>
            </div>
          </li>
        </ul>
        <ModeToggle />
      </div>
    </nav>
  );
}
