import React from 'react';
import RumLogo from '@/icons/logo_rumsystem.svg';

import './index.local.sass';

const HomepagePC = () => (
  <div className="homepage-pc flex-1">
    <div className="flex flex-center py-10">
      <img
        className="mb:w-30"
        src={RumLogo}
        alt=""
      />
    </div>

    <div className="main-box flex justify-center">
      <div className="inner-box flex flex-1 justify-center text-14 text-gray-d1 mx-5">
        <div className="content-box flex-1 px-5 pt-10 pb-24">
          <p className="text-18 text-white mt-10">
            1. Quorum是什么？
          </p>

          <p className="mt-5">
            Quorum（简称RUM）是一套全新的开源 P2P SNS 系统。使用区块链技术，彻底解决目前互联网存在的数据垄断、算法分发、和侵犯用户隐私、企业占有用户数据的问题。在 Quorum 系统中，所有数据均为用户掌握，完全去中心化。在此基础上用户可以通过智能合约为自己创建的内容定价，或出售群组门票等，之后也可以在此基础上重新分发流量，完成内容交易和获得分发佣金。
          </p>

          <p className="text-18 text-white mt-10">
            2. 为什么需要它？
          </p>

          <p className="mt-5">
            科技垄断，尤其是社交网络垄断已经是世界性问题。在美国和欧盟，科技公司也因为隐私和用户数据所有权问题引发了大量争议 ，在各个国家，对传统互联网平台的批评早已是社会主流声音，人们急需一种不采用“隐私换广告”模式，由用户拥有自己的数据，企业不再控制流量如何分布的新型网络系统。在这样的基础上才可以重建内容付费和交易分发的生态。
          </p>

          <p className="text-18 text-white mt-10">
            3. 经济系统如何运行？
          </p>

          <p className="mt-5">
            Quorum 的 token(RUM) 将只能通过一种低能耗，非显卡算力的挖矿方式获得。Token 的获得是根据用户对整个 SNS 网络空间的数据生成及分发的贡献而挖矿产生的，完全由算法决定，代码也是开源的。当主网运转开始之后，算法即接管了剩余 Token 的分发。
          </p>

          <p className="text-18 text-white mt-10">
            4. Quorum 有主链吗？
          </p>

          <p className="mt-5">
            确切地说，Quorum 本身只是一套 P2P 的去中心 SNS 系统。它可以由用户自主建立一个小型网络，完全脱离主网和 Token 运行。但如果用户希望获得更多功能，尤其是经济生态功能，Quorum 可以通过智能合约被“接入”到任何支持智能合约共识的网络中，无论是区块链系统还是中心化系统。
          </p>

          <p className="mt-5">
            用户可以使用 Quorum 提供的 dpos 演示链完成这些功能，也可以使用更昂贵的 ETH，或者任何用户偏好的区块链系统中的智能合约达到目的。但无论使用任何系统支持经济功能，整个 Quorum 网络仍然是全联通的。可以更通俗的理解为 Quorum 是一个“人人都有自己的区块链”的网络系统。RUM token 通过映射方式在 Quorum 系统内使用和流动，也可以用同样的方式在相关生态中使用。
          </p>

          <p className="text-18 text-white mt-10">
            5. Quorum这个词是什么意思？
          </p>

          <p className="mt-5">
            Quorum 这个单词，是指一种基于投票的分布式系统算法，在现实社会中也指一个投票活动所需的最少人数，它包含的隐喻是区块链系统的基本要素。当然，Quorum 项目并不是基于这个算法产生的，而是通过区块链技术解决分布式系统中弱共识和最终一致性问题。
          </p>
        </div>
      </div>
    </div>
  </div>
);


export default HomepagePC
