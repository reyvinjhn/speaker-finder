import './style.css';

// Mock Data
const speakers = [
  {
    id: 1,
    name: "Filipp Bolotov",
    title: "Founder, Web3ECO",
    role: "Founder",
    topics: ["Web3", "Tech", "Startup"],
    bio: "Filipp is the founder of Web3ECO platform and frequently conducts AMAs on YouTube related to crypto and web3. Looking for engaged communities to discuss sustainable web3 initiatives.",
    twitter: "https://x.com/BolotovFilipp",
    discord: "https://discord.com/"
  },
  {
    id: 2,
    name: "Jordy Fujiwara",
    title: "Freelance Writer & Web3 Explorer",
    role: "Expert",
    topics: ["Web3", "Culture", "Marketing"],
    bio: "Jordy is a writer and active participant in Web3 AMAs. He offers practical insights and down-to-earth explanations of how decentralized tech impacts creators and writers.",
    twitter: "https://x.com/JordyFujiwara",
    discord: "https://discord.com/"
  },
  {
    id: 3,
    name: "Arindam Roy",
    title: "Founder, Pillow",
    role: "Founder",
    topics: ["Finance", "Web3", "Startup"],
    bio: "Founder of Pillow, a crypto-focused company. Arindam holds AMAs on 'How to start building in Web3/Web2 ecosystem' and shares insights on community building and marketing.",
    twitter: "https://x.com/ArindamRoy__",
    discord: "https://discord.com/"
  },
  {
    id: 4,
    name: "Jake Donoghue",
    title: "Author, 'Crypto Confidential'",
    role: "Author",
    topics: ["Finance", "Tech"],
    bio: "Former crypto founder turned author. Jake recently conducted an AMA discussing his book 'Crypto Confidential', sharing deep insights and cautionary tales from the crypto industry.",
    twitter: "https://x.com/JakeDonoghue1",
    discord: "https://discord.com/"
  },
  {
    id: 5,
    name: "Jack Vinijtrongjit",
    title: "Co-founder & CEO, AAG",
    role: "Founder",
    topics: ["Web3", "Tech", "Startup"],
    bio: "Jack frequently participates in Twitter AMAs. He recently discussed Carbify, an 'NFTree' carbon debit and gaming company, showing his deep involvement in the Web3 gaming utility space.",
    twitter: "https://x.com/jackvinij",
    discord: "https://discord.com/"
  },
  {
    id: 6,
    name: "Jaap Harmsma",
    title: "Co-founder, Carbify",
    role: "Founder",
    topics: ["Finance", "Tech", "Startup"],
    bio: "Co-founder of Carbify. Jaap is active in AMAs discussing the intersection of carbon debits, ESG, and Web3 gaming, providing a unique angle for environmentally conscious communities.",
    twitter: "https://x.com/JaapHarmsma",
    discord: "https://discord.com/"
  },
  {
    id: 7,
    name: "William ten Zijthoff",
    title: "Co-founder, Carbify",
    role: "Founder",
    topics: ["Web3", "Tech"],
    bio: "Co-founder of Carbify alongside Jaap. William frequently joins AMAs to discuss the technical and operational challenges of building eco-friendly NFT and gaming platforms.",
    twitter: "https://x.com/WtenZijthoff",
    discord: "https://discord.com/"
  },
  {
    id: 8,
    name: "Balaji Srinivasan",
    title: "Author, 'The Network State'",
    role: "Author",
    topics: ["Web3", "Finance", "Leadership"],
    bio: "Former Coinbase CTO and prolific author/investor. Balaji engages in high-level intellectual discussions on network states, crypto macroeconomics, and the future of decentralized societies.",
    twitter: "https://x.com/balajis",
    discord: "https://discord.com/"
  },
  {
    id: 9,
    name: "Sandeep Nailwal",
    title: "Co-founder, Polygon",
    role: "Founder",
    topics: ["Tech", "Leadership", "Web3"],
    bio: "Co-founder of Polygon. Sandeep is a highly visible figure who frequently discusses scaling solutions, Web3 adoption strategies, and supporting founders in the Ethereum ecosystem.",
    twitter: "https://x.com/sandeepnailwal",
    discord: "https://discord.com/"
  },
  {
    id: 10,
    name: "Stani Kulechov",
    title: "Founder, Aave & Lens Protocol",
    role: "Founder",
    topics: ["Finance", "Culture", "Web3"],
    bio: "Founder of Aave and Lens. Stani provides deep insights on DeFi governance, protocol economics, and the future of decentralized social media. A highly requested AMA guest.",
    twitter: "https://x.com/StaniKulechov",
    discord: "https://discord.com/"
  },
  {
    id: 11,
    name: "Hayden Adams",
    title: "Founder, Uniswap",
    role: "Founder",
    topics: ["Web3", "Tech", "Finance"],
    bio: "Founder of Uniswap. Hayden is known for technical threads on AMM design and DeFi infrastructure. His AMAs are highly technical and heavily influence protocol development.",
    twitter: "https://x.com/haydenzadams",
    discord: "https://discord.com/"
  },
  {
    id: 12,
    name: "Anatoly Yakovenko",
    title: "Co-founder, Solana",
    role: "Founder",
    topics: ["Tech", "Startup", "Web3"],
    bio: "Co-founder of Solana. Anatoly frequently shares highly technical insights on blockchain performance, parallel execution, and scaling decentralized networks for mass adoption.",
    twitter: "https://x.com/aeyakovenko",
    discord: "https://discord.com/"
  },
  {
    id: 13,
    name: "Chase Chapman",
    title: "Founder, On the Other Side",
    role: "Founder",
    topics: ["Culture", "Web3", "Community"],
    bio: "Chase hosts one of the leading web3 podcasts focusing on DAO contribution, tokenized communities, and the human side of crypto. Great for AMAs focused on governance and culture.",
    twitter: "https://x.com/chaserchapman",
    discord: "https://discord.com/"
  },
  {
    id: 14,
    name: "Gaby Goldberg",
    title: "Investor & Writer, TCG",
    role: "Expert",
    topics: ["Culture", "Web3", "Finance"],
    bio: "Gaby writes extensively on consumer crypto, combining web3 aesthetics with deep investment theses. An excellent guest for communities exploring the intersection of culture and value.",
    twitter: "https://x.com/gaby_goldberg",
    discord: "https://discord.com/"
  },
  {
    id: 15,
    name: "Cooper Turley",
    title: "Founder, Coop Records",
    role: "Founder",
    topics: ["Culture", "Web3", "Marketing"],
    bio: "Pioneer in the music NFT and social token space. Cooper is building a web3-native record label and frequently discusses the creator economy, tokenomics, and community building.",
    twitter: "https://x.com/Cooopahtroopa",
    discord: "https://discord.com/"
  },
  {
    id: 16,
    name: "Lauren Stephanian",
    title: "Partner, Pantera Capital",
    role: "Expert",
    topics: ["Finance", "Tech", "Startup"],
    bio: "Lauren focuses on early-stage web3 investments. She joins AMAs to discuss founder pitch strategies, the state of the venture market, and emerging decentralized infrastructure.",
    twitter: "https://x.com/LaurenSteph",
    discord: "https://discord.com/"
  },
  {
    id: 17,
    name: "Kinjal Shah",
    title: "Partner, Blockchain Capital",
    role: "Expert",
    topics: ["Finance", "Web3", "Culture"],
    bio: "Kinjal provides exceptional insights into consumer crypto and NFT infrastructure. She actively mentors founders and supports initiatives at the intersection of web3 and retail adoption.",
    twitter: "https://x.com/_kinjalbshah",
    discord: "https://discord.com/"
  },
  {
    id: 18,
    name: "Brian Flynn",
    title: "Founder, RabbitHole",
    role: "Founder",
    topics: ["Web3", "Tech", "Community"],
    bio: "Building the future of on-chain credentials. Brian is passionate about user acquisition in web3, moving away from airdrops to sustainable, merit-based community growth.",
    twitter: "https://x.com/Flynnjamm",
    discord: "https://discord.com/"
  },
  {
    id: 19,
    name: "Maria Shen",
    title: "Partner, Electric Capital",
    role: "Expert",
    topics: ["Tech", "Finance", "Web3"],
    bio: "Recognized for her deep data-driven analysis of developer activity in the crypto ecosystem. Maria is highly sought-after for AMAs targeting builder and developer communities.",
    twitter: "https://x.com/MariaShen",
    discord: "https://discord.com/"
  },
  {
    id: 20,
    name: "Peter Pan",
    title: "Partner, 1kx",
    role: "Expert",
    topics: ["Community", "Web3", "Startup"],
    bio: "A true pioneer in DAO coordination. Peter is deeply involved in MetaCartel and 1kx. His AMAs are invaluable for DAOs figuring out token distribution and decentralized operations.",
    twitter: "https://x.com/pet3rpan_",
    discord: "https://discord.com/"
  },
  {
    id: 21,
    name: "Cooopahtroopa",
    title: "Web3 Curator",
    role: "Expert",
    topics: ["Web3", "Culture", "Community"],
    bio: "A prolific curator of web3 culture and social tokens. Offers profound insights on how tokens can redefine community belonging and creator economics.",
    twitter: "https://x.com/Cooopahtroopa",
    discord: "https://discord.com/"
  },
  {
    id: 22,
    name: "Li Jin",
    title: "Co-Founder, Variant Fund",
    role: "Expert",
    topics: ["Finance", "Culture", "Web3"],
    bio: "Former a16z partner turned founder of Variant. Li frequently writes and speaks about the ownership economy, providing a critical lens on how users can own the networks they help build.",
    twitter: "https://x.com/lijin18",
    discord: "https://discord.com/"
  },
  {
    id: 23,
    name: "Evgeny Gaevoy",
    title: "Founder, Wintermute",
    role: "Founder",
    topics: ["Finance", "Web3", "Startup"],
    bio: "Founder of one of the largest algorithmic trading firms in crypto. Evgeny offers stark, transparent AMAs on market liquidity, exchange listings, and the reality of token performance.",
    twitter: "https://x.com/EvgenyGaevoy",
    discord: "https://discord.com/"
  },
  {
    id: 24,
    name: "Meltem Demirors",
    title: "Author & Investor",
    role: "Author",
    topics: ["Finance", "Culture", "Leadership"],
    bio: "A fiery advocate for Bitcoin and decentralized systems. Meltem brings high energy and uncompromising perspectives to AMAs, focusing on crypto-macroeconomics and cultural shifts.",
    twitter: "https://x.com/Melt_Dem",
    discord: "https://discord.com/"
  },
  {
    id: 25,
    name: "Aftab Hossain",
    title: "Developer & Researcher",
    role: "Expert",
    topics: ["Tech", "Web3"],
    bio: "Known as 'DCinvestor', Aftab provides incredible historical context and technical analysis on Ethereum's roadmap, DeFi primitives, and the NFT zeitgeist.",
    twitter: "https://x.com/iamDCinvestor",
    discord: "https://discord.com/"
  },
  {
    id: 26,
    name: "Linda Xie",
    title: "Co-Founder, Scalar Capital",
    role: "Founder",
    topics: ["Finance", "Web3", "Tech"],
    bio: "Linda is famous for her comprehensive beginner guides to various crypto protocols. She's perfect for communities looking to demystify complex DeFi or infrastructure projects.",
    twitter: "https://x.com/ljxie",
    discord: "https://discord.com/"
  },
  {
    id: 27,
    name: "Camila Russo",
    title: "Author, 'The Infinite Machine'",
    role: "Author",
    topics: ["Web3", "Culture", "Tech"],
    bio: "Author of the definitive history of Ethereum. Camila dives deep into storytelling and the human element behind decentralized networks. Excellent for literary and crypto-culture AMAs.",
    twitter: "https://x.com/CamiRusso",
    discord: "https://discord.com/"
  },
  {
    id: 28,
    name: "Hasu",
    title: "Strategy Builder, Flashbots",
    role: "Expert",
    topics: ["Tech", "Finance", "Web3"],
    bio: "A pseudonymous researcher known for deep dives into MEV (Maximal Extractable Value) and protocol economics. His AMAs are highly sought after by technical builder communities.",
    twitter: "https://x.com/hasufl",
    discord: "https://discord.com/"
  },
  {
    id: 29,
    name: "Arthur Hayes",
    title: "Essayist & Co-Founder, BitMEX",
    role: "Author",
    topics: ["Finance", "Culture", "Leadership"],
    bio: "Writes some of the most widely read and controversial macro essays in crypto. Arthur's AMAs are notoriously engaging, blending deep market analysis with pop-culture analogies.",
    twitter: "https://x.com/CryptoHayes",
    discord: "https://discord.com/"
  },
  {
    id: 30,
    name: "Chris Burniske",
    title: "Author, 'Cryptoassets'",
    role: "Author",
    topics: ["Finance", "Tech", "Startup"],
    bio: "A pioneer in valuing cryptoassets. Chris is known for analyzing market cycles and fundamental value accrual in web3 networks, providing sobering perspectives during market euphoria.",
    twitter: "https://x.com/cburniske",
    discord: "https://discord.com/"
  },
  {
    id: 31,
    name: "Packy McCormick",
    title: "Author, 'Not Boring'",
    role: "Author",
    topics: ["Startup", "Tech", "Culture"],
    bio: "Writes the hugely popular 'Not Boring' newsletter. Packy is known for his optimistic, deep-dive teardowns of web3 protocols and how they intersect with traditional tech strategy.",
    twitter: "https://x.com/packyM",
    discord: "https://discord.com/"
  },
  {
    id: 32,
    name: "Rune Christensen",
    title: "Founder, MakerDAO",
    role: "Founder",
    topics: ["Finance", "Tech", "Web3"],
    bio: "The architect behind DAI and MakerDAO. Rune frequently does AMAs explaining complex decentralized collateralized debt positions and the future roadmap for the Endgame.",
    twitter: "https://x.com/RuneKek",
    discord: "https://discord.com/"
  },
  {
    id: 33,
    name: "Tarun Chitra",
    title: "Founder, Gauntlet",
    role: "Founder",
    topics: ["Finance", "Tech", "Startup"],
    bio: "Tarun builds financial modeling platforms for DeFi. His AMA sessions are masterclasses in risk management, protocol parameter optimization, and preventing economic exploits.",
    twitter: "https://x.com/tarunchitra",
    discord: "https://discord.com/"
  },
  {
    id: 34,
    name: "Aya Miyaguchi",
    title: "Executive Director, Ethereum Foundation",
    role: "Leadership",
    topics: ["Culture", "Tech", "Community"],
    bio: "Aya guides the Ethereum Foundation's support of the ecosystem. Her AMAs often focus on the philosophy of decentralization, developer grants, and coordinating a leaderless movement.",
    twitter: "https://x.com/AyaMiyagotchi",
    discord: "https://discord.com/"
  },
  {
    id: 35,
    name: "Kain Warwick",
    title: "Founder, Synthetix",
    role: "Founder",
    topics: ["Web3", "Finance", "Leadership"],
    bio: "A core founder in the DeFi summer explosion. Kain is known for his unapologetic views on protocol bootstrapping, synthetic assets, and decentralized governance experimentation.",
    twitter: "https://x.com/kaiynne",
    discord: "https://discord.com/"
  },
  {
    id: 36,
    name: "Robert Leshner",
    title: "Founder, Compound",
    role: "Founder",
    topics: ["Finance", "Tech", "Startup"],
    bio: "Created one of the first major DeFi lending protocols. Robert frequently speaks on the evolution of interest rates on-chain and bringing traditional finance infrastructure onto Ethereum.",
    twitter: "https://x.com/rleshner",
    discord: "https://discord.com/"
  },
  {
    id: 37,
    name: "Elena Nadolinski",
    title: "Founder, Iron Fish",
    role: "Founder",
    topics: ["Tech", "Web3", "Privacy"],
    bio: "Building a privacy-focused layer 1 blockchain using zero-knowledge proofs. Elena is excellent at explaining complex cryptographic privacy concepts to general and developer audiences.",
    twitter: "https://x.com/leanthebeef",
    discord: "https://discord.com/"
  },
  {
    id: 38,
    name: "Sacha Yves",
    title: "Founder, Theo",
    role: "Founder",
    topics: ["Marketing", "Community", "Web3"],
    bio: "Sacha specializes in community activation and growth marketing in web3. He breaks down the differences between web2 customer acquisition and web3 community building incredibly well.",
    twitter: "https://x.com/sacha_yves",
    discord: "https://discord.com/"
  },
  {
    id: 39,
    name: "Alex Svanevik",
    title: "Founder, Nansen",
    role: "Founder",
    topics: ["Tech", "Finance", "Startup"],
    bio: "Alex runs a leading blockchain analytics firm. He is highly sought after for AMAs exploring on-chain data trends, 'smart money' movements, and what analytics reveal about market health.",
    twitter: "https://x.com/ASvanevik",
    discord: "https://discord.com/"
  },
  {
    id: 40,
    name: "Emilie Choi",
    title: "President, Coinbase",
    role: "Leadership",
    topics: ["Leadership", "Finance", "Startup"],
    bio: "Emilie oversees operations and M&A at one of the largest crypto companies globally. Her AMAs offer rare corporate leadership insights within the rapidly shifting regulatory landscape of crypto.",
    twitter: "https://x.com/emiliemc",
    discord: "https://discord.com/"
  },
  {
    id: 41,
    name: "Justin Drake",
    title: "Researcher, Ethereum Foundation",
    role: "Expert",
    topics: ["Tech", "Web3", "Cryptography"],
    bio: "Core researcher at the Ethereum Foundation focused on consensus and cryptography. Exceptional at explaining complex zero-knowledge and PBS concepts.",
    twitter: "https://x.com/drakefjustin",
    discord: "https://discord.com/"
  },
  {
    id: 42,
    name: "Anthony Sassano",
    title: "Founder, The Daily Gwei",
    role: "Expert",
    topics: ["Community", "Web3", "Culture"],
    bio: "A prominent Ethereum educator and advocate. Anthony is great for AMAs focused on ecosystem updates, layer 2 scaling, and community values.",
    twitter: "https://x.com/sassal0x",
    discord: "https://discord.com/"
  },
  {
    id: 43,
    name: "Ryan Sean Adams",
    title: "Co-founder, Bankless",
    role: "Founder",
    topics: ["Finance", "Culture", "Web3"],
    bio: "Pioneered the 'Bankless' movement. Ryan speaks passionately about self-custody, decentralized finance going mainstream, and building media in web3.",
    twitter: "https://x.com/RyanSAdams",
    discord: "https://discord.com/"
  },
  {
    id: 44,
    name: "David Hoffman",
    title: "Co-founder, Bankless",
    role: "Founder",
    topics: ["Finance", "Culture", "Web3"],
    bio: "Co-host of Bankless. David provides philosophical frameworks for understanding crypto assets, like his famous 'Ether as the Triple Point Asset' thesis.",
    twitter: "https://x.com/TrustlessState",
    discord: "https://discord.com/"
  },
  {
    id: 45,
    name: "Carly Reilly",
    title: "Founder, Overpriced JPEGs",
    role: "Founder",
    topics: ["Culture", "Web3", "Marketing"],
    bio: "Host of a leading NFT and metaverse podcast. Carly bridges the gap between traditional media, brands entering web3, and native creator communities.",
    twitter: "https://x.com/carlypreilly",
    discord: "https://discord.com/"
  },
  {
    id: 46,
    name: "Zeneca",
    title: "Founder, ZenAcademy",
    role: "Founder",
    topics: ["Community", "Web3", "Culture"],
    bio: "A highly respected voice in the NFT space. Zeneca focuses on mental health for traders, safe onboarding to web3, and long-term community value.",
    twitter: "https://x.com/Zeneca",
    discord: "https://discord.com/"
  },
  {
    id: 47,
    name: "Kevin Rose",
    title: "Founder, Proof",
    role: "Founder",
    topics: ["Tech", "Startup", "Culture"],
    bio: "A legendary web2 founder (Digg) who successfully transitioned to web3. Kevin provides insights on building luxury digital brands and exclusive communities.",
    twitter: "https://x.com/kevinrose",
    discord: "https://discord.com/"
  },
  {
    id: 48,
    name: "Chris Dixon",
    title: "Partner, a16z crypto",
    role: "Author",
    topics: ["Tech", "Finance", "Startup"],
    bio: "Author of 'Read Write Own'. Chris articulate the bull case for blockchains as the next major computing platform, drawing parallels to the early internet.",
    twitter: "https://x.com/cdixon",
    discord: "https://discord.com/"
  },
  {
    id: 49,
    name: "Ali Yahya",
    title: "Partner, a16z crypto",
    role: "Expert",
    topics: ["Tech", "Finance", "Web3"],
    bio: "Former Google X researcher now investing in crypto. Ali dives deep into the computer science fundamentals underpinning decentralized protocols.",
    twitter: "https://x.com/ali01",
    discord: "https://discord.com/"
  },
  {
    id: 50,
    name: "Sam Williams",
    title: "Founder, Arweave",
    role: "Founder",
    topics: ["Tech", "Startup", "Web3"],
    bio: "Founder of the permanent web protocol Arweave. Sam passionately discusses the importance of immutable data storage for preserving human history and avoiding censorship.",
    twitter: "https://x.com/samecwilliams",
    discord: "https://discord.com/"
  },
  {
    id: 51,
    name: "Illia Polosukhin",
    title: "Co-Founder, NEAR Protocol",
    role: "Founder",
    topics: ["Tech", "Startup", "Web3"],
    bio: "A leading AI researcher turned blockchain founder. Illia blends insights from deep learning with highly scalable consensus mechanisms.",
    twitter: "https://x.com/ilblackdragon",
    discord: "https://discord.com/"
  },
  {
    id: 52,
    name: "Alex Gluchowski",
    title: "Co-Founder, Matter Labs",
    role: "Founder",
    topics: ["Tech", "Web3", "Cryptography"],
    bio: "Building zkSync. Alex is a visionary on scaling Ethereum through zero-knowledge rollups and the absolute necessity of preserving layer 1 security.",
    twitter: "https://x.com/gluk64",
    discord: "https://discord.com/"
  },
  {
    id: 53,
    name: "Eli Ben-Sasson",
    title: "Co-Founder, StarkWare",
    role: "Founder",
    topics: ["Tech", "Cryptography", "Web3"],
    bio: "Co-inventor of STARK proofs. Eli brings unmatched academic rigor to discussions about cryptographic scaling and privacy solutions for the public blockchain.",
    twitter: "https://x.com/EliBenSasson",
    discord: "https://discord.com/"
  },
  {
    id: 54,
    name: "Ben Jones",
    title: "Director, Optimism Foundation",
    role: "Leadership",
    topics: ["Tech", "Community", "Web3"],
    bio: "Driving the vision for the 'Superchain'. Ben speaks eloquently about retroactive public goods funding and scaling Ethereum values alongside its throughput.",
    twitter: "https://x.com/ben_chain",
    discord: "https://discord.com/"
  },
  {
    id: 55,
    name: "Steven Goldfeder",
    title: "Co-Founder, Offchain Labs",
    role: "Founder",
    topics: ["Tech", "Startup", "Web3"],
    bio: "The technical mind behind Arbitrum. Steven connects deep academic research in secure distributed systems with practical, scalable rollups.",
    twitter: "https://x.com/sgoldfed",
    discord: "https://discord.com/"
  },
  {
    id: 56,
    name: "Kevin Owocki",
    title: "Co-founder, Gitcoin",
    role: "Founder",
    topics: ["Culture", "Community", "Tech"],
    bio: "A champion of regenerative cryptoeconomics. Kevin focuses on how web3 can coordinate capital to fund open-source development and public goods.",
    twitter: "https://x.com/owocki",
    discord: "https://discord.com/"
  },
  {
    id: 57,
    name: "Scott Moore",
    title: "Co-founder, Gitcoin",
    role: "Founder",
    topics: ["Culture", "Community", "Web3"],
    bio: "Passionate about public goods and pluralism. Scott often discusses quadratic funding and novel governance mechanisms to align community incentives.",
    twitter: "https://x.com/notscottmoore",
    discord: "https://discord.com/"
  },
  {
    id: 58,
    name: "Gavin Wood",
    title: "Founder, Polkadot",
    role: "Founder",
    topics: ["Tech", "Web3", "Leadership"],
    bio: "Co-founder of Ethereum and creator of Polkadot. Gavin coined the term 'Web3' and speaks profoundly about creating true, trustless interoperability.",
    twitter: "https://x.com/gavofyork",
    discord: "https://discord.com/"
  },
  {
    id: 59,
    name: "Emin Gün Sirer",
    title: "Founder, Avalanche",
    role: "Founder",
    topics: ["Tech", "Web3", "Startup"],
    bio: "A renowned distributed systems researcher. Emin provides sharp, often combative AMAs defending Avalanche's consensus mechanism against other layer 1s.",
    twitter: "https://x.com/el33th4xor",
    discord: "https://discord.com/"
  },
  {
    id: 60,
    name: "Kevin Sekniqi",
    title: "Co-Founder, Ava Labs",
    role: "Founder",
    topics: ["Tech", "Finance", "Web3"],
    bio: "Focuses on building the financial operating system for the next generation. Highly responsive and technical in system architecture discussions.",
    twitter: "https://x.com/kevinsekniqi",
    discord: "https://discord.com/"
  },
  {
    id: 61,
    name: "Silvio Micali",
    title: "Founder, Algorand",
    role: "Founder",
    topics: ["Tech", "Cryptography", "Leadership"],
    bio: "Turing Award winner and MIT professor. Silvio brings unparalleled authority to discussions explaining the blockchain trilemma and Pure Proof of Stake.",
    twitter: "https://x.com/silviomicali",
    discord: "https://discord.com/"
  },
  {
    id: 62,
    name: "Sergey Nazarov",
    title: "Co-Founder, Chainlink",
    role: "Founder",
    topics: ["Tech", "Finance", "Web3"],
    bio: "The key architect of decentralized oracles. Sergey effectively communicates why truth-seeking networks are critical for the adoption of smart contracts in enterprise.",
    twitter: "https://x.com/SergeyNazarov",
    discord: "https://discord.com/"
  },
  {
    id: 63,
    name: "Haseeb Qureshi",
    title: "Managing Partner, Dragonfly",
    role: "Expert",
    topics: ["Finance", "Tech", "Startup"],
    bio: "Former poker pro turned developer and VC. Haseeb analyzes tokenomics with brutal honesty and clarity. A must-have guest for DeFi protocol design AMAs.",
    twitter: "https://x.com/hosseeb",
    discord: "https://discord.com/"
  },
  {
    id: 64,
    name: "Tom Schmidt",
    title: "Partner, Dragonfly",
    role: "Expert",
    topics: ["Finance", "Tech", "Web3"],
    bio: "Highly analytical investor who dives deep into protocol traction and on-chain metrics. Tom provides a data-driven perspective to AMAs.",
    twitter: "https://x.com/tomhschmidt",
    discord: "https://discord.com/"
  },
  {
    id: 65,
    name: "Qiao Wang",
    title: "Core Contributor, Alliance DAO",
    role: "Expert",
    topics: ["Startup", "Finance", "Web3"],
    bio: "Mentor to hundreds of web3 startups. Qiao is blunt about product-market fit and the harsh realities of building resilient crypto businesses.",
    twitter: "https://x.com/QwQiao",
    discord: "https://discord.com/"
  },
  {
    id: 66,
    name: "Imran Khan",
    title: "Core Contributor, Alliance DAO",
    role: "Expert",
    topics: ["Startup", "Finance", "Culture"],
    bio: "Deeply connected in both the East and West web3 markets. Imran discusses capital formation, acceleration, and scaling decentralized teams globally.",
    twitter: "https://x.com/lmrankhan",
    discord: "https://discord.com/"
  },
  {
    id: 67,
    name: "Santiago R Santos",
    title: "Web3 Investor",
    role: "Expert",
    topics: ["Finance", "Culture", "Web3"],
    bio: "A highly influential angel investor. Santiago co-hosts the Empire podcast and is famous for his high-conviction thematic investing theses.",
    twitter: "https://x.com/santiagoroel",
    discord: "https://discord.com/"
  },
  {
    id: 68,
    name: "Jason Choi",
    title: "Co-Founder, Tangent",
    role: "Founder",
    topics: ["Finance", "Startup", "Web3"],
    bio: "Former Spartan Group partner who now runs a web3 founder acceleration program. Known for his incisive interview style and deep market knowledge.",
    twitter: "https://x.com/mrjasonchoi",
    discord: "https://discord.com/"
  },
  {
    id: 69,
    name: "Vance Spencer",
    title: "Co-Founder, Framework Ventures",
    role: "Founder",
    topics: ["Finance", "Web3", "Leadership"],
    bio: "One of the earliest institutional believers in DeFi. Vance eloquently argues for the inevitable takeover of decentralized capital markets.",
    twitter: "https://x.com/pythianism",
    discord: "https://discord.com/"
  },
  {
    id: 70,
    name: "Michael Anderson",
    title: "Co-Founder, Framework Ventures",
    role: "Founder",
    topics: ["Finance", "Startup", "Web3"],
    bio: "Pioneered the 'network capital' model in crypto VC. Michael is great for AMAs on how venture firms actively participate in protocol governance and liquidity provisioning.",
    twitter: "https://x.com/mikeranderson",
    discord: "https://discord.com/"
  },
  {
    id: 71,
    name: "Arthur Cheong",
    title: "Founder, DeFiance Capital",
    role: "Founder",
    topics: ["Finance", "Startup", "Web3"],
    bio: "One of the most consequential web3 investors focused on the narrative arcs of DeFi and web3 gaming. Arthur provides highly respected macro views.",
    twitter: "https://x.com/Arthur_0x",
    discord: "https://discord.com/"
  },
  {
    id: 72,
    name: "Richard Chen",
    title: "General Partner, 1confirmation",
    role: "Expert",
    topics: ["Finance", "Tech", "Web3"],
    bio: "A prolific Dune Analytics wizard and investor. Richard relies on pure on-chain data to evaluate the health of NFT marketplaces and DeFi protocols.",
    twitter: "https://x.com/richardchen39",
    discord: "https://discord.com/"
  },
  {
    id: 73,
    name: "Nick Tomaino",
    title: "Founder, 1confirmation",
    role: "Founder",
    topics: ["Finance", "Culture", "Startup"],
    bio: "An early Coinbase employee who started one of the first crypto funds. Nick provides level-headed counter-cyclical arguments in volatile markets.",
    twitter: "https://x.com/NTmoney",
    discord: "https://discord.com/"
  },
  {
    id: 74,
    name: "Matti",
    title: "Researcher, Zee Prime Capital",
    role: "Expert",
    topics: ["Finance", "Culture", "Web3"],
    bio: "A highly philosophical writer dissecting crypto-economics and capital coordination. His essays are dense but widely respected by serious builders.",
    twitter: "https://x.com/mattigags",
    discord: "https://discord.com/"
  },
  {
    id: 75,
    name: "Fiskantes",
    title: "Partner, Zee Prime Capital",
    role: "Expert",
    topics: ["Finance", "Tech", "Startup"],
    bio: "A sharp, cynical voice analyzing token mechanics and web3 trends. He cuts through marketing noise to evaluate raw technical and economic viability.",
    twitter: "https://x.com/Fiskantes",
    discord: "https://discord.com/"
  },
  {
    id: 76,
    name: "Marc Zeller",
    title: "Founder, Aave Chan Initiative",
    role: "Founder",
    topics: ["Web3", "Finance", "Community"],
    bio: "A dominant force in Aave's governance. Marc is exceptional at explaining how DeFi protocols actually organize and vote on critical upgrades.",
    twitter: "https://x.com/lemiscate",
    discord: "https://discord.com/"
  },
  {
    id: 77,
    name: "Sisyphus",
    title: "DeFi Operator",
    role: "Expert",
    topics: ["Finance", "Web3", "Startup"],
    bio: "A highly followed pseudonymous operator who dissects market dislocations, exploits, and complex trading strategies in the DeFi world.",
    twitter: "https://x.com/0xSisyphus",
    discord: "https://discord.com/"
  },
  {
    id: 78,
    name: "Cobie",
    title: "Host, UpOnly",
    role: "Expert",
    topics: ["Finance", "Culture", "Web3"],
    bio: "The defining voice of Crypto Twitter culture. Cobie provides unvarnished, sharp-witted critique of market cycles and founder behavior.",
    twitter: "https://x.com/cobie",
    discord: "https://discord.com/"
  },
  {
    id: 79,
    name: "Ledger",
    title: "Host, UpOnly",
    role: "Expert",
    topics: ["Finance", "Culture", "Community"],
    bio: "Co-host of UpOnly. Ledger blends technical trading knowledge with deep connectivity across the entire crypto ecosystem.",
    twitter: "https://x.com/ledgerstatus",
    discord: "https://discord.com/"
  },
  {
    id: 80,
    name: "Vitalik Buterin",
    title: "Co-Founder, Ethereum",
    role: "Founder",
    topics: ["Tech", "Leadership", "Web3"],
    bio: "The chief thinker of the Ethereum ecosystem. Vitalik's AMAs are legendary for covering everything from complex cryptographic primitives to human longevity.",
    twitter: "https://x.com/VitalikButerin",
    discord: "https://discord.com/"
  }
  ,
  {
    id: 81,
    name: "Elena Santos",
    title: "Core Contributor, ZetaFlow",
    role: "Expert",
    topics: ["Cryptography", "Web3"],
    bio: "An experienced expert focusing on Cryptography and Web3. Elena regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~17.1k followers)",
    twitter: "https://x.com/elena_santos31",
    discord: "https://discord.com/"
  },
  {
    id: 82,
    name: "Taylor Sanchez",
    title: "Core Contributor, ZenFlow",
    role: "Expert",
    topics: ["Community", "Leadership"],
    bio: "An experienced expert focusing on Community and Leadership. Taylor regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~10.1k followers)",
    twitter: "https://x.com/taylor_sanchez58",
    discord: "https://discord.com/"
  },
  {
    id: 83,
    name: "Nia Anderson",
    title: "Founder, BlockCapital",
    role: "Founder",
    topics: ["Community", "Startup"],
    bio: "An experienced founder focusing on Community and Startup. Nia regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~11.8k followers)",
    twitter: "https://x.com/nia_anderson86",
    discord: "https://discord.com/"
  },
  {
    id: 84,
    name: "Blake Anderson",
    title: "Core Contributor, ZetaStudios",
    role: "Expert",
    topics: ["Finance", "Privacy"],
    bio: "An experienced expert focusing on Finance and Privacy. Blake regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~8.6k followers)",
    twitter: "https://x.com/blake_anderson68",
    discord: "https://discord.com/"
  },
  {
    id: 85,
    name: "Chloe Jackson",
    title: "Author, 'The Marketing Playbook'",
    role: "Author",
    topics: ["Marketing", "Finance", "Privacy"],
    bio: "An experienced author focusing on Marketing and Finance and Privacy. Chloe regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~19.6k followers)",
    twitter: "https://x.com/chloe_jackson2",
    discord: "https://discord.com/"
  },
  {
    id: 86,
    name: "Jamie Kumar",
    title: "Author, 'The Finance Playbook'",
    role: "Author",
    topics: ["Finance", "Startup", "Community"],
    bio: "An experienced author focusing on Finance and Startup and Community. Jamie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~13.5k followers)",
    twitter: "https://x.com/jamie_kumar56",
    discord: "https://discord.com/"
  },
  {
    id: 87,
    name: "Anya Taylor",
    title: "Author, 'The Privacy Playbook'",
    role: "Author",
    topics: ["Privacy", "Web3"],
    bio: "An experienced author focusing on Privacy and Web3. Anya regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~16.5k followers)",
    twitter: "https://x.com/anya_taylor81",
    discord: "https://discord.com/"
  },
  {
    id: 88,
    name: "Logan Roux",
    title: "Core Contributor, OmniFinance",
    role: "Expert",
    topics: ["Finance", "Marketing", "Community"],
    bio: "An experienced expert focusing on Finance and Marketing and Community. Logan regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~5.0k followers)",
    twitter: "https://x.com/logan_roux37",
    discord: "https://discord.com/"
  },
  {
    id: 89,
    name: "Reese Brown",
    title: "Core Contributor, AuraForge",
    role: "Expert",
    topics: ["Marketing", "Tech", "Privacy"],
    bio: "An experienced expert focusing on Marketing and Tech and Privacy. Reese regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.0k followers)",
    twitter: "https://x.com/reese_brown52",
    discord: "https://discord.com/"
  },
  {
    id: 90,
    name: "Sofia Muller",
    title: "Founder, ZenProtocol",
    role: "Founder",
    topics: ["Tech", "Marketing", "Privacy"],
    bio: "An experienced founder focusing on Tech and Marketing and Privacy. Sofia regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~6.3k followers)",
    twitter: "https://x.com/sofia_muller48",
    discord: "https://discord.com/"
  },
  {
    id: 91,
    name: "Chen Kim",
    title: "Founder, DeFinance",
    role: "Founder",
    topics: ["Cryptography", "Privacy", "Startup"],
    bio: "An experienced founder focusing on Cryptography and Privacy and Startup. Chen regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~5.4k followers)",
    twitter: "https://x.com/chen_kim71",
    discord: "https://discord.com/"
  },
  {
    id: 92,
    name: "Kendall Singh",
    title: "Founder, AuraLabs",
    role: "Founder",
    topics: ["Finance", "Culture", "Privacy"],
    bio: "An experienced founder focusing on Finance and Culture and Privacy. Kendall regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.4k followers)",
    twitter: "https://x.com/kendall_singh29",
    discord: "https://discord.com/"
  },
  {
    id: 93,
    name: "Skyler Harris",
    title: "Founder, EtherFlow",
    role: "Founder",
    topics: ["Community", "Finance", "Culture"],
    bio: "An experienced founder focusing on Community and Finance and Culture. Skyler regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~17.5k followers)",
    twitter: "https://x.com/skyler_harris27",
    discord: "https://discord.com/"
  },
  {
    id: 94,
    name: "Nia Martin",
    title: "Author, 'The Community Playbook'",
    role: "Author",
    topics: ["Community", "Marketing", "Cryptography"],
    bio: "An experienced author focusing on Community and Marketing and Cryptography. Nia regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~17.4k followers)",
    twitter: "https://x.com/nia_martin13",
    discord: "https://discord.com/"
  },
  {
    id: 95,
    name: "Mei Wang",
    title: "Core Contributor, ApexDAO",
    role: "Expert",
    topics: ["Leadership", "Privacy"],
    bio: "An experienced expert focusing on Leadership and Privacy. Mei regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.5k followers)",
    twitter: "https://x.com/mei_wang33",
    discord: "https://discord.com/"
  },
  {
    id: 96,
    name: "Micah Oliveira",
    title: "Core Contributor, PeakNetwork",
    role: "Expert",
    topics: ["Cryptography", "Community"],
    bio: "An experienced expert focusing on Cryptography and Community. Micah regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~9.1k followers)",
    twitter: "https://x.com/micah_oliveira67",
    discord: "https://discord.com/"
  },
  {
    id: 97,
    name: "Chloe Thompson",
    title: "Author, 'The Leadership Playbook'",
    role: "Author",
    topics: ["Leadership", "Web3"],
    bio: "An experienced author focusing on Leadership and Web3. Chloe regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~16.1k followers)",
    twitter: "https://x.com/chloe_thompson96",
    discord: "https://discord.com/"
  },
  {
    id: 98,
    name: "Rowan Gupta",
    title: "Founder, PolyLabs",
    role: "Founder",
    topics: ["Marketing", "Leadership"],
    bio: "An experienced founder focusing on Marketing and Leadership. Rowan regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~13.0k followers)",
    twitter: "https://x.com/rowan_gupta30",
    discord: "https://discord.com/"
  },
  {
    id: 99,
    name: "William Robinson",
    title: "Core Contributor, PolyDAO",
    role: "Expert",
    topics: ["Community", "Web3"],
    bio: "An experienced expert focusing on Community and Web3. William regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~6.0k followers)",
    twitter: "https://x.com/william_robinson51",
    discord: "https://discord.com/"
  },
  {
    id: 100,
    name: "Diego Sanchez",
    title: "Founder, NexusSync",
    role: "Founder",
    topics: ["Leadership", "Web3", "Community"],
    bio: "An experienced founder focusing on Leadership and Web3 and Community. Diego regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~16.1k followers)",
    twitter: "https://x.com/diego_sanchez77",
    discord: "https://discord.com/"
  },
  {
    id: 101,
    name: "Emerson Miller",
    title: "Core Contributor, ChainFinance",
    role: "Expert",
    topics: ["Culture", "Cryptography", "Leadership"],
    bio: "An experienced expert focusing on Culture and Cryptography and Leadership. Emerson regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~11.8k followers)",
    twitter: "https://x.com/emerson_miller84",
    discord: "https://discord.com/"
  },
  {
    id: 102,
    name: "Mei Thomas",
    title: "Author, 'The Leadership Playbook'",
    role: "Author",
    topics: ["Leadership", "Marketing"],
    bio: "An experienced author focusing on Leadership and Marketing. Mei regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~18.3k followers)",
    twitter: "https://x.com/mei_thomas76",
    discord: "https://discord.com/"
  },
  {
    id: 103,
    name: "Dakota Costa",
    title: "Author, 'The Leadership Playbook'",
    role: "Author",
    topics: ["Leadership", "Culture", "Web3"],
    bio: "An experienced author focusing on Leadership and Culture and Web3. Dakota regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~17.1k followers)",
    twitter: "https://x.com/dakota_costa26",
    discord: "https://discord.com/"
  },
  {
    id: 104,
    name: "Logan Anderson",
    title: "Core Contributor, CryptoBase",
    role: "Expert",
    topics: ["Finance", "Tech", "Privacy"],
    bio: "An experienced expert focusing on Finance and Tech and Privacy. Logan regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~18.1k followers)",
    twitter: "https://x.com/logan_anderson49",
    discord: "https://discord.com/"
  },
  {
    id: 105,
    name: "Skyler Robinson",
    title: "Author, 'The Privacy Playbook'",
    role: "Author",
    topics: ["Privacy", "Leadership", "Marketing"],
    bio: "An experienced author focusing on Privacy and Leadership and Marketing. Skyler regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~10.0k followers)",
    twitter: "https://x.com/skyler_robinson32",
    discord: "https://discord.com/"
  },
  {
    id: 106,
    name: "Blake Patel",
    title: "Core Contributor, ApexYield",
    role: "Expert",
    topics: ["Privacy", "Finance"],
    bio: "An experienced expert focusing on Privacy and Finance. Blake regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~5.2k followers)",
    twitter: "https://x.com/blake_patel25",
    discord: "https://discord.com/"
  },
  {
    id: 107,
    name: "Cameron Muller",
    title: "Founder, ZenYield",
    role: "Founder",
    topics: ["Privacy", "Community"],
    bio: "An experienced founder focusing on Privacy and Community. Cameron regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~12.7k followers)",
    twitter: "https://x.com/cameron_muller26",
    discord: "https://discord.com/"
  },
  {
    id: 108,
    name: "Anya Martinez",
    title: "Core Contributor, ApexBase",
    role: "Expert",
    topics: ["Marketing", "Culture", "Leadership"],
    bio: "An experienced expert focusing on Marketing and Culture and Leadership. Anya regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~18.5k followers)",
    twitter: "https://x.com/anya_martinez53",
    discord: "https://discord.com/"
  },
  {
    id: 109,
    name: "Pat Roux",
    title: "Founder, EtherProtocol",
    role: "Founder",
    topics: ["Cryptography", "Web3", "Privacy"],
    bio: "An experienced founder focusing on Cryptography and Web3 and Privacy. Pat regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~16.0k followers)",
    twitter: "https://x.com/pat_roux56",
    discord: "https://discord.com/"
  },
  {
    id: 110,
    name: "Kendall Wilson",
    title: "Founder, QuantumForge",
    role: "Founder",
    topics: ["Finance", "Web3", "Culture"],
    bio: "An experienced founder focusing on Finance and Web3 and Culture. Kendall regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~7.4k followers)",
    twitter: "https://x.com/kendall_wilson6",
    discord: "https://discord.com/"
  },
  {
    id: 111,
    name: "Luca Nguyen",
    title: "Author, 'The Marketing Playbook'",
    role: "Author",
    topics: ["Marketing", "Finance"],
    bio: "An experienced author focusing on Marketing and Finance. Luca regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.0k followers)",
    twitter: "https://x.com/luca_nguyen76",
    discord: "https://discord.com/"
  },
  {
    id: 112,
    name: "Jessie Chen",
    title: "Founder, ZetaYield",
    role: "Founder",
    topics: ["Finance", "Leadership"],
    bio: "An experienced founder focusing on Finance and Leadership. Jessie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~6.1k followers)",
    twitter: "https://x.com/jessie_chen68",
    discord: "https://discord.com/"
  },
  {
    id: 113,
    name: "Elena Ramirez",
    title: "Founder, DeBase",
    role: "Founder",
    topics: ["Web3", "Leadership"],
    bio: "An experienced founder focusing on Web3 and Leadership. Elena regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~7.6k followers)",
    twitter: "https://x.com/elena_ramirez28",
    discord: "https://discord.com/"
  },
  {
    id: 114,
    name: "Rowan Chen",
    title: "Core Contributor, PolyBase",
    role: "Expert",
    topics: ["Privacy", "Tech"],
    bio: "An experienced expert focusing on Privacy and Tech. Rowan regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~8.4k followers)",
    twitter: "https://x.com/rowan_chen81",
    discord: "https://discord.com/"
  },
  {
    id: 115,
    name: "Omar White",
    title: "Author, 'The Startup Playbook'",
    role: "Author",
    topics: ["Startup", "Culture"],
    bio: "An experienced author focusing on Startup and Culture. Omar regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~7.1k followers)",
    twitter: "https://x.com/omar_white87",
    discord: "https://discord.com/"
  },
  {
    id: 116,
    name: "Emerson Chen",
    title: "Founder, NovaFlow",
    role: "Founder",
    topics: ["Startup", "Finance", "Community"],
    bio: "An experienced founder focusing on Startup and Finance and Community. Emerson regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~7.7k followers)",
    twitter: "https://x.com/emerson_chen78",
    discord: "https://discord.com/"
  },
  {
    id: 117,
    name: "Hayden Leroy",
    title: "Core Contributor, MetaFinance",
    role: "Expert",
    topics: ["Startup", "Cryptography", "Tech"],
    bio: "An experienced expert focusing on Startup and Cryptography and Tech. Hayden regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~13.4k followers)",
    twitter: "https://x.com/hayden_leroy52",
    discord: "https://discord.com/"
  },
  {
    id: 118,
    name: "Cameron Singh",
    title: "Founder, DeDAO",
    role: "Founder",
    topics: ["Marketing", "Leadership"],
    bio: "An experienced founder focusing on Marketing and Leadership. Cameron regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~18.5k followers)",
    twitter: "https://x.com/cameron_singh95",
    discord: "https://discord.com/"
  },
  {
    id: 119,
    name: "Pat Gonzalez",
    title: "Founder, NovaFlow",
    role: "Founder",
    topics: ["Privacy", "Web3"],
    bio: "An experienced founder focusing on Privacy and Web3. Pat regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~11.1k followers)",
    twitter: "https://x.com/pat_gonzalez84",
    discord: "https://discord.com/"
  },
  {
    id: 120,
    name: "Dakota Hernandez",
    title: "Core Contributor, NexusFlow",
    role: "Expert",
    topics: ["Leadership", "Privacy", "Community"],
    bio: "An experienced expert focusing on Leadership and Privacy and Community. Dakota regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~10.4k followers)",
    twitter: "https://x.com/dakota_hernandez41",
    discord: "https://discord.com/"
  },
  {
    id: 121,
    name: "Morgan Patel",
    title: "Author, 'The Community Playbook'",
    role: "Author",
    topics: ["Community", "Cryptography"],
    bio: "An experienced author focusing on Community and Cryptography. Morgan regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~12.2k followers)",
    twitter: "https://x.com/morgan_patel27",
    discord: "https://discord.com/"
  },
  {
    id: 122,
    name: "Jordan Gupta",
    title: "Author, 'The Startup Playbook'",
    role: "Author",
    topics: ["Startup", "Web3"],
    bio: "An experienced author focusing on Startup and Web3. Jordan regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~18.5k followers)",
    twitter: "https://x.com/jordan_gupta84",
    discord: "https://discord.com/"
  },
  {
    id: 123,
    name: "Sam Costa",
    title: "Core Contributor, EtherStudios",
    role: "Expert",
    topics: ["Tech", "Cryptography", "Privacy"],
    bio: "An experienced expert focusing on Tech and Cryptography and Privacy. Sam regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~9.2k followers)",
    twitter: "https://x.com/sam_costa38",
    discord: "https://discord.com/"
  },
  {
    id: 124,
    name: "Chloe Moreau",
    title: "Founder, NovaCapital",
    role: "Founder",
    topics: ["Startup", "Tech", "Culture"],
    bio: "An experienced founder focusing on Startup and Tech and Culture. Chloe regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~13.0k followers)",
    twitter: "https://x.com/chloe_moreau23",
    discord: "https://discord.com/"
  },
  {
    id: 125,
    name: "Reese Wang",
    title: "Author, 'The Marketing Playbook'",
    role: "Author",
    topics: ["Marketing", "Culture", "Tech"],
    bio: "An experienced author focusing on Marketing and Culture and Tech. Reese regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~12.3k followers)",
    twitter: "https://x.com/reese_wang40",
    discord: "https://discord.com/"
  },
  {
    id: 126,
    name: "Elena Lee",
    title: "Core Contributor, PeakSync",
    role: "Expert",
    topics: ["Culture", "Marketing", "Startup"],
    bio: "An experienced expert focusing on Culture and Marketing and Startup. Elena regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~13.0k followers)",
    twitter: "https://x.com/elena_lee70",
    discord: "https://discord.com/"
  },
  {
    id: 127,
    name: "Cameron Miller",
    title: "Core Contributor, DeLabs",
    role: "Expert",
    topics: ["Web3", "Leadership", "Culture"],
    bio: "An experienced expert focusing on Web3 and Leadership and Culture. Cameron regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.6k followers)",
    twitter: "https://x.com/cameron_miller50",
    discord: "https://discord.com/"
  },
  {
    id: 128,
    name: "Avery Clark",
    title: "Founder, OmniFinance",
    role: "Founder",
    topics: ["Community", "Cryptography"],
    bio: "An experienced founder focusing on Community and Cryptography. Avery regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.6k followers)",
    twitter: "https://x.com/avery_clark46",
    discord: "https://discord.com/"
  },
  {
    id: 129,
    name: "Riley Costa",
    title: "Founder, ZetaLabs",
    role: "Founder",
    topics: ["Startup", "Leadership"],
    bio: "An experienced founder focusing on Startup and Leadership. Riley regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~9.0k followers)",
    twitter: "https://x.com/riley_costa8",
    discord: "https://discord.com/"
  },
  {
    id: 130,
    name: "Emerson Jones",
    title: "Core Contributor, PolyYield",
    role: "Expert",
    topics: ["Finance", "Marketing"],
    bio: "An experienced expert focusing on Finance and Marketing. Emerson regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~12.0k followers)",
    twitter: "https://x.com/emerson_jones60",
    discord: "https://discord.com/"
  },
  {
    id: 131,
    name: "Santiago Kim",
    title: "Author, 'The Cryptography Playbook'",
    role: "Author",
    topics: ["Cryptography", "Web3", "Community"],
    bio: "An experienced author focusing on Cryptography and Web3 and Community. Santiago regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~11.2k followers)",
    twitter: "https://x.com/santiago_kim7",
    discord: "https://discord.com/"
  },
  {
    id: 132,
    name: "Priya Thompson",
    title: "Founder, CryptoNetwork",
    role: "Founder",
    topics: ["Community", "Finance", "Tech"],
    bio: "An experienced founder focusing on Community and Finance and Tech. Priya regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~8.3k followers)",
    twitter: "https://x.com/priya_thompson88",
    discord: "https://discord.com/"
  },
  {
    id: 133,
    name: "Chen Brown",
    title: "Founder, PeakLabs",
    role: "Founder",
    topics: ["Startup", "Tech"],
    bio: "An experienced founder focusing on Startup and Tech. Chen regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~9.2k followers)",
    twitter: "https://x.com/chen_brown27",
    discord: "https://discord.com/"
  },
  {
    id: 134,
    name: "Chen Perez",
    title: "Core Contributor, AuraSync",
    role: "Expert",
    topics: ["Web3", "Cryptography"],
    bio: "An experienced expert focusing on Web3 and Cryptography. Chen regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.7k followers)",
    twitter: "https://x.com/chen_perez29",
    discord: "https://discord.com/"
  },
  {
    id: 135,
    name: "Elena Leroy",
    title: "Author, 'The Finance Playbook'",
    role: "Author",
    topics: ["Finance", "Marketing"],
    bio: "An experienced author focusing on Finance and Marketing. Elena regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~8.3k followers)",
    twitter: "https://x.com/elena_leroy27",
    discord: "https://discord.com/"
  },
  {
    id: 136,
    name: "Micah Thompson",
    title: "Author, 'The Cryptography Playbook'",
    role: "Author",
    topics: ["Cryptography", "Community", "Leadership"],
    bio: "An experienced author focusing on Cryptography and Community and Leadership. Micah regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~11.6k followers)",
    twitter: "https://x.com/micah_thompson77",
    discord: "https://discord.com/"
  },
  {
    id: 137,
    name: "Skyler White",
    title: "Core Contributor, PolyYield",
    role: "Expert",
    topics: ["Finance", "Leadership", "Privacy"],
    bio: "An experienced expert focusing on Finance and Leadership and Privacy. Skyler regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~17.2k followers)",
    twitter: "https://x.com/skyler_white76",
    discord: "https://discord.com/"
  },
  {
    id: 138,
    name: "Skyler Hernandez",
    title: "Author, 'The Privacy Playbook'",
    role: "Author",
    topics: ["Privacy", "Community"],
    bio: "An experienced author focusing on Privacy and Community. Skyler regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~8.2k followers)",
    twitter: "https://x.com/skyler_hernandez95",
    discord: "https://discord.com/"
  },
  {
    id: 139,
    name: "Charlie Silva",
    title: "Core Contributor, PolyFinance",
    role: "Expert",
    topics: ["Web3", "Marketing"],
    bio: "An experienced expert focusing on Web3 and Marketing. Charlie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~18.6k followers)",
    twitter: "https://x.com/charlie_silva34",
    discord: "https://discord.com/"
  },
  {
    id: 140,
    name: "Jordan Johnson",
    title: "Core Contributor, PolyFlow",
    role: "Expert",
    topics: ["Cryptography", "Privacy"],
    bio: "An experienced expert focusing on Cryptography and Privacy. Jordan regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~11.1k followers)",
    twitter: "https://x.com/jordan_johnson0",
    discord: "https://discord.com/"
  },
  {
    id: 141,
    name: "Amira Wilson",
    title: "Author, 'The Cryptography Playbook'",
    role: "Author",
    topics: ["Cryptography", "Marketing"],
    bio: "An experienced author focusing on Cryptography and Marketing. Amira regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~11.7k followers)",
    twitter: "https://x.com/amira_wilson59",
    discord: "https://discord.com/"
  },
  {
    id: 142,
    name: "Rowan Gupta",
    title: "Author, 'The Finance Playbook'",
    role: "Author",
    topics: ["Finance", "Cryptography"],
    bio: "An experienced author focusing on Finance and Cryptography. Rowan regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~6.0k followers)",
    twitter: "https://x.com/rowan_gupta17",
    discord: "https://discord.com/"
  },
  {
    id: 143,
    name: "Reese Martin",
    title: "Core Contributor, CryptoProtocol",
    role: "Expert",
    topics: ["Web3", "Tech", "Privacy"],
    bio: "An experienced expert focusing on Web3 and Tech and Privacy. Reese regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~11.2k followers)",
    twitter: "https://x.com/reese_martin23",
    discord: "https://discord.com/"
  },
  {
    id: 144,
    name: "Taylor Lopez",
    title: "Founder, EtherNetwork",
    role: "Founder",
    topics: ["Marketing", "Culture", "Leadership"],
    bio: "An experienced founder focusing on Marketing and Culture and Leadership. Taylor regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.5k followers)",
    twitter: "https://x.com/taylor_lopez85",
    discord: "https://discord.com/"
  },
  {
    id: 145,
    name: "Chen Gonzalez",
    title: "Author, 'The Cryptography Playbook'",
    role: "Author",
    topics: ["Cryptography", "Privacy", "Leadership"],
    bio: "An experienced author focusing on Cryptography and Privacy and Leadership. Chen regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~19.6k followers)",
    twitter: "https://x.com/chen_gonzalez20",
    discord: "https://discord.com/"
  },
  {
    id: 146,
    name: "Avery Kumar",
    title: "Author, 'The Finance Playbook'",
    role: "Author",
    topics: ["Finance", "Startup"],
    bio: "An experienced author focusing on Finance and Startup. Avery regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.2k followers)",
    twitter: "https://x.com/avery_kumar66",
    discord: "https://discord.com/"
  },
  {
    id: 147,
    name: "Jordan Martin",
    title: "Author, 'The Startup Playbook'",
    role: "Author",
    topics: ["Startup", "Leadership", "Web3"],
    bio: "An experienced author focusing on Startup and Leadership and Web3. Jordan regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~12.0k followers)",
    twitter: "https://x.com/jordan_martin68",
    discord: "https://discord.com/"
  },
  {
    id: 148,
    name: "Hiroshi Ali",
    title: "Core Contributor, CryptoNetwork",
    role: "Expert",
    topics: ["Web3", "Culture"],
    bio: "An experienced expert focusing on Web3 and Culture. Hiroshi regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~8.1k followers)",
    twitter: "https://x.com/hiroshi_ali95",
    discord: "https://discord.com/"
  },
  {
    id: 149,
    name: "Pat Thompson",
    title: "Core Contributor, CryptoForge",
    role: "Expert",
    topics: ["Culture", "Cryptography"],
    bio: "An experienced expert focusing on Culture and Cryptography. Pat regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~12.2k followers)",
    twitter: "https://x.com/pat_thompson28",
    discord: "https://discord.com/"
  },
  {
    id: 150,
    name: "Taylor Lopez",
    title: "Author, 'The Community Playbook'",
    role: "Author",
    topics: ["Community", "Web3", "Cryptography"],
    bio: "An experienced author focusing on Community and Web3 and Cryptography. Taylor regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~7.5k followers)",
    twitter: "https://x.com/taylor_lopez4",
    discord: "https://discord.com/"
  },
  {
    id: 151,
    name: "Cameron Thomas",
    title: "Author, 'The Community Playbook'",
    role: "Author",
    topics: ["Community", "Cryptography"],
    bio: "An experienced author focusing on Community and Cryptography. Cameron regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~9.0k followers)",
    twitter: "https://x.com/cameron_thomas13",
    discord: "https://discord.com/"
  },
  {
    id: 152,
    name: "Nia Martinez",
    title: "Author, 'The Finance Playbook'",
    role: "Author",
    topics: ["Finance", "Culture"],
    bio: "An experienced author focusing on Finance and Culture. Nia regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~12.5k followers)",
    twitter: "https://x.com/nia_martinez71",
    discord: "https://discord.com/"
  },
  {
    id: 153,
    name: "Jamie Davis",
    title: "Founder, ChainProtocol",
    role: "Founder",
    topics: ["Startup", "Web3", "Community"],
    bio: "An experienced founder focusing on Startup and Web3 and Community. Jamie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~13.2k followers)",
    twitter: "https://x.com/jamie_davis70",
    discord: "https://discord.com/"
  },
  {
    id: 154,
    name: "Luca White",
    title: "Author, 'The Privacy Playbook'",
    role: "Author",
    topics: ["Privacy", "Leadership"],
    bio: "An experienced author focusing on Privacy and Leadership. Luca regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~10.0k followers)",
    twitter: "https://x.com/luca_white0",
    discord: "https://discord.com/"
  },
  {
    id: 155,
    name: "Kendall Leroy",
    title: "Core Contributor, EtherVentures",
    role: "Expert",
    topics: ["Finance", "Startup"],
    bio: "An experienced expert focusing on Finance and Startup. Kendall regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~12.2k followers)",
    twitter: "https://x.com/kendall_leroy55",
    discord: "https://discord.com/"
  },
  {
    id: 156,
    name: "Jessie Chen",
    title: "Core Contributor, PolySync",
    role: "Expert",
    topics: ["Web3", "Cryptography", "Privacy"],
    bio: "An experienced expert focusing on Web3 and Cryptography and Privacy. Jessie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.7k followers)",
    twitter: "https://x.com/jessie_chen18",
    discord: "https://discord.com/"
  },
  {
    id: 157,
    name: "Priya Wilson",
    title: "Author, 'The Tech Playbook'",
    role: "Author",
    topics: ["Tech", "Startup", "Leadership"],
    bio: "An experienced author focusing on Tech and Startup and Leadership. Priya regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~5.4k followers)",
    twitter: "https://x.com/priya_wilson56",
    discord: "https://discord.com/"
  },
  {
    id: 158,
    name: "Elena Chen",
    title: "Founder, ZenCapital",
    role: "Founder",
    topics: ["Cryptography", "Privacy"],
    bio: "An experienced founder focusing on Cryptography and Privacy. Elena regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~10.5k followers)",
    twitter: "https://x.com/elena_chen96",
    discord: "https://discord.com/"
  },
  {
    id: 159,
    name: "Finley Lopez",
    title: "Author, 'The Cryptography Playbook'",
    role: "Author",
    topics: ["Cryptography", "Marketing", "Privacy"],
    bio: "An experienced author focusing on Cryptography and Marketing and Privacy. Finley regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~9.7k followers)",
    twitter: "https://x.com/finley_lopez18",
    discord: "https://discord.com/"
  },
  {
    id: 160,
    name: "Alex Santos",
    title: "Core Contributor, ZetaFlow",
    role: "Expert",
    topics: ["Tech", "Finance", "Cryptography"],
    bio: "An experienced expert focusing on Tech and Finance and Cryptography. Alex regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~11.6k followers)",
    twitter: "https://x.com/alex_santos26",
    discord: "https://discord.com/"
  },
  {
    id: 161,
    name: "Jessie Thompson",
    title: "Core Contributor, AuraBase",
    role: "Expert",
    topics: ["Tech", "Privacy", "Community"],
    bio: "An experienced expert focusing on Tech and Privacy and Community. Jessie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.4k followers)",
    twitter: "https://x.com/jessie_thompson90",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 162,
    name: "Casey Sanchez",
    title: "Founder, OmniCapital",
    role: "Founder",
    topics: ["Culture", "Web3"],
    bio: "An experienced founder focusing on Culture and Web3. Casey regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~13.5k followers)",
    twitter: "https://x.com/casey_sanchez18",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 163,
    name: "Peyton Taylor",
    title: "Author, 'The Privacy Playbook'",
    role: "Author",
    topics: ["Privacy", "Culture", "Finance"],
    bio: "An experienced author focusing on Privacy and Culture and Finance. Peyton regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~9.0k followers)",
    twitter: "https://x.com/peyton_taylor45",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 164,
    name: "Elena Moreau",
    title: "Founder, AuraNetwork",
    role: "Founder",
    topics: ["Finance", "Culture", "Privacy"],
    bio: "An experienced founder focusing on Finance and Culture and Privacy. Elena regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~13.0k followers)",
    twitter: "https://x.com/elena_moreau56",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 165,
    name: "Emerson Kim",
    title: "Author, 'The Community Playbook'",
    role: "Author",
    topics: ["Community", "Tech"],
    bio: "An experienced author focusing on Community and Tech. Emerson regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.5k followers)",
    twitter: "https://x.com/emerson_kim33",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 166,
    name: "William Gupta",
    title: "Core Contributor, PeakFinance",
    role: "Expert",
    topics: ["Marketing", "Community", "Finance"],
    bio: "An experienced expert focusing on Marketing and Community and Finance. William regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~10.4k followers)",
    twitter: "https://x.com/william_gupta15",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 167,
    name: "Anya Thompson",
    title: "Founder, MetaCapital",
    role: "Founder",
    topics: ["Culture", "Privacy"],
    bio: "An experienced founder focusing on Culture and Privacy. Anya regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~13.4k followers)",
    twitter: "https://x.com/anya_thompson9",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 168,
    name: "Anya Silva",
    title: "Founder, OmniStudios",
    role: "Founder",
    topics: ["Finance", "Privacy", "Web3"],
    bio: "An experienced founder focusing on Finance and Privacy and Web3. Anya regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.7k followers)",
    twitter: "https://x.com/anya_silva26",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 169,
    name: "Morgan White",
    title: "Core Contributor, ApexSync",
    role: "Expert",
    topics: ["Community", "Finance"],
    bio: "An experienced expert focusing on Community and Finance. Morgan regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~7.5k followers)",
    twitter: "https://x.com/morgan_white66",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 170,
    name: "Emerson Roux",
    title: "Core Contributor, MetaLabs",
    role: "Expert",
    topics: ["Startup", "Marketing"],
    bio: "An experienced expert focusing on Startup and Marketing. Emerson regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~9.2k followers)",
    twitter: "https://x.com/emerson_roux19",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 171,
    name: "Peyton Thompson",
    title: "Founder, ZenYield",
    role: "Founder",
    topics: ["Community", "Web3"],
    bio: "An experienced founder focusing on Community and Web3. Peyton regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~7.0k followers)",
    twitter: "https://x.com/peyton_thompson45",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 172,
    name: "Finley Martin",
    title: "Founder, QuantumBase",
    role: "Founder",
    topics: ["Web3", "Community"],
    bio: "An experienced founder focusing on Web3 and Community. Finley regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~19.4k followers)",
    twitter: "https://x.com/finley_martin56",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 173,
    name: "Skyler Hernandez",
    title: "Author, 'The Startup Playbook'",
    role: "Author",
    topics: ["Startup", "Community", "Marketing"],
    bio: "An experienced author focusing on Startup and Community and Marketing. Skyler regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~7.2k followers)",
    twitter: "https://x.com/skyler_hernandez51",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 174,
    name: "Lars Dubois",
    title: "Founder, OmniSync",
    role: "Founder",
    topics: ["Leadership", "Finance", "Startup"],
    bio: "An experienced founder focusing on Leadership and Finance and Startup. Lars regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~13.0k followers)",
    twitter: "https://x.com/lars_dubois5",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 175,
    name: "Chloe Leroy",
    title: "Founder, QuantumStudios",
    role: "Founder",
    topics: ["Web3", "Leadership"],
    bio: "An experienced founder focusing on Web3 and Leadership. Chloe regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~8.2k followers)",
    twitter: "https://x.com/chloe_leroy75",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 176,
    name: "Jamie Wilson",
    title: "Founder, OmniCapital",
    role: "Founder",
    topics: ["Finance", "Marketing", "Cryptography"],
    bio: "An experienced founder focusing on Finance and Marketing and Cryptography. Jamie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~12.8k followers)",
    twitter: "https://x.com/jamie_wilson14",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 177,
    name: "Santiago Garcia",
    title: "Author, 'The Community Playbook'",
    role: "Author",
    topics: ["Community", "Startup"],
    bio: "An experienced author focusing on Community and Startup. Santiago regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~7.6k followers)",
    twitter: "https://x.com/santiago_garcia13",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 178,
    name: "Lars Chen",
    title: "Founder, PeakStudios",
    role: "Founder",
    topics: ["Privacy", "Community", "Web3"],
    bio: "An experienced founder focusing on Privacy and Community and Web3. Lars regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~12.0k followers)",
    twitter: "https://x.com/lars_chen72",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 179,
    name: "Casey Gupta",
    title: "Author, 'The Leadership Playbook'",
    role: "Author",
    topics: ["Leadership", "Startup"],
    bio: "An experienced author focusing on Leadership and Startup. Casey regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.1k followers)",
    twitter: "https://x.com/casey_gupta32",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 180,
    name: "Charlie Gupta",
    title: "Author, 'The Community Playbook'",
    role: "Author",
    topics: ["Community", "Web3", "Cryptography"],
    bio: "An experienced author focusing on Community and Web3 and Cryptography. Charlie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~13.6k followers)",
    twitter: "https://x.com/charlie_gupta64",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 181,
    name: "Jessie White",
    title: "Core Contributor, BlockForge",
    role: "Expert",
    topics: ["Culture", "Community"],
    bio: "An experienced expert focusing on Culture and Community. Jessie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.1k followers)",
    twitter: "https://x.com/jessie_white55",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 182,
    name: "Jamie Moore",
    title: "Founder, DeLabs",
    role: "Founder",
    topics: ["Finance", "Leadership"],
    bio: "An experienced founder focusing on Finance and Leadership. Jamie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~18.8k followers)",
    twitter: "https://x.com/jamie_moore98",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 183,
    name: "Logan Johnson",
    title: "Founder, NexusDAO",
    role: "Founder",
    topics: ["Tech", "Culture"],
    bio: "An experienced founder focusing on Tech and Culture. Logan regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~9.8k followers)",
    twitter: "https://x.com/logan_johnson88",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 184,
    name: "Reese Wilson",
    title: "Author, 'The Startup Playbook'",
    role: "Author",
    topics: ["Startup", "Tech"],
    bio: "An experienced author focusing on Startup and Tech. Reese regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~8.0k followers)",
    twitter: "https://x.com/reese_wilson86",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 185,
    name: "Mateo Singh",
    title: "Author, 'The Privacy Playbook'",
    role: "Author",
    topics: ["Privacy", "Tech", "Leadership"],
    bio: "An experienced author focusing on Privacy and Tech and Leadership. Mateo regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.4k followers)",
    twitter: "https://x.com/mateo_singh37",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 186,
    name: "Emerson Ali",
    title: "Founder, EtherForge",
    role: "Founder",
    topics: ["Privacy", "Culture", "Community"],
    bio: "An experienced founder focusing on Privacy and Culture and Community. Emerson regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~12.3k followers)",
    twitter: "https://x.com/emerson_ali98",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 187,
    name: "Sofia Ivanov",
    title: "Author, 'The Finance Playbook'",
    role: "Author",
    topics: ["Finance", "Tech"],
    bio: "An experienced author focusing on Finance and Tech. Sofia regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.1k followers)",
    twitter: "https://x.com/sofia_ivanov47",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 188,
    name: "Santiago Jones",
    title: "Core Contributor, NovaForge",
    role: "Expert",
    topics: ["Finance", "Startup", "Privacy"],
    bio: "An experienced expert focusing on Finance and Startup and Privacy. Santiago regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~5.6k followers)",
    twitter: "https://x.com/santiago_jones49",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 189,
    name: "Phoenix Davis",
    title: "Founder, BlockCapital",
    role: "Founder",
    topics: ["Culture", "Startup", "Finance"],
    bio: "An experienced founder focusing on Culture and Startup and Finance. Phoenix regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~13.2k followers)",
    twitter: "https://x.com/phoenix_davis81",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 190,
    name: "Pat Muller",
    title: "Author, 'The Leadership Playbook'",
    role: "Author",
    topics: ["Leadership", "Marketing"],
    bio: "An experienced author focusing on Leadership and Marketing. Pat regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~5.4k followers)",
    twitter: "https://x.com/pat_muller19",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 191,
    name: "Sawyer Johnson",
    title: "Core Contributor, CryptoFlow",
    role: "Expert",
    topics: ["Cryptography", "Leadership"],
    bio: "An experienced expert focusing on Cryptography and Leadership. Sawyer regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~8.1k followers)",
    twitter: "https://x.com/sawyer_johnson31",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 192,
    name: "Omar Smith",
    title: "Founder, ZenNetwork",
    role: "Founder",
    topics: ["Privacy", "Tech", "Startup"],
    bio: "An experienced founder focusing on Privacy and Tech and Startup. Omar regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~12.1k followers)",
    twitter: "https://x.com/omar_smith12",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 193,
    name: "William Perez",
    title: "Core Contributor, CryptoSync",
    role: "Expert",
    topics: ["Marketing", "Leadership", "Privacy"],
    bio: "An experienced expert focusing on Marketing and Leadership and Privacy. William regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~18.7k followers)",
    twitter: "https://x.com/william_perez10",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 194,
    name: "Quinn Jackson",
    title: "Core Contributor, ZenYield",
    role: "Expert",
    topics: ["Finance", "Leadership"],
    bio: "An experienced expert focusing on Finance and Leadership. Quinn regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~5.8k followers)",
    twitter: "https://x.com/quinn_jackson23",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 195,
    name: "William Wu",
    title: "Founder, ChainBase",
    role: "Founder",
    topics: ["Startup", "Tech", "Finance"],
    bio: "An experienced founder focusing on Startup and Tech and Finance. William regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~19.0k followers)",
    twitter: "https://x.com/william_wu81",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 196,
    name: "Logan Wilson",
    title: "Core Contributor, NovaBase",
    role: "Expert",
    topics: ["Privacy", "Marketing", "Community"],
    bio: "An experienced expert focusing on Privacy and Marketing and Community. Logan regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~10.3k followers)",
    twitter: "https://x.com/logan_wilson82",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 197,
    name: "Kiran Robinson",
    title: "Author, 'The Tech Playbook'",
    role: "Author",
    topics: ["Tech", "Community", "Culture"],
    bio: "An experienced author focusing on Tech and Community and Culture. Kiran regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~6.7k followers)",
    twitter: "https://x.com/kiran_robinson27",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 198,
    name: "Jamie Rodriguez",
    title: "Author, 'The Leadership Playbook'",
    role: "Author",
    topics: ["Leadership", "Finance", "Web3"],
    bio: "An experienced author focusing on Leadership and Finance and Web3. Jamie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~19.7k followers)",
    twitter: "https://x.com/jamie_rodriguez63",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 199,
    name: "Tariq Jones",
    title: "Core Contributor, PolyFinance",
    role: "Expert",
    topics: ["Leadership", "Cryptography", "Culture"],
    bio: "An experienced expert focusing on Leadership and Cryptography and Culture. Tariq regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~13.6k followers)",
    twitter: "https://x.com/tariq_jones14",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 200,
    name: "Omar Thompson",
    title: "Core Contributor, ApexFlow",
    role: "Expert",
    topics: ["Culture", "Marketing"],
    bio: "An experienced expert focusing on Culture and Marketing. Omar regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~19.3k followers)",
    twitter: "https://x.com/omar_thompson44",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 201,
    name: "Amira Nguyen",
    title: "Core Contributor, ZetaYield",
    role: "Expert",
    topics: ["Startup", "Web3"],
    bio: "An experienced expert focusing on Startup and Web3. Amira regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.1k followers)",
    twitter: "https://x.com/amira_nguyen64",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 202,
    name: "Diego Rodriguez",
    title: "Core Contributor, ZenBase",
    role: "Expert",
    topics: ["Privacy", "Startup"],
    bio: "An experienced expert focusing on Privacy and Startup. Diego regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~19.6k followers)",
    twitter: "https://x.com/diego_rodriguez2",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 203,
    name: "Hiroshi Chen",
    title: "Founder, NexusVentures",
    role: "Founder",
    topics: ["Leadership", "Tech", "Marketing"],
    bio: "An experienced founder focusing on Leadership and Tech and Marketing. Hiroshi regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~13.8k followers)",
    twitter: "https://x.com/hiroshi_chen34",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 204,
    name: "Mateo Davis",
    title: "Author, 'The Finance Playbook'",
    role: "Author",
    topics: ["Finance", "Community"],
    bio: "An experienced author focusing on Finance and Community. Mateo regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~17.8k followers)",
    twitter: "https://x.com/mateo_davis43",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 205,
    name: "Emerson Hernandez",
    title: "Author, 'The Marketing Playbook'",
    role: "Author",
    topics: ["Marketing", "Finance", "Web3"],
    bio: "An experienced author focusing on Marketing and Finance and Web3. Emerson regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~16.1k followers)",
    twitter: "https://x.com/emerson_hernandez63",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 206,
    name: "Finley Kim",
    title: "Core Contributor, NexusFinance",
    role: "Expert",
    topics: ["Startup", "Culture", "Finance"],
    bio: "An experienced expert focusing on Startup and Culture and Finance. Finley regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~16.4k followers)",
    twitter: "https://x.com/finley_kim36",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 207,
    name: "Sawyer Miller",
    title: "Founder, PeakLabs",
    role: "Founder",
    topics: ["Marketing", "Tech"],
    bio: "An experienced founder focusing on Marketing and Tech. Sawyer regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~13.3k followers)",
    twitter: "https://x.com/sawyer_miller58",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 208,
    name: "Mateo Jackson",
    title: "Core Contributor, AuraVentures",
    role: "Expert",
    topics: ["Marketing", "Startup"],
    bio: "An experienced expert focusing on Marketing and Startup. Mateo regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.7k followers)",
    twitter: "https://x.com/mateo_jackson91",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 209,
    name: "Skyler Muller",
    title: "Author, 'The Leadership Playbook'",
    role: "Author",
    topics: ["Leadership", "Tech", "Marketing"],
    bio: "An experienced author focusing on Leadership and Tech and Marketing. Skyler regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.6k followers)",
    twitter: "https://x.com/skyler_muller91",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 210,
    name: "Cameron Garcia",
    title: "Founder, QuantumNetwork",
    role: "Founder",
    topics: ["Tech", "Finance"],
    bio: "An experienced founder focusing on Tech and Finance. Cameron regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.3k followers)",
    twitter: "https://x.com/cameron_garcia1",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 211,
    name: "Micah Martin",
    title: "Author, 'The Startup Playbook'",
    role: "Author",
    topics: ["Startup", "Culture"],
    bio: "An experienced author focusing on Startup and Culture. Micah regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~5.1k followers)",
    twitter: "https://x.com/micah_martin14",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 212,
    name: "Logan Martin",
    title: "Founder, ZetaYield",
    role: "Founder",
    topics: ["Leadership", "Culture", "Startup"],
    bio: "An experienced founder focusing on Leadership and Culture and Startup. Logan regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~5.4k followers)",
    twitter: "https://x.com/logan_martin1",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 213,
    name: "Morgan Robinson",
    title: "Founder, ZetaBase",
    role: "Founder",
    topics: ["Cryptography", "Leadership"],
    bio: "An experienced founder focusing on Cryptography and Leadership. Morgan regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~12.7k followers)",
    twitter: "https://x.com/morgan_robinson51",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 214,
    name: "Hiro Ali",
    title: "Founder, ChainSync",
    role: "Founder",
    topics: ["Web3", "Culture", "Cryptography"],
    bio: "An experienced founder focusing on Web3 and Culture and Cryptography. Hiro regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~5.5k followers)",
    twitter: "https://x.com/hiro_ali81",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 215,
    name: "Quinn White",
    title: "Author, 'The Privacy Playbook'",
    role: "Author",
    topics: ["Privacy", "Startup", "Culture"],
    bio: "An experienced author focusing on Privacy and Startup and Culture. Quinn regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~8.6k followers)",
    twitter: "https://x.com/quinn_white7",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 216,
    name: "Jamie Kim",
    title: "Author, 'The Tech Playbook'",
    role: "Author",
    topics: ["Tech", "Startup"],
    bio: "An experienced author focusing on Tech and Startup. Jamie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~13.0k followers)",
    twitter: "https://x.com/jamie_kim84",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 217,
    name: "Sawyer Chen",
    title: "Author, 'The Finance Playbook'",
    role: "Author",
    topics: ["Finance", "Leadership", "Cryptography"],
    bio: "An experienced author focusing on Finance and Leadership and Cryptography. Sawyer regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~16.3k followers)",
    twitter: "https://x.com/sawyer_chen98",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 218,
    name: "Charlie Martinez",
    title: "Founder, PolyForge",
    role: "Founder",
    topics: ["Culture", "Marketing", "Community"],
    bio: "An experienced founder focusing on Culture and Marketing and Community. Charlie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~17.2k followers)",
    twitter: "https://x.com/charlie_martinez56",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 219,
    name: "Avery Singh",
    title: "Author, 'The Marketing Playbook'",
    role: "Author",
    topics: ["Marketing", "Culture"],
    bio: "An experienced author focusing on Marketing and Culture. Avery regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.8k followers)",
    twitter: "https://x.com/avery_singh45",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 220,
    name: "Amira Jackson",
    title: "Founder, ApexLabs",
    role: "Founder",
    topics: ["Web3", "Cryptography", "Culture"],
    bio: "An experienced founder focusing on Web3 and Cryptography and Culture. Amira regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.3k followers)",
    twitter: "https://x.com/amira_jackson28",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 221,
    name: "Riley Ivanov",
    title: "Author, 'The Tech Playbook'",
    role: "Author",
    topics: ["Tech", "Leadership", "Culture"],
    bio: "An experienced author focusing on Tech and Leadership and Culture. Riley regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.1k followers)",
    twitter: "https://x.com/riley_ivanov53",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 222,
    name: "Jamie Perez",
    title: "Core Contributor, NovaNetwork",
    role: "Expert",
    topics: ["Finance", "Leadership", "Community"],
    bio: "An experienced expert focusing on Finance and Leadership and Community. Jamie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~11.6k followers)",
    twitter: "https://x.com/jamie_perez0",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 223,
    name: "Diego Clark",
    title: "Author, 'The Tech Playbook'",
    role: "Author",
    topics: ["Tech", "Privacy"],
    bio: "An experienced author focusing on Tech and Privacy. Diego regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~9.6k followers)",
    twitter: "https://x.com/diego_clark48",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 224,
    name: "Jamie Kumar",
    title: "Core Contributor, PolyStudios",
    role: "Expert",
    topics: ["Privacy", "Culture"],
    bio: "An experienced expert focusing on Privacy and Culture. Jamie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~8.4k followers)",
    twitter: "https://x.com/jamie_kumar84",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 225,
    name: "Pat Gonzalez",
    title: "Core Contributor, PeakStudios",
    role: "Expert",
    topics: ["Finance", "Cryptography"],
    bio: "An experienced expert focusing on Finance and Cryptography. Pat regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~6.3k followers)",
    twitter: "https://x.com/pat_gonzalez17",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 226,
    name: "Jamie Rodriguez",
    title: "Author, 'The Web3 Playbook'",
    role: "Author",
    topics: ["Web3", "Privacy"],
    bio: "An experienced author focusing on Web3 and Privacy. Jamie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~13.0k followers)",
    twitter: "https://x.com/jamie_rodriguez12",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 227,
    name: "Mateo Robinson",
    title: "Author, 'The Tech Playbook'",
    role: "Author",
    topics: ["Tech", "Startup"],
    bio: "An experienced author focusing on Tech and Startup. Mateo regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~19.8k followers)",
    twitter: "https://x.com/mateo_robinson50",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 228,
    name: "Sofia Silva",
    title: "Founder, ApexCapital",
    role: "Founder",
    topics: ["Privacy", "Finance", "Web3"],
    bio: "An experienced founder focusing on Privacy and Finance and Web3. Sofia regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~7.4k followers)",
    twitter: "https://x.com/sofia_silva32",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 229,
    name: "Luca Muller",
    title: "Core Contributor, QuantumFlow",
    role: "Expert",
    topics: ["Cryptography", "Culture"],
    bio: "An experienced expert focusing on Cryptography and Culture. Luca regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~8.7k followers)",
    twitter: "https://x.com/luca_muller52",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 230,
    name: "Dakota Lopez",
    title: "Author, 'The Privacy Playbook'",
    role: "Author",
    topics: ["Privacy", "Marketing"],
    bio: "An experienced author focusing on Privacy and Marketing. Dakota regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~10.4k followers)",
    twitter: "https://x.com/dakota_lopez23",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 231,
    name: "Hayden Garcia",
    title: "Core Contributor, AuraForge",
    role: "Expert",
    topics: ["Leadership", "Privacy", "Cryptography"],
    bio: "An experienced expert focusing on Leadership and Privacy and Cryptography. Hayden regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~17.3k followers)",
    twitter: "https://x.com/hayden_garcia47",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 232,
    name: "Nia Oliveira",
    title: "Author, 'The Marketing Playbook'",
    role: "Author",
    topics: ["Marketing", "Finance"],
    bio: "An experienced author focusing on Marketing and Finance. Nia regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~18.0k followers)",
    twitter: "https://x.com/nia_oliveira68",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 233,
    name: "Hiro Wilson",
    title: "Founder, AuraForge",
    role: "Founder",
    topics: ["Community", "Leadership", "Culture"],
    bio: "An experienced founder focusing on Community and Leadership and Culture. Hiro regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.1k followers)",
    twitter: "https://x.com/hiro_wilson80",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 234,
    name: "Morgan Robinson",
    title: "Core Contributor, PolySync",
    role: "Expert",
    topics: ["Startup", "Culture", "Privacy"],
    bio: "An experienced expert focusing on Startup and Culture and Privacy. Morgan regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~16.0k followers)",
    twitter: "https://x.com/morgan_robinson66",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 235,
    name: "Jessie Kumar",
    title: "Author, 'The Community Playbook'",
    role: "Author",
    topics: ["Community", "Startup", "Finance"],
    bio: "An experienced author focusing on Community and Startup and Finance. Jessie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~5.8k followers)",
    twitter: "https://x.com/jessie_kumar65",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 236,
    name: "Drew Wu",
    title: "Author, 'The Culture Playbook'",
    role: "Author",
    topics: ["Culture", "Tech", "Cryptography"],
    bio: "An experienced author focusing on Culture and Tech and Cryptography. Drew regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~18.0k followers)",
    twitter: "https://x.com/drew_wu25",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 237,
    name: "Cameron Garcia",
    title: "Founder, EtherNetwork",
    role: "Founder",
    topics: ["Leadership", "Culture", "Privacy"],
    bio: "An experienced founder focusing on Leadership and Culture and Privacy. Cameron regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~12.7k followers)",
    twitter: "https://x.com/cameron_garcia97",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 238,
    name: "Jessie Perez",
    title: "Founder, ZetaFinance",
    role: "Founder",
    topics: ["Cryptography", "Privacy", "Leadership"],
    bio: "An experienced founder focusing on Cryptography and Privacy and Leadership. Jessie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~7.1k followers)",
    twitter: "https://x.com/jessie_perez76",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 239,
    name: "Hiroshi Gonzalez",
    title: "Author, 'The Leadership Playbook'",
    role: "Author",
    topics: ["Leadership", "Marketing", "Startup"],
    bio: "An experienced author focusing on Leadership and Marketing and Startup. Hiroshi regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~7.1k followers)",
    twitter: "https://x.com/hiroshi_gonzalez6",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 240,
    name: "Dakota Gupta",
    title: "Founder, EtherProtocol",
    role: "Founder",
    topics: ["Web3", "Cryptography"],
    bio: "An experienced founder focusing on Web3 and Cryptography. Dakota regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.0k followers)",
    twitter: "https://x.com/dakota_gupta37",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 241,
    name: "Finley Martin",
    title: "Founder, NexusNetwork",
    role: "Founder",
    topics: ["Cryptography", "Tech"],
    bio: "An experienced founder focusing on Cryptography and Tech. Finley regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~17.5k followers)",
    twitter: "https://x.com/finley_martin14",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 242,
    name: "Charlie Chen",
    title: "Author, 'The Community Playbook'",
    role: "Author",
    topics: ["Community", "Leadership", "Privacy"],
    bio: "An experienced author focusing on Community and Leadership and Privacy. Charlie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~11.8k followers)",
    twitter: "https://x.com/charlie_chen51",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 243,
    name: "Jordan Perez",
    title: "Founder, PolyNetwork",
    role: "Founder",
    topics: ["Privacy", "Finance", "Startup"],
    bio: "An experienced founder focusing on Privacy and Finance and Startup. Jordan regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~10.8k followers)",
    twitter: "https://x.com/jordan_perez71",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 244,
    name: "Riley Nguyen",
    title: "Founder, PeakLabs",
    role: "Founder",
    topics: ["Web3", "Startup", "Privacy"],
    bio: "An experienced founder focusing on Web3 and Startup and Privacy. Riley regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.5k followers)",
    twitter: "https://x.com/riley_nguyen39",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 245,
    name: "Jordan Lopez",
    title: "Core Contributor, DeYield",
    role: "Expert",
    topics: ["Community", "Finance"],
    bio: "An experienced expert focusing on Community and Finance. Jordan regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~16.2k followers)",
    twitter: "https://x.com/jordan_lopez12",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 246,
    name: "Sawyer Robinson",
    title: "Core Contributor, MetaCapital",
    role: "Expert",
    topics: ["Tech", "Privacy", "Startup"],
    bio: "An experienced expert focusing on Tech and Privacy and Startup. Sawyer regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~16.1k followers)",
    twitter: "https://x.com/sawyer_robinson23",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 247,
    name: "Anya Nguyen",
    title: "Author, 'The Marketing Playbook'",
    role: "Author",
    topics: ["Marketing", "Community", "Culture"],
    bio: "An experienced author focusing on Marketing and Community and Culture. Anya regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~17.5k followers)",
    twitter: "https://x.com/anya_nguyen71",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 248,
    name: "Blake Martinez",
    title: "Core Contributor, NovaLabs",
    role: "Expert",
    topics: ["Web3", "Tech"],
    bio: "An experienced expert focusing on Web3 and Tech. Blake regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.0k followers)",
    twitter: "https://x.com/blake_martinez58",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 249,
    name: "Amira Moreau",
    title: "Core Contributor, BlockFinance",
    role: "Expert",
    topics: ["Web3", "Community", "Marketing"],
    bio: "An experienced expert focusing on Web3 and Community and Marketing. Amira regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~17.0k followers)",
    twitter: "https://x.com/amira_moreau37",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 250,
    name: "Quinn Martin",
    title: "Author, 'The Leadership Playbook'",
    role: "Author",
    topics: ["Leadership", "Startup", "Community"],
    bio: "An experienced author focusing on Leadership and Startup and Community. Quinn regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~8.4k followers)",
    twitter: "https://x.com/quinn_martin71",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 251,
    name: "Priya Ramirez",
    title: "Core Contributor, PolyStudios",
    role: "Expert",
    topics: ["Marketing", "Leadership", "Startup"],
    bio: "An experienced expert focusing on Marketing and Leadership and Startup. Priya regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~7.8k followers)",
    twitter: "https://x.com/priya_ramirez3",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 252,
    name: "Micah Singh",
    title: "Founder, QuantumFinance",
    role: "Founder",
    topics: ["Culture", "Cryptography"],
    bio: "An experienced founder focusing on Culture and Cryptography. Micah regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~17.6k followers)",
    twitter: "https://x.com/micah_singh61",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 253,
    name: "Riley Roux",
    title: "Core Contributor, AuraNetwork",
    role: "Expert",
    topics: ["Community", "Privacy", "Tech"],
    bio: "An experienced expert focusing on Community and Privacy and Tech. Riley regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~16.0k followers)",
    twitter: "https://x.com/riley_roux28",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 254,
    name: "Blake Robinson",
    title: "Core Contributor, NovaNetwork",
    role: "Expert",
    topics: ["Privacy", "Leadership"],
    bio: "An experienced expert focusing on Privacy and Leadership. Blake regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.8k followers)",
    twitter: "https://x.com/blake_robinson72",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 255,
    name: "Jamie Kim",
    title: "Author, 'The Community Playbook'",
    role: "Author",
    topics: ["Community", "Web3", "Culture"],
    bio: "An experienced author focusing on Community and Web3 and Culture. Jamie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.1k followers)",
    twitter: "https://x.com/jamie_kim85",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 256,
    name: "Jamie Hernandez",
    title: "Author, 'The Community Playbook'",
    role: "Author",
    topics: ["Community", "Startup", "Tech"],
    bio: "An experienced author focusing on Community and Startup and Tech. Jamie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~9.6k followers)",
    twitter: "https://x.com/jamie_hernandez47",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 257,
    name: "Reese Patel",
    title: "Founder, PolyCapital",
    role: "Founder",
    topics: ["Culture", "Tech"],
    bio: "An experienced founder focusing on Culture and Tech. Reese regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~11.0k followers)",
    twitter: "https://x.com/reese_patel54",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 258,
    name: "Hayden Martinez",
    title: "Founder, ZenDAO",
    role: "Founder",
    topics: ["Privacy", "Finance", "Web3"],
    bio: "An experienced founder focusing on Privacy and Finance and Web3. Hayden regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~6.2k followers)",
    twitter: "https://x.com/hayden_martinez36",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 259,
    name: "Quinn Singh",
    title: "Core Contributor, NexusNetwork",
    role: "Expert",
    topics: ["Web3", "Privacy", "Leadership"],
    bio: "An experienced expert focusing on Web3 and Privacy and Leadership. Quinn regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~16.4k followers)",
    twitter: "https://x.com/quinn_singh45",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 260,
    name: "Nia Martin",
    title: "Core Contributor, NexusVentures",
    role: "Expert",
    topics: ["Web3", "Community"],
    bio: "An experienced expert focusing on Web3 and Community. Nia regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~16.2k followers)",
    twitter: "https://x.com/nia_martin4",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 261,
    name: "Nia Lopez",
    title: "Author, 'The Web3 Playbook'",
    role: "Author",
    topics: ["Web3", "Cryptography", "Tech"],
    bio: "An experienced author focusing on Web3 and Cryptography and Tech. Nia regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~6.1k followers)",
    twitter: "https://x.com/nia_lopez27",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 262,
    name: "Sofia Anderson",
    title: "Author, 'The Cryptography Playbook'",
    role: "Author",
    topics: ["Cryptography", "Web3", "Community"],
    bio: "An experienced author focusing on Cryptography and Web3 and Community. Sofia regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.4k followers)",
    twitter: "https://x.com/sofia_anderson95",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 263,
    name: "Kiran Costa",
    title: "Founder, CryptoLabs",
    role: "Founder",
    topics: ["Leadership", "Cryptography", "Community"],
    bio: "An experienced founder focusing on Leadership and Cryptography and Community. Kiran regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~7.2k followers)",
    twitter: "https://x.com/kiran_costa4",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 264,
    name: "Phoenix Ramirez",
    title: "Core Contributor, PolyForge",
    role: "Expert",
    topics: ["Community", "Tech"],
    bio: "An experienced expert focusing on Community and Tech. Phoenix regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~7.7k followers)",
    twitter: "https://x.com/phoenix_ramirez40",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 265,
    name: "Chloe Lopez",
    title: "Core Contributor, NovaFlow",
    role: "Expert",
    topics: ["Community", "Marketing", "Privacy"],
    bio: "An experienced expert focusing on Community and Marketing and Privacy. Chloe regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.6k followers)",
    twitter: "https://x.com/chloe_lopez91",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 266,
    name: "Drew Wang",
    title: "Founder, OmniNetwork",
    role: "Founder",
    topics: ["Marketing", "Leadership"],
    bio: "An experienced founder focusing on Marketing and Leadership. Drew regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~10.2k followers)",
    twitter: "https://x.com/drew_wang4",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 267,
    name: "Casey Thomas",
    title: "Author, 'The Marketing Playbook'",
    role: "Author",
    topics: ["Marketing", "Privacy"],
    bio: "An experienced author focusing on Marketing and Privacy. Casey regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~18.7k followers)",
    twitter: "https://x.com/casey_thomas54",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 268,
    name: "William Taylor",
    title: "Author, 'The Web3 Playbook'",
    role: "Author",
    topics: ["Web3", "Tech", "Leadership"],
    bio: "An experienced author focusing on Web3 and Tech and Leadership. William regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~7.0k followers)",
    twitter: "https://x.com/william_taylor9",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 269,
    name: "Kendall Lee",
    title: "Core Contributor, QuantumSync",
    role: "Expert",
    topics: ["Cryptography", "Community", "Web3"],
    bio: "An experienced expert focusing on Cryptography and Community and Web3. Kendall regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~18.6k followers)",
    twitter: "https://x.com/kendall_lee84",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 270,
    name: "Riley Williams",
    title: "Core Contributor, ChainSync",
    role: "Expert",
    topics: ["Finance", "Privacy", "Culture"],
    bio: "An experienced expert focusing on Finance and Privacy and Culture. Riley regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.7k followers)",
    twitter: "https://x.com/riley_williams58",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 271,
    name: "Finley Nguyen",
    title: "Author, 'The Privacy Playbook'",
    role: "Author",
    topics: ["Privacy", "Startup"],
    bio: "An experienced author focusing on Privacy and Startup. Finley regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~10.7k followers)",
    twitter: "https://x.com/finley_nguyen18",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 272,
    name: "Casey Santos",
    title: "Core Contributor, ApexForge",
    role: "Expert",
    topics: ["Web3", "Marketing"],
    bio: "An experienced expert focusing on Web3 and Marketing. Casey regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~5.2k followers)",
    twitter: "https://x.com/casey_santos52",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 273,
    name: "Hiroshi Thompson",
    title: "Core Contributor, OmniVentures",
    role: "Expert",
    topics: ["Web3", "Finance", "Startup"],
    bio: "An experienced expert focusing on Web3 and Finance and Startup. Hiroshi regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~5.6k followers)",
    twitter: "https://x.com/hiroshi_thompson27",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 274,
    name: "Nia White",
    title: "Author, 'The Finance Playbook'",
    role: "Author",
    topics: ["Finance", "Tech"],
    bio: "An experienced author focusing on Finance and Tech. Nia regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~6.8k followers)",
    twitter: "https://x.com/nia_white77",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 275,
    name: "Luca Santos",
    title: "Founder, PeakForge",
    role: "Founder",
    topics: ["Leadership", "Finance"],
    bio: "An experienced founder focusing on Leadership and Finance. Luca regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.5k followers)",
    twitter: "https://x.com/luca_santos88",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 276,
    name: "Casey Brown",
    title: "Author, 'The Web3 Playbook'",
    role: "Author",
    topics: ["Web3", "Privacy"],
    bio: "An experienced author focusing on Web3 and Privacy. Casey regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~10.7k followers)",
    twitter: "https://x.com/casey_brown55",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 277,
    name: "Cameron Sanchez",
    title: "Author, 'The Finance Playbook'",
    role: "Author",
    topics: ["Finance", "Startup"],
    bio: "An experienced author focusing on Finance and Startup. Cameron regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.5k followers)",
    twitter: "https://x.com/cameron_sanchez47",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 278,
    name: "Dakota Moore",
    title: "Author, 'The Tech Playbook'",
    role: "Author",
    topics: ["Tech", "Web3", "Startup"],
    bio: "An experienced author focusing on Tech and Web3 and Startup. Dakota regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.0k followers)",
    twitter: "https://x.com/dakota_moore19",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 279,
    name: "Blake Hernandez",
    title: "Core Contributor, OmniFlow",
    role: "Expert",
    topics: ["Startup", "Community"],
    bio: "An experienced expert focusing on Startup and Community. Blake regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~9.1k followers)",
    twitter: "https://x.com/blake_hernandez2",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 280,
    name: "Chloe Hernandez",
    title: "Founder, ApexVentures",
    role: "Founder",
    topics: ["Finance", "Leadership"],
    bio: "An experienced founder focusing on Finance and Leadership. Chloe regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~17.7k followers)",
    twitter: "https://x.com/chloe_hernandez30",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 281,
    name: "Elena Wang",
    title: "Author, 'The Culture Playbook'",
    role: "Author",
    topics: ["Culture", "Finance", "Leadership"],
    bio: "An experienced author focusing on Culture and Finance and Leadership. Elena regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~7.4k followers)",
    twitter: "https://x.com/elena_wang67",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 282,
    name: "Omar Hernandez",
    title: "Core Contributor, PolyYield",
    role: "Expert",
    topics: ["Marketing", "Community", "Web3"],
    bio: "An experienced expert focusing on Marketing and Community and Web3. Omar regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~6.8k followers)",
    twitter: "https://x.com/omar_hernandez22",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 283,
    name: "Avery Taylor",
    title: "Author, 'The Culture Playbook'",
    role: "Author",
    topics: ["Culture", "Community"],
    bio: "An experienced author focusing on Culture and Community. Avery regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~16.5k followers)",
    twitter: "https://x.com/avery_taylor8",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 284,
    name: "Avery Thomas",
    title: "Founder, NovaBase",
    role: "Founder",
    topics: ["Startup", "Privacy"],
    bio: "An experienced founder focusing on Startup and Privacy. Avery regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~19.5k followers)",
    twitter: "https://x.com/avery_thomas98",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 285,
    name: "Sam Silva",
    title: "Core Contributor, ZenVentures",
    role: "Expert",
    topics: ["Culture", "Tech"],
    bio: "An experienced expert focusing on Culture and Tech. Sam regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~11.3k followers)",
    twitter: "https://x.com/sam_silva27",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 286,
    name: "Morgan Ramirez",
    title: "Founder, PeakLabs",
    role: "Founder",
    topics: ["Privacy", "Finance"],
    bio: "An experienced founder focusing on Privacy and Finance. Morgan regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~6.7k followers)",
    twitter: "https://x.com/morgan_ramirez9",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 287,
    name: "Jessie Wang",
    title: "Author, 'The Cryptography Playbook'",
    role: "Author",
    topics: ["Cryptography", "Privacy"],
    bio: "An experienced author focusing on Cryptography and Privacy. Jessie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~17.6k followers)",
    twitter: "https://x.com/jessie_wang50",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 288,
    name: "Micah Jones",
    title: "Author, 'The Community Playbook'",
    role: "Author",
    topics: ["Community", "Tech", "Finance"],
    bio: "An experienced author focusing on Community and Tech and Finance. Micah regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~6.5k followers)",
    twitter: "https://x.com/micah_jones45",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 289,
    name: "Jessie Anderson",
    title: "Core Contributor, BlockSync",
    role: "Expert",
    topics: ["Culture", "Finance", "Cryptography"],
    bio: "An experienced expert focusing on Culture and Finance and Cryptography. Jessie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~5.8k followers)",
    twitter: "https://x.com/jessie_anderson59",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 290,
    name: "Alex Williams",
    title: "Author, 'The Culture Playbook'",
    role: "Author",
    topics: ["Culture", "Leadership", "Startup"],
    bio: "An experienced author focusing on Culture and Leadership and Startup. Alex regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~9.0k followers)",
    twitter: "https://x.com/alex_williams27",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 291,
    name: "Quinn Thompson",
    title: "Author, 'The Cryptography Playbook'",
    role: "Author",
    topics: ["Cryptography", "Tech"],
    bio: "An experienced author focusing on Cryptography and Tech. Quinn regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~9.4k followers)",
    twitter: "https://x.com/quinn_thompson47",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 292,
    name: "William Wu",
    title: "Core Contributor, EtherBase",
    role: "Expert",
    topics: ["Cryptography", "Culture", "Community"],
    bio: "An experienced expert focusing on Cryptography and Culture and Community. William regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~6.4k followers)",
    twitter: "https://x.com/william_wu31",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 293,
    name: "Cameron Clark",
    title: "Author, 'The Marketing Playbook'",
    role: "Author",
    topics: ["Marketing", "Privacy", "Community"],
    bio: "An experienced author focusing on Marketing and Privacy and Community. Cameron regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~8.4k followers)",
    twitter: "https://x.com/cameron_clark12",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 294,
    name: "Diego Santos",
    title: "Founder, OmniNetwork",
    role: "Founder",
    topics: ["Community", "Culture", "Leadership"],
    bio: "An experienced founder focusing on Community and Culture and Leadership. Diego regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~8.8k followers)",
    twitter: "https://x.com/diego_santos92",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 295,
    name: "Dakota Harris",
    title: "Core Contributor, CryptoFinance",
    role: "Expert",
    topics: ["Culture", "Startup"],
    bio: "An experienced expert focusing on Culture and Startup. Dakota regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~6.5k followers)",
    twitter: "https://x.com/dakota_harris90",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 296,
    name: "Charlie Gupta",
    title: "Core Contributor, ChainProtocol",
    role: "Expert",
    topics: ["Startup", "Tech"],
    bio: "An experienced expert focusing on Startup and Tech. Charlie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~5.6k followers)",
    twitter: "https://x.com/charlie_gupta53",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 297,
    name: "Omar Muller",
    title: "Core Contributor, DeFlow",
    role: "Expert",
    topics: ["Leadership", "Web3", "Culture"],
    bio: "An experienced expert focusing on Leadership and Web3 and Culture. Omar regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~11.3k followers)",
    twitter: "https://x.com/omar_muller89",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 298,
    name: "Reese Harris",
    title: "Author, 'The Cryptography Playbook'",
    role: "Author",
    topics: ["Cryptography", "Marketing", "Web3"],
    bio: "An experienced author focusing on Cryptography and Marketing and Web3. Reese regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~16.4k followers)",
    twitter: "https://x.com/reese_harris96",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 299,
    name: "Sawyer Patel",
    title: "Founder, BlockDAO",
    role: "Founder",
    topics: ["Tech", "Community"],
    bio: "An experienced founder focusing on Tech and Community. Sawyer regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~9.7k followers)",
    twitter: "https://x.com/sawyer_patel29",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 300,
    name: "Casey Chen",
    title: "Author, 'The Web3 Playbook'",
    role: "Author",
    topics: ["Web3", "Community"],
    bio: "An experienced author focusing on Web3 and Community. Casey regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~11.7k followers)",
    twitter: "https://x.com/casey_chen31",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 301,
    name: "Mei Clark",
    title: "Founder, MetaForge",
    role: "Founder",
    topics: ["Tech", "Culture", "Community"],
    bio: "An experienced founder focusing on Tech and Culture and Community. Mei regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~16.8k followers)",
    twitter: "https://x.com/mei_clark75",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 302,
    name: "Anya Robinson",
    title: "Core Contributor, ApexForge",
    role: "Expert",
    topics: ["Leadership", "Web3"],
    bio: "An experienced expert focusing on Leadership and Web3. Anya regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~19.3k followers)",
    twitter: "https://x.com/anya_robinson40",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 303,
    name: "Omar Ramirez",
    title: "Core Contributor, EtherProtocol",
    role: "Expert",
    topics: ["Privacy", "Marketing"],
    bio: "An experienced expert focusing on Privacy and Marketing. Omar regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~10.4k followers)",
    twitter: "https://x.com/omar_ramirez98",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 304,
    name: "Diego Martin",
    title: "Founder, BlockProtocol",
    role: "Founder",
    topics: ["Privacy", "Culture"],
    bio: "An experienced founder focusing on Privacy and Culture. Diego regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~17.4k followers)",
    twitter: "https://x.com/diego_martin71",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 305,
    name: "Skyler Chen",
    title: "Core Contributor, ChainForge",
    role: "Expert",
    topics: ["Leadership", "Marketing"],
    bio: "An experienced expert focusing on Leadership and Marketing. Skyler regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~19.5k followers)",
    twitter: "https://x.com/skyler_chen28",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 306,
    name: "Charlie Smith",
    title: "Author, 'The Leadership Playbook'",
    role: "Author",
    topics: ["Leadership", "Culture"],
    bio: "An experienced author focusing on Leadership and Culture. Charlie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.6k followers)",
    twitter: "https://x.com/charlie_smith42",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 307,
    name: "Hiroshi Lopez",
    title: "Founder, ZetaForge",
    role: "Founder",
    topics: ["Marketing", "Tech"],
    bio: "An experienced founder focusing on Marketing and Tech. Hiroshi regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.3k followers)",
    twitter: "https://x.com/hiroshi_lopez87",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 308,
    name: "Tariq Kumar",
    title: "Author, 'The Community Playbook'",
    role: "Author",
    topics: ["Community", "Marketing", "Finance"],
    bio: "An experienced author focusing on Community and Marketing and Finance. Tariq regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.3k followers)",
    twitter: "https://x.com/tariq_kumar82",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 309,
    name: "Mei Leroy",
    title: "Founder, NovaVentures",
    role: "Founder",
    topics: ["Cryptography", "Finance"],
    bio: "An experienced founder focusing on Cryptography and Finance. Mei regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~16.4k followers)",
    twitter: "https://x.com/mei_leroy31",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 310,
    name: "Kiran Oliveira",
    title: "Author, 'The Leadership Playbook'",
    role: "Author",
    topics: ["Leadership", "Culture", "Community"],
    bio: "An experienced author focusing on Leadership and Culture and Community. Kiran regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~10.1k followers)",
    twitter: "https://x.com/kiran_oliveira5",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 311,
    name: "Peyton Davis",
    title: "Core Contributor, AuraFlow",
    role: "Expert",
    topics: ["Tech", "Web3", "Finance"],
    bio: "An experienced expert focusing on Tech and Web3 and Finance. Peyton regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~14.2k followers)",
    twitter: "https://x.com/peyton_davis35",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 312,
    name: "Morgan Oliveira",
    title: "Founder, DeCapital",
    role: "Founder",
    topics: ["Cryptography", "Startup", "Marketing"],
    bio: "An experienced founder focusing on Cryptography and Startup and Marketing. Morgan regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~17.5k followers)",
    twitter: "https://x.com/morgan_oliveira32",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 313,
    name: "Taylor Ramirez",
    title: "Core Contributor, ZetaProtocol",
    role: "Expert",
    topics: ["Finance", "Privacy", "Web3"],
    bio: "An experienced expert focusing on Finance and Privacy and Web3. Taylor regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~18.8k followers)",
    twitter: "https://x.com/taylor_ramirez35",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 314,
    name: "Alex Robinson",
    title: "Core Contributor, ZetaYield",
    role: "Expert",
    topics: ["Cryptography", "Community"],
    bio: "An experienced expert focusing on Cryptography and Community. Alex regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~13.0k followers)",
    twitter: "https://x.com/alex_robinson10",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 315,
    name: "Jamie Oliveira",
    title: "Core Contributor, PeakStudios",
    role: "Expert",
    topics: ["Culture", "Leadership", "Finance"],
    bio: "An experienced expert focusing on Culture and Leadership and Finance. Jamie regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~17.4k followers)",
    twitter: "https://x.com/jamie_oliveira55",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 316,
    name: "Emerson Miller",
    title: "Founder, NexusFinance",
    role: "Founder",
    topics: ["Leadership", "Cryptography", "Marketing"],
    bio: "An experienced founder focusing on Leadership and Cryptography and Marketing. Emerson regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~15.8k followers)",
    twitter: "https://x.com/emerson_miller77",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 317,
    name: "Sofia Sanchez",
    title: "Core Contributor, PolyStudios",
    role: "Expert",
    topics: ["Finance", "Marketing", "Privacy"],
    bio: "An experienced expert focusing on Finance and Marketing and Privacy. Sofia regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~8.2k followers)",
    twitter: "https://x.com/sofia_sanchez49",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 318,
    name: "Kiran Clark",
    title: "Core Contributor, BlockYield",
    role: "Expert",
    topics: ["Leadership", "Cryptography", "Privacy"],
    bio: "An experienced expert focusing on Leadership and Cryptography and Privacy. Kiran regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~6.2k followers)",
    twitter: "https://x.com/kiran_clark59",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 319,
    name: "Casey Dubois",
    title: "Founder, CryptoCapital",
    role: "Founder",
    topics: ["Community", "Cryptography", "Culture"],
    bio: "An experienced founder focusing on Community and Cryptography and Culture. Casey regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~17.7k followers)",
    twitter: "https://x.com/casey_dubois33",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  },
  {
    id: 320,
    name: "Peyton Singh",
    title: "Founder, DeForge",
    role: "Founder",
    topics: ["Marketing", "Web3"],
    bio: "An experienced founder focusing on Marketing and Web3. Peyton regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~17.8k followers)",
    twitter: "https://x.com/peyton_singh17",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  }
];

