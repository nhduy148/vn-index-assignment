import React from 'react';
import MainLayout from '@/layout';

export default function Chat() {
  const [prompt, setPrompt] = React.useState<string>('');
  const [response, setResponse] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <section className='flex grow items-center justify-center'>
        <div className='bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-md'>
          <h1 className='text-2xl text-white font-bold mb-4 text-center'>
            Chat with AI
          </h1>
          <form onSubmit={handleSubmit}>
            <textarea
              className='bg-gray-600 w-full text-white p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4'
              rows={4}
              placeholder='Type your message here...'
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300'
              disabled={loading}>
              {loading ? 'Loading...' : 'Send'}
            </button>
          </form>
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
