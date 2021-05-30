interface itens {
    id: number,
    name: string,
    rarity: string,
    imageUrl: string,
    description: string,
    atk: string,
    def: string,
    weight: number,
    type: 'armor' | 'wearable' | 'weapon' | 'tool' | 'consumable' | 'book'
}


const itensList: itens[] = [
    {
        id: 1,
        name: "Catnip Amulet",
        rarity: "A",
        imageUrl: "gameMedia/itens/Catnip Amulet.png",
        description: "<p>This gold and jade amulet seems to draw domestic cats to it. While wearing the necklace, you have advantage on ability checks made to find or call Tiny domestic cats (if there are any) and on Wisdom (Animal Handling) checks you make to interact with them.</p>",
        atk: '0',
        def: '0',
        weight: 0.1,
        type: "wearable"
    },
    {
        id: 2,
        name: "Bloodmire Rod of the Witch Doctor",
        rarity: "S",
        imageUrl: "gameMedia/itens/Bloodmire Rod of the Witch Doctor.png",
        description: `
            <p>This gnarled wooden scepter from the Bloodmire is set with a strange, cracked opal at its head and can be used as a spellcasting focus. The rod has 6 charges and regains 1d4 + 2 expended charges daily at dusk.
            <p>While holding the rod, you can expend 1 of its charges as an action to create a magical tether of light between the rod and another creature you can see within 30 feet of you. The tether's color and effects depend on what kind of tether you create. You can only have one of each tether at a time.</p>
            <p><strong>Empowering Tether.</strong> This tether is a brilliant white. A creature affected by this tether regains 2d10 hit points when it's first affected by it, and while it's connected to the tether, it deals an extra 1d10 damage of the weapon's type to the first target it hits with a melee weapon attack on each of its turns. In addition, on each of your following turns while you maintain the tether, you can expend 1 of the rod's charges as a bonus action to send a surge of healing magic through the tether and cause the target to regain 2d10 hit points.</p>
            <p><strong>Withering Tether.</strong> This tether is a sickly red. A creature affected by this tether must make a Constitution saving throw when it's first affected by it, using your spell save DC. On a failed save, a creature takes 2d10 necrotic damage, and on each of your following turns while you maintain the tether, you can use a bonus action to deal 1d10 necrotic damage to the target automatically. On a successful save, a creature takes half as much necrotic damage, and the tether immediately ends.</p>
            <p>The tether and its effect ends after 1 minute. It ends early if you sever the tether (no action required), are no longer holding the rod, the target ends its turn more than 30 feet away from you, the target has total cover from you, or if you or the target fall unconscious.</p>`,
        atk: '0',
        def: '0',
        weight: 5,
        type: "weapon"
    },
    {
        id: 3,
        name: "Steel Whip",
        rarity: "C",
        imageUrl: "gameMedia/itens/Steel Whip.jpg",
        description: "<p>A handmae whip</p>",
        atk: '0',
        def: '0',
        weight: 7,
        type: "weapon"
    },
    {
        id: 4,
        name: "Chronomancer's Eyepiece",
        rarity: "S",
        imageUrl: "gameMedia/itens/Chronomancer's Eyepiece.png",
        description: `
            <p>This singular lens lets you faintly see and command the flow of time around a target. The eyepiece has 5 charges and regains 1d4 + 1 expended charges daily at dawn. While wearing the eyepiece, you can expend 1 charge as a reaction at the end of another creature's turn to speak either of the eyepiece's two command words to warp the flow of time around that creature. You must be able to see the target, and it must be within 60 feet of you.</p>
            <p><strong>Past.</strong> If the target is willing, it is teleported back to the space it was at the beginning of its turn. If another creature or object is occupying the space, the target is teleported to nearest unoccupied space instead. An unwilling target must succeed on a DC 16 Charisma saving throw or be teleported in this way against its will.</p>
            <p><strong>Future.</strong> If the target is willing, it can immediately choose to move again, up to half its speed, without provoking opportunity attacks. After a target moves in this way, its speed is halved until the end of its next turn.</p>
        `,
        atk: '0',
        def: '0',
        weight: 0.5,
        type: "wearable"
    },
    {
        id: 5,
        name: "Cloak of Displacement",
        rarity: "B",
        imageUrl: "gameMedia/itens/Cloak of Displacement.png",
        description: "<p>While you wear this cloak, it projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn. This property is suppressed while you are incapacitated, restrained, or otherwise unable to move.</p>",
        atk: '0',
        def: '0',
        weight: 2,
        type: "wearable"
    },
    {
        id: 6,
        name: "Cloak of the Boundless Spirit",
        rarity: "A",
        imageUrl: "gameMedia/itens/Cloak of the Boundless Spirit.jpg",
        description: `
            <p>This swirling, translucent cloak bolsters the fighting spirits of those around it. The cloak has three charges and regains all expended charges each day at dawn. When an ally you can see within 15 feet of you takes damage, you can use a reaction to expend one these charges to reduce the damage by 2d6.</p>
            <p>In addition, friendly creatures within 15 feet of you regain consciousness on a roll of 19 or 20 on death saving throws. When a creature regains consciousness in this way, you can use a reaction to expend a charge and grant them an additional 2d6 temporary hit points. Once a creature regains consciousness by rolling a 19 on a death saving throw, it cannot do so again until it finishes a long rest</p>
        `,
        atk: '0',
        def: '0',
        weight: 0,
        type: "wearable"
    },
    {
        id: 7,
        name: "Coldfire Anvil",
        rarity: "S",
        imageUrl: "gameMedia/itens/Coldfire Anvil.png",
        description: `
            <p>This cold, iron anvil weighs 50 pounds and is 1 and a half feet long. It has three magic runes on its side from the Everglacier that magically enchant any item sharpened, forged, or otherwise smithed using this anvil. Over the course of a full workday, or half as long if you're proficient with smith's tools, you can use the anvil to turn a nonmagical weapon into a coldfire one. A coldfire weapon is magical and deals an extra 1d6 cold damage to any target it hits, but is made fragile like ice. When you make an attack roll using a coldfire weapon and roll a 1, roll a d20. On a 9 or lower, the weapon shatters and destroys the weapon, releasing a biting burst of cold that deals 2d6 cold damage to all creatures within 10 feet of the weapon. After 7 days, a coldfire weapon loses the enchantment and becomes nonmagical again.</p>
            <p>Once the anvil has been used to enchant a weapon in this way, it can't do so again for 1d6 + 1 days.</p>
        `,
        atk: '0',
        def: '0',
        weight: 50,
        type: "tool"
    },
    {
        id: 8,
        name: "Curved Iron Machete",
        rarity: "D",
        imageUrl: "gameMedia/itens/Curved Iron Machete.jpg",
        description: "<p>A good weapon for the right hand, made by experienced blacksmiths from the North Eastern hinterland</p>",
        atk: '0',
        def: '0',
        weight: 1,
        type: "weapon"
    },
    {
        id: 9,
        name: "Death's Scythe",
        rarity: "SS",
        imageUrl: "gameMedia/itens/Death's Scythe.png",
        description: "<p>???</p>",
        atk: '0',
        def: '0',
        weight: 15,
        type: "weapon"
    },
    {
        id: 10,
        name: "Diviner's Dice",
        rarity: "S",
        imageUrl: "gameMedia/itens/Diviner's Dice.png",
        description: "<p>This set of three six-sided crystal dice is weakly connected to the tides of fate. You can roll these dice as an action and record the numbers rolled. Once rolled, you can't record any other numbers in this way until the next dawn. While you have the dice on your person, you can use a reaction when you or a creature you can see within 60 feet of you makes an attack roll or ability check to add or subtract one of the recorded numbers from the attack roll or ability check's total. You can wait to use this reaction until after the creature rolls the d20, but must decide before the GM says whether the roll succeeds or fails. Each recorded number can only be used once. You lose any unused recorded numbers daily at dawn.</p>",
        atk: '0',
        def: '0',
        weight: 0.3,
        type: "tool"
    },
    {
        id: 11,
        name: "Festerwood Vizard",
        rarity: "A",
        imageUrl: "gameMedia/itens/Festerwood Vizard.png",
        description: `
            <p>This dark wooden mask is strangely insect-like and magically conforms to fit the face of the creature that attunes to it. While wearing the mask, you gain blindsight out to a range of 10 feet. You can wear and remove the mask using an action.</p>
            <p>In addition, you can summon a swarm of insects (beetles) that fly out of the mask’s mouth and obey your verbal commands as an action. You can command the swarm to move and make an attack as part of the action to summon them and then again on your following turns as a bonus action. If the swarm goes 10 minutes without attacking a creature, they dissipate harmlessly to seek food elsewhere. Once this property of the mask has been used, it can't be used again until the following dusk.</p>
        `,
        atk: '0',
        def: '0',
        weight: 1,
        type: "wearable"
    },
    {
        id: 12,
        name: "Fire Dervish Cloak",
        rarity: "A",
        imageUrl: "gameMedia/itens/Fire Dervish Cloak.png",
        description: "<p>This flowing cloak sounds like a crackling fire when you walk in it. The cloak has 5 charges and regains all expended charges each day at dawn. Once per turn, you can replace any amount of your walking movement speed in order to spin in place instead. You can expend a charge for every ten feet of movement you sacrifice in this way as part of your movement, causing the cloak to erupt in an inferno around you as you spin. Creatures within 5 feet of you must succeed on a Dexterity saving throw or take 1d6 fire damage for every charge you spend in this way. When a creature takes damage from the cloak in this way, that creature can't make opportunity attacks against you for the rest of your turn. The DC for this feature is equal to 8 + your proficiency bonus + your Dexterity modifier.</p>",
        atk: '0',
        def: '0',
        weight: 1,
        type: "wearable"
    },
    {
        id: 13,
        name: "Battlement Bow",
        rarity: "B",
        imageUrl: "gameMedia/itens/Battlement Bow.png",
        description: "<p>This magic bow is enchanted with passive abjuration protections. When you hit a creature with a ranged attack using the bow, the bow creates a thin barrier of protective magic that stays between you and that creature until the start of your next turn. If you hit a different creature while protected by the barrier, the barrier moves to defend you against the new target instead. While the barrier is protecting you against a creature in this way, you're considered to have half cover against that creature's ranged attacks and spell effects.</p>",
        atk: '0',
        def: '0',
        weight: 4,
        type: "weapon"
    },
    {
        id: 14,
        name: "Goblin Cleaver",
        rarity: "E",
        imageUrl: "gameMedia/itens/Goblin Cleaver.jpg",
        description: "<p>???</p>",
        atk: '0',
        def: '0',
        weight: 2,
        type: "weapon"
    },
    {
        id: 15,
        name: "Helm of Platinum Dragon",
        rarity: "S",
        imageUrl: "gameMedia/itens/Helm of Platinum Dragon.png",
        description: "<p>This magical platinum helmet has been blessed by a powerful, holy dragon. While wearing this helmet, you gain a +1 bonus to AC and saving throws, and when you use your breath weapon, you can choose to exhale a holy blue plume of radiant energy instead. When you do, this breath weapon deals radiant damage, evil-aligned hostile creatures within the area have disadvantage on the saving throw, and any friendly creatures in the area regain a number of hit points equal to your breath weapon's damage dice instead. This property of the helm can't be used again until the next dawn.</p>",
        atk: '0',
        def: '0',
        weight: 3,
        type: "armor"
    },
    {
        id: 16,
        name: "Helm of the Chromatic Dragon",
        rarity: "S",
        imageUrl: "gameMedia/itens/Helm of the Chromatic Dragon.png",
        description: `
            <p>This iridescent helmet has been blessed by a powerful, evil dragon. While wearing this helmet, your breath weapon deals an extra 1d6 damage of its type, and you can choose whether it deals acid, cold, fire, lightning or poison damage. In addition, while wearing this helmet, you can choose if your breath weapon affects a 15-foot cone or 5-by-30-foot line, and if creatures affected by it must make a Dexterity or Constitution saving throw.</p>
            <p>In addition, when you use your breath weapon, roll a d6. On a 5 or 6, you gain an additional use of your breath weapon before you need to finish a short or long rest.</p>
        `,
        atk: '0',
        def: '0',
        weight: 4,
        type: "armor"
    },
    {
        id: 17,
        name: "High Elf Staff",
        rarity: "B",
        imageUrl: "gameMedia/itens/High Elf Staff.jpg",
        description: "<p>???</p>",
        atk: '0',
        def: '0',
        weight: 6,
        type: "armor"
    },
    {
        id: 18,
        name: "Ice Sword",
        rarity: "C",
        imageUrl: "gameMedia/itens/Ice Sword.jpg",
        description: "<p>??? -> maybe gives a strong hit and breaks in the first use</p>",
        atk: '0',
        def: '0',
        weight: 2,
        type: "armor"
    },
    {
        id: 19,
        name: "Iron Machete",
        rarity: "F",
        imageUrl: "gameMedia/itens/Iron Machete.jpg",
        description: "<p>A very common weapon, easily  found anywhere</p>",
        atk: '0',
        def: '0',
        weight: 3,
        type: "weapon"
    },
    {
        id: 20,
        name: "Killskull Long Bow of Dread",
        rarity: "A",
        imageUrl: "gameMedia/itens/Killskull Long Bow of Dread.png",
        description: `
            <p>This magic longbow is adorned with a bear skull and claws. The bow holds up to 4 charges and gains 1 charge whenever you reduce a Small or larger creature to 0 hit points with it. For each charge the bow has, a small, etched line appears on the bear skull adorning the weapon. The etched line vanishes from the skull when its charge is expended.</p>
            <p>When you hit a creature with an arrow fired from this bow, you can expend 1 charge to cause that creature to take an extra 1d8 psychic damage and make a DC 15 Wisdom saving throw. On a failure, the creature is frightened of you for 1 minute. At the end of each of its turns, the creature can repeat the saving throw, ending the effect on itself on a success.</p>
        `,
        atk: '0',
        def: '0',
        weight: 4,
        type: "weapon"
    },
    {
        id: 21,
        name: "Life Potion",
        rarity: "C",
        imageUrl: "gameMedia/itens/Life Potion.jpg",
        description: "<p>Restores 1d6 of life</p>",
        atk: '0',
        def: '0',
        weight: 0.2,
        type: "consumable"
    },
    {
        id: 22,
        name: "Manta Rays's Cape",
        rarity: "C",
        imageUrl: "gameMedia/itens/Manta Rays's Cape.jpg",
        description: "<p>???</p>",
        atk: '0',
        def: '0',
        weight: 1,
        type: "wearable"
    },
    {
        id: 23,
        name: "Mantle of the Pack Lord",
        rarity: "C",
        imageUrl: "gameMedia/itens/Mantle of the Pack Lord.png",
        description: "<p>While you wear this enchanted pelt cloak, if a creature would gain advantage on an attack against you due to having its ally within 5 feet of you, it makes the attack without advantage.</p>",
        atk: '0',
        def: '0',
        weight: 2,
        type: "wearable"
    },
    {
        id: 24,
        name: "Ninja's Nagi",
        rarity: "B",
        imageUrl: "gameMedia/itens/Ninja's Nagi.jpg",
        description: "<p>???</p>",
        atk: '0',
        def: '0',
        weight: 0.8,
        type: "weapon"
    },
    {
        id: 25,
        name: "Potion Book",
        rarity: "D",
        imageUrl: "gameMedia/itens/Potion Book.jpg",
        description: "<p>A book of recipes for making potions</p>",
        atk: '0',
        def: '0',
        weight: 5,
        type: "book"
    },
    {
        id: 26,
        name: "Red Queens Burden",
        rarity: "SS",
        imageUrl: "gameMedia/itens/Red Queens Burden.png",
        description: `
            <p>This brass, battle-scarred glaive was famously wielded by a tyrannical queen. You must have a Strength score of 17 or higher to wield this weapon. The queen's intensity still burns inside this weapon, making its handle always warm to the touch. You gain a +1 bonus to attack and damage rolls made with this magic weapon, and it deals an extra 1d6 fire damage to any target it hits.</p>
            <p>The glaive has 7 charges and regains 1d4 + 1 expended charges daily at dawn. While holding it, a magical, illusory crown appears on your head. The crown is brass and has a number of horns equal to the number of charges the weapon has remaining. When you expend 1 or more charges from the glaive, the horns adorning the illusory crown burn away in a shower of embers.</p>
            <p>While holding the glaive, you can expend 1 or more of its charges to impose your will on the creatures around you, using the following commands:</p>
            <p><strong>"Execute."</strong> Immediately after you use the Attack action to attack with the glaive, you can expend 1 charge to command a willing creature to use its reaction to make one weapon attack. The creature must be able to see and hear you. If the attack hits, it deals an extra 2d6 fire damage.</p>
            <p><strong>"Survive."</strong> As a bonus action, you can expend 1 or more charges to grant a creature other than you temporary hit points equal to 5 times the number of charges you expend, plus your Strength modifier. The creature must be able to see and hear you.</p>
            <p><strong>"Cower."</strong> When you hit a target with the glaive, you can expend 2 charges to exude an imposing aura of dominance. All hostile creatures within 15 feet of you must succeed on a DC 17 Wisdom saving throw or be frightened of you until the end of your next turn. The target of the attack has disadvantage on the saving throw.</p>
            <p>Alternatively, while holding the glaive, you can expend 2 of its charges at the start of your turn (no action required) to become an unyielding pillar of defense. When you do, your movement speed becomes 0 and you gain the following benefits until the start of your next turn:</p>
            <p>-> You gain a +2 bonus to AC.</p>
            <p>-> You can use your reaction up to three times, instead of once, before the start of your next turn. You can use no more than one reaction per turn.</p>
            <p>->When a creature within 10 feet of you makes an attack against you or another target, you can use your reaction to make a melee attack with the glaive against the attacking creature.</p>
            <p>->When you hit a creature with an attack using the glaive, that creature must make a DC 15 Wisdom saving throw. On a failed save, its speed becomes 0 until the start of its next turn.</p>
            <p><strong>Flaw.</strong> The Red Queen's Burden makes its wielder angry and untrusting. While attuned to the weapon, you gain the following flaw: "I can only trust one person. Everyone else is either a subject, a threat, or both." You or your GM determine who you can trust. In addition, if you are attuned to the weapon for 24 consecutive hours, your hotheadedness leaves your mind open to weakness and distraction. You are vulnerable to psychic damage and have disadvantage on Intelligence (Investigation) checks. These effects can be be removed with a greater restoration spell, but not while you are attuned to the weapon.</p>
        `,
        atk: '0',
        def: '0',
        weight: 7,
        type: "weapon"
    },
    {
        id: 27,
        name: "Sharkrazor Mantle",
        rarity: "A",
        imageUrl: "gameMedia/itens/Sharkrazor Mantle.png",
        description: `
            <p>You have a swimming speed of 60 feet and can breathe underwater while you wear this shark-skinned cloak. If a creature successfully grapples or restrains you by touching you, that creature takes 1d4 piercing damage upon that success and again at the end of each of its subsequent turns while it continues to physically hold you.</p>
            <p>In addition, the cloak magically sharpens your teeth. If you make a melee attack while underwater against a creature on your turn, you can use a bonus action to make a bite attack against that same creature if it's below it hit point maximum. This attack uses a damage die of 1d4, deals piercing damage, and uses your Strength modifier when rolling for attack and damage. The target can't be a construct, plant, or undead creature.</p>
            <p><strong>Curse.</strong> This cloak amplifies and sweetens the scent of blood to the point of distraction. Attuning to the cloak curses you until you're targeted by the remove curse spell or similar magic: removing the cloak fails to end the curse. While cursed, if you're within 60 feet of another creature that's below its hit point maximum, any attack you make against a creature who has all of its hit points, as well as any Wisdom (Perception) check you make, is made with with disadvantage. This effect only applies if the creature below its hit point maximum is neither a construct, plant, or undead creature.</p>
        `,
        atk: '0',
        def: '0',
        weight: 2,
        type: "wearable"
    },
    {
        id: 28,
        name: "Spider Armor",
        rarity: "E",
        imageUrl: "gameMedia/itens/Spider Armor.jpg",
        description: "<p>???</p>",
        atk: '0',
        def: '0',
        weight: 2,
        type: "wearable"
    },
    {
        id: 29,
        name: "Sun's Axe",
        rarity: "C",
        imageUrl: "gameMedia/itens/Sun's Axe.jpg",
        description: "<p>???</p>",
        atk: '0',
        def: '0',
        weight: 15,
        type: "weapon"
    },
    {
        id: 30,
        name: "A Possessed Shortsword",
        rarity: "A",
        imageUrl: "gameMedia/itens/A Possessed Shortsword.jpg",
        description: "<p>???</p>",
        atk: '0',
        def: '0',
        weight: 6,
        type: "weapon"
    },
    {
        id: 31,
        name: "Wind Riders",
        rarity: "B",
        imageUrl: "gameMedia/itens/Wind Riders.png",
        description: `
            <p>These boots look and feel like pale, dried leaves but are remarkably soft and quiet to walk in. While wearing these boots, you can move normally in difficult terrain caused by strong winds.</p>
            <p>While wearing these boots, you can use an action to speak their command word to cast the gaseous form spell, transforming yourself into a swirling cloud of vapor and leaves. This version of the spell lasts for up to 1 minute, but only allows you to float vertically using your movement speed. Your horizontal movement speed while in this form is decided by the direction and speed of the wind. A wind of light speed (between 5 and 10 miles per hour) propels you 10 feet per round, whereas a wind of moderate or greater speed (at least 10 miles per hour) pushes you 20 feet instead.</p>
            <p>Traveling somewhere while in this form where the swirling leaves are unable to follow you ends the effect early. Once the boots have been used to cast this spell, they can't do so again until the next dawn.</p>
        `,
        atk: '0',
        def: '0',
        weight: 0.6,
        type: "wearable"
    },
    {
        id: 32,
        name: "ZuuZuu's Staff",
        rarity: "C",
        imageUrl: "gameMedia/itens/ZuuZuu's Staff.jpg",
        description: "<p>???</p>",
        atk: '0',
        def: '0',
        weight: 5,
        type: "weapon" 
    }
]

/* 
    {
        id: ,
        name: "",
        rarity: "",
        imageUrl: "gameMedia/itens/",
        description: "",
        atk: '0',
        def: '0',
        weight: 0,
        type: ""
    }
*/

export default itensList;