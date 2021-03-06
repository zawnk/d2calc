export default {
    class: 'Necromancer',
    trees: [
        {
            name: 'Summoning',
            isActive: true,
            skills: [
                {
                    id: 1,
                    isPlaceholder: false,
                    name: 'Skeleton Mastery',
                    description: 'Passive Effect: Improves the quality of your raised Skeletons, Magi, and Revived.',
                    points: 0,
                    prerequisites: ['Raise Skeleton'],
                    unlockedBy: ['Raise Skeleton'],
                    available: false,
                },
                {
                    id: 2,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 3,
                    isPlaceholder: false,
                    name: 'Raise Skeleton',
                    description: 'Cast on the corpse of a slain monster. This raises a skeleton warrior that fights for you.',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 4,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 5,
                    isPlaceholder: false,
                    name: 'Clay Golem',
                    description: 'Raises a Golem from the earth to fight for you.',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 6,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 7,
                    isPlaceholder: false,
                    name: 'Golem Mastery',
                    description: 'Passive Effect: Enhances speed and life of Golems.',
                    points: 0,
                    prerequisites: ['Clay Golem'],
                    unlockedBy: ['Clay Golem'],
                    available: false,
                },
                {
                    id: 8,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 9,
                    isPlaceholder: false,
                    name: 'Skeletal Mage',
                    description: 'Raises a Skeletal Mage that fights for you with an elemental attack.',
                    points: 0,
                    prerequisites: ['Raise Skeleton'],
                    unlockedBy: ['Raise Skeleton'],
                    available: true,
                },
                {
                    id: 10,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 11,
                    isPlaceholder: false,
                    name: 'Blood Golem',
                    description: 'Summons a Blood Golem.',
                    points: 0,
                    prerequisites: ['Clay Golem'],
                    unlockedBy: ['Clay Golem'],
                    available: false,
                },
                {
                    id: 12,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 13,
                    isPlaceholder: false,
                    name: 'Summon Resist',
                    description: 'Raises elemental resistances of your Minions.',
                    points: 0,
                    prerequisites: ['Clay Golem', 'Golem Mastery'],
                    unlockedBy: ['Golem Mastery'],
                    available: false,
                },
                {
                    id: 14,
                    isPlaceholder: false,
                    name: 'Iron Golem',
                    description: 'Summon a Golem from a metal item. The golem gains properties of the item.',
                    points: 0,
                    prerequisites: ['Clay Golem', 'Blood Golem'],
                    unlockedBy: ['Blood Golem'],
                    available: false,
                },
                {
                    id: 15,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 16,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 17,
                    isPlaceholder: false,
                    name: 'Fire Golem',
                    description: 'A Golem of fire that uses fire damage to heal itself.',
                    points: 0,
                    prerequisites: ['Clay Golem', 'Blood Golem', 'Iron Golem'],
                    unlockedBy: ['Iron Golem'],
                    available: false,
                },
                {
                    id: 18,
                    isPlaceholder: false,
                    name: 'Revive',
                    description: 'Resurrects a monster to fight for you.',
                    points: 0,
                    prerequisites: ['Raise Skeleton', 'Clay Golem', 'Skeletal Mage', 'Blood Golem', 'Iron Golem'],
                    unlockedBy: ['Skeletal Mage', 'Iron Golem'],
                    available: false,
                },
            ]
        },
        {
            name: 'Poison and Bone',
            isActive: false,
            skills: [
                {
                    id: 1,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 2,
                    isPlaceholder: false,
                    name: 'Teeth',
                    description: 'Summons multiple projectiles that damage enemies.',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 3,
                    isPlaceholder: false,
                    name: 'Bone Armor',
                    description: 'A protective shield that absorbs damage.',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 4,
                    isPlaceholder: false,
                    name: 'Poison Dagger',
                    description: 'Adds poison damage to a dagger.',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 5,
                    isPlaceholder: false,
                    name: 'Corpse Explosion',
                    description: 'The targeted corpse explodes, damaging all nearby enemies.',
                    points: 0,
                    prerequisites: ['Teeth'],
                    unlockedBy: ['Teeth'],
                    available: false,
                },
                {
                    id: 6,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 7,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 8,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 9,
                    isPlaceholder: false,
                    name: 'Bone Wall',
                    description: 'Creates a barrier of bone.',
                    points: 0,
                    prerequisites: ['Bone Armor'],
                    unlockedBy: ['Bone Armor'],
                    available: false,
                },
                {
                    id: 10,
                    isPlaceholder: false,
                    name: 'Poison Explosion',
                    description: 'Releases a cloud of poisonous gas from a corpse.',
                    points: 0,
                    prerequisites: ['Poison Dagger', 'Corpse Explosion'],
                    unlockedBy: ['Poison Dagger', 'Corpse Explosion'],
                    available: false,
                },
                {
                    id: 11,
                    isPlaceholder: false,
                    name: 'Bone Spear',
                    description: 'Summons a magical missile of bone.',
                    points: 0,
                    prerequisites: ['Teeth', 'Corpse Explosion'],
                    unlockedBy: ['Corpse Explosion'],
                    available: false,
                },
                {
                    id: 12,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 13,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 14,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 15,
                    isPlaceholder: false,
                    name: 'Bone Prison',
                    description: 'Summons a ring of bone to surround a target.',
                    points: 0,
                    prerequisites: ['Teeth', 'Bone Armor', 'Corpse Explosion', 'Bone Wall', 'Bone Spear'],
                    unlockedBy: ['Bone Wall', 'Bone Spear'],
                    available: false,
                },
                {
                    id: 16,
                    isPlaceholder: false,
                    name: 'Poison Nova',
                    description: 'A ring of poison explodes from the Necromancer.',
                    points: 0,
                    prerequisites: ['Poison Dagger', 'Teeth', 'Corpse Explosion', 'Poison Explosion'],
                    unlockedBy: ['Poison Explosion'],
                    available: false,
                },
                {
                    id: 17,
                    isPlaceholder: false,
                    name: 'Bone Spirit',
                    description: 'Spirit tracks down a target, or finds one of its own.',
                    points: 0,
                    prerequisites: ['Teeth', 'Corpse Explosion', 'Bone Spear'],
                    unlockedBy: ['Bone Spear'],
                    available: false,
                },
                {
                    id: 18,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
            ]
        },
        {
            name: 'Curses',
            isActive: false,
            skills: [
                {
                    id: 1,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 2,
                    isPlaceholder: false,
                    name: 'Amplify Damage',
                    description: 'Increases the amount of damage received.',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 3,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 4,
                    isPlaceholder: false,
                    name: 'Dim Vision',
                    description: 'Decreases radius of awareness.',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 5,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 6,
                    isPlaceholder: false,
                    name: 'Weaken',
                    description: 'Decreases the damage the target can do.',
                    points: 0,
                    prerequisites: ['Amplify Damage'],
                    unlockedBy: ['Amplify Damage'],
                    available: false,
                },
                {
                    id: 7,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 8,
                    isPlaceholder: false,
                    name: 'Iron Maiden',
                    description: 'Damage dealt is damage received.',
                    points: 0,
                    prerequisites: ['Amplify Damage'],
                    unlockedBy: ['Amplify Damage'],
                    available: false,
                },
                {
                    id: 9,
                    isPlaceholder: false,
                    name: 'Terror',
                    description: 'Cursed monsters run in fear.',
                    points: 0,
                    prerequisites: ['Amplify Damage', 'Weaken'],
                    unlockedBy: ['Weaken'],
                    available: false,
                },
                {
                    id: 10,
                    isPlaceholder: false,
                    name: 'Confuse',
                    description: 'Cursed monsters attack randomly.',
                    points: 0,
                    prerequisites: ['Dim Vision'],
                    unlockedBy: ['Dim Vision'],
                    available: false,
                },
                {
                    id: 11,
                    isPlaceholder: false,
                    name: 'Life Tap',
                    description: 'Attacking a cursed soul gives you health.',
                    points: 0,
                    prerequisites: ['Amplify Damage', 'Iron Maiden'],
                    unlockedBy: ['Iron Maiden'],
                    available: false,
                },
                {
                    id: 12,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 13,
                    isPlaceholder: false,
                    name: 'Attract',
                    description: 'Causes other monsters to target your enemy.',
                    points: 0,
                    prerequisites: ['Dim Vision', 'Confuse'],
                    unlockedBy: ['Confuse'],
                    available: false,
                },
                {
                    id: 14,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 15,
                    isPlaceholder: false,
                    name: 'Decrepify',
                    description: 'Target\'s Speed, Damage and Physical Resistance -50%',
                    points: 0,
                    prerequisites: ['Amplify Damage', 'Weaken', 'Terror'],
                    unlockedBy: ['Weaken'],
                    available: false,
                },
                {
                    id: 16,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 17,
                    isPlaceholder: false,
                    name: 'Lower Resist',
                    description: 'Elemental attacks do more damage to the cursed monster.',
                    points: 0,
                    prerequisites: ['Weaken', 'Amplify Damage', 'Terror', 'Iron Maiden', 'Life Tap', 'Decrepify'],
                    unlockedBy: ['Life Tap', 'Decrepify'],
                    available: false,
                },
                {
                    id: 18,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
            ]
        },
    ],
}