function App() {
  return (
    <div className="app-container">
      {/* 1. Header ve Navigasyon Bölümü */}
      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* 2. Ana İçerik Alanı (Sayfada sadece bir tane olmalı) */}
      <main id="main-content">
        
        {/* Hakkımda Bölümü */}
        <section id="hakkimda">
          <h1>Web Tasarımı ve Programlama</h1>
          <h2>Hakkımda</h2>
          <p><strong>Ad Soyad:</strong> Elif Koçoğlu</p>
          <p><strong>Öğrenci No:</strong> 230541015</p>
          <p><strong>İlgi Alanları:</strong> Yapay Zeka ve Psikoloji</p>
          {/* Buraya Uygulama-2'de profil fotoğrafı ekleyeceğiz */}
        </section>

        {/* Projeler Bölümü */}
        <section id="projeler">
          <h2>Projelerim</h2>
          {/* Buraya Uygulama-5'te proje kartları ekleyeceğiz */}
        </section>

        {/* İletişim Bölümü */}
        <section id="iletisim">
          <h2>İletişim</h2>
          {/* Buraya Uygulama-4'te formu ekleyeceğiz */}
        </section>

      </main>

      {/* 3. Footer Bölümü */}
      <footer>
        <p>&copy; 2026 Elif Koçoğlu. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  )
}

export default App