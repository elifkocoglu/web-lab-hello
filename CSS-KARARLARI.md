# CSS Kararları Notu - LAB-3

## 1. Breakpoint Seçimi
[cite_start]Projelerimde 640px ve 1024px kırılım noktalarını (breakpoints) kullandım[cite: 131]. [cite_start]640px altında içerik mobil düzende dikey olarak sıralanırken, bu noktanın üzerinde tabletler için daha geniş bir alan sağladım[cite: 133]. [cite_start]1024px üzerinde ise masaüstü monitörler için içeriği 1200px ile sınırlayarak okunabilirliği artırdım[cite: 1136].

## 2. Layout Tercihleri
* [cite_start]**Flexbox:** Navigasyon çubuğu ve toolbar (beceri etiketleri) gibi tek boyutlu hizalama gereken alanlarda Flexbox kullandım[cite: 373]. [cite_start]Bu sayede elemanları eksen boyunca kolayca dağıtabildim[cite: 438].
* [cite_start]**CSS Grid:** Proje kartlarını iki boyutlu bir ızgara düzenine sokmak için Grid sistemini tercih ettim[cite: 489]. [cite_start]`repeat(auto-fit, minmax(280px, 1fr))` kullanarak media query yazmadan kart sayısının ekrana göre otomatik ayarlanmasını sağladım[cite: 863].

## 3. Design Tokens ve Fluid Typography
[cite_start]Renk, boşluk ve radius değerlerini `:root` altında CSS değişkenleri (custom properties) olarak tanımladım[cite: 147]. [cite_start]Yazı boyutları için `clamp()` fonksiyonunu kullanarak, metinlerin ekran genişliğine göre akıcı (fluid) bir şekilde ölçeklenmesini sağladım[cite: 319].

## 4. Responsive Stratejiler
[cite_start]Tasarım sürecinde **Mobile-First** yaklaşımını benimsedim; yani önce en dar ekran için CSS yazdım ve `min-width` kullanarak büyük ekranlara doğru genişlettim[cite: 61, 62]. [cite_start]Bu yöntem performans ve içerik önceliği açısından daha verimlidir[cite: 119].