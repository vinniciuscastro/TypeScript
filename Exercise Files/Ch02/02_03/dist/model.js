var displayName = "Jess's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD123455";
var createDate = new Date();
var originalCost = 425;
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType["computer"] = "computer";
    InventoryItemType["furniture"] = "furniture";
    InventoryItemType["phone"] = "phone";
    InventoryItemType["tablet"] = "tablet";
})(InventoryItemType || (InventoryItemType = {}));
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
}
var inventoryItem = getInventoryItem(trackingNumber);
var updatedInventoryItem = inventoryItem;
inventoryItem.createDate = new Date();
saveInventoryItem({
    displayName: "MacBook Pro 15 Retina",
    inventoryType: "computer",
    trackingNumber: "MBP123456",
    createDate: new Date(),
});
