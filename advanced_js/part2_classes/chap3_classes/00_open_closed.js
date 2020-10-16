class Order {
    constructor(orderCost) {
        this.orderCost = orderCost;
    }

    setShippingCost(shippingCost) {
        this.shippingCost = shippingCost;
    }

    cost() {
        return this.orderCost + this.shippingCost;
    }
}

class AbstractShipping {
    constructor(order) {
        if (this.constructor === AbstractShipping) {
            // ensure AbstractShipping is not instantiaed
            throw new TypeError('Abstract class "AbstractShipping" cannot be instantiated directly');
        }

        this.order = order;
    }

    getOrder() {
        return this.order;
    }

    setOrder(order) {
        this.order = order;

        return this;
    }
}

class ShippingBike extends AbstractShipping {
    constructor(order) {
        super(order);

        this.order.setShippingCost(10);
    }
}

class ShippingFeet extends AbstractShipping {
    constructor(order) {
        super(order);

        this.order.setShippingCost(7);
    }
}

// throw error
// const a = new AbstractShipping('aa');

const shippingBike = new ShippingBike(new Order(12));
console.log(shippingBike);
console.log(shippingBike.getOrder().cost());

const shippingFeet = new ShippingFeet(new Order(12));
console.log(shippingFeet);
console.log(shippingFeet.getOrder().cost());
