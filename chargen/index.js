const coreRaces = ["Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human"];
const classes = ["Alchemist", "Antipaladin", "Arcanist", "Barbarian", "Barbarian (Unchained)", "Bard", "Bloodrager", "Brawler", "Cavalier", "Cleric", "Druid", "Fighter", "Gunslinger", "Hunter", "Inquisitor", "Investigator", "Kineticist", "Magus", "Medium", "Mesmerist", "Monk", "Monk (Unchained)", "Ninja", "Occultist", "Oracle", "Paladin", "Psychic", "Ranger", "Rogue", "Rogue (Unchained)", "Samurai", "Shaman", "Shifter", "Skald", "Slayer", "Sorcerer", "Spiritualist", "Summoner", "Summoner (Unchained)", "Swashbuckler", "Vigilante", "Warpriest", "Witch", "Wizard"];

function getReincarnateRace() {
    const percent = getRandomInt(100)+1;
    if (percent >= 1 && percent <= 2)        return            "Aasimar";
    if (percent === 3)                       return            "Android";
    if (percent === 4)                       return            "Bugbear";
    if (percent === 5)                       return            "Catfolk";
    if (percent === 6)                       return            "Changeling";
    if (percent === 7)                       return            "Dhampir";
    if (percent >= 8 && percent <= 9)        return            "Drow";
    if (percent === 10)                      return            "Duergar";
    if (percent >= 11 && percent <= 18)      return            "Dwarf";
    if (percent >= 19 && percent <= 26)      return            "Elf";
    if (percent === 27)                      return            "Fetchling";
    if (percent === 28)                      return            "Gathlain";
    if (percent === 29)                      return            "Ghoran";
    if (percent === 30)                      return            "Gillmen";
    if (percent === 31)                      return            "Gnoll";
    if (percent >= 32 && percent <= 39)      return            "Gnome";
    if (percent >= 40 && percent <= 41)      return            "Goblin";
    if (percent === 42)                      return            "Grippli";
    if (percent >= 43 && percent <= 46)      return            "Half-Elf";
    if (percent >= 47 && percent <= 50)      return            "Half-orc";
    if (percent >= 51 && percent <= 58)      return            "Halfling";
    if (percent === 59)                      return            "Hobgoblin";
    if (percent >= 60 && percent <= 69)      return            "Human";
    if (percent === 70)                      return            "Ifrit";
    if (percent === 71)                      return            "Kasatha";
    if (percent === 72)                      return            "Kitsune";
    if (percent >= 73 && percent <= 74)      return            "Kobold";
    if (percent === 75)                      return            "Lashunta";
    if (percent === 76)                      return            "Lizardfolk";
    if (percent === 77)                      return            "Merfolk";
    if (percent === 78)                      return            "Nagaji";
    if (percent >= 79 && percent <= 80)      return            "Orc";
    if (percent === 81)                      return            "Oread";
    if (percent >= 82 && percent <= 83)      return            "Ratfolk";
    if (percent === 84)                      return            "Samsaran";
    if (percent === 85)                      return            "Shabti";
    if (percent === 86)                      return            "Strix";
    if (percent === 87)                      return            "Suli";
    if (percent === 88)                      return            "Svirfneblin";
    if (percent === 89)                      return            "Sylph";
    if (percent === 90)                      return            "Syrinx";
    if (percent >= 91 && percent <= 92)      return            "Tengu";
    if (percent >= 93 && percent <= 94)      return            "Tiefling";
    if (percent === 95)                      return            "Troglodyte";
    if (percent === 96)                      return            "Undine";
    if (percent === 97)                      return            "Vanara";
    if (percent === 98)                      return            "Vishkanya";
    if (percent === 99)                      return            "Wyrwood";
    if (percent === 100)                     return            "YOU CAN CHOOSE THE RACE";
}

