import { useState } from "react";

interface GeminiMessage {
  role: 'user' | 'model';
  parts: string[];
}

export const Chatbot = () => {
  const [messages, setMessages] = useState<GeminiMessage[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessages: GeminiMessage[] = [...messages, { role: 'user', parts: [input.trim()] }];
      setMessages(newMessages);
      setInput('');

      // Simulate a bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: 'model', parts: ['echo: ' + input.trim()]},
        ]);
      }, 500);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col h-96"> {/* Fixed height for chat window */}
      <div className="flex-1 overflow-y-auto mb-4 pr-2"> {/* Message display area */}
        {messages.length === 0 ? (
          <p className="text-gray-500 text-center mt-8">Start chatting by typing a message below!</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`flex mb-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg shadow-sm
                  ${msg.role === 'user'
                    ? 'bg-indigo-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                  }`}
              >
                {msg.parts}
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex space-x-2"> {/* Input and send button */}
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <button
          onClick={handleSendMessage}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};