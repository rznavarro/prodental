/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Treatments } from './components/Treatments.tsx';
import { Trust } from './components/Trust.tsx';
import { Patients } from './components/Patients.tsx';
import { Agenda } from './components/Agenda.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileBottomBar } from './components/MobileBottomBar.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-ink flex flex-col pb-20 md:pb-0">
      <Header />
      <main className="flex-1">
        <Hero />
        <Treatments />
        <Trust />
        <Patients />
        <Agenda />
      </main>
      <Footer />
      <MobileBottomBar />
      <FloatingWhatsApp />
    </div>
  );
}
