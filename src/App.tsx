import './App.css'

function App() {
  return (
    <>
      {/* Skip Navigation - Erişilebilirlik */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* HEADER */}
      <header>
        <h1>Elif Koçoğlu</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* MAIN */}
      <main id="main-content">
        {/* Hakkımda Bölümü */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <div className="about-content">
            <figure>
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=EK&backgroundColor=1e3a8a"
                alt="Elif Koçoğlu profil görseli"
              />
              <figcaption>Elif Koçoğlu</figcaption>
            </figure>
            <div>
              <p>
                Merhaba! Ben Elif Koçoğlu. Yazılım Mühendisliği öğrencisiyim.
                Yapay zeka ve psikoloji alanlarına ilgi duyuyorum.
                Modern web teknolojileriyle kullanıcı dostu arayüzler oluşturmayı öğreniyorum.
              </p>
              <p><strong>Öğrenci No:</strong> 230541015</p>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projelerim Bölümü */}
        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <h3>Portföy Web Sitesi</h3>
              <p>
                React ve TypeScript ile geliştirilmiş kişisel portföy sayfası.
                Semantik HTML ve erişilebilirlik ilkelerine uygun olarak tasarlanmıştır.
              </p>
              <ul className="skill-tags">
                <li>React</li>
                <li>TypeScript</li>
                <li>Vite</li>
              </ul>
            </article>

            <article className="project-card">
              <h3>Yapay Zeka Projesi</h3>
              <p>
                Makine öğrenmesi algoritmalarıyla veri analizi ve tahminleme uygulaması.
              </p>
              <ul className="skill-tags">
                <li>Python</li>
                <li>TensorFlow</li>
              </ul>
            </article>

            <article className="project-card">
              <h3>Psikoloji Anket Uygulaması</h3>
              <p>
                Web tabanlı psikoloji anket formu ve sonuç analiz platformu.
              </p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </article>
          </div>
        </section>

        {/* İletişim Bölümü */}
        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  placeholder="Adınızı giriniz"
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="ornek@mail.com"
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
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
                  placeholder="Mesajınızı buraya yazınız..."
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2025 Elif Koçoğlu. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App