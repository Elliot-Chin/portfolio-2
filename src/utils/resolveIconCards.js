export function resolveIconCards(items, iconMap) {
    return items.map((item) => ({
        ...item,
        Icon: iconMap[item.iconKey],
    }))
}
