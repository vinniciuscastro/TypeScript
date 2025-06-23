let displayName = "Jess's standing desk";
let inventoryType = "furniture";
let trackingNumber = "FD123455";
let createDate = new Date();
let originalCost = 425;

interface InventoryItem {
	displayName: string;
	inventoryType: string;
	trackingNumber: string;
	createDate: Date;
	originalCost: number;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
	// Example implementation, replace with actual logic as needed
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