export const content = {
  p: [
    {
      heading: '1. What is Quorum?',
      paragraph: [
        [
          'Quorum (code: RUM) is an open source blockchain-based P2P SNS system. The value proposition is as follows:',
          '',
          '* solve the problem of data privacy and algorithmic transparency.',
          '* empowering users to control their online data.',
          '* give back the pricing power to content producers.',
          '* sell the copyright of content or group members admission by using smart contracts',
        ].join('\n'),
      ],
    },
    {
      heading: '2. Why Quorum?',
      paragraph: [
        'Technology monopoly, especially social network monopoly, has become a worldwide problem. In the United States and the EU, technology companies have caused a lot of disputes over privacy and user data ownership issues. Criticism of traditional Internet platforms has long been a mainstream voice in various countries. People urgently need an innovative model that no longer adopts the "privacy for advertising" : a new type of network system where data is owned by users, also the distribution of traffic is no longer only controlled by the enterprise. On this basis, it is possible to rebuild the ecology of digital content trading and distribution.',
      ],
    },
    {
      heading: '3. About ecosystem',
      paragraph: [
        'The token RUM tokens can be mined by a less energy consuming, non-GPU, proof of X algorithm. After the mainnet launch, the chances of winning the reward is linked to the user\'s contribution to the network, including the data storage and network traffic.',
      ],
    },
    {
      heading: '4. Quorum and mainnet',
      paragraph: [
        'To be precise, Quorum itself is just a P2P decentralized SNS system. It can be set up by users to independently establish a small network, completely separate from the main network and without tokens. But if users want to get more functions, especially in terms of economic ecology, Quorum can be "connected" to any blockchain network that supports smart contracts.',
        'In addition to using the dpos demo chain provided by Quorum to complete these functions, users can also use more expensive ETH or smart contracts in any other blockchain system preferred to achieve their goal. But no matter what system is used to support the economic functions, the entire Quorum network is still fully connected. It can be more popularly understood that Quorum is a network system where "everyone has their own blockchain". RUM tokens are used and transferred in the Quorum system, and can also be used in related ecosystems in the same way by mapping.',
      ],
    },
    {
      heading: '5. What is the meaning of Quorum?',
      paragraph: [
        'A quorum is the minimum number of members of a deliberative assembly. In the distributed systems, Quorum-based voting can be used as a replica control method. It\'s a metaphor for the consensus algorithm in the blockchain.',
        'No, Rum consensus is not a quorum-based technique, we just love the metaphor. Quorum will provide blockchain-based eventual consistency.',
      ],
    },
  ],
};

export type Content = typeof content;
