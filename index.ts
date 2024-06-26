#! /usr/bin/env node
import inquirer from 'inquirer'
import chalk from "chalk";


console.log(chalk.greenBright.bold("\n \t Welcome to code with Sameer Anis' - Currency Converter\n"));

const Currency: any = {
    USD: 1, //Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};


let user_asnwer = await inquirer.prompt(
    [
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
    ]
)


let fromAmount = Currency [user_asnwer.from]
let toAmount = Currency [user_asnwer.to]
let amount = user_asnwer.amount
let baseAmount = amount / fromAmount   // USD Base Currency
let covertedAmount = baseAmount * toAmount
            //    15000  / 280

 console.log(covertedAmount);