const archetypesByClass = ({
    "Alchemist": ["Aerochemist","Alchemical Sapper","Alchemical Trapper","Aquachymist","Beastmorph","Blazing Torchbearer","Blightseeker","Blood Alchemist","Bogborn Alchemist","Bramble Brewer","Chirurgeon","Clone Master","Concocter","Construct Rider","Crimson Chymist","Cruorchymist","Crypt Breaker","Deep Bomber","Dimensional Excavator","Dragonblood Chymist","Ectochymist","Ectoplasm Master","Eldritch Poisoner","Energist","Energy Scientist","Fermenter","Fire Bomber","First World Innovator","Gloom Chymist","Grenadier","Grenadier [MC]","Gun Chemist","Herbalist","Homunculist","Horticulturist","Ice Chemist","Inspired Chemist","Internal Alchemist","Interrogator","Mad Scientist","Metamorph","Mindchemist","Mixologist","Mnemostiller","Oenopion Researcher","Oozemaster","Perfumer","Plague Bringer","Preservationist","Promethean Alchemist","Psychonaut","Ragechemist","Reanimator","Royal Alchemist","Saboteur","Sacrament Alchemist","Tinkerer","Toxicant","Trap Breaker","Vaultbreaker","Vivisectionist","Wasteland Blightbreaker","Winged Marauder"],
    "Antipaladin": ["Blighted Myrmidon","Dread Vanguard","Fearmonger","Insinuator","Iron Tyrant","Knight of the Sepulcher","Rough Rampager","Seal-Breaker","Tyrant"],
    "Arcanist": ["Aeromancer","Arcane Tinkerer","Blade Adept","Blood Arcanist","Brown-Fur Transmuter","Eldritch Font","Elemental Master","Harrowed Society Student","Magaambyan Initiate","Occultist","School Savant","Spell Specialist","Twilight Sage","Unlettered Arcanist","White Mage"],
    "Barbarian": ["Armored Hulk","Beastkin Berserker","Breaker","Brutal Pugilist","Brutish Swamper","Cave Dweller","Deepwater Rager","Dreadnought","Drunken Brute","Drunken Rager","Elemental Kin","Fearsome Defender","Feral Gnasher","Flesheater","Geminate Invoker","Giant Stalker","Hateful Rager","Hurler","Invulnerable Rager","Jungle Rager","Mad Dog","Mooncursed","Mounted Fury","Numerian Liberator","Pack Hunter","Pack Rager","Primal Hunter","Raging Cannibal","Savage Barbarian","Savage Technologist","Scarred Rager","Sea Reaver","Sharptooth","Shoanti Burn Rider","Superstitious","Titan Mauler","Totem Warrior","True Primitive","Untamed Rager","Urban Barbarian","Wild Rager","Wildborn"],
    "Barbarian (Unchained)":  ["Armored Hulk","Beastkin Berserker","Breaker","Brutal Pugilist","Brutish Swamper","Cave Dweller","Deepwater Rager","Dreadnought","Drunken Brute","Drunken Rager","Elemental Kin","Fearsome Defender","Feral Gnasher","Flesheater","Geminate Invoker","Giant Stalker","Hateful Rager","Hurler","Invulnerable Rager","Jungle Rager","Mad Dog","Mooncursed","Mounted Fury","Numerian Liberator","Pack Hunter","Pack Rager","Primal Hunter","Raging Cannibal","Savage Barbarian","Savage Technologist","Scarred Rager","Sea Reaver","Sharptooth","Shoanti Burn Rider","Superstitious","Titan Mauler","Totem Warrior","True Primitive","Untamed Rager","Urban Barbarian","Wild Rager","Wildborn"],
    "Bard": ["Animal Speaker","Arcane Duelist","Arcane Healer","Archaeologist","Archivist","Argent Voice","Arrowsong Minstrel","Averaka Arbiter","Brazen Deceiver","Buccaneer","Busker","Celebrity","Chelish Diva","Chronicler of Worlds","Court Bard","Court Fool","Cultivator","Daredevil","Dawnflower Dervish","Demagogue","Dervish Dancer","Detective","Dirge Bard","Disciple of the Forked Tongue","Dragon Herald","Dragon Yapper","Duettist","Dwarven Scholar","Faith Singer","Fey Courtier","Fey Prankster","Filidh","First World Minstrel","Flame Dancer","Flamesinger","Fortune-Teller","Geisha","Hatharat Agent","Hoaxer","Impervious Messenger","Juggler","Lotus Geisha","Luring Piper","Magician","Masked Performer","Mute Musician","Negotiator","Phrenologist","Pitax  Academy of Grand Arts","Plant Speaker","Prankster","Provocateur","Ringleader (AG)","Ringleader (UI)","Sandman","Savage Skald","Sea Singer","Shadow Puppeteer","Silver Balladeer","Solacer","Songhealer","Sorrowsoul","Sound Striker","Speaker of the Palatine Eye","Stonesinger","Street Performer","Studious Librarian","Thundercaller","Voice of Brigh","Voice of the Wild","Wasteland Chronicler","Watersinger","Wit"],
    "Bloodrager": ["Ancestral Harbinger","Blood Conduit","Bloodrider","Bloody-Knuckled Rowdy","Crossblooded Rager","Enlightened Bloodrager","Greenrager","Hag-Riven","Id Rager","Metamagic Rager","Primalist","Prowler at World's End","Rageshaper","Spelleater","Steelblood","Symbol Striker","Untouchable Rager","Urban Bloodrager"],
    "Brawler": ["Battle Dancer","Bouncer","Constructed Pugilist","Exemplar","Feral Striker","Hinyasi","Living Avalanche","Mutagenic Mauler","Shield Champion","Snakebite Striker","Steel-Breaker","Strangler","Strong-Side Boxer","Turfer","Ulfen Beast-Wrestler","Venomfist","Verdant Grappler","Wild Child","Winding Path Renegade"],
    "Cavalier": ["Beast Rider","Castellan","Charger","Circuit Judge","Constable","Courtly Knight","Daring Champion","Daring General","Disciple of the Pike","Drakerider","Emissary","Esquire","Fell Rider","First Mother's Fang","Gallant","Gendarme","Ghost Rider","Green Knight","Herald Squire","Honor Guard","Hooded Knight","Huntmaster","Hussar","Knight of Arnisant","Luring Cavalier","Musketeer","Oceanrider","Qabarat Outrider","Qadiran Horselord","Saurian Champion","Sister-in-Arms","Spellscar Drifter","Standard Bearer","Strategist","Verdivant","Vermin Tamer","Wave Rider"],
    "Cleric": ["Angelfire Apostle","Appeaser","Asmodean Advocate","Blossoming Light","Cardinal","Channeler of the Unknown","Cloistered Cleric","Crashing Wave","Crusader","Demonic Apostle","Divine Paragon","Divine Scourge","Divine Strategist","Ecclesitheurge","Elder Mythos Cultist","Evangelist","Fiendish Vessel","Forgemaster","Foundation of Faith","Herald Caller","Hidden Priest","Idealist","Iron Priest","Lawspeaker","Mendevian Priest","Merciful Healer","Roaming Exorcist","Sacred Attendant","Scroll Scholar","Separatist","Stoic Caregiver","Theologian","Triadic Priest","Undead Lord","Varisian Pilgrim"],
    "Druid": ["Aerie Protector","Ancient Guardian","Ape Shaman","Aquatic Druid","Arctic Druid","Ashvawg Tamer","Bat Shaman","Bear Shaman","Blight Druid","Boar Shaman","Cave Druid","Death Druid","Defender of the True World","Desert Druid","Devolutionist","Dinosaur Druid","Draconic Druid","Dragon Shaman","Drovier","Eagle Shaman","Elemental Ally","Feral Child","Feral Shifter","Feyspeaker","Fungal Pilgrim","Goliath Druid","Green Faith Initiate","Green Scourge","Halcyon Druid","Jungle Druid","Kraken Caller","Leshy Warden","Life Channeler","Lion Shaman","Mantella","Menhir Savant","Mooncaller","Mountain Druid","Naga Aspirant","Nature Fang","Nature Priest","Nithveil Adept","Pack Lord","Plains Druid","Planar Extremist","Progenitor","Reincarnated Druid","Restorer","River Druid","Road Keeper","Rot Warden","Saurian Shaman","Season Keeper","Season Sage","Serpent Shaman","Shark Shaman","Skinshaper","Sky Druid","Storm Druid","Sunrider","Supernaturalist","Survivor","Swamp Druid","Swarm Monger","Tempest Druid","Tempest Tamer","Toxicologist","Treesinger","Troll Fury","Undine Adept","Urban Druid","Urushiol","Wild Whisperer","Wolf Shaman","World Walker"],
    "Fighter": ["Aerial Assaulter","Airborne Ambusher","Aldori Defender","Aquanaut","Archer","Armiger","Armor Master","Brawler","Cad","Calistrian Hunter","Cavern Sniper","Child of Acavna and Amaznen","Corsair","Crossbowman","Cyber-Soldier","Dirty Fighter","Dragonheir Scion","Dragoon","Drill Sergeant","Druman Blackjacket","Eldritch Guardian","Foehammer","Free Hand Fighter","Gladiator","Gloomblade","High Guardian","Lore Warden","Lore Warden (PFS Field Guide)","Martial Master","Mobile Fighter","Molthuni Defender","Mutation Warrior","Opportunist","Pack Mule","Phalanx Soldier","Polearm Master","Qadira  Dawnflower Dervish","Relic Master","Roughrider","Savage Warrior","Scrapper","Seasoned Commander","Sensate","Shielded Fighter","Siegebreaker","Skirmisher","Spear Fighter","Steelbound Fighter","Swarm Fighter","Tactician","Taldor  Rondelero Duelist","Thunderstriker","Titan Fighter","Tower Shield Specialist","Trench Fighter","Tribal Fighter","Two-Handed Fighter","Two-Weapon Warrior","Unarmed Fighter","Unbreakable","Ustalavic Duelist","Varisian Free-Style Fighter","Venomblade","Viking","Warlord","Weapon Bearer Squire","Weapon Master"],
    "Gunslinger": ["Black Powder Vaulter","Blatherskite","Bolt Ace","Buccaneer","Bushwhacker","Commando","Experimental Gunsmith","Firebrand","Graveslinger","Gulch Gunner","Gun Scavenger","Gun Tank","Gunner Squire","Maverick","Musket Master","Mysterious Stranger","Pistolero","Planar Rifter","Scatter Gunner","Siege Gunner","Techslinger","Thronewarden","Wyrm Sniper"],
    "Hunter": ["Aquatic Beastmaster","Chameleon Adept","Colluding Scoundrel","Courtly Hunter","Divine Hunter","Feral Hunter","Feykiller","Flood Flourisher","Forester","Packmaster","Patient Ambusher","Pelagic Hunter","Plant Master","Primal Companion Hunter","Roof Runner","Scarab Stalker","Totem-Bonded","Treestrider","Uprooter Scout","Urban Hunter","Verminous Hunter"],
    "Inquisitor": ["Abolisher","Cloaked Wolf","Cold Iron Warden","Exarch","Exorcist","Expulsionist","Faith Hunter","Green Faith Marshal","Heretic","Hexenhammer","Iconoclast","Immolator","Infiltrator","Keeper of Construct","Keeper of the Current","Kinslayer","Living Grimoire","Monster Tactician","Oathkeeper","Preacher","Ravener Hunter","Reaper of Secrets","Relic Hunter","Royal Accuser","Sacred Huntsmaster","Sanctified Slayer","Secret Seeker","Sin Eater","Spellbreaker","Suit Seeker","Sworn of the Eldest","Tactical Leader","Traceless Operative","Umbral Stalker","Urban Infiltrator","Vampire Hunter","Vigilant Defender","Witch Hunter"],
    "Investigator": ["Antiquarian","Bonded Investigator","Cartographer","Cipher","Conspirator","Cryptid Scholar","Cult Hunter","Dread Investigator","Empiricist","Engineer","Forensic Physician","Gravedigger","Guardian of Immortality","Hallucinist","Holomog Demolitionist","Infiltrator","Jinyiwei","Lamplighter","Lepidstadt Inspector","Majordomo","Malice Binder","Mastermind","Natural Philosopher","Portal Seeker","Profiler","Psychic Detective","Questioner","Reckless Epicurean","Ruthless Agent","Scavenger","Skeptic","Sleuth","Spiritualist","Star Watcher","Steel Hound","Tekritanin Arbiter","Toxin Codexer"],
    "Kineticist": ["Aquakinetcist","Arakineticist","Blightburner","Blighted Defiler","Blood Kineticist","Cinderlands Adept","Dark Elementalist","Elemental Annihilator","Elemental Ascetic","Elemental Purist","Elysiokineticist","Ioun Kineticist","Kinetic Chirurgeon","Kinetic Knight","Leshykineticist","Overwhelming Soul","Psammokinetic","Psychokinetcist","Terrakineticist"],
    "Magus": ["Armored Battlemage","Beastblade","Bladebound","Card Caster","Deep Marshal","Eldritch Archer","Eldritch Scion","Elemental Knight","Esoteric","Fiend Flayer","Greensting Slayer","Hexbreaker","Hexcrafter","Iron-Ring Striker","Jistkan Artificer","Kapenia Dancer","Kensai","Magic Warrior","Mindblade","Myrmidarch","Nature-Bonded Magus","Puppetmaster","Sigilus","Skirnir","Sorrowblade","Soul Forger","Spell Dancer","Spell Trapper","Spellblade","Spire Defender","Staff Magus"],
    "Medium": ["Fiend Keeper","Kami Medium","Medium of the Master","Nexian Channeler","Outer Channeler","Reanimated Medium","Relic Channeler","Rivethun Spirit Channeler","Spirit Dancer","Spirit Eater","Storm Dreamer","Storyteller","Uda Wendo","Vessel of the Failed","Voice of the Void"],
    "Mesmerist": ["Aromaphile","Autohypnotist","Chart Caster","Cult Master","Dreamstalker","Enigma","Eyebiter","Fey Trickster","Gaslighter","Hate-Monger","Material Manipulator","Mindwyrm Mesmer","Projectionist","Spirit Walker","Thought Eater","Toxitician","Umbral Mesmerist","Vexing Daredevil","Vexing Trickster","Vizier","Vox"],
    "Monk": ["Black Asp","Brazen Disciple","Disciple of Wholeness","Drunken Master","Elemental Monk","Far Strike Monk","Flowing Monk","Gray Disciple","Hamatulatsu Master","Harrow Warden","Hellcat","Hungry Ghost Monk","Invested Regent","Ironskin Monk","Karmic Monk","Kata Master","Ki Mystic","Lifting Hand","Maneuver Master","Martial Artist","Master of Many Styles","Menhir Guardian","Monk of the Empty Hand","Monk of the Four Winds","Monk of the Healing Hand","Monk of the Lotus","Monk of the Mantis","Monk of the Sacred Mountain","Monk of the Seven Forms","Nimble Guardian","Nornkith","Ouat","Perfect Scholar","Qinggong Monk","Sage Counselor","Scaled Fist","Scarred Monk","Sensei","Serpent-Fire Adept","Sin Monk","Softstrike Monk","Sohei","Soul Shepherd","Spirit Master","Student of Stone","Terra-Cotta Monk","Tetori","Treetop Monk","Underfoot Adept","Wanderer","Wasteland Meditant","Water Dancer","Weapon Adept","Wildcat","Windstep Master","Zen Archer"],
    "Monk (Unchained)": ["Black Asp","Brazen Disciple","Disciple of Wholeness","Elemental Monk","Invested Regent","Lifting Hand","Monk of the Mantis","Perfect Scholar","Sage Counselor","Scaled Fist","Serpent-Fire Adept","Softstrike Monk","Soul Shepherd","Windstep Master"],
    "Ninja": ["Frozen Shadow","Gunpowder Bombardier","Hunting Serpent","Mask of the Living God","Petal Ninja"],
    "Occultist": ["Ancestral Aspirant","Battle Host","Construct Collector","Curator","Esoteric Initiate","Extemporaneous Channeler","Geomancer","Haunt Collector","Naturalist","Necroccultist","Occult Historian","Panoply Savant","Planar Harmonizer","Psychodermist","Reliquarian","Secret Broker","Sha'ir","Silksworn","Talisman Crafter","Tome Eater"],
    "Oracle": ["Ancient Lorekeeper","Black-Blooded Oracle","Community Guardian","Cyclopean Seer","Divine Numerologist","Dual-Cursed Oracle","Elementalist Oracle","Enlightened Philosopher","Hermit","Inerrant Voice","Keleshite Prophet","Ocean's Echo","Pei Zin Practitioner","Planar Oracle","Possessed Oracle","Psychic Searcher","Purifier","Reincarnated Oracle","River Soul","Seeker","Seer","Shigenjo","Spirit Guide","Stargazer","Tree Soul","Warsighted"],
    "Paladin": ["Banishing Warden","Champion of the Cascade","Chaos Knight","Chosen One","Combat Healer Squire","Divine Defender","Divine Guardian","Divine Hunter","Dusk Knight","Empyreal Knight","Faithful Wanderer","Forest Preserver","Forgefather's Seeker","Ghost Hunter","Gray Paladin","Holy Guide","Holy Gun","Holy Tactician","Hospitaler","Hunting Paladin","Invigorator","Iomedaen Enforcer","Iroran Paladin","Knight of Coins","Kraken Slayer","Legate","Martyr","Mind Sword","Pearl Seeker","Redeemer","Sacred Servant","Sacred Shield","Scion of Talmandor","Shining Knight","Silver Champion","Soul Sentinel","Stonelord","Sword of Valor","Tempered Champion","Temple Champion","Tortured Crusader","Tranquil Guardian","Undead Scourge","Vindictive Bastard","Virtuous Bravo","Warrior of the Holy Light","Wilderness Warden"],
    "Psychic": ["Amnesiac","Esoteric Starseeker","Formless Adept","Magaambyan Telepath","Mutation Mind","Psychic Duelist","Psychic Marauder","Terror Weaver"],
    "Ranger": ["Abendego Diver","Battle Scout","Beast Master","Blightwarden","Bow Nomad","Cinderwalker","Code Runner","Corpse Hunter","Dandy","Darklands Sailor","Deep Walker","Divine Tracker","Dragon Hunter","Drake Warden","Dungeon Rover","Dusk Stalker","Elemental Envoy","Falconer","Flamewarden","Fortune-Finder","Freebooter","Galvanic Saboteur","Groom","Guide","Guildbreaker","Hooded Champion","Horse Lord","Ilsurian Archer","Infiltrator","Jungle Lord","Lantern Lighter","Nirmathi Irregular","Planar Scout","Poison Darter","Raven Master","Realm Wanderer","Sable Company Marine","Sentinel","Shapeshifter","Skirmisher","Spirit Ranger","Stormwalker","Summit Sentinel","Sword-Devil","Tanglebriar Demonslayer","Tidal Hunter","Toxic Herbalist","Toxophilite","Transporter","Trapper","Trophy Hunter","Urban Ranger","Warden","Wave Warden","Wild Hunter","Wild Shadow","Wild Soul","Wild Stalker","Wilderness Explorer","Wilderness Medic","Witchguard","Yokai Hunter"],
    "Rogue": ["Acrobat","Bandit","Bekyar Kidnapper","Bellflower Irrigator","Burglar","Carnivalist","Cat Burglar","Chameleon","Charlatan","Consigliere","Construct Saboteur","Counterfeit Mage","Cutpurse","Dark Lurker","Deadly Courtesan","Desert Raider","Discretion Specialist","Dreamthief","Driver","Earthshadow","Eldritch Raider","Eldritch Scoundrel","Escapologist","False Medium","Fey Prankster","Filcher","Galtan Agitator","Guerrilla","Guild Agent","Gun Smuggler","Heister","Investigator","Kintargo Rebel","Kitsune Trickster","Knife Master","Makeshift Scrapper","Master of Disguise","Nameless Shadow","Needler","Numerian Scavenger","Okeno Liberator","Phantom Thief","Pirate","Planar Sneak","Poisoner","Rake","Relic Raider","River Rat","Roof Runner","Rotdrinker","Sanctified Rogue","Sapper","Scout","Scroll Scoundrel","Sczarni Swindler","Seeker of the Lost","Shadow Scion","Shadow Walker","Sharper","Skulking Slayer","Sly Saboteur","Smuggler","Snare Setter","Sniper","Snoop","Spy","Survivalist","Swamp Poisoner","Swashbuckler","Swordmaster","Sylvan Trickster","Thug","Tidal Trickster","Toxic Talon","Trapsmith","Underground Chemist","Vexing Dodger","Waylayer"],
    "Rogue (Unchained)": ["Acrobat","Bandit","Bekyar Kidnapper","Bellflower Irrigator","Burglar","Carnivalist","Cat Burglar","Chameleon","Charlatan","Consigliere","Construct Saboteur","Counterfeit Mage","Cutpurse","Dark Lurker","Deadly Courtesan","Desert Raider","Discretion Specialist","Dreamthief","Driver","Earthshadow","Eldritch Raider","Eldritch Scoundrel","Escapologist","False Medium","Fey Prankster","Filcher","Galtan Agitator","Guerrilla","Guild Agent","Gun Smuggler","Heister","Investigator","Kintargo Rebel","Kitsune Trickster","Knife Master","Makeshift Scrapper","Master of Disguise","Nameless Shadow","Needler","Numerian Scavenger","Okeno Liberator","Phantom Thief","Pirate","Planar Sneak","Poisoner","Rake","Relic Raider","River Rat","Roof Runner","Rotdrinker","Sanctified Rogue","Sapper","Scout","Scroll Scoundrel","Sczarni Swindler","Seeker of the Lost","Shadow Scion","Shadow Walker","Sharper","Skulking Slayer","Sly Saboteur","Smuggler","Snare Setter","Sniper","Snoop","Spy","Survivalist","Swamp Poisoner","Swashbuckler","Swordmaster","Sylvan Trickster","Thug","Tidal Trickster","Toxic Talon","Trapsmith","Underground Chemist","Vexing Dodger","Waylayer"],
    "Samurai": ["Brawling Blademaster","Ironbound Sword","Soverign Blade","Sword Saint","Ward Speaker","Warrior Poet","Yojimbo"],
    "Shaman": ["Animist","Benefactor","Crystal Tender","Deep Shaman","Draconic Shaman","Grasping Vine","Name-Keeper","Overseer","Possessed Shaman","Primal Warden","Serendipity Shaman","Speaker for the Past","Spirit Warden","True Silvered Throne","Unsworn Shaman","Visionary","Witch Doctor"],
    "Shifter": ["Adaptive Shifter","Dragonblood Shifter","Elementalist Shifter","Feyform Shifter","Fiendflesh Shifter","Holy Beast","Leafshifter","Oozemorph","Rageshaper","Style Shifter","Swarm Shifter","Verdant Shifter","Weretouched","Wild Effigy"],
    "Skald": ["Augur","Bacchanal","Battle Scion","Bekyar Demon Dancer","Belkzen War Drummer","Boaster","Bold Schemer","Court Poet","Dragon Skald","Elegist","Fated Champion","Herald of the Horn","Hunt Caller","Instigator","Red Tongue","Serpent Herald","Spell Warrior","Sunsinger","Totem Channeler","Totemic Skald","Twilight Speaker","Undying Word","Urban Skald","War Painter","Warlord","Wyrm Singer"],
    "Slayer": ["Ankou's Shadow","Avalancher","Bloody Jake","Bounty Hunter","Butterfly Blade","Cleaner","Covenbane","Cutthroat","Deliverer","Dune Rider","Family Hunter","Grave Warden","Guerrilla","Pureblade","Sczarni Executioner","Sniper","Spawn Slayer","Spire Diver","Spiritslayer","Stygian Slayer","Toxic Sniper","Turncoat","Vanguard","Velvet Blade","Witch Killer","Woodland Sniper"],
    "Sorcerer": ["Crossblooded","Dragon Drinker","Eldritch Scrapper","Mongrel Mage","Nine-Tailed Heir","Razmiran Priest","Seeker","Sorcerer of Sleep","Stone Warder","Tattooed Sorcerer","Umbral Scion","Wishcrafter"],
    "Spiritualist": ["Drowned Channeler","Ectoplasmatist","Exciter","Fated Guide","Fractured Mind","Geist Channeler","Grim Apostle","Hag-Haunted","Haunted","Involutionist","Necrologist","Onmyoji","Phantom Blade","Plague Eater","Priest of the Fallen","Quintessentialist","Scourge","Seeker of Enlightenment","Shadow Caller","Soul Warden","Totem Spiritualist","Usher of Lost Souls","Ward Spiritualist","Zeitgeist Binder"],
    "Summoner": ["Blood God Disciple","Blood Summoner","Broodmaster","Counter-Summoner","Evolutionist","First Worlder","God Caller","Leshy Caller","Master Summoner","Morphic Savant","Naturalist","Pyroclast","Shadow Caller","Shaitan Binder","Spirit Summoner","Storm Caller","Story Summoner","Synthesist","Twinned Summoner","Unwavering Conduit","Wild Caller (ARG)","Wild Caller (HotW)"],
    "Summoner (Unchained)": ["Construct Caller","Devil Binder","Devil Impostor","Fey Caller","God Caller","Leshy Caller","Soulbound Summoner","Storm Caller","Twinned Summoner"],
    "Swashbuckler": ["Arrow Champion","Azatariel","Courser","Daring Infiltrator","Dashing Thief","Flying Blade","Guiding Blade","Inspired Blade","Mouser","Musketeer","Mysterious Avenger","Noble Fencer","Okayo Corsair","Picaroon","Rondelero Swashbuckler","Rostland Bravo","Shackles Corsair","Veiled Blade","Whirling Dervish","Wildstrider"],
    "Vigilante": ["Agathiel","Anaphexia Thought-Killer","Avenging Beast","Bellflower Harvester","Brute","Cabalist","Chu Ye Enforcer","Darklantern","Dragonscale Loyalist","Experimenter","Faceless Enforcer","Ferocious Hunter","Gunmaster","Half-Elf Double Scion","Hangman","Hidden Current","Imperial Agent","Magical Child","Masked Maiden","Mounted Fury","Mutated Defender","Psychometrist","Serial Killer","Splintersoul","Teisatsu","Warlock","Wildsoul","Zealot"],
    "Warpriest": ["Calamity Caller","Champion of the Faith","Cult Leader","Disenchanter","Divine Champion","Divine Commander","Feral Champion","Fist of the Godclaw","Forgepriest","Jistkan Magistrate","Liberty's Blade","Mantis Zealot","Molthuni Arsenal Chaplain","Proclaimer","Proselytizer","Sacred Fist","Shieldbearer","Sixth Wing Bulwark"],
    "Witch": ["Alley Witch","Ashiftah","Beast-Bonded","Bonded Witch","Bouda","Cartomancer","Coral Witch","Demon-Sworn","Dimensional Occultist","Dreamweaver","Flood Walker","Gingerbread Witch","Gravewalker","Hag of Gyronna","Hagbound","Havocker","Hedge Witch","Herb Witch","Hex Channeler","Invoker","Jinx Witch","Ley Line Guardian","Medium","Mirror Witch","Mountain Witch","Nexian Spellspy","Pact Witch","Putrefactor","Rhetorician","Scarred Witch Doctor","Sea Witch","Season Witch","Seducer","Synergist","Tatterdemalion","Vellemancer","Veneficus Witch","Venom Siphoner","White-Haired Witch","Winter Witch","Witch-Watcher","Wyrm Witch"],
    "Wizard": ["Absalom  Arcanamirium Crafter","Arcane Bomber","Arcane Physician","Arcane Warden","Bonded Wizard","Cheliax  Egorian Academy Infernal Binder","Chronomancer","Clocksmith","Cruoromancer","Elder Mythos Scholar","Exploiter Wizard","Familiar Adept","First World Caller","Hallowed Necromancer","Instructor","Pact Wizard (FF)","Pact Wizard (HHH)","Poleiheira Adherent","Primalist","Qadira  Mage of the Veil","Runesage","Scroll Scholar","Scrollmaster","Shadowcaster","Siege Mage","Spell Sage","Spellbinder","Spellslinger","Spirit Binder","Spirit Whisperer","Sword Binder","Thassilonian Specialist","Undead Master","Wind Listener","Worldseeker"],
});

