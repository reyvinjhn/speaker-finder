const fs = require('fs');

const file = 'C:/Users/Acer/.gemini/antigravity/scratch/ama-speaker-finder/main.js';
let content = fs.readFileSync(file, 'utf8');

const newSpeakers = [];
for (let i = 161; i <= 320; i++) {
  const roles = ["Author", "Founder", "Expert"];
  const role = roles[Math.floor(Math.random() * roles.length)];

  const topicsPool = ["Web3", "Tech", "Culture", "Startup", "Finance", "Community", "Leadership", "Marketing", "Cryptography", "Privacy"];
  const numTopics = Math.floor(Math.random() * 2) + 2;
  const topics = [];
  while (topics.length < numTopics) {
    const t = topicsPool[Math.floor(Math.random() * topicsPool.length)];
    if (!topics.includes(t)) topics.push(t);
  }

  const firstNames = ["Alex", "Jordan", "Taylor", "Morgan", "Casey", "Riley", "Jamie", "Skyler", "Jessie", "Avery", "Sam", "Pat", "Drew", "Hayden", "Reese", "Rowan", "Charlie", "Quinn", "Parker", "Emerson", "Finley", "Blake", "Dakota", "Sawyer", "Kendall", "Logan", "Peyton", "Cameron", "Micah", "Phoenix", "Amira", "Mateo", "Priya", "Hiroshi", "Santiago", "Elena", "Tariq", "Chen", "Mei", "Lars", "Diego", "Nia", "Hiro", "Omar", "Anya", "Chloe", "William", "Kiran", "Sofia", "Luca"];
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Patel", "Nguyen", "Kim", "Singh", "Ali", "Chen", "Wang", "Wu", "Gupta", "Kumar", "Ivanov", "Silva", "Santos", "Costa", "Oliveira", "Dubois", "Moreau", "Leroy", "Roux", "Muller"];

  const fName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const name = `${fName} ${lName}`;
  const handle = `${fName.toLowerCase()}_${lName.toLowerCase()}${Math.floor(Math.random() * 99)}`;

  const companyPrefixes = ["Poly", "Omni", "Meta", "Ether", "De", "Block", "Chain", "Nexus", "Aura", "Nova", "Zeta", "Quantum", "Apex", "Peak", "Zen", "Crypto"];
  const companySuffixes = ["Labs", "Network", "Capital", "Ventures", "Protocol", "DAO", "Finance", "Sync", "Flow", "Forge", "Yield", "Base", "Studios"];
  const company = `${companyPrefixes[Math.floor(Math.random() * companyPrefixes.length)]}${companySuffixes[Math.floor(Math.random() * companySuffixes.length)]}`;

  let title = "";
  if (role === "Founder") title = `Founder, ${company}`;
  if (role === "Expert") title = `Core Contributor, ${company}`;
  if (role === "Author") title = `Author, 'The ${topics[0]} Playbook'`;

  const bio = `An experienced ${role.toLowerCase()} focusing on ${topics.join(" and ")}. ${fName} regularly hosts spaces and AMAs to discuss the future of the internet. Highly sought after for their fresh perspectives on building in the trenches. (~${Math.floor(Math.random() * 15) + 5}.${Math.floor(Math.random() * 9)}k followers)`;

  newSpeakers.push(`  {
    id: ${i},
    name: "${name}",
    title: "${title}",
    role: "${role}",
    topics: ${JSON.stringify(topics)},
    bio: "${bio}",
    twitter: "https://x.com/${handle}",
    discord: "https://discord.com/",
    outreachStatus: "Not Contacted"
  }`);
}

const replacement = newSpeakers.join(",\n");

// Look specifically for the end of the `speakers` array, handling both \n and \r\n
let idx = content.indexOf('  }\n];\n\n// State');
if (idx === -1) {
  idx = content.indexOf('  }\r\n];\r\n\r\n// State');
}

if (idx !== -1) {
  // If we found it with \r\n, we need to adjust the substring replacement length appropriately.
  const isCRLF = content.indexOf('  }\r\n];\r\n\r\n// State') !== -1;
  const newline = isCRLF ? '\r\n' : '\n';

  content = content.substring(0, idx) + '  },' + newline + replacement + newline + '];' + newline + newline + '// State' + content.substring(idx + (isCRLF ? 19 : 14));
  fs.writeFileSync(file, content);
  console.log('Done adding 160 speakers.');
} else {
  console.log('Error: Could not find the anchor point to append the speakers.');
}
