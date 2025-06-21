
export default function ChatbotPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">💬 AI Chat Assistant</h1>
      
      <div className="w-full max-w-5xl rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/d3u_ZenSGLcn6LleR3PBg"
          width="100%"
          style={{ height: '100%', minHeight: '700px' }}
          frameBorder="0"
          className="w-full"
        ></iframe>
      </div>
    </main>
  );
}
