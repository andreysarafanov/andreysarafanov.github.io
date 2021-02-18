function toArchetypeList(htmlTable, className) {
    // remove bad lines
    htmlTable = htmlTable.replace(/^((?!FixedName).)*$\n/gm, '');
    htmlTable = htmlTable.replace('\n\n', '\n')
    htmlTable = htmlTable.replace('\n\n', '\n')
    htmlTable = htmlTable.replace('\n\n', '\n')
    htmlTable = htmlTable.replace('\n\n', '\n')
    htmlTable = htmlTable.replace('\n\n', '\n')
    htmlTable = htmlTable.replace(/^.*FixedName=(.*?)".*$/gm, '$1')
    const classes = htmlTable
        .split("\n")
        .filter(l => l.length > 0)
        .map(l => l.startsWith(`${className} `) ? l.substring(className.length + 1) : l)
        .map(l => `"${l}"`)
        .join(',');
    return `\n"${className}": [${classes}],`;
}

// got it from the archetypes page on aonprd. Executed this code for every class
const table = `<tbody><tr style="color:White;background-color:Black;font-weight:bold;">
<th scope="col">Name</th><th scope="col">Replaces</th><th scope="col">Summary</th>
</tr><tr>
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Absalom  Arcanamirium Crafter">Absalom: Arcanamirium Crafter</a></td><td>Hand of the Apprentice</td><td>One trained by the Arcanamirium, a college specializing in the universalist school of magic and the art of crafting magical items.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Arcane Bomber"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Arcane Bomber</a></td><td>Arcane Bond; Cantrips; Arcane School</td><td>To many wizards, the experimentation of the alchemist seems quaint, if not dangerous or frightening. A few wizards take up the secrets of the bomb, however, fusing alchemy with their already considerable magical power. </td>
</tr><tr>
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Arcane Physician"><img src="images\PathfinderSocietySymbolN.gif" title="The arcane physician gains Spell Focus rather than gaining Brew Potion." style="margin:3px 3px 0px 3px;"> Arcane Physician</a></td><td>Arcane School; Scribe Scroll</td><td>Arcane physicians use their scholarly knowledge and arcane mastery to achieve incredible feats of medicine.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Arcane Warden"><img src="images\PathfinderSocietySymbolN.gif" title="The arcane warden gains access to Persuasive as a bonus feat in place of Leadership" style="margin:3px 3px 0px 3px;"> Arcane Warden</a></td><td>Arcane School; Class Skills; Scribe Scroll; Bonus Feats; Hand of the Apprentice; Metamagic Mastery</td><td>Arcane wardens are wizards who specialize in the discovery or generation of places of safety and refuge.</td>
</tr><tr>
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Bonded Wizard"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Bonded Wizard</a></td><td>Scribe Scroll; 5th, 10th, and 15th-level Bonus Feats</td><td>Many wizards form an arcane bond with an item, but for some this bond becomes a powerful mystic union.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Cheliax  Egorian Academy Infernal Binder"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Cheliax: Egorian Academy Infernal Binder</a></td><td>Acid Dart, Dimensional Steps</td><td>A wizard trained by the prestigious Egorian Academy, best known for its Infernal Binding program in the school of conjuration.</td>
</tr><tr>
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Chronomancer"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Chronomancer</a></td><td>Arcane Bond; 10th, 15th, 20th-level Bonus Feats</td><td>Rare arcane scholars known as chronomancers demonstrate the ability to shift themselves in short bursts between the past, future, and alternate presents.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Clocksmith"><img src="images\PathfinderSocietySymbolN.gif" title="The clocksmith gains Spell Focus as a bonus feat in place of the Craft Construct ability" style="margin:3px 3px 0px 3px;"> Clocksmith</a></td><td>Arcane Bond; Arcane School; Scribe Scroll; Bonus Feats</td><td>Clocksmiths are oddities among wizard communities, pursuing the study and creation of clockwork constructs to near obsession</td>
</tr><tr>
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Cruoromancer"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Cruoromancer</a></td><td>Arcane Bond; 5th, 10th, 15th, 20th-level Bonus Feat</td><td>(Dhampir Only) A cruoromancer infuses his necromantic magic with the power of his unique mixture of living blood and undead ichor.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Elder Mythos Scholar"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Elder Mythos Scholar</a></td><td>Arcane Bond; 1st, 8th-level Arcane School Ability; Spellbook; Scribe Scroll; 5th, 10th-level Bonus feats </td><td>Elder Mythos scholars risk their sanity to seek knowledge of alien and awful entities from beyond the stars.</td>
</tr><tr>
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Exploiter Wizard"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Exploiter Wizard</a></td><td>Arcane Bond; Arcane School</td><td>Contrary to traditional wizardly study, an exploiter wizard forgoes the tried and true methods of arcane focus and arcane schools for the exploits favored by an arcanist.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Familiar Adept"><img src="images\PathfinderSocietySymbolN.gif" title="Diminished Expertise removes Spell Focus" style="margin:3px 3px 0px 3px;"> Familiar Adept</a></td><td>Scribe Scroll; 5th and 10th-level Bonus Feats; Arcane Bond; Spellbooks</td><td>Many wizards employ familiars to assist them, but only a few have unlocked the true power of their school of magic through the familiar itself.</td>
</tr><tr>
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard First World Caller"><img src="images\PathfinderSocietySymbolN.gif" title=" A First World caller cannot apply the erratic time planar trait with the warp reality ability." style="margin:3px 3px 0px 3px;"> First World Caller</a></td><td>Arcane Bond; Arcane School; Scribe Scroll; 10th, 15th-level Bonus Feats</td><td>Some wizards, typically First World gnomes, have mystical ties with the First World, the primordial home of the fey</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Hallowed Necromancer"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Hallowed Necromancer</a></td><td>Arcane School; Spells; Power Over Undead; Grave Touch; Scribe Scroll; 5th, 10th, 15th-level Bonus Feat  </td><td>Many wizards study necromancy to create undead, but some study the same arts to purge the stain of undeath.</td>
</tr><tr>
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Instructor">Instructor</a></td><td>Arcane Bond; 5th, 10th, 15th, and 20th-level Bonus Feats</td><td>Whether serving as staff at a formal school of magic or simply acting as a wandering teacher, an instructor has an apprentice who trades service to the instructor for lessons in magic.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Pact Wizard (FF)"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Pact Wizard (FF)</a></td><td>Arcane Bond; Arcane School</td><td>Some wizards make bargains with beings from other realms in order to gain arcane power. These pact wizards have unparalleled access to extraplanar allies, but these bonds never come without strings attached.</td>
</tr><tr>
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Pact Wizard (HHH)">Pact Wizard (HHH)</a></td><td>Spellcasting; Scribe Scroll; 5th, 10th, 15th, and 20th level Bonus Feats</td><td>Wizards who seek mastery of arcane power without tedious study and monotonous research.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Poleiheira Adherent"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Poleiheira Adherent</a></td><td>Arcane Bond; Arcane School</td><td>Poleiheira adherents are wizards who wish to emulate the explorations and discoveries of Arustun and partake in great odysseys as they seek to imitate his achievements.</td>
</tr><tr>
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Primalist">Primalist</a></td><td>Arcane Bond, 5th-level Bonus Feat, 10th-level Bonus Feat</td><td>A primalist is a wizard who has spent a considerable amount of time studying the chaos that is primal magic.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Qadira  Mage of the Veil"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Qadira: Mage of the Veil</a></td><td>Blinding Ray, Invisibility Field</td><td>Rather than controlling the elements or transforming the environment, mages of the veil focus on much more subtle magic.</td>
</tr><tr>
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Runesage"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Runesage</a></td><td>Arcane Bond; Arcane School</td><td>Runesages draw upon the mystic energies of ancient Thassilon.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Scroll Scholar"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Scroll Scholar</a></td><td>Diviner's Fortune (diviner) or Hand of the Apprentice (universalist), 5th-level Bonus Feat, 4th-level spell slot</td><td>Those who trade some of their potential to better understand ancient texts and scrolls can become learned scroll scholars.</td>
</tr><tr>
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Scrollmaster"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Scrollmaster</a></td><td>Arcane Bond; 10th-level Bonus Feat</td><td>To some wizards, a scroll is not just a written form of a spell, it is a physical weapon meant to be used in combat like a sword or a shield.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Shadowcaster"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Shadowcaster</a></td><td>Arcane Bond; 5th-level Bonus Feat; 10th-level Bonus Feat</td><td>Trained in the dark mysteries of Nidal's Umbral Court, the shadowcaster harnesses the power of shadows to bolster their spellcasting.</td>
</tr><tr>
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Siege Mage">Siege Mage</a></td><td>Scribe Scroll; Arcane Bond; Cantrips; Arcane School</td><td>The siege mage combines his arcane mastery with a supernatural link to siege engines. </td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Spell Sage"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Spell Sage</a></td><td>Arcane Bond; Arcane School</td><td>A spell sage has mastered spells of all types, and is able to increase the effectiveness of his own spells and eventually even cast spells from other classes’ spell lists.</td>
</tr><tr>
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Spellbinder"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Spellbinder</a></td><td>Arcane Bond</td><td>(Elf Only) A spellbinder is an elven wizard who forges an arcane bond between himself and one or more wizard spells.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Spellslinger">Spellslinger</a></td><td>Arcane Bond; Scribe Scroll; Cantrips; Arcane School</td><td>While few contest the seductive allure of commanding arcane and occult powers, there are those wizards who become obsessed with the natural mysteries of black powder.</td>
</tr><tr>
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Spirit Binder">Spirit Binder</a></td><td>Arcane Bond; Arcane School; Scribe Scroll; Bonus Feats</td><td>While most wizards learn their arts through gradual study, spirit binders have made a sudden arcane breakthrough due to the traumatic experience of losing a loved one.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Spirit Whisperer"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Spirit Whisperer</a></td><td>Arcane Bond; Spellbooks; Arcane School; Bonus Feats; 20th-level Bonus Feat</td><td>Spirit whisperers are a breed apart among wizards, and are often mistaken for witches.</td>
</tr><tr>
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Sword Binder"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Sword Binder</a></td><td>Arcane Bond; Arcane School; Bonus School Spell Slots; 10th-level Bonus Feat</td><td>Sword binders follow a tradition of martial wizards who often worked with the Church of Aroden and the crowns of Taldor and then Cheliax.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Thassilonian Specialist">Thassilonian Specialist</a></td><td>Lose access to two schools of magic</td><td>Specialist in a Thassilonian school of magic, this specialist sacrifices his connection with two schools in order to greatly strengthen his chosen specialty.</td>
</tr><tr>
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Undead Master">Undead Master</a></td><td>Alignment; Arcane School; Arcane Bond; Scribe Scroll; 5th, 10th, 15th, 20th-level Bonus Feats</td><td>Undead masters have great power over undeath.</td>
</tr><tr style="background-color:#CCCCCC;">
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Wind Listener"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Wind Listener</a></td><td>Class Skills; Arcane School; Arcane Bond; 5th, 10th, 15th-level Bonus Feat</td><td>(Sylph Only) The wind listener takes a sylph’s natural curiosity to the extreme, enhancing his natural skill at subterfuge and eavesdropping with potent arcane magic. </td>
</tr><tr>
<td><a href="ArchetypeDisplay.aspx?FixedName=Wizard Worldseeker"><img src="images\PathfinderSocietySymbol.gif" title="PFS Legal" style="margin:3px 3px 0px 3px;"> Worldseeker</a></td><td>Scribe Scroll; 6th/8th-level School Ability; Arcane Bond; 5th, 15th-level Bonus Feat</td><td>Worldseekers are wizards who travel to all corners of the Great Beyond.</td>
</tr>
</tbody>
`

const result = toArchetypeList(table, "Wizard");
const fs = require('fs');
fs.appendFileSync('alchemist.json', result)