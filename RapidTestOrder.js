class RapidTestOrder {
  constructor(sFrom) {
    this.OrderState = {
      WELCOMING: () => {
        let aReturn = [];
        this.stateCur = this.OrderState.SIZE;
        aReturn.push("Welcome to Andy's Legendary Pizza Plattsville!");
        aReturn.push("Would you like to place an order?");
        return aReturn;
      },
      SIZE: () =>{
        let aReturn = [];
        this.stateCur = this.OrderState.RESERVING;
        aReturn.push("What toppings would you like? We have baccon, peperoni, onions and hawaian");
        aReturn.push("We have Hawaiian and Meat Lover's pizza")
      },
      RESERVING: (sInput) => {
        let aReturn = [];
        this.isDone = true;
        if (sInput.toLowerCase().startsWith('y')) {
          aReturn.push(`Your rapid test is reserved under the phone number ${this.sFrom}`);
          let d = new Date();
          d.setMinutes(d.getMinutes() + 120);
          aReturn.push(`Please pick it up at 43 Albert St W, Plattsville., Acton before ${d.toTimeString()}`);
        } else {
          aReturn.push("Thanks for trying our online chat bot!");
          aReturn.push("Maybe next time")
        }
        return aReturn;
      }
    };

    this.stateCur = this.OrderState.WELCOMING;
    this.isDone = false;
    this.sFrom = sFrom;
  }
  handleInput(sInput) {
    return this.stateCur(sInput);
  }
  isDone() {
    return this.isDone;
  }
}

export { RapidTestOrder }