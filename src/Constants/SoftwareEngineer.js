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
    LinkedIn,
    Deloitte,
    Illustrator,
    Photoshop,
    PantryLogo
} from '../TechLogos';

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
    LocalStorage,
    Mail
} from '../FlatIcons';

const SoftwareEngineer = [
    {
        sectionHeader: 'Interests',
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
                link: 'https://www.youtube.com/watch?v=iP9xNYCr5Js'
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
                isCompany: true,
                logo: Deloitte,
                website: 'https://www2.deloitte.com/us/en.html',
            },
        ]
    },
    {
        sectionHeader: 'Projects',
        sectionIcon: Water,
        sectionBody: [
            {
                item: 'Pantry.io',
                stack: [
                    Javascript, ReactLogo, Expo, Firebase
                ],
                link: 'https://thepantryapp.io/'
            },
            {
                item: 'Memories',
                stack: [
                    Javascript, ReactLogo, Node, Express, MongoDB
                ],
                link: 'https://elegant-benz-786846.netlify.app/'
            },
            {
                item: 'Bug--Tracker',
                stack: [
                    Javascript, ReactLogo, Firebase
                ],
                link: 'https://bug--tracker.com/'
            },
            {
                item: 'Books to Read',
                stack: [
                    Javascript, ReactLogo, LocalStorage
                ],
                link: 'https://github.com/josephxlara/BooksToRead'
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
        sectionHeader: 'Toolbox',
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
                item: 'React Native',
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
            },
            {
                item: 'Illustrator',
                icon: Illustrator
            },
            {
                item: 'Photoshop',
                icon: Photoshop
            }
        ]
    },
    {
        sectionHeader: 'Contact',
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

export default SoftwareEngineer;