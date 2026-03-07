import { ArrowUp, Paperclip, Globe, LayoutGrid } from 'lucide-react';

export const MainChat = () => {
  return (
    <div className="flex h-full flex-col bg-[#212121] text-[#ececec]">
      <header className="flex items-center p-4">
        <div className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-[#2f2f2f]">
          <span className="text-lg font-semibold">ChatGPT 4o</span>
          <span className="text-zinc-500 text-xs">▼</span>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full text-center space-y-8">
          <h1 className="text-4xl font-semibold">¿En qué puedo ayudarte hoy?</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <button className="flex flex-col items-start gap-1 rounded-2xl border border-zinc-700 p-4 hover:bg-[#2f2f2f] transition-colors">
              <span className="text-sm font-medium">Test SQL Agent</span>
              <span className="text-xs text-zinc-500">Analiza tu base de datos con lenguaje natural</span>
            </button>
            <button className="flex flex-col items-start gap-1 rounded-2xl border border-zinc-700 p-4 hover:bg-[#2f2f2f] transition-colors">
              <span className="text-sm font-medium">Sync Salesforce</span>
              <span className="text-xs text-zinc-500">Actualiza registros del CRM automáticamente</span>
            </button>
          </div>
        </div>
      </div>

      <footer className="mx-auto w-full max-w-3xl p-4 pb-8">
        <div className="relative flex flex-col w-full rounded-3xl bg-[#2f2f2f] p-2">
          <textarea
            rows={1}
            placeholder="Escribe un mensaje..."
            className="w-full resize-none bg-transparent px-4 py-3 text-white focus:outline-none"
          />
          <div className="flex items-center justify-between px-2 pb-1">
            <div className="flex gap-2 text-zinc-400">
              <button className="p-2 hover:text-white"><Paperclip size={18} /></button>
              <button className="p-2 hover:text-white"><Globe size={18} /></button>
              <button className="p-2 hover:text-white"><LayoutGrid size={18} /></button>
            </div>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black hover:opacity-80">
              <ArrowUp size={20} strokeWidth={3} />
            </button>
          </div>
        </div>
        <p className="mt-3 text-center text-[11px] text-zinc-500">
          ChatGPT can make mistakes. Check important info.
        </p>
      </footer>
    </div>
  );
};