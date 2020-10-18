const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction){
    user.transactions.push(transaction);
    if(transaction.type == 'credit'){
        user.balance += transaction.value;
    }else if(transaction.type == 'debit'){
        user.balance = user.balance - transaction.value;
    }
}

function getHigherTransactionByType(type){
    let highestValue = 0;
    for(transaction of user.transactions){
        if(transaction.type == type && transaction.value > highestValue){
            highestValue = transaction.value;
        }
    }
    console.log(highestValue);
}

function getAverageTransactionValue(){
    let plus = 0;
    for(transaction of user.transactions){
        plus += transaction.value;
    }
    let average = plus / user.transactions.length;
    console.log(average);
}

function getTransactionsCount(){
    let countOfCredit = 0;
    let countOfDebit = 0;
    for(transaction of user.transactions){
        if(transaction.type == 'credit'){
            countOfCredit++;
        }
        if(transaction.type == 'debit'){
            countOfDebit++;
        }
    }
    console.log(`{credit: ${countOfCredit}, debit: ${countOfDebit}};`) 
}


createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(`Balance: ${user.balance}`);

getHigherTransactionByType('debit');
getHigherTransactionByType('credit')

getAverageTransactionValue();

getTransactionsCount();

