class Store {
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
    this.revenue = 0;
  }

  processProductSale(name){
    this.stock.array.forEach(toy => {
      if(this.toy.count === 0){
        console.log("out of stock");
        return;
      }
      this.revenue += toy.price;
      toy.count--;
      console.log(`You purchased ${toy.name} for ${toy.price}`);
    });
  }

  replenishStock(name, count){
    this.stock.array.forEach(toy => {
      if (item.name === name) {
        item.count += count;
        console.log(`Replenished ${item.name} by ${item.count}`);
      }
    });
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;
