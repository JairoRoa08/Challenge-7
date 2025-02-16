// Task 1: Function Declaration
function calculatedInvoice(subtotal, taxRate, discount){
    const total = (subtotal + (subtotal * taxRate)) - discounts;
    const formattedTotal = total.toFixed(2);

    console.log('Total Invoice: $$(formattedTotal');
}

calculateInvoice(100, 0.08, 5);
calculateInvoice(500, 0.1, 20);
