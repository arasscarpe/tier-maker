Tier Maker - Web App



Tier Maker, kullanıcıların kendi görsel setlerini yükleyip, sürükle-bırak yöntemiyle profesyonel bir şekilde sıralayabileceği modern, tarayıcı tabanlı bir Tier List oluşturma aracıdır.

🚀 Temel Özellikler



&#x20;   Sürükle \& Bırak: Native Drag \& Drop API kullanarak akıcı kart taşıma deneyimi.



&#x20;   Dinamik Tier Yönetimi: Sınırsız tier ekleme, isim değiştirme ve özelleştirilebilir renk paleti.



&#x20;   Görsel Kontrolü: Yüklenen görselleri karıştırma (Shuffle), silme ve havuzda yönetme.



&#x20;   Modern Arayüz: Karanlık tema odaklı, glassmorphism esintili, kullanıcı dostu ve sade tasarım.



&#x20;   Hafif ve Hızlı: Hiçbir dış kütüphaneye (React, Vue, jQuery vb.) ihtiyaç duymadan, saf (Vanilla) JavaScript ile geliştirilmiştir.



📁 Proje Yapısı



tier-maker/

├── index.html          # Uygulama iskeleti

├── AGENTS.md           # Mimari ve modül dökümanı

├── css/

│   └── style.css       # Görsel stil ve tema değişkenleri

├── js/

│   ├── main.js         # Uygulama orkestrasyonu

│   ├── tier.js         # Tier satırı mantığı

│   └── dragdrop.js     # Sürükle-bırak motoru

└── README.md           # Bu doküman



🛠 Kurulum \& Kullanım



&#x20;   Repo'yu Klonlayın veya İndirin:

&#x20;   Proje dosyalarını yerel bilgisayarınızda bir klasöre alın.



&#x20;   Çalıştırma:

&#x20;   index.html dosyasını herhangi bir modern web tarayıcısında (Chrome, Firefox, Edge) açmanız yeterlidir. Herhangi bir sunucu veya derleme (build) işlemi gerektirmez.



⚙️ Nasıl Kullanılır?



&#x20;   Görsel Yükleme: "Upload Image" butonuna tıklayarak bilgisayarınızdan görselleri seçin.



&#x20;   Sıralama: Kartları "Not Yet Ranked" alanından alıp istediğiniz Tier satırına sürükleyin.



&#x20;   Düzenleme:



&#x20;       Tier İsmi: Tier etiketinin üzerine tıklayarak ismi güncelleyin.



&#x20;       Renk Değiştirme: Tier etiketinin sağ üstündeki renk paletini kullanarak satır rengini değiştirin.



&#x20;       Tier Silme: Sol üstteki "✕" butonunu kullanarak tier satırını kaldırın (içindeki görseller otomatik olarak havuza döner).



&#x20;   Karıştır: "Shuffle" butonuna tıklayarak havuzdaki görselleri rastgele dağıtın.



&#x20;   Sıfırla: "New" butonu ile çalışma alanını tamamen temizleyin.