// State
let currentRoleFilter = 'all';
let currentStatusFilter = 'all';
let currentTopicFilters = new Set();
let currentSearchQuery = '';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzaV4wNywJL1pi-Np24luAxwQJqtfMK-gBCdUx38RUUIDotwQAbuwcBWzuT7H7NsUVV/exec';

// DOM Elements
const speakerGrid = document.getElementById('speakerGrid');
const searchInput = document.getElementById('searchInput');
const rolePills = document.querySelectorAll('.filter-pill[data-filter]');
const topicPills = document.querySelectorAll('.filter-pill[data-topic]');
const statusPills = document.querySelectorAll('.filter-pill[data-status]');
const resultsCount = document.getElementById('resultsCount');
const syncIndicator = document.getElementById('syncIndicator');

// Initialize data with default outreach status if not present
speakers.forEach(speaker => {
  if (!speaker.outreachStatus) speaker.outreachStatus = "Not Contacted";
});

// Initialization
async function init() {
  resultsCount.textContent = 'Loading statuses from Google Sheets...';
  speakerGrid.innerHTML = '';
  syncIndicator.classList.remove('hidden');

  try {
    const response = await fetch(SCRIPT_URL);
    const savedStatuses = await response.json();

    // Merge remote statuses into local array
    speakers.forEach(speaker => {
      if (savedStatuses[speaker.id.toString()]) {
        speaker.outreachStatus = savedStatuses[speaker.id.toString()];
      }
    });
  } catch (error) {
    console.error("Failed to fetch statuses from Google Sheets:", error);
  } finally {
    syncIndicator.classList.add('hidden');
  }

  renderSpeakers(speakers);
  setupEventListeners();
}

