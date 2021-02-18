function toPrestigeClassesList(htmlTable) {
    // remove bad lines
    htmlTable = htmlTable.replace(/^((?!ItemName).)*$\n/gm, '');
    htmlTable = htmlTable.replace('\n\n', '\n')
    htmlTable = htmlTable.replace('\n\n', '\n')
    htmlTable = htmlTable.replace('\n\n', '\n')
    htmlTable = htmlTable.replace('\n\n', '\n')
    htmlTable = htmlTable.replace('\n\n', '\n')
    htmlTable = htmlTable.replace(/^.*ItemName=(.*?)".*$/gm, '$1')
    const classes = htmlTable
        .split("\n")
        .filter(l => l.length > 0)
        .map(l => `"${l}"`)
        .join(',');
    return classes;
}

const table = `<tbody><tr style="color:White;background-color:Black;font-weight:bold;">
<th scope="col">Name</th><th scope="col">Summary</th>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Agent of the Grave">Agent of the Grave</a></td><td>Promising servant of the Whispering Way.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Aldori Swordlord"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Aldori Swordlord</a></td><td>Disciplined duelist from Brevoy.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Arcane Archer"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Arcane Archer</a></td><td>An arcane spellcaster who draws upon ancient elven traditions to infuse his arrows with potent magical power.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Arcane Trickster"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Arcane Trickster</a></td><td>A troublemaker and a scoundrel who uses arcane magic to enhance her thievery and trickery.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Arclord of Nex">Arclord of Nex</a></td><td> Formally trained Nexian diviner.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Argent Dramaturge"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Argent Dramaturge</a></td><td>Bard who wields anti-fiend magic</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Asavir"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Asavir</a></td><td>Al-Zabriti horseman with a genie-blessed horse</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Ashavic Dancer"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Ashavic Dancer</a></td><td>Servants of Ashava who use mystical dances to bring rest to the undead </td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Aspis Agent">Aspis Agent</a></td><td>Unscrupulous mercenary treasure hunter.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Assassin">Assassin</a></td><td>A remorseless murderer who kills for money and the sheer thrill of death-dealing.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Balanced Scale of Abadar"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> <img src="images\ThreeFiveSymbol.gif" title="3.5 Material" style="margin: 3px 3px 0px 3px">Balanced Scale of Abadar</a></td><td>Treasure seeking servant of Abadar.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Battle Herald"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Battle Herald</a></td><td>A veteran whose masterful tactics and air of command inspire allies to greater feats of heroism.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Bellflower Tiller"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Bellflower Tiller</a></td><td>Halfling freedom fighter of Cheliax.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Blackfire Adept">Blackfire Adept</a></td><td> Evil summoner of fiends.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Bloatmage"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Bloatmage</a></td><td>Master of the arcane art of hemotheurgy.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Brewkeeper">Brewkeeper</a></td><td>Sacred brewers of Cayden Cailean who can distill spells into liquor</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Brightness Seeker"><img src="images\ThreeFiveSymbol.gif" title="3.5 Material" style="margin: 3px 3px 0px 3px">Brightness Seeker</a></td><td>Revered seer of elven-kind.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Brother of the Seal"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Brother of the Seal</a></td><td> Guardian of ancient secrets.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Champion of Irori"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Champion of Irori</a></td><td> Devout hand-to-hand master.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Chernasardo Warden"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Chernasardo Warden</a></td><td>Chernasardo warden is a title that few can reasonably hope to earn. Among the freedom fighters, wardens have proven themselves again and again, taking on enemies that threaten the fate of Nirmathas.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Chevalier"><img src="images\ThreeFiveSymbol.gif" title="3.5 Material" style="margin: 3px 3px 0px 3px">Chevalier</a></td><td>A heroic do-gooder with Cayden Cailean aspirations.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Crimson Templar"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Crimson Templar</a></td><td>Holy warriors of Ragathiel who fight the forces of Hell with sacred fire</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Cyphermage"><img src="images\PathfinderSocietySymbolN.gif" title="A cyphermage replaces any Spell Focus feat for Scribe Scroll as a prerequisite, and may not choose the swift scrivener ability from the list of available cypher lore" style="margin:3px 3px 0px 3px;"> Cyphermage</a></td><td>Student of ancient history and runic lore, with a particular focus on the monuments and magics of ancient Thassilon.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Daggermark Poisoner">Daggermark Poisoner</a></td><td> Devious and crafty toxicologist.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Daivrat"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Daivrat</a></td><td>Friend of genies, diplomat amongst their kind.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Darechaser"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Darechaser</a></td><td>Athletes of Kurgess who push themselves to exceed their limits </td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Dawnflower Anchorite">Dawnflower Anchorite</a></td><td>Hermits of Sarenrae who channel light to smite their foes.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Dawnflower Dissident"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Dawnflower Dissident</a></td><td> Secretive emissary of Sarenrae.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Death Slayer"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Death Slayer</a></td><td>Hired assassin of the undead</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Demoniac">Demoniac</a></td><td>Servant to a powerful Demon Lord.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Devoted Muse"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Devoted Muse</a></td><td>Muses of Shelyn who have mastered an artistic form of combat for self-defense</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Diabolist">Diabolist</a></td><td>Those who seek to control the power of Hell.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Divine Scion"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Divine Scion</a></td><td>Chosen by a god to fulfill a sacred mission, the divine scion has the spark of divinity within them.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Dragon Disciple"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Dragon Disciple</a></td><td>An arcane spellcaster who has embraced his latent draconic heritage and, over the course of training and devotion, undergoes a partial transformation into a dragon.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Duelist"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Duelist</a></td><td>A swashbuckling swordfighter who relies upon grace, poise, and acrobatics to win the day.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Eldritch Knight"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Eldritch Knight</a></td><td>An arcane spellcaster who augments his magical skills with combat to create a deadly combination of weapons and magic.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Enchanting Courtesan"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Enchanting Courtesan</a></td><td>Diviners and enchanters who use their talents to become information brokers.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Envoy of Balance"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Envoy of Balance</a></td><td>Standing beyond good and evil, outside law and chaos, an envoy of balance serves as the countering force against any extremism that seeks to elevate one alignment above all others.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Esoteric Knight">Esoteric Knight</a></td><td>Powerful warriors who combine martial technique with occult or elemental power</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Evangelist"><img src="images\PathfinderSocietySymbolN.gif" title="The evangelist prestige class may not be taken as an option until 6th level" style="margin:3px 3px 0px 3px;"> Evangelist</a></td><td>Of all the preeminent followers of the core deities, the evangelist is the hardest to predict and shows the most variety in her abilities.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Exalted"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Exalted</a></td><td>The exalted exemplifies the teachings of her faith. More than a religious leader, she is the embodiment of faith that all members of the religion strive to emulate.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Feysworn"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Feysworn</a></td><td>Servents of the enigmatic Eldest</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Genie Binder"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Genie Binder</a></td><td>Especially powerful conjurers compel genies into service as often as they pay them fairly in treasures or favors.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Golden Legionnaire"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Golden Legionnaire</a></td><td>High-ranking protector of Andoran.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Gray Corsair"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Gray Corsair</a></td><td>Naval member of Andor's Eagle Knights</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Gray Gardener">Gray Gardener</a></td><td> Deadly agent of the Revolutionary Council.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Green Faith Acolyte"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Green Faith Acolyte</a></td><td> Talented member of a druidic order.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Halfling Opportunist"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Halfling Opportunist</a></td><td>Halfling that makes his own luck.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Harrower"><img src="images\PathfinderSocietySymbolN.gif" title="To use the abilities from the Harrower prestige class, only a Harrow deck may be used. Any alternative means to simulate the Harrow deck, such as a normal deck of cards or dice, is not legal" style="margin:3px 3px 0px 3px;"> Harrower</a></td><td>Spellcaster who can weave Harrow cards into her spells.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Hellknight"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Hellknight</a></td><td>	Disciplined executer of law.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Hellknight Signifer"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Hellknight Signifer</a></td><td>Masked, magic-wielding Hellknight.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Heritor Knight">Heritor Knight</a></td><td>Knights of Iomedae that seek to emulate her mortal life.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Hinterlander">Hinterlander</a></td><td>Archers of Erastil that guard frontier towns</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Holy Vindicator"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Holy Vindicator</a></td><td>A pious warrior who spreads religion at the edge of a sword.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Horizon Walker"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Horizon Walker</a></td><td>A scout and wanderer comfortable in even the strangest terrain.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Inheritor's Crusader"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Inheritor's Crusader</a></td><td>Righteous champion of Iomedae.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Inner Sea Pirate"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Inner Sea Pirate</a></td><td>Pirates of the Inner Sea region sail many different bodies of water in search of plunder.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Justicar"><img src="images\ThreeFiveSymbol.gif" title="3.5 Material" style="margin: 3px 3px 0px 3px">Justicar</a></td><td>Holy enforcer of the teachings of Abadar.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Knight of Ozem"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Knight of Ozem</a></td><td> Zealous destroyer of undead.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Lantern Bearer"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Lantern Bearer</a></td><td>Elven eradicator of drow.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Liberator"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> <img src="images\ThreeFiveSymbol.gif" title="3.5 Material" style="margin: 3px 3px 0px 3px">Liberator</a></td><td>The hope of slaves everywhere.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Lion Blade"><img src="images\PathfinderSocietySymbolN.gif" title=" a Lion Blade PC must be a member of the Sovereign Court faction." style="margin:3px 3px 0px 3px;"> Lion Blade</a></td><td>Member of Taldor's most secretive school of fighting arts.
</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Living Monolith"><img src="images\PathfinderSocietySymbolN.gif" title="The roleplaying requirement is waived, but when taking the prestige class, 1,000 gp must be spent to acquire the stone scarab" style="margin:3px 3px 0px 3px;"> Living Monolith</a></td><td>Living monoliths are mortals who willingly take on the mantle of immortal warriors through ritual and devotion, imbuing themselves with the patience and eternal strength of stone.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Loremaster"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Loremaster</a></td><td>A spellcaster who devotes his life to research and rumination upon the mysteries of the world.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Low Templar"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Low Templar</a></td><td>Greedy crusader fighting the denizens of the Worldwound.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Magaambyan Arcanist"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Magaambyan Arcanist</a></td><td>Benevolent student of Old-Mage Jatembe.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Mammoth Rider"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Mammoth Rider</a></td><td>Tamer of beasts in the northern wilds.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Master Chymist"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Master Chymist</a></td><td>An alchemist whose mutagens create an alternate, brutish personality.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Master Spy"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Master Spy</a></td><td>An espionage expert specializing in disguises and striking swiftly from the shadows.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Mortal Usher">Mortal Usher</a></td><td>Servants of the psychopomps who can act where the psychopomps cannot</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Mystery Cultist"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Mystery Cultist</a></td><td>These zealots hone their spellcasting powers in honor of their patron empyreal lord and dedicate their lives to the teachings of this entity.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Mystic Theurge"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Mystic Theurge</a></td><td>Equally devoted to divine and arcane magic, the mystic theurge combines both magical traditions into one incredibly diverse class.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Nature Warden"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Nature Warden</a></td><td>A master of the wilderness bonded spiritually to a fearsome animal companion.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Noble Scion">Noble Scion</a></td><td> Resource-laden member of foreign royalty.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Pain Taster"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Pain Taster</a></td><td>For pain tasters, agony is more than a pleasure—it’s a path to power.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Pathfinder Chronicler"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Pathfinder Chronicler</a></td><td>An explorer at heart, the Pathfinder chronicler travels to distant, exotic lands to expand her knowledge of the world.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Pathfinder Delver"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Pathfinder Delver</a></td><td>	Grand adventure seeker of the Pathfinder Society.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Pathfinder Field Agent"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Pathfinder Field Agent</a></td><td>Equipped with a variety of skills and trained to keep a
cool head even in the most dire circumstances, a practiced
Pathfinder field agent is a boon to any adventuring party.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Pathfinder Savant"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Pathfinder Savant</a></td><td>Master sage of the Pathfinder Society.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Pit Fighter">Pit Fighter</a></td><td> Gladiatorial brawler and performer.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Proctor">Proctor</a></td><td>Ardent worshipers of a monitor demigod: an aeon, primal inevitable, protean lord, or psychopomp usher.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Prophet of Kalistrade"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Prophet of Kalistrade</a></td><td> Savvy mercantile spellcaster.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Pure Legion Enforcer"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Pure Legion Enforcer</a></td><td>The Pure Legion is a government-sponsored military organization created to enforce the Laws of Man within Rahadoum’s borders and territorial waters. </td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Rage Prophet"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Rage Prophet</a></td><td>A bold and barbaric champion who embraces otherworldly powers in order to perfect the art of combat.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Razmiran Priest">Razmiran Priest</a></td><td> False divine caster of Razmir.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Red Mantis Assassin">Red Mantis Assassin</a></td><td>Elite assassin of the Red Mantis cult.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Riftwarden"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Riftwarden</a></td><td>Sealer of extraplanar portals.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Ritualist">Ritualist</a></td><td>Individuals who specialize in using occult rituals, being able to perform rituals more quickly and easily</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Rivethun Emissary"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Rivethun Emissary</a></td><td>Animists of a dwarven spiritual religion</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Rose Warden"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Rose Warden</a></td><td>Champions of Milani who protect and guide revolutions </td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Runeguard"><img src="images\PathfinderSocietySymbolN.gif" title="You must have a Chronicle sheet that opens this prestige class as a legal option in order to take levels in it.; A runeguard substitutes any Spell Focus feat for Scribe Scroll as a prerequisite." style="margin:3px 3px 0px 3px;"> Runeguard</a></td><td>Arcanists of Soralyon who use the benevolent form of ancient Thassilonian rune magic</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Sacred Sentinel"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Sacred Sentinel</a></td><td>Guardians of Torag that serve as a shield for their allies.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Sanguine Angel"><img src="images\PathfinderSocietySymbolN.gif" title="A sanguine angel does not have to be female" style="margin:3px 3px 0px 3px;"> Sanguine Angel</a></td><td>Former Gray Maidens who have entered the service of Cheliax and the Queens of the Night</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Scar Seeker"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Scar Seeker</a></td><td>Followers of Vildeis who scar their bodies to prove their devotion</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Sentinel"><img src="images\PathfinderSocietySymbolN.gif" title="The sentinel's righteous leader class feature is replaced with a deity specific feat of the player's choice from pages 204-217 or the Persuasive feat" style="margin:3px 3px 0px 3px;"> Sentinel</a></td><td>The sentinel is a warrior who receives special powers in exchange for his service to a deity, and often serves as a guard for the deity’s clergy.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Shackles Pirate"><img src="images\ThreeFiveSymbol.gif" title="3.5 Material" style="margin: 3px 3px 0px 3px">Shackles Pirate</a></td><td>Gifted pirate of the Shackles.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Shadowdancer"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Shadowdancer</a></td><td>A mysterious adventurer who walks the boundaries between the real world and the realm of shadows, and who can command shadows to do her bidding.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Shieldmarshal"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Shieldmarshal</a></td><td> Gun-wielding officer of Alkenstar.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Skyseeker"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Skyseeker</a></td><td> Excavator of dwarven Sky Citadels.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Sleepless Detective"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Sleepless Detective</a></td><td> Expert urban sleuthhound.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Soul Warden"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Soul Warden</a></td><td>Bygone products of an ancient war, soul wardens are an enigma of themselves. The original soul wardens were a specially trained cadre of anti-necromantic commandos in the Nexian army during the Age of Destiny.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Souldrinker">Souldrinker</a></td><td>Pledged to the Horsemen of the Apocalypse, the souldrinker learns the worst of daemonic magic while gaining the ability to bind and devour souls.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Sphere Singer"><img src="images\PathfinderSocietySymbolN.gif" title="A sphere singer's wandering dream ability functions as written, despite the Lucid Dreamer feat not otherwise being legal for play" style="margin:3px 3px 0px 3px;"> Sphere Singer</a></td><td>Wanderers of Desna who manipulate dreams and luck to aid their travels</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Spherewalker"><img src="images\ThreeFiveSymbol.gif" title="3.5 Material" style="margin: 3px 3px 0px 3px">Spherewalker</a></td><td>Magical traveler of Desna.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Stalwart Defender"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Stalwart Defender</a></td><td>A master of defending territory and holding the line at all costs.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Stargazer">Stargazer</a></td><td>Astronomers of Pulura who look to the heaven for guidance</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Steel Falcon"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Steel Falcon</a></td><td>Member of Andoran's elite military force.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Storm Kindler"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Storm Kindler</a></td><td>Gozreh-worshiping hurricane hunter.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Student of Perfection"><img src="images\PathfinderSocietySymbolN.gif" title="The student of perfection is a valid prestige class for unchained monks, not the Pathfinder RPG Core Rulebook version of the monk; the prestige class uses the Pathfinder RPG Pathfinder Unchained versions of all cited monk abilities" style="margin:3px 3px 0px 3px;"> Student of Perfection</a></td><td>Member of one of the Houses of Perfection</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Student of War"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Student of War</a></td><td>	Learned martial scholar of the Pathfinder Society.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Tattooed Mystic"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Tattooed Mystic</a></td><td> Wandering Varisian magician.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Technomancer">Technomancer</a></td><td>The true power in Numeria lies with the Technic League, not the Black Sovereign, and it is technomancers who rule the League.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Thuvian Alchemist">Thuvian Alchemist</a></td><td>Using the long-neglected art of herbalism and the reinvigorated science of alchemy, the Thuvian Alchemist specializes on a practice that combines the two.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Twilight Talon"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Twilight Talon</a></td><td>Secret agents of Andor</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Ulfen Guard"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Ulfen Guard</a></td><td>After centuries of raiding and pillaging throughout Avistan, the Ulfen have earned their reputation for ferocity and fearlessness. Though seemingly at odds with this perception of barbarism, Ulfen are also known for their staunch loyalty, strong sense of honor, and unyielding resolve.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Umbral Court Agent">Umbral Court Agent</a></td><td> Nidalese shadow saboteur.</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Veiled Illusionist"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Veiled Illusionist</a></td><td> Shadowy shapechanger.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Westcrown Devil"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Westcrown Devil</a></td><td>Agent of the Council of Thieves</td>
</tr><tr>
<td><a href="PrestigeClassesDisplay.aspx?ItemName=Winter Witch"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Winter Witch</a></td><td>Master of ice and snow.</td>
</tr>
</tbody>
`

const result = toPrestigeClassesList(table);
const fs = require('fs');
fs.appendFileSync('prestigeClasses.json', result)