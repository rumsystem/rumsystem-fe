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
    title: '下载 Rum App',
    content: [
      { type: 'light', text: '加入 ' },
      { type: '', text: '平行互联世界' },
      { type: 'light', text: '，参与创建一个 ' },
      { type: '', text: '新节点' },
    ],
    previous: '查看其它历史更新版本',
  },

  index: {
    box1: [
      { type: '', text: 'RumSystem' },
      { type: 'light-small', text: '：' },
      { type: 'linebreak', text: '' },
      { type: 'light-small', text: '开源 P2P 网络及技术底层，' },
      { type: 'linebreak', text: '' },
      { type: '', text: '帮助你在“平行互联世界”快速构建应用。' },
    ],
    box2: {
      title: '去中心化',
      p: [
        '在Rum 系统网络中，用户可自建 SeedNet 种子网络，每个种子网络通过各自独立的区块链共享数据及通讯。',
        '种子网络里的数据经加密后在网络成员中进行同步，数据无需交给任何中心化角色处理或存储。',
      ],
      link: '加入并成为节点',
    },
    box3: {
      title: '掌控你数据的所有权',
      p: [
        '所有数据都存储在其种子网络专属的区块链上并通过节点同步保持一致性，',
        '每个种子网络里所有数据由该网络内的成员完全拥有并掌控。',
      ],
    },
    box4: {
      title: '隐私保护',
      p: [
        'Applications can replay the blockchain locally and render the results on the user interface and interact with users.',
        'There are no tracking or AD and no telemetry in the official clients.',
      ],
    },
    box5: {
      title: '数字资产交易和 NFT',
      p: [
        '需要填.',
        '需要填.',
      ],
      link: '关联钱包，开始挖矿',
    },
    box6: {
      title: '开源',
      p: [
        '你可以在 GitHub 上找到我们官方所有软件，包括技术底层、节点及应用程序的开源代码.',
      ],
      link: '访问我们的 GitHub 及开发文档',
    },

    howWorks: {
      title: 'HOW\nRumSystem\nWORKS',
      p: [
        '需要填.',
        '需要填.',
        '需要填.',
        '需要填.',
      ],
      viewLarger: 'View larger network architecture diagram',
    },

    terms: [
      [
        { name: 'PEER: ', text: 'Rum P2P 网络上的一个节点，每个节点对应一对密钥，每个用户可创建多个节点' },
        { name: 'GROUP (SEEDNET): ', text: '多个或单个节点可组建种子网络。每个种子网络可以设定为不同的产品形态，呈现为功能各异的在线应用。：如类似 Twitter 的时间线 SNS、类似 Reddit 的论坛社区、甚至一个在自己逐渐的几个设备节点之间同步的私密笔记本。' },
        { name: 'GROUP (SEEDNET) OWNER: ', text: '每个种子网络的创建者也就是 Group Owner，他负责出块和记录链上所有交易记录。Group Owner 拥有一些管理特权，例如：指定出块人负责出块、屏蔽某成员在该种子网络中的发出的消息。' },
        { name: 'PRODUCER: ', text: '任何拥有公开IP地址并开放端口（含including port forwarding/UPnP) 都能够成为出块人帮助 Group Owner 生产新块。每个块中包含的消息或事件都是加密的，出块人无法读取。基于共识，出块人可以从其种子网络成员或创建者处获得一定的手续费作为矿工报酬。' },
      ],
      [
        { name: 'EVENT/MESSAGE: ', text: '用户在种子网络里提交的任何操作都被视为一个事件，例如发布新贴、更新头像和留言回复。 每个事件将作为交易广播给 Group Owner 以及所有出块人，等待记录到新块中。 RUM 使用 Activity Vocabulary Core Types 的子集来表示事件类型。区块链：所有事件都将作为交易将被记录到区块中，并连接在一起成为一条区块链。每个种子网络都拥有一条专属的链。' },
        { name: 'GOSSIP NETWORK: ', text: 'RUM 网络中没有中心化服务器，网络由且仅由节点们 Peers 创建维护。所有的事件或消息都由一个节点传递给它临近的节点们。通过一层层传递，直到消息的收件人（目标节点）最终收到这条消息。' },
        { name: 'BOOTSTRAP: ', text: 'Bootstrap 自举节点是一个地址簿，用于帮助您的节点通过 DHT-KAD 协议发现其他节点们。 您可以使用 AddPeer api 将您信任的任何普通节点添加为 BootStrape。 但是，自举节点/DHT 并不是唯一的方式，Gossip 网络的对等交换协议也能帮你发现其它节点们。' },
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
    ecoContent: 'RUM token 的挖矿使用的是不通过 GPU 证明的算法，低能耗，绿色低碳。将在主网上线后提供。矿工获得奖励的机会与它对Rum网络的贡献挂钩，比如提供对数据的存储或网络流量。',
    box1: {
      title: '跟生态有关的第一点',
      content: 'Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      link: '关联钱包，开始挖矿',
    },
    box2: {
      title: '跟生态有关的第二点',
      content: 'Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      link: '关联钱包，开始挖矿',
    },
    token: 'Rum Token',
    tokenQ: '为什么需要 RUM Tokens?',
    tokenA: [
      {
        title: '反spam',
        content: '去中心化系统上，传统的屏蔽或黑名单很难作用，因此我们决定使用经济措施来阻止滥用和垃圾邮件——在 RUM 网络进行的操作都需支付少量的 RUM token。 这个用途也是 Hashcash、POW 以及比特币被发明的起源。',
      },
      {
        title: '激励资源贡献',
        content: 'P2P系统需要提供经济激励以减少 “免费搭便车” 的情况。 节点们从 Rum 网络中收获他们应得的代币奖励（挖矿），能够激励共享节点持续稳定地贡献计算和网络资源，以帮助保持 RUM 网络的安全和健壮。',
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
