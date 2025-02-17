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

// Task 3: Arrow Function
const calculateLoyaltyDiscount = (amount, years) => {
    if (years >= 5) {
        discountRate = 0.15;
    } else if (years >= 3) {
        discountRate = 0.10;
    } else {
        discountRate = 0.05;
    }
    const discountedPrice = amount - (amount / discountRate);
    const formattedPrice = discountedPrice.toFixed(2);
}

calculateLoyaltyDiscount(100, 6);
calculateLoyaltyDiscount(200, 2);

// Task 4: Parameters and Arguments 
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost;
    if (location === "USA") {
        baseCost = 5 + (0.5 * weight);
    } else if (location === "Canada") {
        baseCost = 10 + (0.7 * weight);
    } else {
        console.log("Invalid location");
        return;
    }
    if (expedited) {
        baseCost += 10;
    }
const formattedCost = baseCost.toFixed(2);
console.log(`Shipping Cost: $${formattedCost}`);
}
calculateShippingCost(10, "USA", true); 
calculateShippingCost(5, "Canada", false);

// Task 5: Returning Values
function calculateLoanInterest(principal, rate, years) {
    const interest = principal * rate * years;
    const formattedInterest = interest.toFixed(2);
    console.log(`Total Interest: $${formattedInterest}`);
}
calculateLoanInterest(1000, 0.05, 3);
calculateLoanInterest(5000, 0.07, 5);

// Task 6: Higher Order Functions
let transactions = [500, 1200, 3000, 800, 2200];
function filterHighValueTransactions(transactions, filterFunction) {
    const highValueTransactions = transactions.filter(filterFunction);
    console.log(highValueTransactions);
}
filterHighValueTransactions(transactions, amount => amount > 1000); 

// Task 7: Closures
function createBudgetTracker() {
        return function(expense) {
            balance -= expense;
            console.log(`Current Balance: -$${Math.abs(balance)}`);
        };
    }
let budget = createBudgetTracker();
budget(300);
budget(200);