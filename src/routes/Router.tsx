import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { Teste } from '@/pages/Teste';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
    </BrowserRouter>
  );
}
