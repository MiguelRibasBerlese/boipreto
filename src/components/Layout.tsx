import { Outlet } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';

/**
 * Shell comum a todas as rotas: monta a estrutura TopNavBar → conteúdo da página → Footer.
 * A textura grainy-overlay é aplicada aqui como camada fixed de mais alta prioridade (z-60)
 * para cobrir toda a aplicação sem interferir na interatividade (pointer-events: none no CSS).
 */
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="grainy-overlay fixed inset-0 z-[60]" />
      <TopNavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
