# CSS Kararlari

## 1. Breakpoint Secimi
- 640px (tablet) ve 1024px (masaustu) secildi. Bu degerler yaygin kabul gormis kirilim noktalaridir.
- Mobilde navigasyon dikey yigilir, tablette hakkimda bolumu yatay duzene gecer, masaustunde icerik genisligi 1200px ile sinirlanir.

## 2. Layout Tercihleri
- Header icin Flexbox secildi cunku tek boyutlu (yatay) hizalama yeterli. justify-content: space-between ile logo sol, nav sag hizalanir.
- Proje kartlari icin CSS Grid tercih edildi. repeat(auto-fit, minmax(280px, 1fr)) ile media query yazmadan otomatik responsive grid elde edilir.
- auto-fit kullanildi cunku bos sutunlar daraltilip mevcut kartlarin genislemesi isteniyor.

## 3. Design Tokens
- Mavi tonlari (#1E3A8A primary, #2563EB secondary) secildi - profesyonel ve guvenilir bir his verir.
- Spacing skalasi 4px carpanlarina dayanir (0.25rem, 0.5rem, 1rem...) - tutarlilik saglar.
- Fluid typography icin clamp(min, preferred, max) kullanildi. rem + vw karisimi sayesinde zoom yapildiginda yazilar buyur (erisilebirlik).

## 4. Responsive Stratejiler
- Mobile-first yaklasim uygulandi: Varsayilan stiller mobil icin, min-width media queryleri ile buyuk ekranlar zenginlestirilir.
- Navigasyon mobilde dikey (flex-direction: column), tablette yatay olur.
- Gorseller max-width: 100% ve object-fit: cover ile responsive.
- Profil fotografi aspect-ratio: 1 ile her zaman kare kalir.
