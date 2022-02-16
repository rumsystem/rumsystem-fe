export const content = {
  header: {
    apps: 'Apps & Tools',
    why: 'Why Rum',
    network: 'Token & Eco',
    developers: 'Developers',
    download: 'Download',
    language: 'Language',
  },

  appBox: {
    title: 'Download Rum App',
    content: [
      { type: 'light', text: 'Join as a ' },
      { type: '', text: 'Node' },
      { type: 'light', text: ' of an ' },
      { type: '', text: 'alternative World' },
    ],
    previous: 'View previous versions',
  },

  index: {
    box1: [
      { type: '', text: 'RumSystem' },
      { type: 'light', text: ': ' },
      { type: 'light-small', text: 'an open-source' },
      { type: 'linebreak', text: '' },
      { type: 'light-small', text: 'P2P application infrastructure to offer' },
      { type: 'linebreak', text: '' },
      { type: '', text: 'the internet alternatives' },
    ],
    box2: {
      title: 'Decentralized',
      p: [
        'In the RUM system users are organized into groups, and each group will share a blockchain.',
        'Group\'s data will be encrypted and sync with all related users as events. There are no centralized server providers to store or process data.',
      ],
      link: 'Join as a node',
    },
    box3: {
      title: 'Own your Data',
      p: [
        'All data will be stored in the group-shared-blockchain and eventually be consistent.',
        'Every user in the group will own all of the group data completely.',
      ],
    },
    box4: {
      title: 'Privacy',
      p: [
        'Applications can replay the blockchain locally and render the results on the user interface and interact with users.',
        'There are no tracking or AD and no telemetry in the official clients.',
      ],
    },
    box5: {
      title: 'Digital Assets Trading & NFT',
      p: [
        'In the RUM system users are organized into groups, and each group will share a blockchain.',
        'Group\'s data will be encrypted and sync with all related users as events. All data will be stored in the group',
      ],
      link: 'Link a Wallet & Earn your Rum',
    },
    box6: {
      title: 'Open-Source',
      p: [
        'All officlal softwares, included node and apps, are open source and the code available on GitHub.',
      ],
      link: 'Our GitHub & Docs',
    },

    howWorks: {
      title: 'HOW\nRumSystem\nWORKS',
      p: [
        'In the RUM system users are organized into groups, and each group will share a blockchain.',
        'Group\'s data will be encrypted and sync with all related users as events. All data will be stored in the group-shared-blockchain and eventually be consistent.',
        'Applications can replay the blockchain locally and render the results on the user interface and interact with users.',
        'There are no centralized server providers to store or process data.',
      ],
      viewLarger: 'View larger network architecture diagram',
    },

    terms: [
      [
        { name: 'PEER: ', text: 'A user with a pair of keys and connects to the peer-to-peer network.' },
        { name: 'GROUP (SEEDNET): ', text: 'Multi peers or single peer can be organized into groups (SeedNet). A group can represent any online applications, a twitter-like SNS, a reddit-like community or a personal cloud notebook.' },
        { name: 'GROUP OWNER: ', text: 'The creator of a group is the group owner, who will record any valid events transactions in this group and produce new blocks onto old blocks. Group owners have more privileges, including authorizing other peers (as producers) to produce new blocks, or denying some peers to send events in this group.' },
        { name: 'PRODUCER: ', text: 'Any peers with a public IP address and open ports (including port forwarding/UPnP) can become a producer,who can help the group owner to produce new blocks without reading encrypted events/messages. Producers may receive crypto incentives as reward from the group owner or users, depending on the consensus.' },
      ],
      [
        { name: 'EVENT/MESSAGE: ', text: 'Any activity from users is regarded as an event, for example, creating a post, updating avatars, and replying to a post. Event transactions will be broadcast to the group owner and all producers, waiting to be recorded into the new block. RUM uses a subset of Activity Vocabulary Core Types to represent event types. Blockchain: Events transactions will be recorded into blocks, then be linked together to become a blockchain.' },
        { name: 'GOSSIP NETWORK: ', text: 'There are no centralized servers in the RUM network, the network is only constructed by peers. All event transactions/messages will be passed along to their neighbours peers until target peers receive it eventually.' },
        { name: 'BOOTSTRAP: ', text: 'Bootstrap node is an address book which can help your peers to discover others peers through the DHT-KAD protocol. You can use AddPeer api to add any normal peers which you trust to bootstrap. However, bootstrap node/DHT is not the only way -- a peer will discover others by peer-exchange protocol in the gossip network.' },
      ],
    ],
  },

  apps: {
    title: 'What is Rum App?',
    content: [
      'A Rum App is the front-end user interface that interact with Rum group blockchains or smart contracts.',
    ],
  },

  why: {
    title: 'Why Rum',
    subtitle: 'The internet is broken.',
    content: [
      'Technology monopoly, especially social network monopoly, has become a worldwide problem.',
      'Almost all online services are running on Client-Server architecture, which means all users\' activities and data will be stored in centralized servers. User\'s data always be controlled by service providers not themself, this made the internet centralized by nature.',
      'RUM uses a different approach to rebuild the online service. Users will control their own data and interact with other related users in the peer-to-peer network.',
    ],

    faq: 'FAQ',
    faqs: [
      {
        q: 'Ut enim ad minim veniam quis nostrud?',
        a: 'Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        q: 'Ut enim ad minim veniam quis nostrud?',
        a: 'Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        q: 'Ut enim ad minim veniam quis nostrud?',
        a: 'Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        q: 'Ut enim ad minim veniam quis nostrud?',
        a: 'Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
  },

  network: {
    rumeco: 'Rum Ecosystem',
    ecoContent: 'The RUM tokens can be mined by a non-GPU proof of X algorithm with less energy consuming. After the mainnet launch, the chances of winning the reward is linked to the user\'s contribution to the network, including the data storage and network traffic.',
    box1: {
      title: '跟生态有关的第一点',
      content: 'Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      link: 'Link a Wallet & Earn your Rum',
    },
    box2: {
      title: '跟生态有关的第二点',
      content: 'Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      link: 'Link a Wallet & Earn your Rum',
    },
    token: 'Rum Token',
    tokenQ: 'Why Do We Need RUM Tokens?',
    tokenA: [
      {
        title: 'Anti-spam',
        content: 'Blocking or blacklists does not work on a decentralized system, so we must use an economic measure to stop abuses and spam. Any RUM network operations will need a small amount of RUM. This is the origin of the Hashcash and POW being invented, as well as the Bitcoin.',
      },
      {
        title: 'Resources contribution incentive',
        content: 'A peer-to-peer system must provide economic incentive to minimize the Free-rider problem. Peers share their computing and network resources to help keep the RUM network secure and robust, to get rewards they deserve from the network.',
      },
    ],
  },

  developers: {
    quorum: {
      title: 'QuoRum',
      desc: [
        'RUM: The internet alternatives',
        'An open source peer-to-peer application infrastructure to offer the internet alternatives in a decentralized and privacy oriented way.',
      ],
      links: {
        api: 'Build API Document',
        runPeer: 'Run a RUM peer',
        example: 'Example',
        runOnServer: 'Run a RUM peer on server',
      },
    },
    rumApp: {
      title: 'RumApp',
      desc: [
        'Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      links: {
        start: 'Start',
        docs: 'Docs',
        i18n: 'MultiMate Language i18n',
        eslint: 'ESLint',
      },
    },
  },
};

export type Content = typeof content;
