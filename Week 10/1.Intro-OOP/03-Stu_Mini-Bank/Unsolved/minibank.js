function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];
  this.setBalance = (value) => {
    this.balance = value;
  };
  this.updateStatement = (value) => {
    this.statement.push(value);
  };
  this.getStatement = () => {
    return this.statement;
  };
  this.printStatement = () => {
    for (val of this.statement) {
      console.log(val);
    }
  };
  this.deposit = (value) => {
    this.updateStatement(value);
    this.setBalance(this.balance + value);
  };
  this.withdraw = (value) => {
    this.updateStatement(-value);
    this.setBalance(this.balance - value);
  };
  this.getBalance = () => {
    return this.balance;
  };
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
}

const bank = new MiniBank(0);
bank.printBalance();
bank.deposit(100);
bank.printBalance();
bank.withdraw(25);
bank.printBalance();

bank.printStatement();