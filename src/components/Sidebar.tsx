import { Plus, MessageSquare, User, Settings, Beaker, LayoutDashboard, MoreHorizontal, PanelLeftClose } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="flex h-screen w-[260px] flex-col bg-[#171717] text-[#ececec]">
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <Link to="/" className="flex flex-1 items-center gap-3 rounded-md px-3 py-3 transition-colors hover:bg-[#2b2b2b]">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
            <Plus size={18} strokeWidth={3} />
          </div>
          <span className="text-sm font-medium">New Chat</span>
        </Link>
        <button className="p-2 text-zinc-500 hover:text-white">
          <PanelLeftClose size={18} />
        </button>
      </div>

      {/* Navegación Roadmap */}
      <div className="px-3 py-2 space-y-1">
        <Link to="/" className={`flex items-center gap-3 rounded-md p-3 text-sm transition-colors ${isActive('/') ? 'bg-[#212121]' : 'hover:bg-[#212121]'}`}>
          <LayoutDashboard size={16} className="text-blue-400" />
          <span>Dashboard</span>
        </Link>
        <Link to="/tests" className={`flex items-center gap-3 rounded-md p-3 text-sm transition-colors ${isActive('/tests') ? 'bg-[#212121]' : 'hover:bg-[#212121]'}`}>
          <Beaker size={16} className="text-purple-400" />
          <span>AI Laboratory</span>
        </Link>
      </div>

      {/* Historial (Scrollable) */}
      <div className="flex-1 overflow-y-auto px-3 py-2">
        <div className="mb-2 mt-4 px-3 text-[11px] font-bold text-zinc-500 uppercase">Recents</div>
        <button className="group relative flex w-full items-center gap-3 rounded-md p-3 text-sm hover:bg-[#212121]">
          <MessageSquare size={16} className="text-zinc-400" />
          <span className="truncate">SQL Agent - Analysis</span>
        </button>
      </div>

      {/* Footer Perfil */}
      <div className="border-t border-zinc-800 p-3">
        <button className="flex w-full items-center gap-3 rounded-md p-2 text-sm hover:bg-[#212121]">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 font-bold text-xs">
            XF
          </div>
          <div className="flex flex-1 flex-col items-start overflow-hidden text-xs">
            <span className="font-semibold truncate w-full text-left">Xavi Far</span>
            <span className="text-zinc-500 truncate w-full text-left">orbhiai@gmail.com</span>
          </div>
          <Settings size={14} className="text-zinc-500" />
        </button>
      </div>
    </aside>
  );
};