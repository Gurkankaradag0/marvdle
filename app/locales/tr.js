export default {
    description: 'Bu Marvel kelime oyununda Marvel karakterini tahmin et. Her gün tahmin edebileceğiniz yeni bir karakter sizi bekliyor olacak.',
    founded: '{{}} kişi buldu!',
    yesterday: 'Dünün karakteri {{}} {{}} oldu',
    colors: {
        blue: 'Mavi',
        red: 'Kırmızı',
        yellow: 'Sarı'
    },
    clues: {
        image: 'Görsel'
    },
    modals: {
        info: {
            about: {
                title: 'Hakkında',
                values: [
                    "Her gün Marvel'den farklı bir karakter tahmin edin.\n",
                    'Marvel, bu projeyi desteklememektedir.',
                    'Bu harika oyunlardan büyük ölçüde ilham aldık: Wordle, LoLdle',
                    'Arka plan resmi referansı: URL.\n',
                    'Web sitesi istatistik toplamak ve reklam göstermek için çerezleri kullanır. Daha fazla bilgiyi Gizlilik Politikasında bulabilirsiniz.'
                ]
            },
            feedback: {
                title: 'Geri bildirimler / Sorular'
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
                    'Görsel, karakterin afişlerinden birinin bulanıklaştırılmış halini verir. Her denemenizde bulanıklaştırma bir adım daha azalır.',
                    '\nKarakteri tahmin ettiyseniz ipucu kısmına geri dönüp onunla ilgili eksik detayları alabilirsiniz.'
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
            glhf: 'İyi Oyunlar'
        }
    },
    game_input_placeholder: 'Karakter adını yazın...',
    game_header_title: 'Bugünün Marvel karakterini tahmin et!',
    game_header_subtitle: 'Başlamak için herhangi bir karakteri yazın.',
    game_clue_title: 'İpucu',
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
        firstAppearance: 'Yıl',
        male: 'Erkek',
        female: 'Kadın',
        good: 'İyi',
        bad: 'Kötü',
        neutral: 'Tarafsız',
        human: 'İnsan',
        radiation: 'Radyasyon',
        god: 'Tanrı',
        eternal: 'Ölümsüz'
    }
}
