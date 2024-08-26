import React from 'react';
import MainLayout from '@/layout';

export default function Task1() {
  const [prompt, setPrompt] = React.useState<string>('');
  const [response, setResponse] = React.useState<string>('');

  const handlePromptChange = (e: any) => {
    setPrompt(e.target.value);
  };

  const handlePrintResponse = () => {
    setResponse(prompt);
  };

  return (
    <MainLayout>
      <section className='flex grow items-center justify-center'>
        <div className='bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-md'>
          <h1 className='text-2xl text-white font-bold mb-4 text-center'>
            Simple print the message
          </h1>
          <textarea
            className='bg-gray-600 w-full text-white p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4'
            rows={4}
            placeholder='Type your message here...'
            value={prompt}
            onChange={handlePromptChange}
          />
          <button
            type='submit'
            onClick={handlePrintResponse}
            className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300'>
            Print
          </button>
          {response && (
            <div className='mt-6 p-4 bg-gray-500 rounded-lg text-white'>
              <p>{response}</p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
