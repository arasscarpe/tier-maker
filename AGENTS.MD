Bu proje, yüksek performanslı ve modüler bir Tier List Maker uygulamasıdır. Kod tabanı, temiz mimari (Clean Architecture) ilkelerine uygun olarak ayrıştırılmıştır.

📁 Dosya Yapısı \& Sorumluluklar

Dosya / Dizin	Sorumluluk Alanı

index.html	Entry Point: Uygulamanın iskeleti ve DOM düğüm noktaları.

css/style.css	Visual Engine: Tema değişkenleri, grid yapısı ve responsive tasarım.

js/main.js	Orchestrator: Uygulama başlatma, dosya yükleme (FileReader API) ve buton aksiyonları.

js/tier.js	Entity Manager: Tier satırı oluşturma, renk yönetimi ve silme mantığı.

js/dragdrop.js	Interaction Engine: Native Drag \& Drop API yönetimi ve sıralama algoritması.

🛠 Görev Dağılımı ve İş Akışı

1\. Dosya Yükleme Süreci (main.js)



&#x20;   file-input üzerinden gelen dosyaları yakalar.



&#x20;   FileReader ile base64 formatına çevirir.



&#x20;   Kart (Card) elemanlarını oluşturur ve pool (havuz) alanına yerleştirir.



2\. Sürükle-Bırak Mantığı (dragdrop.js)



&#x20;   dragstart: Sürüklenen öğeyi global draggedItem değişkenine atar.



&#x20;   dragover: getBoundingClientRect kullanarak kartların koordinatlarını hesaplar ve fare imlecinin yakınlık derecesine göre hedef noktayı belirler.



&#x20;   dragend: Sürükleme bittiğinde temizlik işlemlerini yapar.



3\. Tier Yönetimi (tier.js)



&#x20;   Uygulama başladığında varsayılan S-F tierlerini createTier fonksiyonu ile oluşturur.



&#x20;   Kullanıcı her yeni tier eklediğinde dinamik DOM manipülasyonu yapar.



&#x20;   Renk değişimi (input\[type="color"]) ve satır silme (delete-tier-btn) işlevlerini kapsüller.



&#x20;Geliştirici Notları



&#x20;   Veri Yönetimi: Şu an için tüm veriler tarayıcı belleğinde (in-memory) tutulmaktadır. State yönetimi için karmaşık bir kütüphane kullanılmamıştır; performans için doğrudan DOM API tercih edilmiştir.



&#x20;   Stil: :root değişkenleri üzerinden light ve dark mod uyumluluğu merkezi CSS dosyasından yönetilmektedir.



&#x20;   Genişletilebilirlik: Yeni özellikler ekleneceği zaman (örneğin: LocalStorage kaydı veya görsel dışa aktarma) js/main.js içinde servisler oluşturulmalıdır.

