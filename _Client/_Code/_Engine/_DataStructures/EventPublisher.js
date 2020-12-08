export class EventPublisher {
    constructor() {
        this.Subscribers = [];
    }

    AddSubscribedFunction(subscriber){
        this.Subscribers.push()
    }

    RemoveSubscribedFunction(subscriber) {
        let index = this.Subscribers.indexOf(subscriber);

        if (index !== -1) {
            this.Subscribers.splice(index, 1);
        }
    }

    Broadcast(...args) {
        this.Subscribers.forEach((invocation) => {
            invocation(...args);
        })
    }
}