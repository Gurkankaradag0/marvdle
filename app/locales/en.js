export default {
    description: 'Guess the Marvel character in this Marvel wordle game. A new character for you to guess awaits every day.',
    founded: '{{}} people already found out!',
    yesterday: "Yesterday's character was {{}} {{}}",
    colors: {
        blue: 'Blue',
        red: 'Red',
        yellow: 'Yellow'
    },
    clues: {
        image: 'Image'
    },
    modals: {
        info: {
            about: {
                title: 'About',
                values: [
                    "Her gün Marvel'den farklı bir karakter tahmin edin.",
                    'Marvel, bu projeyi desteklememektedir.',
                    'Bu harika oyunlardan büyük ölçüde ilham aldık: Wordle, LoLdle',
                    'Arka plan resmi referansı: URL.',
                    'Web sitesi istatistik toplamak ve reklam göstermek için çerezleri kullanır. Daha fazla bilgiyi Gizlilik Politikasında bulabilirsiniz.'
                ]
            },
            feedback: {
                title: 'Geri bildirimler / Sorular'
            }
        },
        help: {
            title: 'How to play?',
            desc: "Guess today's character from Marvel. It changes every 24h.",
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
                    'Karakteri bulmanıza yardımcı olmak için birkaç tahminden sonra ipucu kilidini açabilirsiniz.',
                    'Görsel, karakterin afişlerinden birinin bulanıklaştırılmış halini verir. Her denemenizde bulanıklaştırma bir adım daha azalır.',
                    'Karakteri tahmin ettiyseniz ipucu kısmına geri dönüp onunla ilgili eksik detayları alabilirsiniz.'
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
    game_input_placeholder: 'Type character name...',
    game_header_title: "Guess today's Marvel character!",
    game_header_subtitle: 'Type any character to begin.',
    game_clue_title: 'Clue',
    game_clue_title_disabled: 'in {{}} tries',
    game_colorIndicator: {
        title: 'Color Indicator',
        good: 'Correct',
        bad: 'Incorrect',
        partial: 'Partial'
    },
    game_alignments: {
        character: 'Character',
        gender: 'Gender',
        race: 'Race',
        alignment: 'Alignment',
        height: 'Height',
        weight: 'Weight',
        firstAppearance: 'Year',
        male: 'Male',
        female: 'Female',
        good: 'Good',
        bad: 'Bad',
        neutral: 'Neutral',
        human: 'Human',
        radiation: 'Radiation',
        god: 'God',
        eternal: 'Eternal'
    }
}
