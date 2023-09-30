export default {
    tryAgain: 'Try Again',
    privacyPolicy: {
        privacyPolicy: 'Privacy Policy',
        title: 'Marvdle - Privacy Policy',
        commonid: {
            title: 'Common ID Cookie',
            desc: 'This site uses cookies and similar tracking technologies such as the Common ID cookie to provide its services. Cookies are important devices for measuring advertising effectiveness and ensuring a robust online advertising industry. The Common ID cookie stores a unique user id in the first party domain and is accessible to our ad partners. This simple ID that can be utilized to improve user matching, especially for delivering ads to iOS and MacOS browsers. Users can opt out of the Common ID tracking cookie by clicking here.',
            matcher: 'here',
            success: 'Optout Success!'
        }
    },
    description: 'Guess the Marvel character in this Marvel wordle game. A new character for you to guess awaits every day.',
    copied: 'Copied successfully!',
    founded: '{{}} people already found out!',
    yesterday: "Yesterday's character was {{}} {{}}",
    colors: {
        blue: 'Blue',
        red: 'Red',
        yellow: 'Yellow'
    },
    clues: {
        image: 'Image Clue'
    },
    tooltips: {
        statistics: 'Stats',
        currentStreak: 'Current Streak\n(daily consecutive wins)',
        how2play: 'How to Play?',
        partial: 'One or more properties are correct, but not all',
        character: 'Character Image.',
        gender: 'Male or Female.',
        race: 'Human, God, etc...',
        alignment: 'Good, Evil or Neutral.',
        height: 'Any height.',
        weight: 'Any weight.',
        firstAppearance: 'Any year.',
        imageClue: 'Blurred version of the character image.'
    },
    modals: {
        info: {
            about: {
                title: 'About',
                values: [
                    'Every day, guess a different character from Marvel.\n',
                    'Marvel does not support this project.',
                    'Greatly inspired by these cool games: Wordle, LoLdle',
                    'Background image reference: URL.\n',
                    'The website uses cookies to collect statistics and show ads. More info in the Privacy Policy.'
                ],
                privacyPolicy: 'Privacy Policy'
            },
            feedback: {
                title: 'Feedbacks / Questions',
                values: [
                    'Have a suggestion? Found an error?',
                    'Send a mail to {{}}. {{}}\n',
                    "If you'd like to support the game, you can buy me a coffee! ☕"
                ],
                buyMeCoffee: 'buy me a coffee'
            }
        },
        statistics: {
            title: 'Statistics',
            mystats: 'My {{}} stats',
            gamesWon: 'Games won',
            averageGuesses: 'Average guesses',
            oneShots: 'One shots',
            currentStreak: 'Current streak',
            maxStreak: 'Max streak',
            chart: 'Number of guesses per game',
            clearStats: {
                first: 'Clear data',
                second: 'Confirm clear data?'
            }
        },
        help: {
            title: 'How to play?',
            desc: "Guess today's character from Marvel. It changes every 24h.",
            how2play: [
                'Simply type in the name of a characcter and it will reveal its properties.',
                'The color of the tiles will change to show how close your guess was to the character to find.\n',
                'Blue, indicates the property is an exact match.',
                'Yellow, indicates partial match.',
                'Red, indicates there is no overlap between your guess and the property.',
                '⬇️ ⬆️, With arrows, it also indicates if the answer property is above or below your guess. '
            ],
            properties_title: 'Properties',
            possible_values: 'Possible values',
            properties: [
                {
                    title: 'Gender',
                    desc: "It represents the character's gender.",
                    possible_values: 'Male or Female.'
                },
                {
                    title: 'Race',
                    desc: "It represents the character's race. A character can have more than one race.",
                    possible_values: 'Human, God, etc...'
                },
                {
                    title: 'Alignment',
                    desc: 'It indicates which side the character is on.',
                    possible_values: 'Good, Evil or Neutral.'
                },
                {
                    title: 'Height',
                    desc: "It indicates the character's height. In inches.",
                    possible_values: 'Any height.'
                },
                {
                    title: 'Weight',
                    desc: "It indicates the character's weight. In pounds (lb).",
                    possible_values: 'Any weight.'
                },
                {
                    title: 'Debut Year',
                    desc: "It indicates the character's first appearance year.",
                    possible_values: 'Any year.'
                }
            ],
            clues: {
                title: 'Clue',
                values: [
                    'After a few guesses, you can unlock the clue hint to help you find the character.\n',
                    "Image Clue, provides the blurred version of one of the character's posters. With each attempt, the blurring decreases by one step.",
                    '\nIf you have guessed the character, you can go back to the clue section and access the visual related to them.'
                ]
            },
            example: {
                title: 'Example',
                desc_1: 'Consider the correct answer is Wolverine.',
                desc_2: 'If you enter Spiderman, these properties will appear:',
                desc_3: 'If you entered Wolverine, here is what would come up:',
                values: [
                    {
                        title: 'Gender: Blue',
                        desc: 'It is an exact match, they are both male. '
                    },
                    {
                        title: 'Race: Yellow',
                        desc: 'Wolverine is not a match because he is a mutant.'
                    },
                    {
                        title: 'Alignment: Blue',
                        desc: 'They both are good characters, so they match perfectly.'
                    },
                    {
                        title: 'Height: Red and a up arrow',
                        desc: 'Wolverine is taller than Spiderman.'
                    },
                    {
                        title: 'Weight: Red and a up arrow',
                        desc: 'Wolverine weighs more than Spiderman.'
                    },
                    {
                        title: 'Debut Year: Red and a up arrow',
                        desc: "Wolverine's first appearance year is after Spiderman's."
                    }
                ]
            },
            glhf: 'Good Games!'
        }
    },
    more_scroll: 'Scroll horizontally to see more',
    game_input_placeholder: 'Type character name...',
    game_header_title: "Guess today's Marvel character!",
    game_header_subtitle: 'Type any character to begin.',
    game_clue_title: 'Image Clue',
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
        firstAppearance: 'Debut Year',
        male: 'Male',
        female: 'Female',
        good: 'Good',
        evil: 'Evil',
        neutral: 'Neutral',
        human: 'Human',
        mutant: 'Mutant',
        radiation: 'Radiation',
        god: 'God',
        eternal: 'Eternal'
    },
    game_end: {
        end: {
            oneshot: 'ONE SHOT!',
            endList: ['gg ez', 'VICTORY', 'gg wp'],
            youguessed: 'You guessed',
            find_text: 'You are the {{}} to find the character today',
            th: 'th',
            tries: 'Number of tries'
        },
        share: {
            text: 'I found character #{{}} in #Marvdle game in {{}} shot{{}} {{}}⚔️{{}}',
            one: 'one',
            s: 's',
            more: 'more',
            easy: 'easy',
            copy: 'Copy',
            share: 'Share',
            copied_text: 'Copied successfully!'
        }
    },
    timer: {
        title: 'Next character in',
        timezone: 'Time zone: Europe/İstanbul\n(Midnight at UTC+3)'
    }
}
