import Link from 'next/link';

export default function Welcome() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>
        Welcome to My Assignment
      </h1>
      <p className='text-gray-600 mb-8'>Choose a task to get started:</p>
      <div className='flex space-x-4'>
        <Link
          href='/task1'
          className='bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300'>
          Task 1
        </Link>
        <Link
          href='/task2'
          className='bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300'>
          Task 2
        </Link>
        <Link
          href='/chat'
          className='bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition duration-300'>
          Task 3
        </Link>
      </div>
    </div>
  );
}
