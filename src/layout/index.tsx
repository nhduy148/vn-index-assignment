import { Header } from '@/components';
import React from 'react';

type Props = React.PropsWithChildren<{}>;

const MainLayout = ({ children }: Props) => {
  return (
    <main className='min-h-screen bg-gray-100 flex flex-col'>
      <Header />
      <div className='pt-16 flex grow'>{children}</div>
    </main>
  );
};

export default MainLayout;
