import { Braces, PlusCircle } from 'lucide-react';
import { ModeToggle } from './dark-mode';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="sticky top-0 flex items-center justify-between bg-slate-900 px-8 py-4">
      <Link href={'/'} className="text-white">
        <Braces size={42} />
      </Link>
      <div className="flex gap-6">
        <ul className="flex items-center justify-between gap-16">
          <Link href={'/your-snippets'}>
            <li className="text-white hover:cursor-pointer">Your snippets</li>
          </Link>
          <li>
            <div className="text-white flex gap-1 hover:cursor-pointer">
              <PlusCircle />
              <Link href={'/'} className="text-white">
                Create
              </Link>
            </div>
          </li>
        </ul>
        <ModeToggle />
      </div>
    </nav>
  );
}
