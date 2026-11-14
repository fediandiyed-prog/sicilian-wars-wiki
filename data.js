// Structured Content & Data Store for Sicilian Wars Wiki

export const WIKI_DATA = {
  overview: {
    title: "Sicilian Wars (Greco-Punic Wars)",
    dates: "580 – 265 BC (315 years)",
    location: "Sicily, Tyrrhenian Sea, North Africa",
    result: "Strategic stalemate; boundary set at Halycus River. Precursor to the First Punic War.",
    infobox: [
      { label: "Date", value: "580 – 265 BC" },
      { label: "Location", value: "Sicily & Western Mediterranean" },
      { label: "Result", value: "Indecisive status-quo (Halycus River treaty)" },
      { label: "Belligerents (West)", value: "Carthaginian Empire, Elymians, Libyans, Iberians" },
      { label: "Belligerents (East)", value: "Greek City-States: Syracuse, Akragas, Gela, Corinthian & Spartan Allies" },
      { label: "Commanders (Punic)", value: "Hamilcar Mago †, Hannibal Mago †, Himilco, Hamilcar (son of Gisco)" },
      { label: "Commanders (Greek)", value: "Gelon, Theron, Dionysius I, Timoleon, Agathocles" }
    ],
    summary: `The <strong>Sicilian Wars</strong> (580–265 BC), also known as the <strong>Greco-Punic Wars</strong>, were a protracted series of conflicts between Carthage and the Greek poleis of Magna Graecia, predominantly commanded by Syracuse. Spanning over three centuries, the wars decided control of the vital granaries and sea lanes of Sicily without ever allowing either empire total hegemony. The stalemate ultimately ended when the Roman Republic intervened in 264 BC, initiating the First Punic War.`
  },

  wars: [
    {
      id: "first-war",
      title: "First Sicilian War (480 BC)",
      content: `In 480 BC, Carthage mounted an expedition of 300,000 men under suffete <strong>Hamilcar Mago</strong>, coordinating strategically with Xerxes' Persian invasion of Greece. Gelon of Syracuse combined forces with Theron of Akragas. At the <strong>Battle of Himera</strong>, Greek cavalry infiltrated the Punic naval base, killed Hamilcar, and burned their fleet. Carthage accepted a 70-year peace and heavy reparations.`
    },
    {
      id: "second-war",
      title: "Second Sicilian War (410–404 BC)",
      content: `In 410 BC, <strong>Hannibal Mago</strong> sought vengeance for Himera. Carthaginian armies destroyed Selinus and razed Himera to the ground. In 406 BC, Carthage besieged Akragas. Although plague killed Hannibal Mago, Himilco starved the city. This existential crisis brought <strong>Dionysius I</strong> to power in Syracuse. Dionysius subsequently fortified Syracuse and fought three wars to maintain the Halycus River frontier.`
    },
    {
      id: "third-war",
      title: "Third Sicilian War (315–307 BC)",
      content: `In 315 BC, <strong>Agathocles</strong> seized Syracuse and invaded Punic lands. Defeated and blockaded inside Syracuse in 311 BC, Agathocles boldly took 60 ships, ran the blockade, and <strong>invaded North Africa</strong> directly. For three years he threatened the walls of Carthage itself, breaking the siege in Sicily before negotiating a peace treaty in 307 BC.`
    }
  ],

  figures: [
    {
      id: "hamilcar-mago",
      name: "Hamilcar Mago",
      side: "Carthage",
      role: "Suffete & Commander (d. 480 BC)",
      bio: "Led the first major Carthaginian armada into Sicily. Perished at the Battle of Himera, according to Herodotus by throwing himself into sacrificial flames as his army routed."
    },
    {
      id: "gelon",
      name: "Gelon of Syracuse",
      side: "Greece",
      role: "Tyrant of Syracuse (r. 485–478 BC)",
      bio: "United Syracuse and Gela into the dominant power of Magna Graecia. Masterminded the cavalry trick at Himera that wiped out the Punic invasion fleet."
    },
    {
      id: "dionysius-i",
      name: "Dionysius I",
      side: "Greece",
      role: "Tyrant of Syracuse (r. 405–367 BC)",
      bio: "Autocrat who fortified Syracuse with the Epipolae fortress. Spearheaded military revolutions by introducing the mechanical catapult (katapeltikon) and massive quinquereme warships."
    },
    {
      id: "timoleon",
      name: "Timoleon of Corinth",
      side: "Greece",
      role: "Statesman & General (c. 411–337 BC)",
      bio: "Corinthian champion dispatched to restore democracy in Sicily. Smashed a superior Carthaginian force during a torrential flood at the Battle of the Crimissus (339 BC)."
    },
    {
      id: "agathocles",
      name: "Agathocles",
      side: "Greece",
      role: "King of Sicily (r. 317–289 BC)",
      bio: "Audacious general who survived the siege of Syracuse by taking his army across the Mediterranean to invade the African mainland, putting Carthage itself under direct siege."
    }
  ],

  battles: [
    {
      id: "battle-himera",
      name: "Battle of Himera (480 BC)",
      combatants: "Syracuse & Akragas vs. Carthage",
      outcome: "Decisive Greek Victory",
      diagram: `<svg viewBox="0 0 400 160" class="battle-svg" role="img" aria-label="Battle of Himera Diagram">
        <rect width="400" height="160" fill="var(--svg-bg)" rx="4"/>
        <!-- Sea -->
        <path d="M 0 0 L 400 0 L 400 45 L 0 45 Z" fill="#3b82f6" opacity="0.3"/>
        <text x="200" y="28" text-anchor="middle" font-size="11" fill="currentColor">Tyrrhenian Sea / Carthaginian Fleet Anchor</text>
        <!-- Punic Camp -->
        <rect x="50" y="65" width="120" height="40" fill="#ef4444" opacity="0.3" stroke="#ef4444" stroke-width="2"/>
        <text x="110" y="90" text-anchor="middle" font-size="11" fill="currentColor" font-weight="bold">Hamilcar's Camp</text>
        <!-- Greek Cavalry Infiltration Arrow -->
        <path d="M 330 65 Q 230 40 175 75" fill="none" stroke="#10b981" stroke-width="3" stroke-dasharray="4,3"/>
        <polygon points="175,70 167,78 178,82" fill="#10b981"/>
        <text x="270" y="55" font-size="10" fill="#10b981" font-weight="bold">Greek Cavalry Pincer</text>
        <!-- Greek Phalanx Line -->
        <rect x="230" y="105" width="130" height="35" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="2"/>
        <text x="295" y="127" text-anchor="middle" font-size="11" fill="currentColor" font-weight="bold">Gelon & Theron (Phalanx)</text>
      </svg>`,
      description: "Gelon intercepted communications between Selinus and Hamilcar. Disguising his cavalry as Punic allies, he rode into the Carthaginian camp unchallenged, killed Hamilcar, and ignited the moored war galleys."
    },
    {
      id: "siege-motya",
      name: "Siege of Motya (398 BC)",
      combatants: "Syracuse vs. Phoenician Motya",
      outcome: "Syracusan Conquest",
      diagram: `<svg viewBox="0 0 400 160" class="battle-svg" role="img" aria-label="Siege of Motya Diagram">
        <rect width="400" height="160" fill="var(--svg-bg)" rx="4"/>
        <circle cx="200" cy="80" r="45" fill="#ef4444" opacity="0.25" stroke="#ef4444" stroke-width="2"/>
        <text x="200" y="84" text-anchor="middle" font-size="11" fill="currentColor" font-weight="bold">Motya (Island)</text>
        <!-- Dionysius Mole / Causeway -->
        <rect x="30" y="73" width="125" height="14" fill="#8b5cf6" stroke="#8b5cf6" stroke-width="1.5"/>
        <text x="90" y="66" text-anchor="middle" font-size="10" fill="#8b5cf6" font-weight="bold">Dionysius' Mole (Causeway)</text>
        <!-- Catapults -->
        <circle cx="45" cy="80" r="7" fill="#f59e0b"/>
        <text x="45" y="110" font-size="10" fill="#f59e0b" text-anchor="middle">Catapult Artillery</text>
      </svg>`,
      description: "Dionysius built an artificial stone causeway across the lagoon to the island of Motya, wheeling forward six-story siege towers and the world's first documented military torsion catapults to breach the walls."
    }
  ]
};
