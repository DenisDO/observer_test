class Observable {
    constructor() {
        const observers = [];
        this.sendMessage = function (message) {
            observers.forEach(observer => {
                observer.notify(message);
            });
        };
        this.addObserver = function (observer) {
            observers.push(observer);
        };
    }
}


class Observer {
    constructor(callback) {
        this.notify = function (message) {
            callback(message);
        };
    }
}
