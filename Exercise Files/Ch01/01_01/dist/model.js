var displayName = "Vinni's stanfing desk";
var inventoryType = "Furniture";
var trackingNumber = "FDI123455";
var createDate = new Date();
var originalCost = 425;
function getInventoryItem(trackingNumber) {
    return {
        displayName: displayName,
        inventoryType: inventoryType,
        trackingNumber: trackingNumber,
        createDate: createDate,
        originalCost: originalCost
    };
}
function saveInventoryItem(item) {
}
var inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveInventoryItem(inventoryItem);
