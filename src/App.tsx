import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'
import UIKit from './pages/UIKit'

function App() {
  const [showUIKit, setShowUIKit] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Dark Mode Toggle */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"
      >
        Ana icerige atla
      </a>

      {/* UI Kit Toggle */}
      <div className="fixed top-4 right-16 z-50">
        <Button
          size="sm"
          variant={showUIKit ? 'secondary' : 'ghost'}
          onClick={() => setShowUIKit(!showUIKit)}
        >
          {showUIKit ? 'Portfolio' : 'UI Kit'}
        </Button>
      </div>

      {showUIKit ? (
        <UIKit />
      ) : (
        <>
          {/* HEADER */}
          <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
              <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
                Elif Kocoglu
              </h1>
              <nav aria-label="Ana navigasyon">
                <ul className="flex flex-wrap gap-2">
                  <li>
                    <a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                      Hakkimda
                    </a>
                  </li>
                  <li>
                    <a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                      Projeler
                    </a>
                  </li>
                  <li>
                    <a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                      Iletisim
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          {/* MAIN CONTENT */}
          <main id="main-content">
            {/* Hakkımda */}
            <section id="hakkimda" className="py-16 px-4">
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                <figure className="shrink-0">
                  <img
                    src="https://api.dicebear.com/7.x/initials/svg?seed=EK&backgroundColor=1e3a8a"
                    alt="Elif Kocoglu profil gorseli"
                    className="w-40 h-40 rounded-full object-cover shadow-lg"
                  />
                </figure>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                    Hakkimda
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    Merhaba! Ben Elif Kocoglu. Yazilim Muhendisligi ogrencisiyim.
                    Yapay zeka ve psikoloji alanlarina ilgi duyuyorum.
                    Modern web teknolojileriyle kullanici dostu arayuzler olusturmayi ogreniyorum.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    <strong>Ogrenci No:</strong> 230541015
                  </p>
                  <ul className="flex flex-wrap gap-2" role="list" aria-label="Beceri etiketleri">
                    {['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind', 'Git'].map(
                      (skill) => (
                        <li key={skill} className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                          {skill}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </section>

            {/* Projelerim */}
            <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
                  Projelerim
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card variant="elevated" title="Portfolyo Web Sitesi">
                    <p>React ve TypeScript ile gelistirilmis kisisel portfolyo sayfasi.</p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {['React', 'TypeScript', 'Vite'].map((t) => (
                        <span key={t} className="bg-blue-800 text-white px-2 py-0.5 rounded-full text-xs">{t}</span>
                      ))}
                    </div>
                  </Card>
                  <Card variant="elevated" title="Yapay Zeka Projesi">
                    <p>Makine ogrenmesi algoritmalariyla veri analizi ve tahminleme uygulamasi.</p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {['Python', 'TensorFlow'].map((t) => (
                        <span key={t} className="bg-blue-800 text-white px-2 py-0.5 rounded-full text-xs">{t}</span>
                      ))}
                    </div>
                  </Card>
                  <Card variant="elevated" title="Psikoloji Anket Uygulamasi">
                    <p>Web tabanli psikoloji anket formu ve sonuc analiz platformu.</p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {['JavaScript', 'HTML5', 'CSS3'].map((t) => (
                        <span key={t} className="bg-blue-800 text-white px-2 py-0.5 rounded-full text-xs">{t}</span>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </section>

            {/* İletişim */}
            <section id="iletisim" className="py-16 px-4">
              <div className="max-w-lg mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                  Iletisim
                </h2>
                <form className="space-y-4" noValidate>
                  <Input id="name" label="Ad Soyad" required placeholder="Adinizi giriniz" />
                  <Input id="email" label="E-posta" type="email" required placeholder="ornek@mail.com" />
                  <div className="space-y-1">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Konu
                    </label>
                    <select
                      id="subject"
                      required
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">-- Seciniz --</option>
                      <option value="is">Is Teklifi</option>
                      <option value="soru">Soru</option>
                      <option value="oneri">Oneri</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Mesajiniz
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      minLength={10}
                      placeholder="Mesajinizi buraya yaziniz..."
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <Button variant="primary" size="lg" type="submit">
                    Gonder
                  </Button>
                </form>
              </div>
            </section>
          </main>

          {/* FOOTER */}
          <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
            <p>&copy; 2025 Elif Kocoglu. Tum haklari saklidir.</p>
          </footer>
        </>
      )}
    </div>
  )
}

export default App