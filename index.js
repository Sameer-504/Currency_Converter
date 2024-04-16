import inquirer from 'inquirer';
const Currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_asnwer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter from Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: "Enter to Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: "Enter Your Amount",
        type: 'number'
    }
]);
let fromAmount = Currency[user_asnwer.from];
let toAmount = Currency[user_asnwer.to];
let amount = user_asnwer.amount;
let baseAmount = amount / fromAmount; // USD Base Currency
let covertedAmount = baseAmount * toAmount;
//    15000  / 280
console.log(covertedAmount);