const prestigeClasses = ["Agent of the Grave","Aldori Swordlord","Arcane Archer","Arcane Trickster","Arclord of Nex","Argent Dramaturge","Asavir","Ashavic Dancer","Aspis Agent","Assassin","Balanced Scale of Abadar","Battle Herald","Bellflower Tiller","Blackfire Adept","Bloatmage","Brewkeeper","Brightness Seeker","Brother of the Seal","Champion of Irori","Chernasardo Warden","Chevalier","Crimson Templar","Cyphermage","Daggermark Poisoner","Daivrat","Darechaser","Dawnflower Anchorite","Dawnflower Dissident","Death Slayer","Demoniac","Devoted Muse","Diabolist","Divine Scion","Dragon Disciple","Duelist","Eldritch Knight","Enchanting Courtesan","Envoy of Balance","Esoteric Knight","Evangelist","Exalted","Feysworn","Genie Binder","Golden Legionnaire","Gray Corsair","Gray Gardener","Green Faith Acolyte","Halfling Opportunist","Harrower","Hellknight","Hellknight Signifer","Heritor Knight","Hinterlander","Holy Vindicator","Horizon Walker","Inheritor's Crusader","Inner Sea Pirate","Justicar","Knight of Ozem","Lantern Bearer","Liberator","Lion Blade","Living Monolith","Loremaster","Low Templar","Magaambyan Arcanist","Mammoth Rider","Master Chymist","Master Spy","Mortal Usher","Mystery Cultist","Mystic Theurge","Nature Warden","Noble Scion","Pain Taster","Pathfinder Chronicler","Pathfinder Delver","Pathfinder Field Agent","Pathfinder Savant","Pit Fighter","Proctor","Prophet of Kalistrade","Pure Legion Enforcer","Rage Prophet","Razmiran Priest","Red Mantis Assassin","Riftwarden","Ritualist","Rivethun Emissary","Rose Warden","Runeguard","Sacred Sentinel","Sanguine Angel","Scar Seeker","Sentinel","Shackles Pirate","Shadowdancer","Shieldmarshal","Skyseeker","Sleepless Detective","Soul Warden","Souldrinker","Sphere Singer","Spherewalker","Stalwart Defender","Stargazer","Steel Falcon","Storm Kindler","Student of Perfection","Student of War","Tattooed Mystic","Technomancer","Thuvian Alchemist","Twilight Talon","Ulfen Guard","Umbral Court Agent","Veiled Illusionist","Westcrown Devil","Winter Witch"]

