export const content = {
  header: {
    apps: 'Apps & Tools',
    why: 'Why Rum',
    network: 'Token & Eco',
    developers: 'Developers',
    download: 'Rum 客戶端下載',
    language: '切換語言',
  },

  appBox: {
    title: '下載 Rum App',
    content: [
      { type: ['light'], text: '加入' },
      { type: ['bold'], text: '平行互聯網世界' },
      { type: ['light'], text: '，參與創建你的' },
      { type: ['bold'], text: '新節點' },
    ],
    previous: '查看其它歷史更新版本',
  },

  index: {
    box1: [
      { type: ['bold', 'italic', 'kanit'], text: 'RumSystem' },
      { type: ['light', 'small'], text: '：' },
      { type: ['linebreak'], text: '' },
      { type: ['light', 'small'], text: 'P2P 開源技術底層 及 去中心網絡解決方案' },
      { type: ['linebreak'], text: '' },
      { type: ['bold', 'small'], text: '快速構建“平行互聯網世界”' },
    ],
    box2: {
      title: '去中心化',
      p: [
        '在 RumNetwork 中，用戶可自建種子網絡 。每個種子網絡通過一條專屬的私有區塊鏈進行通訊及傳遞數據。數據經加密後在網絡成員中同步。數據的保管或分發無需通過中心化的服務提供商。',
      ],
      link: '加入併成為節點',
    },
    box3: {
      title: '掌控你數據的所有權',
      p: [
        '用戶可以利用種子網絡自建服務、應用、社交羣組，完全掌控自己的身份數據以及創造的內容數據，無需依賴中心化平台提供服務。',
        '種子網絡內所有數據都存儲於其私有的區塊鏈上，通過 P2P 節點進行數據同步，可溯源。網絡成員自行決定該網絡內所有產生的數據所有權的定義，以及使用、歸屬、收益分配等規則。',
      ],
    },
    box4: {
      title: '隱私保護',
      p: [
        '用戶與應用的交互、與其它用戶的通訊，在 RumNetwork 上 是通過專屬區塊鏈上的加密消息傳遞，在應用裡解密並回放。 Rum 不存在也不可能對任何用戶數據及行為進行收集、追蹤、監聽。',
        '用戶的隱私權將將通過加密與匿名自主性來保證。',
      ],
    },
    box5: {
      title: '內容交易和 NFT',
      p: [
        '當所有數據均為用戶掌握，內容創造和價值交換都不再需要傳統中介機構充當金錢和信息的仲裁者。用戶可以通過智能合約為自己創建的內容定價，或出售羣組門票等，之後也可以在此基礎上參與流量分發，加速內容交易，由此獲得分發傭金。',
      ],
      link: '關聯錢包，開始挖礦',
    },
    box6: {
      title: '開源',
      p: [
        '你可以在 GitHub 上找到我們官方所有軟件的開源代碼，包括API、SDK、官方客戶端、節點的配置部署等。',
        'Rum 會在主鏈開發基本完成後，對第三方開發提供支持和投資。如果你對開發去中心類應用感興趣，請持續關注 RumSystem.',
      ],
      link: '訪問我們的 GitHub 及開發文檔',
    },

    howWorks: {
      title: 'HOW\nRumSystem\nWORKS',
      p: [
        [{ type: [], text: 'Rum System 是一套全新的開源P2P網絡框架及解決方案（簡稱RUM），期望能使用區塊鏈、智能合約、數字貨幣、Gossip protocol 等技術，解決目前互聯網存在的過度中心化，以及在隱私、安全、所有權、公平價值交換等方面對用戶權利的威脅。它所包含的三個部分：' }],
        [
          { type: ['bold'], text: 'Quorum' },
          { type: [], text: '：官方團隊主導開發的開源底層 P2P 軟體及 API。' },
        ],
        [
          { type: ['bold'], text: 'RumApp' },
          { type: [], text: '：官方團隊開發的跨平台客戶端，展示 Quorum 和 API 的應用潛能。' },
        ],
        [
          { type: ['bold'], text: 'RumNetwork' },
          { type: [], text: '：去中心的P2P消息傳遞網絡。節點由用戶自建、通過 Gossip protocol 完成消息傳遞。所有消息傳遞過程中加密，在應用中呈現時解密。用戶通過創建或加入種子網絡 (Seednet) 進行聚合、社交及互動。根據不同的需求，每個種子網絡都可將渲染為（render）不同的產品呈現（interface）。第三方開發者可以在此基礎之上開發自己的 Interface——應用、模板、主題、插件……或為現有產品開發去中心化的替代版本。' },
        ],
        [{ type: [], text: '私有鏈+加密消息網絡+虛擬貨幣+智能合約+數字簽名，讓RumSystem 和基於種子網絡的人羣聚合 具備潛力無限的應用形式，可以成為協作社羣或商業應用，如 共創、內容交易，收費入會 等，也可以只用於小圈子私密社交、個人多節點數據備份，可接入開放網絡，也可以只運行在私密網絡上。交易場景中，可以參與 RUM token 的經濟生態，也可無幣化運營。' }],
      ],
      viewLarger: '點擊查看大圖',
    },

    terms: [
      [

        { name: 'PEER: ', text: 'Rum P2P 網絡上的一個節點，每個節點對應一對密鑰，每個用戶可創建多個節點。' },
        { name: 'GROUP (SEEDNET): ', text: '多個或單個節點可組建種子網絡。每個種子網絡可以設定為不同的產品形態，呈現為功能各異的在線應用：如去中心化版本的 Twitter、Reddit、付費羣組、付費閲讀、甚至一個僅在自己搭建的多個設備節點間同步的私密筆記。' },
        { name: 'GROUP (SEEDNET) OWNER: ', text: '每個種子網絡的創建者也就是 Group Owner，他負責出塊和記錄鏈上所有交易記錄。 Group Owner 擁有一些管理特權，例如：指定出塊人負責出塊、設置組的權限和配置，設置個別成員的可寫權限，等' },
        { name: 'PRODUCER: ', text: '任何擁有公開IP地址並開放端口（含 ncluding port forwarding/UPnP) 都能夠成為出塊人幫助 Group Owner 生產新塊。每個塊中包含的消息或事件都是加密的，出塊人無法讀取。基於共識，出塊人可以從其種子網絡成員或創建者處獲得一定的手續費作為礦工報酬。' },
      ],
      [
        { name: 'EVENT/MESSAGE: ', text: '用戶在種子網絡裡提交的任何操作都被視為一個事件，例如發布新貼、更新頭像和留言回覆。每個事件將作為交易廣播給 Group Owner 以及所有出塊人，等待記錄到新塊中。 RUM 使用 Activity Vocabulary Core Types 的子集來表示事件類型。' },
        { name: 'BLOCKCHAIN: ', text: '所有事件都將作為交易將被記錄到區塊中，並連接在一起成為一條區塊鏈。每個種子網絡都擁有一條專屬的私有鏈。' },
        { name: 'GOSSIP NETWORK: ', text: 'RUM 網絡中不設中心化服務器，網絡由且僅由節點們 Peers 創建維護。所有的事件或消息都由一個節點傳遞給它臨近的節點們。通過一層層傳遞，直到消息的收件人（目標節點）最終收到這條消息。' },
        { name: 'BOOTSTRAP: ', text: 'Bootstrap 自舉節點是一個地址簿，用於幫助您的節點通過 DHT-KAD 協議發現其他節點們。您可以使用 AddPeer api 將您信任的任何普通節點添加為 BootStrape。但是，自舉節點/DHT 並不是唯一的方式，Gossip 網絡的對等交換協議也能幫你發現其它節點們。' },
      ],
    ],
  },

  apps: {
    title: 'What is Rum App?',
    content: [
      '官方團隊開發的跨平台客戶端，讓用戶和第三方開發者們能以簡易和熟悉的方式體驗 Rum System 的去中心化特性。',
      '支持所有主流 desktop OS 和 Android，瀏覽器版本正在開發中。',
      '目前，Rum App 支持三類種子網絡模板：Feed,BBS,私密筆記。即將支持虛擬幣經濟系統、智能合約、內容確權等，讓種子網絡可以支持協作社羣或更多付費交易場景。',
      '不久的將來，結合不同的權限設置、經濟關係設定、主題定製，一個種子網絡可以化身為去中心的 Twitter、Reddit、付費羣組、私密筆記、加密信託文檔、私密羣組社交、內容眾創平台、NFT、內容交易服務、自出版服務……',
    ],
    smallTip: '現在 Rum App 還處於早期體驗階段，版本和功能的迭代也非常頻繁，偶爾會存在同步不成功的問題。但我們正在努力提高服務穩定性和產品功能的完備。',
  },

  why: {
    title: 'Why Rum',
    subtitle: 'The internet is broken.',
    content: [
      '雲，是人們給這個時代偉大的科技重工業賦予的輕巧之名。雲的背面，是龐大的數據中心、上萬台集中運行的數據存儲和處理器、數百萬英里的光纖連接起的高度中心化網絡。科技巨頭們以規模和增長為壟斷正名，支配地位又令它們獲得可持續改造自己所控制市場的能力，源源不斷將金錢和權力虹吸到金字塔頂部。科技壟斷，尤其是社交網絡壟斷已經是世界性問題。',
      '將用戶隱私當商品、不尊重作者的價值、追蹤用戶行為和社交關係、使用算法控制分發、操控信息的生產和消費、影響用戶的“獨立思考結果”，這些對傳統互聯網平台的批評，在各個國家早已是主流聲音。對於內容創作而言，佔據壟斷地位的內容中介也可利用其支配地位，為迎合商業化目標，粉碎意見和品位的多樣性。市場高度集中後的面臨的就是同質化，這也是我們正目睹的現實。',
      '當前秩序下，中立性、安全、隱私、知識產權、數據所有權等方面的危機已經成為互聯網不可迴避的問題。而這些問題都不能在現有的網絡體系和商業模式中找到解決方案。人們急需一種不再由少量中心化企業控制流量如何分佈、不採用“隱私換廣告”模式來造血的新型網絡系統。這樣的基礎上才可能重建一個流通自由、定價自主、為價值付費、多元、公平、可持續的內容創作與交易生態。',
      '在 RumSystem 中，用戶無需依賴中心化的服務提供商來保管或分發數據，完全掌控自己的身份、數據隱私、所創造內容的所有權。種子網絡成員自行決定該網絡內所有產生的數據的所有權定義，以及使用、歸屬、收益分配等規則。',
      '對“沒有選擇”這件事，人們已經忍受得夠久了。 Rum希望能重建的是一個尊重個人隱私和自主權的網絡世界，一個真正通過價值創造、價值分發而受益的網絡世界，一個沒有“單一強大實體來控制系統或守門” 的平行互聯網世界。',
      '在 Internet，科技巨頭們控制著你的信息並由此獲利。在 Rum，你將掌握自己的信息並自由決定如何計費。',
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
      'Rum 生態支持所有基於以太坊發行的數字幣，或完全去幣化應用。為了維持網絡的強健性和生態的可持續性，RumSystem 發行了 21,000,000 枚 token (RUM) 支持 網絡運營、官方團隊、開發者社區、內容創作交易社區。',
      'RUM token 將只能通過一種低能耗，非顯卡算力的挖礦方式獲得。 Token 的獲得是根據用戶對整個 SNS 網絡空間的數據生成及分發的貢獻而挖礦產生的，完全由算法決定，代碼也是開源的。當主網運轉開始之後，算法即接管了剩餘 Token 的分發。',
      '礦工獲得獎勵的機會與其對 Rum 網絡的貢獻關聯，比如提供對數據的存儲或網絡流量。挖礦的參與將在主網上線後提供。',
    ],
    box1: {
      title: '為數字內容交易而設計的生態',
      content: [
        '去中心的 Rum Network 可令數字內容的交易無須再依賴傳統中介機構充當金錢和信息的仲裁者。用戶可以通過智能合約為自己創建的內容定價，或出售羣組門票等，之後也可以在此基礎上參與流量分發，加速內容交易，由此獲得分發傭金。',
      ],
    },
    box2: {
      title: 'RUM 與 NFT',
      content: [
        'NFT 標記了創造物與創造者之間的關係，為買家提供所有權證明。同時NFT的流通過程，也是數字資產分發的參與者去分配權益的過程。',
        'Rum System 使用戶可百分百掌握自己創造的內容及數據的所有權。配合內容確權、鏈上存證、智能合約的自動結算+可靈活自定義的合約條件，可完美支持 NFT 及其它創新的去中心交易模式。',
      ],
    },
    link: [
      { type: [], text: '關聯錢包，開始挖礦' },
      { type: ['small'], text: '（開發中）' },
    ] as Array<{ type: Array<string>, text: string }>,
    token: 'Rum Token',
    tokenQ: '為什麼需要 RUM Tokens?',
    tokenA: [
      {
        title: 'Anti-SPAM',
        content: '去中心化系統上，傳統的屏蔽或黑名單很難作用，因此我們決定使用經濟措施來阻止濫用和垃圾郵件。在 RUM 網絡進行的操作都需支付少量的 RUM token。這個用途也是 Hashcash、POW 以及比特幣被發明的起源。',
      },
      {
        title: '激勵資源貢獻',
        content: 'P2P系統需要提供經濟激勵以減少 “免費搭便車” 的情況。節點們從 Rum 網絡中收穫他們應得的代幣獎勵（挖礦），能夠激勵共享節點持續穩定地貢獻計算和網絡資源，以幫助保持 RUM 網絡的安全和健壯。',
      },
    ],
  },

  developers: {
    quorum: {
      title: 'QuoRum',
      desc: [
        'QuoRum 是官方團隊主導開發的整套開源 P2P 技術底層解決方案（簡稱RUM）License:GPL 3.0',
        'Quorum 這個單詞，是指一種基於投票的分佈式系統算法，在現實社會中也指一個投票活動所需的最少人數，它包含的隱喻是區塊鏈系統的基本要素。當然，Quorum 項目並不是基於這個算法產生的，而是通過區塊鏈技術解決分佈式系統中弱共識和最終一致性問題。',
        'Rum 使用區塊鏈、Gossip protocol、加密消息網絡、智能合約、數字貨幣 等技術組合，目的是解決目前互聯網存在的過度中心化，以及在隱私、安全、所有權、公平價值交換等方面對用戶權利的威脅。',
        '如果你想開發有加密傳輸消息的去中心化應用或服務，或將現有產品拓展出一個不依賴傳統中心化雲服務模式的替代版本，QuoRum是你最方便的選擇。不限開發語言，不限應用類型，無需精通區塊鏈相關的開發知識。',
        '我們的協議、API 和 SDK 經歷了不到一年的開發，還在不斷完善中。歡迎持續關注我們的進展，提出你的需求和想法。或加入 RumNetwork 體驗網絡，成為我們的出塊節點。',
      ],
      links: {
        api: 'API Document',
        runPeer: 'Run a RUM peer',
        example: 'Example',
        runOnServer: 'Run a RUM peer on server',
      },
    },
    rumApp: {
      title: 'RumApp',
      desc: [
        'RumApp 是官方團隊開發的開源跨平台客戶端。',
        '我們開發 RumAPP 的目的之一是結合現實應用場景對 Quorum 的 SDK 及 API 進行測試及驗證。向有意基於 RumSystem 開發去中心應用的第三方開發者提供設計思路。',
        '在RumApp裡，一個種子網絡可以被視為一個社交群組，一個私密推特廣場，一個blog，一個論壇版塊，一個收費社群。通過不同的模板、主題、佈局涉及、權限及經濟系統的設置的組合。每個種子網絡都可渲染為（render）不同的產品呈現（interface）。',
        '基於這個設計框架，第三方開發者可以根據你的想法設計全新的產品呈現；也可為 RumApp 設計新的模板、主題、插件，探索去中心應用及社交的無限可能。',
        '我們即將在 RumApp 裡支持虛擬幣經濟系統、智能合約、內容確權等，讓種子網絡可以支持協作社羣或更多付費交易場景。',
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
