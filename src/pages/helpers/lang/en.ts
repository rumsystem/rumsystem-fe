import type { Content as ZHTWContent } from './zh-tw';

export const content: ZHTWContent = {
  header: {
    apps: 'Apps & Tools',
    why: 'Why Rum',
    network: 'Token & Eco',
    developers: 'Developers',
    download: 'Download',
    language: 'Language',
  },

  appBox: {
    light: {
      title: [
        { type: ['medium'], text: 'Rum Light on Lightweight Node' },
      ],
      desc: [
        'A quick and easy way to experience Rum',
        'Join the internet alternative',
      ],
      download: 'Download',
    },

    port: [
      'Pioneering use NFT as access token',
      'Decentralized, lightweight web forum',
    ],
    rumapp: [
      'Full node Rum that can create SeedNets',
      'Full-featured for node Owners',
    ],
    rumlib: [
      'Content sharing and discussion',
      'Decentralized library',
      '(features partially released)',
    ],
    feed: [
      'A birdview of Rum in a browser.',
      'Simply login with Mixin or GitHub account.',
    ],
  },

  index: {
    box1: {
      p: [
        { type: ['bold', 'italic'], text: 'RumSystem' },
        { type: ['light'], text: ': ' },
        { type: ['light', 'small'], text: 'an open-source' },
        { type: ['linebreak'], text: '' },
        { type: ['light', 'small'], text: 'P2P application infrastructure to offer' },
        { type: ['linebreak'], text: '' },
        { type: ['bold', 'italic'], text: 'the internet alternatives' },
      ],
      start: 'Start',
    },
    box2: {
      title: 'Decentralized',
      p: [
        'In RumNetwork, users are organized into groups (SeedNet) and share a private blockchain. Data is encrypted and synchronized among SeedNet members, without relying on centralized platforms for data storage or distribution.',
      ],
      link: 'Join as a node',
    },
    box3: {
      title: 'Own your Data',
      p: [
        'SeedNets can be used to build social groups, apps or services. All data generated within the SeedNet stored on the  private chain and synchronized through P2P nodes. SeedNets members get full control of these data, decide how to define data ownership, usage and attribution, as well as how to distribute profit.',
      ],
    },
    box4: {
      title: 'Privacy',
      p: [
        'All messages including users\' interaction with the app and communication with others are encrypted before transfer, then decrypted and replay in local nodes. Rum app is unable to collect, track or monitor any user data or behaviors. User privacy will be guaranteed through encryption and anonymity autonomy.',
      ],
    },
    box5: {
      title: 'Digital Assets Trading & NFT',
      p: [
        'Digital Assets Trading no longer needs to rely on traditional intermediaries as arbiters of value and information when all data is in the hands of users. With smart contracts, creators get full control and flexibility of prices or subscriptions setting while others can earn commissions by facilitating deals or bringing more traffic.',
      ],
      link: 'Link a Wallet & Earn your Rum',
    },
    box6: {
      title: 'Open-Source',
      p: [
        'All official softwares, including API, SDK are open source and the code available on GitHub. Rum will provide support and funding to third-party devs after the mainnet launch. If you are interested in building decentralized apps, keep in touch with us.',
      ],
      link: 'Our GitHub & ',
      linkDocs: 'Docs',
    },

    adventure: {
      text1: 'Adventure the possibilities, bon voyage!',
      text2: 'More DAPPs Working With Rum >>',
    },

    howWorks: {
      title: 'HOW\nRumSystem\nWORKS',
      p: [
        [{ type: [], text: 'RumSystem is a groundbreaking open-source P2P network framework & decentralized solutions (abbreviated to RUM). It is expected to use technologies such as Gossip protocol, smart contracts, cryptocurrency, and blockchain to address the excessive centralization of the current Internet and threats to users\' rights in terms of privacy, security, ownership, and fair value exchange.' }],
        [{ type: [], text: 'It consists of three parts:' }],
        [{ type: [], text: '' }],
        [
          { type: ['bold'], text: '- Quorum' },
          { type: [], text: ': Open source P2P network application developed by the Rum team. Third-party developers can design their own service, apps, templates, themes, extensions by using Quorum or retool decentralized alternatives from existing products.' },
        ],
        [
          { type: ['bold'], text: '- Rum App' },
          { type: [], text: ': cross-platform clients developed by the Rum team for demo and testing the potential of Quorum and API.' },
        ],
        [
          { type: ['bold'], text: '- RumNetwork' },
          { type: [], text: ': Decentralized P2P network with messaging through the Gossip protocol and nodes built and hosted by users. Users interact with each other by creating or joining a SeedNet that can be rendered to a different interface according to various needs. All messages in a SeedNet are encrypted and stored on private blockchain, then decrypted and replay on the interface of local nodes.' },
        ],
        [{ type: [], text: 'RumSystem has unlimited potential in building various nontraditional business models or collaborative communities from crowd-sourcing, digital asset trading to fan-base social platforms. It can also be used to build private or single-person services, such as secure private social networking or personal data multi-node backup. Multi-currency settlement will be supported soon, including Rum token, cryptocurrencies issued based on Eth or cash.' }],
      ],
      viewLarger: 'View larger network architecture diagram',
    },

    terms: [
      [
        { name: 'Peer: ', text: 'A user quorum node with a pair of keys and connects to the peer-to-peer network.' },
        { name: 'Group (SeedNet): ', text: 'Single peer or multi peers or can be organized into groups (SeedNet). A group can represent any online app adapted to various types, such as a decentralized Twitter, a forum, a fanbase group, a paid subscription feed or even a private notebook that only syncs across multiple devices you own.' },
        { name: 'Group Owner: ', text: 'The creator of a group is the group owner, who will record any valid events transactions in this group and produce new blocks onto old blocks. Group owners have more privileges, including authorizing other peers (as producers) to produce new blocks, or denying some peers to send events in this group.' },
        { name: 'Producer: ', text: 'Any peers with a public IP address and open ports (including port forwarding/UPnP) can become a producer, who can help the group owner to produce new blocks without reading encrypted events/messages. Producers may receive crypto incentives as payment from the group owner or users, depending on the consensus.' },
      ],
      [
        { name: 'Event/Message: ', text: 'Any activity from users is regarded as an event, for example, creating a post, updating avatars, and replying to a post. Event transactions will be broadcast to the group owner and all producers, waiting to be recorded into the new block. RUM uses a subset of Activity Vocabulary Core Types to represent event types.' },
        { name: 'Blockchain: ', text: 'Events transactions will be recorded into blocks, then be linked together to become a blockchain.' },
        { name: 'Gossip Network: ', text: 'There are no centralized servers in the RUM network, the network is only constructed by peers. All event transactions/messages will be passed along to their neighbors peers until target peers receive it eventually.' },
        { name: 'Bootstrap: ', text: 'Bootstrap node is an address book which can help your peers to discover others peers through the DHT-KAD protocol. You can use AddPeer api to add any normal peers which you trust to bootstrap. However, bootstrap node/DHT is not the only way -- a peer will discover others by peer-exchange protocol in the gossip network.' },
      ],
    ],
  },

  apps: {
    fullNodeApp: 'Full Node App',
    lightNodeApp: 'Light Node App',
    tool: 'Tool',
    rumAppDesc: 'Fullnode desktop app. Easy to run a fullnode.',
    feedDesc: 'Flexible and decentralized micro blog built on Quorum.',
    cnftDesc: 'An NFT club built on Quorum and Mixin network.',
    beeDesc: 'A web3 social media product for movie. Powered by Quorum',
    portDesc: 'Decentralized forums.',
    guiDesc: 'Pure, Secure, Fast GUI for quorum fullnode.',
    openNodeDesc: 'Use open node to develop quickly.',
    libraryDesc: 'Library app built on Quorum.',
    nftClubDesc: 'NFT club from all EVM compatible chain.',

    rumapp: {
      title: 'Rum App',
      type: 'Full Node',
      subtitle: [
        'Full node Rum that can create SeedNets',
        'Full-featured for node Owners',
      ],
      content: [
        'A cross-platform client developed by the RUM team for exploring decentralized features of Rum System in an easy and familiar way. (WebApp coming soon)',
        'Three types of SeedNet templates available now: Feed, BBS, & Private Notes. ',
        'Upcoming Features: Cryptocurrency payments and transaction, Smart Contracts, Digital assets ownership confirmation, Crowdsourcing creation mode, etc.',
        'In the near future, a SeedNet, combined with different permission settings, pricing plan & customizable themes, can be applied as a decentralized Twitter, forum, fan-base group, subscribable feeds, encrypted trust docs, crowd-sourcing project, NFT & digital asset trading service, self-publishing services ……',
      ],
      smallTip: 'Rum App is still in its early stage, versions updates could be frequent. Occasionally, you may experience problems such as unsuccessful sync or other problems. But we are working hard to improve service stability and perfect functions.',
    },
    rumlight: {
      title: 'Rum Light Mobile App',
      type: 'Light Node',
      subtitle: [
        'A quick and easy way to experience Rum',
        'Join the internet alternative',
      ],
      content: [
        'A mobile client that runs on a light node and supports major Android devices as well as iPhone (you need to download TestFlight from the App Store).',
        'Compared with the full node client, Rum Light has all the interactive functions of Rum App, such as posting, commenting, and liking, except that you can\'t build your own SeedNet.',
        'And it\'s lighter and faster.',
        'A quick and easy way to experience Rum. Join the internet alternative, for more possibilities.',
      ],
    },
    port: {
      type: 'Light Node',
      subtitle: [
        'Pioneering use NFT as access token',
        'Decentralized, lightweight web forum',
      ],
      content: [
        'Pioneering use NFT as access token and permission management. Port is a decentralized, lightweight web forum.',
        'Imagine creating your own forum and distributing NFT to your audience. With NFT, they can join and discuss their common topics.',
        'The content supports Markdown format, likes and comments.',
        'In the future, we will also support more user to user activities, and more use of NFT for the management of different permissions.',
        'Explore the endless possibilities of Rum.',
      ],
    },
    rumlib: {
      title: 'Rum Lib',
      type: 'Full Node',
      subtitle: [
        'Content sharing and discussion',
        'Decentralized library',
        '(features partially released)',
      ],
      content: [
        'A decentralized content management library that enables content sharing and discussion using SeedNets, currently only supports Epub eBook type of management and reading. More content formats will be supported in the future.',
        'The eBook reader already supports highlighting notes, full-screen reading, font adjustment, background color adjustment, etc. More features will be released later to enhance your reading experience.',
        'The discussion feature is under development. Then you can discuss with your peers, and use your imagination and creativity to create and publish content together.',
        'Explore the endless possibilities of Rum.',
      ],
    },
    feed: {
      title: 'Feed',
      type: 'Light Node',
      subtitle: [
        'A birdview of Rum in a browser.',
        'Simply login with Mixin or GitHub account.',
      ],
      content: [
        'A light node app runs in browser.',
        'Easy to dive in, login with commonly used SNS accouts.',
        'Easy to use, the familiar way to post and comment.',
        'Easy to find your spot, discover with opitimized algorithm.',
      ],
    },
    quorum: {
      title: 'Quorum',
      subtitle: ['Earn Rum by running a rum peer'],
      howtorun: 'How to run a full node?',
    },
  },

  qrtip: [
    'Scan Qr Code',
    'Get Mobile APP',
  ],

  why: {
    title: 'Why Rum',
    subtitle: 'The internet is broken.',
    content: [
      'Cloud, is the light name people give to the great new heavy industry of this era.  At its back, there are gargantuan data centers, tens of thousands of centrally operated data storage and processors, and a highly centralized network connected by millions of miles of optical fibers. Tech giants justify their monopoly  with scale-effect and need for growth, then use such dominance to remake the markets they control, suck profit and power to the top of the pyramid constantly. Tech monopoly, in this era of big data, is already a worldwide problem.',
      'Criticism of Tech giants have long been mainstream voices in various countries for they treat user privacy as a commodity, disrespect the author\'s value, track user behavior and social relationships, manipulate information production and consumption, and influence users\' "independent opinion" by using algorithms to control distribution. For content creation, intermediaries that occupy a monopoly position can also use their dominance to squash diversity of opinion and taste in order to meet commercialization goals. Concentration is followed by homogenization, which is the reality we are witnessing.',
      'Under the current sequence, the crisis of neutrality, security, privacy, intellectual property rights, and data ownership have become Inevitable issues of the Internet. None of these problems can be solved with the existing network system or business model. There is an urgent need for an alternative network system no longer controlled by a small number of centralized enterprises in how traffic is distributed and the use of the "privacy-for-advertising" model for blood generation. Only on this basis can we rebuild a content & knowledge creation ecosystem with free flow, pricing autonomy, diversity, fairness and sustainability.',
      'In RumSystem, users do not need to rely on centralized service providers to store or distribute data, and have full control over their data privacy and ownership of the content they create. SeedNet members can decide how to define data ownership, usage and attribution, as well as how to distribute profits.',
      'People have endured "no choice" long enough. What Rum hopes to rebuild is an alternative Internet where individual privacy and autonomy get respect, where everyone could truly benefit from value creation and distribution, where without gatekeepers from very few strong entities .',
      'On the Internet, tech giants control and profit from your information. On RumNetwork, you will take full control of your data and make decisions on how to bill.',
    ],

    // faq: 'FAQ',
    // faqs: [
    //   {
    //     q: 'Ut enim ad minim veniam quis nostrud?',
    //     a: 'Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //   },
    //   {
    //     q: 'Ut enim ad minim veniam quis nostrud?',
    //     a: 'Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //   },
    //   {
    //     q: 'Ut enim ad minim veniam quis nostrud?',
    //     a: 'Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //   },
    //   {
    //     q: 'Ut enim ad minim veniam quis nostrud?',
    //     a: 'Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //   },
    // ],
  },

  network: {
    rumeco: 'Rum Ecosystem',
    ecoContent: [
      'The RumSystem supports all cryptocurrencies issued based on Eth or de-tokenized application. In order to maintain the robustness and sustainability of RumNetwork and its ecosystem, Rum has issued 21,000,000 tokens (RUM) to support network operations, Rum team, third-party developers, and communities of content creation and trading in future. ',
      'RUM tokens can be mined by a non-GPU proof of X algorithm with less energy consuming. After the mainnet launch, the chances of winning the reward is linked to the user\'s contribution to the network, including the data storage and network traffic.',
    ],
    box1: {
      title: 'An ecosystem designed for digital asset trading',
      content: [
        'The decentralization of RumNetwork can eliminate the need for traditional intermediaries to act as arbiters of money and value. Users can set prices, subscription or trading conditions for digital assets they created or copyright represented through smart contracts, or earn distribution commissions by helping promote or facilitate deals.',
      ],
    },
    box2: {
      title: 'RUMs and NFTs',
      content: [
        'NFTs mark the relationship between creation and creator, providing buyers with proof of ownership. At the same time, the circulation of NFT is also a process of interest allocation for those who participate in adding value to the asset. RumSystem is Ideal for a variety of NFT projects and hopes to fuel more innovative business opportunities for digital asset trading.',
      ],
    },
    link: [
      { type: [], text: 'Link Wallet & Earn Rum ' },
      { type: ['small'], text: '(coming soon)' },
    ],
    token: 'Rum Token',
    tokenQ: 'Why do you need RUM Tokens?',
    tokenA: [
      {
        title: 'Anti-spam',
        content: 'Traditional blocking or blacklisting is hard to work on a decentralized system, so we prefer to use economic tools to stop abuses and spam. Most operations performed on the RUM network require a tiny amount of RUM as action costs, meanwhile a balance of income and cost can be built based on a positive operation model. Cost leverage is also the origin of the invention of Hashcash, POW, and Bitcoin.',
      },
      {
        title: 'Resources contribution incentive',
        content: 'A peer-to-peer system must provide economic incentive to minimize the Free-rides problem. Peers share their computing and network resources to help keep the RumNetwork secure and robust, to get rewards (mining) they deserve from the network.',
      },
    ],
  },

  developers: {
    docs: {
      intro: {
        left: 'Open Source',
        right: 'You are welcomed to participate in the development of Quorum or to build your own DAPPs using the Rum SDK . Together we make Rum ecosystem prosper.',
      },
      sections: [
        {
          title: 'Docs',
          desc: 'We keep developing and improving the Quorum chain, as the documentation will be kept up to date in an effort for developers\' benefit.',
        },
        {
          title: 'Github',
          desc: 'You can find all of our official code  open-sourced on GitHub, and we look forward to your participation and contributions.',
        },
      ],
    },
    qrtip: [
      'Scan QR code',
      'with Mixin',
    ],
    quorum: {
      title: 'QuoRum',
      desc: [
        'QuoRum is an open-source P2P network application under GPL 3.0 License, by using a combination of technologies including Gossip protocol, smart contracts, cryptocurrency, and blockchain to address the excessive centralization of the current Internet and threats to users\' rights in terms of privacy, security, ownership, and fair value exchange.',
        'If you are interested in building decentralized apps or retooling an alternative version of existing products, QuoRum is your most convenient choice. You can use any of the development languages, no need for blockchain-related development experience. ',
        '"Quorum" refers to the minimum number of members of a deliberative assembly. In the distributed systems, Quorum-based voting can be used as a replica control method. It\'s a metaphor for the consensus algorithm in the blockchain. ( However, Rum consensus is not a quorum-based technique, we just love the metaphor. )',
        'Quorum will provide blockchain-based methods to solve the problem of weak consensus and eventual consistency in distributed systems.',
        'Our protocols, APIs and SDKs have been in continuously development and are still being improved. Keep following and tell us your needs and queries. Or join the RumNetwork as a node.',
      ],
      links: {
        api: 'API Document',
        github: 'GitHub Repository',
        runPeer: 'ㄴ Run a RUM peer',
        example: 'ㄴ Example',
      },
    },
    rumApp: {
      title: 'Rum App',
      desc: [
        'Rum App is a cross-platform client developed by the Rum team for testing our SDK and API in combination with real-world demand scenarios as well as providing demo and inspiration to third-party developers who are interested in decentralized Apps development based on RumSystem. ',
        'In Rum App, a seed network can be used as a social group, a private tweet square, a feed subscription, a forum, a fanbase club or a single-person private doc tool …… through a combination of different templates, themes, layouts, permissions and pricing plan settings. Each SeedNet can be rendered into a unique application (interface).',
        'You can develop various interfaces according to your design based on this framework, also design and sell templates, themes, or plugins in Rum App to explore the infinite possibilities of decentralized P2P applications. ',
        'Cryptocurrency transactions, smart contracts, digital assets ownership confirmation will be supported soon to enable SeedNet applicable for more  collaborative pricing or trading scenarios.',
      ],
      links: {
        start: 'Start',
        docs: 'Docs',
        i18n: 'MultiMate Language i18n',
        eslint: 'ESLint',
      },
    },
  },

  footer: {
    guide: 'User Guide',
    docs: 'Developer Docs',
  },
};

export type Content = typeof content;
