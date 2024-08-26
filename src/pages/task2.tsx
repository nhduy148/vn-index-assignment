import React from 'react';
import MainLayout from '@/layout';

export default function Task2() {
  return (
    <MainLayout>
      <div className='container mx-auto py-10 max-w-[1080px]'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <h6 className='text-6xl font-semibold text-indigo-900 tracking-wide leading-[68px]'>
              Light, fast & responsive
            </h6>
            <p className='my-8 text-indigo-900 font-light text-xl'>
              This template is ready to use, so you don&apos;t need to change
              anything at a component level, unless you want to customize the
              default styling.
            </p>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <img src='/assets/images/notes.svg' alt='Why Antd?' />
                <p className='text-base text-gray-500 tranf uppercase mt-2 font-light'>
                  Why Antd?
                </p>
                <p className='text-sm mt-2 text-indigo-900 font-light'>
                  Ant Design is a React UI library that has a lot of easy-to-use
                  components for building elegant UI.
                </p>
              </div>
              <div>
                <img
                  src='/assets/images/notes.svg'
                  alt='Why styled-components?'
                />
                <p className='text-base text-gray-500 tranf uppercase mt-2 font-light'>
                  Why styled-components?
                </p>
                <p className='text-sm mt-2 text-indigo-900 font-light'>
                  Styled Components gives you total control over your
                  components.
                </p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <img
              src='/assets/images/graphs.svg'
              alt='Light, fast & responsive'
              className='max-w-[500px] w-full'
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
