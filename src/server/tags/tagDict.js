
const tagDict = {
    // Living Things
    $PERSON_ADJ: require('./personAdj'),
    $PERSON: require('./persons'),
    $PEOPLE: require('./peoples'),
    $CREATURE: require('./creature'),
    $CREATURES: require('./creatures'),
    $FACTION: require('./factions'),
    // Magic-related
    $DAMAGE_TYPE: require('./damageType'),
    $CANTRIP: require('./cantrips'),
    // Weapon Bonuses
    $ITEMBONUS: require('./bonusItem').master,
    $ITEMBONUS_SWORD: require('./bonusItem').sword,
    $ITEMBONUS_SPEAR: require('./bonusItem').spear,
    $ITEMBONUS_AXE: require('./bonusItem').axe,
    $ITEMBONUS_HAMMER: require('./bonusItem').hammer,
    // Weapon Components
    $METAL: require('./metals'),
    $BLADE: require('./blades'),
    $SHAFT: require('./shafts'),
    // Places
    $LOCATION: require('./locations'),
    // Ruins
    $BUILDING: require('./buildings'),
    $BUILDING_ADJ: require('./buildingAdj'),
    $BUILDING_EXTRA: require('./buildingExtra'),
}

const getArrFromTag = (tag) => {
    if (tagDict[tag] === undefined){
        console.log('ERROR: tag "' + tag + '" not found.')
    }
    return tagDict[tag];
}

module.exports = getArrFromTag;