// Render Speaker Cards
function renderSpeakers(speakersToRender) {
  speakerGrid.innerHTML = '';

  // Update Results Count
  resultsCount.textContent = `${speakersToRender.length} speaker${speakersToRender.length !== 1 ? 's' : ''} found`;

  if (speakersToRender.length === 0) {
    speakerGrid.innerHTML = `
      <div class="empty-state">
        <h3>No speakers found</h3>
        <p>Try adjusting your search or filters to discover different profiles.</p>
      </div>
    `;
    return;
  }

  speakersToRender.forEach((speaker, index) => {
    const card = document.createElement('div');
    card.className = 'speaker-card';
    card.style.animationDelay = `${index * 0.05}s`;

    // Role Badge Color Mapping
    let roleClass = '';
    if (speaker.role === 'Author') roleClass = 'role-author';
    if (speaker.role === 'Founder') roleClass = 'role-founder';
    if (speaker.role === 'Expert') roleClass = 'role-expert';

    // Topic Tags
    const topicTags = speaker.topics.map(topic => {
      const topicClass = topic === 'Web3' ? 'topic-web3' : '';
      return `<span class="topic-tag ${topicClass}">${topic}</span>`;
    }).join('');

    // Status Select HTML
    const statuses = ["Not Contacted", "In Contact", "Successful", "Unsuccessful"];
    const statusOptions = statuses.map(s =>
      `<option value="${s}" ${speaker.outreachStatus === s ? 'selected' : ''}>${s}</option>`
    ).join('');

    card.innerHTML = `
      <div class="card-header">
        <div class="speaker-info">
          <h3 class="speaker-name">${speaker.name}</h3>
          <span class="speaker-title">${speaker.title}</span>
        </div>
        <span class="role-badge ${roleClass}">${speaker.role}</span>
      </div>
      
      <p class="speaker-bio">${speaker.bio}</p>
      
      <div class="topics-container">
        ${topicTags}
      </div>
      
      <select class="status-select" data-id="${speaker.id}" data-value="${speaker.outreachStatus}">
        ${statusOptions}
      </select>
      
      <div class="card-footer">
        <a href="${speaker.twitter}" target="_blank" class="social-link">
          <svg class="social-icon" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.925H5.034z"/></svg>
          X (Twitter)
        </a>
        <a href="${speaker.discord}" target="_blank" class="social-link">
          <svg class="social-icon" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.05.05 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
          Discord
        </a>
      </div>
    `;

    // Status change listener wrapper
    const selectEl = card.querySelector('.status-select');
    selectEl.addEventListener('change', async (e) => {
      const newStatus = e.target.value;
      const targetSpeakerId = parseInt(selectEl.dataset.id);

      // Update in memory array
      const s = speakers.find(x => x.id === targetSpeakerId);
      if (s) s.outreachStatus = newStatus;

      // Update visual attribute
      selectEl.setAttribute("data-value", newStatus);

      // Save to Google Sheets
      syncIndicator.classList.remove('hidden');
      try {
        await fetch(SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ id: targetSpeakerId, status: newStatus })
        });
      } catch (error) {
        console.error("Failed to update status in Google Sheets:", error);
      } finally {
        syncIndicator.classList.add('hidden');
      }
    });

    speakerGrid.appendChild(card);
  });
}