let percentOfCoreRace = 60;
let percentOfNoArchetype = 10;
let percentOfWithPrestige = 30;
let prestigeClassesToShow = 3;

function setDefaultValues() {
    document.getElementById('percentOfCoreRace').value = percentOfCoreRace;
    document.getElementById('percentOfNoArchetype').value = percentOfNoArchetype;
    document.getElementById('percentOfWithPrestige').value = percentOfWithPrestige;
    document.getElementById('prestigeClassesToShow').value = prestigeClassesToShow;
    document.getElementById('percentOfCoreRace').addEventListener("change", setPercentOfCoreRace);
    document.getElementById('percentOfNoArchetype').addEventListener("change", setPercentOfNoArchetype);
    document.getElementById('percentOfWithPrestige').addEventListener("change", setPercentOfWithPrestige);
    document.getElementById('prestigeClassesToShow').addEventListener("change", setPrestigeClassesToShow);
}
function setPercentOfCoreRace(e) {percentOfCoreRace = +e.target.value;}
function setPercentOfNoArchetype(e) {percentOfNoArchetype = +e.target.value;}
function setPercentOfWithPrestige(e) {percentOfWithPrestige = +e.target.value;}
function setPrestigeClassesToShow(e) {prestigeClassesToShow = +e.target.value;}

