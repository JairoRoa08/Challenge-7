// Task 1: Function Declaration
function calculatedInvoice(subtotal, taxRate, discount){
    const total = (subtotal + (subtotal * taxRate)) - discounts;
    const formattedTotal = total.toFixed(2);

    console.log('Total Invoice: $$(formattedTotal');
}

calculateInvoice(100, 0.08, 5);
calculateInvoice(500, 0.1, 20);

// Task 2: Function Expression
const calculateHourlyWage = function(salary, hoursPerWeek) {
    const hourlyWage = salary / (hoursPerWeek * 52);
    const formattedWage = hourlyWage.toFixed(2);
    console.log(`Hourly Wage: $${formattedWage}`);
}
calculateHourlyWage(52000, 40);
calculateHourlyWage(75000, 35);
