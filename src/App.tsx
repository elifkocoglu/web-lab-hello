function App() {
  return (
    <div className="app-container">
      {/* Uygulama-3: Erişilebilirlik için Skip Link [cite: 330, 677] */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* Uygulama-1: Semantik Header ve Navigasyon [cite: 76, 79, 670] */}
      <header>
        <nav aria-label="Ana navigasyon"> {/* ARIA etiketi kullanımı [cite: 316, 683] */}
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* Uygulama-1: Sayfada sadece bir tane olması gereken Main alanı [cite: 83, 153] */}
      <main id="main-content">
        
        {/* Uygulama-1 & 2: Hakkımda Bölümü ve Heading Hiyerarşisi [cite: 192, 193] */}
        <section id="hakkimda">
          <h1>Web Tasarımı ve Programlama</h1>
          <h2>Hakkımda</h2>
          
          {/* Uygulama-2: Semantik görsel yapısı ve alt metni [cite: 241, 255, 672] */}
          <figure>
            <img 
              src="https://via.placeholder.com/150" 
              alt="Elif Koçoğlu'nun profil fotoğrafı" 
            />
            <figcaption>Elif Koçoğlu - Yazılım Mühendisliği Öğrencisi</figcaption>
          </figure>

          <p><strong>Ad Soyad:</strong> Elif Koçoğlu</p>
          <p><strong>Öğrenci No:</strong> 230541015</p>
          <p><strong>İlgi Alanları:</strong> Yapay Zeka ve Psikoloji</p>
          
          {/* Uygulama-5: Liste kullanımı [cite: 530] */}
          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        {/* Uygulama-5: Projeler Bölümü - Her proje bir article içinde [cite: 89, 532] */}
        <section id="projeler">
          <h2>Projelerim</h2>
          <article>
            <h3>Bitki Analiz Sistemi</h3>
            <p>TensorFlow ile geliştirilmiş bir yapay zeka projesi.</p>
          </article>
          <article>
            <h3>Nöbet Çizelgesi Uygulaması</h3>
            <p>Hastane personeli için kısıt tabanlı planlama sistemi.</p>
          </article>
        </section>

        {/* Uygulama-4: İletişim Bölümü (Bir sonraki adımda formu buraya ekleyeceğiz) [cite: 535] */}
        <section id="iletisim">
          <h2>İletişim</h2>
          {/* Form buraya gelecek */}
          <form action="#" method="POST" noValidate>
  <fieldset>
    <legend>İletişim Formu</legend>
    
    <div className="form-group">
      <label htmlFor="name">Ad Soyad: </label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        required 
        minLength={2} 
        aria-describedby="name-error" 
      />
      <small id="name-error" className="error-msg" role="alert"></small>
    </div>

    <div className="form-group">
      <label htmlFor="email">E-posta: </label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        required 
        aria-describedby="email-error" 
      />
      <small id="email-error" className="error-msg" role="alert"></small>
    </div>

    <div className="form-group">
      <label htmlFor="subject">Konu: </label>
      <select id="subject" name="subject" required aria-describedby="subject-error">
        <option value="">-- Seçiniz --</option>
        <option value="is">İş Teklifi</option>
        <option value="soru">Soru</option>
        <option value="oneri">Öneri</option>
      </select>
      <small id="subject-error" className="error-msg" role="alert"></small>
    </div>

    <div className="form-group">
      <label htmlFor="message">Mesajınız:</label>
      <textarea 
        id="message" 
        name="message" 
        rows={5} 
        required 
        minLength={10} 
        aria-describedby="message-error"
      ></textarea>
      <small id="message-error" className="error-msg" role="alert"></small>
    </div>

    <button type="submit">Gönder</button>
  </fieldset>
</form>
        </section>

      </main>

      {/* Uygulama-1: Semantik Footer [cite: 94, 684] */}
      <footer>
        <p>&copy; 2026 Elif Koçoğlu. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  )
}

export default App