function getRandomInt(max) {
    const arr = new Uint32Array(1);
    window.crypto.getRandomValues(arr);
    const randomNumber = arr[0] / 4294967295;
    return Math.floor(randomNumber * Math.floor(max));
}

function roll1d6() {
    return getRandomInt(6)+1;
}

function getPercent() {
    return getRandomInt(100) + 1;
}

function rollRace() {
    const isCoreRace = getPercent() <= percentOfCoreRace;
    if (isCoreRace) {
        return coreRaces[getRandomInt(coreRaces.length)]
    } else {
        return getReincarnateRace();
    }
}

function rollClass() {
    const _class = classes[getRandomInt(classes.length)]
    const archetypesForClass = archetypesByClass[_class];
    const withArchetype = getPercent() > percentOfNoArchetype;
    let archetype = withArchetype ? archetypesForClass[getRandomInt(archetypesForClass.length)]: 'no archetype';
    return `${_class} (${archetype})`
}

function rollPrestigeClass() {
    const withPresigeClass = getPercent() <= percentOfWithPrestige;
    prestigeClassIds = new Set();
    if (withPresigeClass && prestigeClassesToShow > 0) {
        for (let i = 0; i < prestigeClassesToShow; i++) {
            let randomId;
            do {
                randomId = getRandomInt(prestigeClasses.length);
            } while (prestigeClassIds.has(randomId));
            prestigeClassIds.add(randomId);
        }
        const separatedClasses = Array.from(prestigeClassIds).map(id => prestigeClasses[id]).join(' / ');
        return `[${separatedClasses}]`
    } else {
        return `[no prestige class]`
    }
}

