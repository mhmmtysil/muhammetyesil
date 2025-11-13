'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ProjectsContent() {
    const code = `// projeler.tsx

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  status: "Canlı" | "Geliştirme Aşamasında" | "Tamamlandı";
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    "id": 1,
    "title": "Çocuklar İçin Kodlama Uygulaması",
    "description": "18 yaş altı gruplara yönelik sürükle-bırak ve kod yazma destekli eğitim uygulaması",
    "tech": ["React Native"],
    "status": "Planlama / Tasarım"
  },
  {
    "id": 2,
    "title": "Lescon Mobil Uygulaması",
    "description": "iOS üzerinde test edilen, e-ticaret tabanlı React Native uygulaması",
    "tech": ["React Native"],
    "status": "Geliştirme Aşamasında"
  },
  {
    "id": 3,
    "title": "CodePush Geçiş Projesi",
    "description": "Revopush’tan Microsoft’un resmi CodePush çözümüne geçiş",
    "tech": ["React Native", "CodePush"],
    "status": "Tamamlandı"
  },
  {
    "id": 4,
    "title": "Telemetry DB Node.js API",
    "description": "PostgreSQL ‘telemetry’ tablosundan veri okuma sistemi",
    "tech": ["Node.js", "PostgreSQL"],
    "status": "Tamamlandı"
  }
  {
    "id": 5,
    "title": "Karikatür Karakter ve Sahne Üretim Sistemi",
    "description": "Karakter ifadelerinin otomatik değiştirilmesi ve sahne fikir üretimi",
    "tech": ["AI Design Workflow"],
    "status": "Tamamlandı"
  },
  {
    "id": 6,
    "title": "Telemetry DB Node.js API",
    "description": "PostgreSQL ‘telemetry’ tablosundan veri okuma sistemi",
    "tech": ["Node.js", "PostgreSQL"],
    "status": "Tamamlandı"
  }
  {
    "id": 7,
    "title": "RandevuBerber",
    "description": "Berberler için mobil öncelikli randevu yönetim uygulaması",
    "tech": ["React Native", "Node.js"],
    "status": "Başlangıç"
  },
  {
    "id": 8,
    "title": "Terminal Hacker-Style Görünümü",
    "description": "Terminal açılışında görsel efekt geliştirme",
    "tech": ["Shell", "Zsh"],
    "status": "Tamamlandı"
  },
  {
    "id": 9,
    "title": "Unity 2D Karikatür Oyun Animasyon Sistemi",
    "description": "Karikatür tarzı oyun tasarımları ve video animasyon çıkışı",
    "tech": ["Unity", "C#"],
    "status": "Tamamlandı"
  },
  {
    "id": 10,
    "title": "III–V Yarıiletkenler Phtonik Aygıt Sunumu",
    "description": "15 dakikalık akademik sunum hazırlığı",
    "tech": ["PowerPoint", "Bilimsel Sunum"],
    "status": "Tamamlandı"
  },
  {
    "id": 11,
    "title": "ST7789 Tabanlı Yer İstasyonu",
    "description": "MicroPython ile görsel telemetri ekranı geliştirme",
    "tech": ["MicroPython", "ST7789", "UART", "SD Kart"],
    "status": "Tamamlandı"
  },
  {
    "id": 12,
    "title": "YouTube Metin Otomasyon Projesi",
    "description": "Tamamen metin tabanlı otomatik video üretim sistemi",
    "tech": ["AI", "Automation"],
    "status": "Tamamlandı"
  },
  {
    "id": 13,
    "title": "BTC Al-Sat Botu",
    "description": "Canlı fiyatlarla çalışan kaldıraçlı işlem botu",
    "tech": ["Node.js", "AI Analysis"],
    "status": "Planlama"
  },
  {
    "id": 14,
    "title": "LoRa APRS Verici",
    "description": "AX.25 + CRC uyumlu manuel encoder ile APRS verici geliştirme",
    "tech": ["MicroPython", "LoRa E22"],
    "status": "Tamamlandı"
  },
  {
    "id": 15,
    "title": "E-Ticaret Depo Sistemi",
    "description": "Depo bazlı perakende satış altyapısı kurma",
    "tech": ["E-Ticaret"],
    "status": "Planlama"
  },
  {
    "id": 16,
    "title": "OneSignal Tek-Tag JSON Bildirim Sistemi",
    "description": "10 tag limiti için kategori bazlı JSON-tag çözümü",
    "tech": ["OneSignal"],
    "status": "Tamamlandı"
  },
  {
    "id": 17,
    "title": "RP2040 SD Kart Veri Kaydı",
    "description": "CS=GPIO5 ile SPI SD veri kaydı sistemi",
    "tech": ["MicroPython"],
    "status": "Tamamlandı"
  },
  {
    "id": 18,
    "title": "SIM808 ile SSTV Gönderimi",
    "description": "Arama sonrası SSTV ses modülasyonu gönderimi",
    "tech": ["Raspberry Pi", "SIM808"],
    "status": "Planlama"
  },
  {
    "id": 19,
    "title": "Step Motor Limit Switch Kalibrasyon",
    "description": "0 noktasını buton ile ayarlayan kalibrasyon sistemi",
    "tech": ["Microcontroller"],
    "status": "Tamamlandı"
  },
  {
    "id": 20,
    "title": "QMC5883 Tabanlı Step Motor Açı Takip Sistemi",
    "description": "Pusula sensörü ile step motora açı kontrolü",
    "tech": ["MicroPython"],
    "status": "Tamamlandı"
  },
  {
    "id": 21,
    "title": "LoRaE22 MicroPython Kütüphanesi",
    "description": "Tek import yapısına göre örneklerle kullanım",
    "tech": ["MicroPython", "LoRaE22"],
    "status": "Tamamlandı"
  },
  {
    "id": 22,
    "title": "Beyin Tümörü CNN Modeli",
    "description": "Sınıflandırma modeli ve mini makale çalışması",
    "tech": ["Python", "CNN"],
    "status": "Tamamlandı"
  },
  {
    "id": 23,
    "title": "Massive MIMO Çalışması",
    "description": "Uplink modeli İngilizceye çeviri + genişletme",
    "tech": ["Akademik Yazım"],
    "status": "Tamamlandı"
  },
  {
    "id": 24,
    "title": "UnifiedView API Format Dönüştürücü",
    "description": "Postman, OpenAPI, HAR, RAML vb. formatları tek yapıya dönüştürme sistemi",
    "tech": ["Node.js", "JSON Parsing"],
    "status": "Geliştirme Aşamasında"
  },
  {
    "id": 25,
    "title": "React API Görüntüleyici Bileşenleri",
    "description": "Farklı API formatları için ayrı React bileşenleri",
    "tech": ["React"],
    "status": "Tamamlandı"
  },
  {
    "id": 26,
    "title": "Postman Viewer NPM Paketi",
    "description": "Postman JSON analiz aracı",
    "tech": ["Node.js", "NPM"],
    "status": "Geliştirme"
  },
  {
    "id": 27,
    "title": "ScrollForge – Sanal Listeleme Kütüphanesi",
    "description": "Büyük listeler için optimize edilmiş kaydırma kütüphanesi",
    "tech": ["React Native", "React", "Next.js"],
    "status": "Tamamlandı"
  },
  {
    "id": 28,
    "title": "StoryDeck – Story Sistemi",
    "description": "Storyly benzeri kendi hikâye gösterim sistemi",
    "tech": ["React Native"],
    "status": "Geliştirme"
  },
  {
    "id": 29,
    "title": "Strapi İçerik Otomasyon Sistemi",
    "description": "GPT ile içerik üretip cronjob ile Strapi’ye aktarım",
    "tech": ["Next.js", "Cron", "AI"],
    "status": "Planlama"
  },
  {
    "id": 30,
    "title": "Anlam Veritabanı Next.js Projesi",
    "description": "Kelime-anlam eşleme fonksiyonlu mikro veri tabanı",
    "tech": ["Next.js"],
    "status": "Geliştirme"
  },
  
]
;

export default projects;`;

    return (
        <SyntaxHighlighter
            language="typescript"
            style={vscDarkPlus}
            showLineNumbers
            customStyle={{
                margin: 0,
                padding: '1rem',
                background: '#1e1e1e',
                fontSize: '13px',
                lineHeight: '1.6',
            }}
            wrapLongLines={true}
            className="md:!p-8 md:!text-[15px]"
        >
            {code}
        </SyntaxHighlighter>
    );
}
