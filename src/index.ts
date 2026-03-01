import { CreditCard } from "./chapter05/CreditCard.js";
import { ElectronicMoney } from "./chapter05/ElectronicMoney.js";


const creditCard = new CreditCard("VISA"); 
creditCard.pay(10000);

const electronicMoney = new ElectronicMoney("PayPay");
electronicMoney.pay(20000);