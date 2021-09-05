import { 
    Expo,
    Firebase,
    Javascript,
    MongoDB,
    Node,
    Python,
    ReactLogo,
    Typescript,
    Express,
    GitHub,
    LinkedIn
} from './TechLogos';

import { 
    Arrow, 
    Basketball,
    Box,
    Contact,
    Experience,
    RocketShip,
    StackOfBooks,
    Sun,
    Water,
    Wrench,
    Mail
} from './FlatIcons';

export const AboutMeInfo = [
    {
        sectionHeader: 'About',
        sectionIcon: RocketShip,
        sectionBody: [
            {
                item: 'Basketball',
                icon: Basketball,
                link: 'https://www.youtube.com/watch?v=RgB5Ub1GNUU'
            },
            {
                item: 'Design',
                icon: Wrench,
                link: 'https://www.oma.com/partners/rem-koolhaas'
            },
            {
                item: 'Philosophy',
                icon: StackOfBooks,
                link: 'https://www.youtube.com/watch?v=2kZRAOXEFPI&t=342s'
            },
            {
                item: 'Technology',
                icon: Arrow,
                link: 'https://github.com/input-output-hk/cardano-node'
            },
            {
                item: 'Physics',
                icon: Sun,
                link: 'https://www.amazon.com/Hyperspace-Scientific-Parallel-Universes-Dimension/dp/0385477058/ref=sr_1_1?dchild=1&keywords=hyperspace&qid=1630300348&sr=8-1'
            }
        ]
    },
    {
        sectionHeader: 'Experience',
        sectionIcon: Experience,
        sectionBody: [
            {
                item: 'Pantry.io',
                stack: [
                    Javascript, ReactLogo, Firebase
                ],
                link: 'https://thepantryapp.io/'
            }
        ]
    },
    {
        sectionHeader: 'Projects',
        sectionIcon: Water,
        sectionBody: [
            {
                item: 'Memories',
                stack: [
                    Javascript, ReactLogo, Node, MongoDB, Express
                ],
                link: 'https://elegant-benz-786846.netlify.app/'
            },
            {
                item: 'Bug--Tracker',
                stack: [
                    Javascript, ReactLogo, Firebase
                ],
                link: 'https://bug--tracker.com/dashboard'
            },
            {
                item: 'Automate Spotify',
                stack: [
                    Python
                ],
                link: 'https://github.com/josephxlara/AutomateSpotifyWithPython'
            }
        ]
    },
    {
        sectionHeader: 'Skills',
        sectionIcon: Box,
        sectionBody: [
            {
                item: 'Python',
                icon: Python
            },
            {
                item: 'Javascript',
                icon: Javascript
            },
            {
                item: 'Typescript',
                icon: Typescript
            },
            {
                item: 'React.js',
                icon: ReactLogo
            },
            {
                item: 'Node.js',
                icon: Node
            },
            {
                item: 'Express.js',
                icon: Express
            },
            {
                item: 'MongoDB',
                icon: MongoDB
            }
        ]
    },
    {
        sectionHeader: 'Info',
        sectionIcon: Contact,
        sectionBody: [
            {
                item: 'LinkedIn',
                link: 'https://www.linkedin.com/in/josephxlara/',
                icon: LinkedIn
            },
            {
                item: 'GitHub',
                link: 'https://github.com/josephxlara',
                icon: GitHub
            },
            {
                item: 'Mail',
                link: 'mailto: josephlara905@gmail.com',
                icon: Mail
            }
        ]
    }
]