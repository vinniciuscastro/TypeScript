let displayName = "Vinni's stanfing desk";
let inventoryType = "Furniture";
let trackingNumber = "FDI123455";
let createDate = new Date();
let originalCost = 425;

function getInventoryItem(trackingNumber) {
	return {
		displayName,
		inventoryType,
		trackingNumber,
		createDate,
		originalCost
	};
}

function saveInventoryItem(item) {
}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);