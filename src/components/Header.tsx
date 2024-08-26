import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
  const router = useRouter();
  const isActive = (pathname: string) => router.pathname === pathname;
  return (
    <header className='bg-blue-600 text-white shadow-lg fixed inset-0 bottom-[unset]'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <h1 className='text-xl font-bold'>
          <Link href='/'>Assignment</Link>
        </h1>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <Link
                href='/task1'
                className={clsx(
                  'hover:text-primary transition duration-300',
                  isActive('/task1') && 'border-b-2 border-white'
                )}>
                Task 1
              </Link>
            </li>
            <li>
              <Link
                href='/task2'
                className={clsx(
                  'hover:text-primary transition duration-300',
                  isActive('/task2') && 'border-b-2 border-white'
                )}>
                Task 2
              </Link>
            </li>
            <li>
              <Link
                href='/chat'
                className={clsx(
                  'hover:text-primary transition duration-300',
                  isActive('/chat') && 'border-b-2 border-white'
                )}>
                Task 3
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
