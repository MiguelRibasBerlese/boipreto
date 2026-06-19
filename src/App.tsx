/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Cases from './pages/Cases';
import About from './pages/About';
import Contact from './pages/Contact';
import Formacao from './pages/Formacao';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servicos" element={<Services />} />
          <Route path="cases" element={<Cases />} />
          <Route path="sobre" element={<About />} />
          <Route path="contato" element={<Contact />} />
          <Route path="formacao" element={<Formacao />} />
        </Route>
      </Routes>
    </Router>
  );
}