function rollCharacter() {
    const race = rollRace();
    const _class = rollClass();
    const prestige = rollPrestigeClass();

    return `${race} ${_class} ${prestige}`;
}

function addCharacterToList() {
    const character = rollCharacter();
    const charactersContainer = document.getElementById("characters");
    const p = document.createElement("p");
    p.innerHTML = character;
    charactersContainer.appendChild(p);
}

function rollOneStatAndGetHtml() {
    const values = [roll1d6(), roll1d6(), roll1d6(), roll1d6()];
    const sortedValues = [...values].sort((a,b) => a - b);
    const sum = sortedValues[1]+sortedValues[2]+sortedValues[3];
    const minValue = sortedValues[0];
    let valuesWithInfo = [];
    let isMinRemoved = false;
    for(let value of values) {
        if (isMinRemoved || value !== minValue) {
            valuesWithInfo.push({val: value, isMin: false});
        } else {
            valuesWithInfo.push({val: value, isMin: true});
            isMinRemoved = true;
        }
    }

    function printValue(valueWithInfo) {return valueWithInfo.isMin ? `${valueWithInfo.val}` : `<b>${valueWithInfo.val}</b>`}

    let joinedValues = valuesWithInfo.map(v => printValue(v)).join('  ');
    return `<b>${sum}</b> (${joinedValues})`;
}

function rollStatArrayAndAddHtml() {
    const statsContainer = document.getElementById("stats");
    const rollgroup = document.createElement("div");
    rollgroup.classList.add("rollgroup");
    for (let i = 0; i < 6; i++) {
        const p = document.createElement("p");
        p.innerHTML = rollOneStatAndGetHtml();
        rollgroup.appendChild(p);   
    }
    statsContainer.appendChild(rollgroup);
}
