export default {
    tryAgain: 'Yeniden Dene',
    page500desc: 'Bir hata ile karşılaşıldı',
    homePage: 'Ana Sayfa',
    page404desc: 'Görünen o ki kaybolmuşsun',
    privacyPolicy: {
        privacyPolicy: 'Gizlilik Politikası',
        title: 'Marvdle - Gizlilik Politikası',
        commonid: {
            title: 'Common ID Çerezi',
            desc: 'Bu site, hizmetlerini sağlamak için çerezleri ve Common ID çerezi gibi benzer izleme teknolojilerini kullanır. Çerezler, reklamların etkinliğini ölçmek ve güçlü bir çevrimiçi reklamcılık endüstrisi sağlamak için önemli cihazlardır. Common ID çerezi, birinci taraf etki alanında benzersiz bir kullanıcı kimliğini saklar ve reklam ortaklarımız tarafından erişilebilir. Bu basit kimlik, özellikle reklamların iOS ve MacOS tarayıcılarına sunulması amacıyla kullanıcı eşleşmesini iyileştirmek için kullanılabilir. Kullanıcılar buraya tıklayarak Ortak Kimlik izleme çerezini devre dışı bırakabilirler.',
            matcher: 'buraya',
            success: 'Başarılı!'
        }
    },
    description: 'Bu Marvel kelime oyununda Marvel karakterini tahmin et. Her gün tahmin edebileceğiniz yeni bir karakter sizi bekliyor olacak.',
    copied: 'Başarıyla kopyalandı!',
    founded: '{{}} kişi buldu!',
    yesterday: 'Dünün karakteri {{}} {{}} oldu',
    colors: {
        blue: 'Mavi',
        red: 'Kırmızı',
        yellow: 'Sarı'
    },
    clues: {
        image: 'Görsel İpucu'
    },
    tooltips: {
        statistics: 'İstatistikler',
        currentStreak: 'Mevcut Seri\n(günlük ardışık galibiyetler)',
        settings: 'Ayarlar',
        how2play: 'Nasıl Oynanır?',
        partial: 'Bir veya daha fazla özellik doğru ancak hepsi doğru değil',
        character: 'Karakter Görseli.',
        gender: 'Erkek veya Kadın.',
        race: 'İnsan, Tanrı, etc...',
        alignment: 'İyi, Kötü veya Tarafsız.',
        height: 'Herhangi bir boy.',
        weight: 'Herhangi bir kilo.',
        firstAppearance: 'Herhangi bir yıl.',
        imageClue: 'Karakter görselinin bulanık versiyonu.'
    },
    modals: {
        settings: {
            title: 'Ayarlar',
            unitOfHeight: 'Uzunluk birimi',
            unitOfWeight: 'Ağırlık birimi'
        },
        info: {
            about: {
                title: 'Hakkında',
                values: [
                    "Her gün Marvel'den farklı bir karakter tahmin edin.\n",
                    'Marvel, bu projeyi desteklememektedir.',
                    'Bu harika oyunlardan büyük ölçüde ilham aldık: Wordle, LoLdle',
                    'Arka plan resmi referansı: URL.\n',
                    'Web sitesi istatistik toplamak ve reklam göstermek için çerezleri kullanır. Daha fazla bilgiyi Gizlilik Politikasında bulabilirsiniz.'
                ],
                privacyPolicy: 'Gizlilik Politikasında'
            },
            feedback: {
                title: 'Geri bildirimler / Sorular',
                values: [
                    'Bir önerin mi var? Bir hata mı buldun?',
                    '{{}} adresine mail atın. {{}}\n',
                    'Oyuna destek olmak istersen bana bir kahve ısmarlayabilirsin! ☕'
                ],
                buyMeCoffee: 'bana bir kahve ısmarlayabilirsin'
            }
        },
        statistics: {
            title: 'İstatistikler',
            mystats: '{{}} istatistiklerim',
            gamesWon: 'Kazanılan oyunlar',
            averageGuesses: 'Ortalama tahmin',
            oneShots: 'Tek atışlar',
            currentStreak: 'Mevcut seri',
            maxStreak: 'Maks seri',
            chart: 'Oyun başına tahmin sayısı',
            clearStats: {
                first: 'Verileri temizle',
                second: 'Verileri temizlemeyi onaylıyor musunuz?'
            }
        },
        help: {
            title: 'Nasıl Oynanır?',
            desc: 'Marvel karakterlerinden bugünün karakterini tahmin edin. Her 24 saatte bir değişir.',
            how2play: [
                'Bir karakterin adını yazmanız yeterlidir, özellikleri ortaya çıkacaktır.',
                'Tahmininizin bulunması gereken karaktere ne kadar yakın olduğunu göstermek için karelerin rengi değişecek.\n',
                'Mavi, özelliğin tam olarak eşleştiğini gösterir.',
                'Sarı, kısmi eşleşmeyi gösterir.',
                'Kırmızı, tahmininiz ile özellik arasında örtüşme olmadığını gösterir.',
                '⬇️ ⬆️, Oklar cevap özelliğinin tahmininizin üstünde mi yoksa altında mı olduğunu gösterir.'
            ],
            properties_title: 'Özellikler',
            possible_values: 'Olası değerler',
            properties: [
                {
                    title: 'Cinsiyet',
                    desc: 'Karakterin cinsiyetini ifade eder.',
                    possible_values: 'Erkek veya Kadın.'
                },
                {
                    title: 'Irk',
                    desc: 'Karakterin ırkını ifade eder. Bir karakterin birden fazla ırkı olabilir.',
                    possible_values: 'İnsan, Tanrı, etc...'
                },
                {
                    title: 'Taraf',
                    desc: 'Karakterin hangi taraftan olduğunu ifade eder.',
                    possible_values: 'İyi, Kötü veya Tarafsız.'
                },
                {
                    title: 'Boy',
                    desc: 'Karakterin boyunu ifade eder. Inch cinsinden.',
                    possible_values: 'Herhangi bir boy.'
                },
                {
                    title: 'Kilo',
                    desc: 'Karakterin kilosunu ifade eder. lb cinsinden.',
                    possible_values: 'Herhangi bir kilo.'
                },
                {
                    title: 'Yıl',
                    desc: 'Karakterin ilk görünüm yılını ifade eder.',
                    possible_values: 'Herhangi bir yıl.'
                }
            ],
            clues: {
                title: 'İpucu',
                values: [
                    'Karakteri bulmanıza yardımcı olmak için birkaç tahminden sonra ipucu kilidini açabilirsiniz.\n',
                    'Görsel İpucu, karakterin afişlerinden birinin bulanıklaştırılmış halini verir. Her denemenizde bulanıklaştırma bir adım daha azalır.',
                    '\nKarakteri tahmin ettiyseniz ipucu kısmına geri dönüp onunla ilgili görsele ulaşabilirsin.'
                ]
            },
            example: {
                title: 'Örnek',
                desc_1: 'Doğru cevabın Wolverine olduğunu düşünün.',
                desc_2: "Spiderman'i girerseniz şu özellikler görünecektir:",
                desc_3: "Eğer Wolverine'i girseydiniz, karşınıza şunlar çıkacaktı:",
                values: [
                    {
                        title: 'Cinsiyet: Mavi',
                        desc: 'Tam bir eşleşme, ikisi de erkek.'
                    },
                    {
                        title: 'Irk: Sarı',
                        desc: 'Wolverine mutant olduğundan bu bir eşleşme değil.'
                    },
                    {
                        title: 'Taraf: Mavi',
                        desc: 'İkisi de iyi karakter olduğundan birebir eşleşiyorlar.'
                    },
                    {
                        title: 'Boy: Kırmızı ve yukarı ok',
                        desc: "Wolverine'in boyu Spiderman'den uzun."
                    },
                    {
                        title: 'Kilo: Kırmızı ve yukarı ok',
                        desc: "Wolverine'in kilosu Spiderman'den ağır."
                    },
                    {
                        title: 'Yıl: Kırmızı ve yukarı ok',
                        desc: "Wolverine'in ilk görünüm yılı Spiderman'den sonra."
                    }
                ]
            },
            glhf: 'İyi Oyunlar!'
        }
    },
    more_scroll: 'Daha fazlasını görmek için kaydır',
    game_input_placeholder: 'Karakter adını yazın...',
    game_header_title: 'Bugünün Marvel karakterini tahmin et!',
    game_header_subtitle: 'Başlamak için herhangi bir karakteri yazın.',
    game_clue_title: 'Görsel İpucu',
    game_clue_title_disabled: '{{}} denemede',
    game_colorIndicator: {
        title: 'Renk göstergesi',
        good: 'Doğru',
        bad: 'Yanlış',
        partial: 'Kısmen'
    },
    game_alignments: {
        character: 'Karakter',
        gender: 'Cinsiyet',
        race: 'Irk',
        alignment: 'Taraf',
        height: 'Boy',
        weight: 'Kilo',
        firstAppearance: 'İlk Yıl',
        male: 'Erkek',
        female: 'Kadın',
        good: 'İyi',
        evil: 'Kötü',
        neutral: 'Tarafsız',
        human: 'İnsan',
        mutant: 'Mutant',
        radiation: 'Radyasyon',
        god: 'Tanrı',
        eternal: 'Ölümsüz'
    },
    game_end: {
        end: {
            oneshot: 'TEK DENEME!',
            endList: ['gg ez', 'ZAFER', 'gg wp'],
            youguessed: 'Tahmin ettin',
            find_text: 'Bugünün karakterini bulan {{}} kişisin',
            th: '.',
            tries: 'Deneme sayısı'
        },
        share: {
            text: '#Marvdle oyununda #{{}} karakterini {{}} denemede{{}} buldum {{}}⚔️{{}}',
            one: 'tek',
            s: '',
            more: 'daha',
            easy: 'kolaydı',
            copy: 'Kopyala',
            share: 'Paylaş',
            copied_text: 'Başarıyla kopyalandı!'
        }
    },
    timer: {
        title: 'Sıradaki karakter',
        timezone: "Saat dilimi: Avrupa/İstanbul\n(UTC+3'de gece yarısı)"
    }
}
