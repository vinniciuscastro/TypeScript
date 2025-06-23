var displayName = "Jess's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD123455";
var createDate = new Date();
var originalCost = 425;
function getInventoryItem(trackingNumber) {
    // Example implementation, replace with actual logic as needed
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
