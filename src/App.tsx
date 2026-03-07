import { Sidebar } from './components/Sidebar';
import { MainChat } from './pages/MainChat';

function App() {
  return (
    <div className="flex h-screen w-full bg-[#171717] overflow-hidden">
      {/* Sidebar a la izquierda */}
      <Sidebar />

      {/* Contenido principal a la derecha */}
      <main className="flex-1 overflow-hidden relative">
        <MainChat />
      </main>
    </div>
  );
}

export default App;