// Logic to filter the speakers array based on selections
function filterSpeakers() {
  const filtered = speakers.filter(speaker => {
    // Role filter
    const roleMatch = currentRoleFilter === 'all' || speaker.role.toLowerCase() === currentRoleFilter.toLowerCase();

    // Status filter
    const statusMatch = currentStatusFilter === 'all' || speaker.outreachStatus === currentStatusFilter;

    // Topics filter (Must have ALL selected topics)
    const activeTopics = Array.from(currentTopicFilters);
    const topicMatch = activeTopics.length === 0 ||
      activeTopics.every(topic => speaker.topics.includes(topic));

    // Search query
    const query = currentSearchQuery.toLowerCase();
    const searchMatch = query === '' ||
      speaker.name.toLowerCase().includes(query) ||
      speaker.title.toLowerCase().includes(query) ||
      speaker.role.toLowerCase().includes(query) ||
      speaker.topics.some(t => t.toLowerCase().includes(query));

    return roleMatch && topicMatch && statusMatch && searchMatch;
  });

  renderSpeakers(filtered);
}

// Event Listeners
function setupEventListeners() {
  // Search
  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value;
    filterSpeakers();
  });

  // Role Pills
  rolePills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      rolePills.forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      currentRoleFilter = e.target.dataset.filter;
      filterSpeakers();
    });
  });

  // Status Pills
  statusPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      statusPills.forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      currentStatusFilter = e.target.dataset.status;
      filterSpeakers();
    });
  });

  // Topic Pills
  topicPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      const topic = e.target.dataset.topic;
      e.target.classList.toggle('active');

      if (currentTopicFilters.has(topic)) {
        currentTopicFilters.delete(topic);
      } else {
        currentTopicFilters.add(topic);
      }

      filterSpeakers();
    });
  });
}

// Run app
document.addEventListener('DOMContentLoaded', init);
