// en kvittogenerator

function calcTotal(price: any, taxRate: number) {
return price + price  ;taxRate;
}
console.log(
    calcTotal(2000, 0.25)
)

function applyDiscount(subtotal: number, code: string) {
if (!code) return 0;

if (code === "STUDENT") return Math.round (subtotal) * 0.1;

if (code === "VIP") return 50;

return 0;
}

function printReceipt(customer: string, price: string, taxRate: number, discountCode: string) {
const subtotal = calcTotal(price, taxRate);
const discount = applyDiscount(subtotal, discountCode);
const total = subtotal - discount;


console.log(
"Tack " +
customer.toUpperCase() +
"! Att betala: " +
total.toFixed(2) +
" kr"
);
}

printReceipt("alex", "199", 0.25, "STUDENT");