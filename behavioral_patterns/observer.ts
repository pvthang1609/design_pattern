interface Subscriber {
    name: string
    update(): void
}

class NormalSubscriber implements Subscriber {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    update() {
        console.log(this.name + ' do not thing')
    }
}

class FanSubscriber implements Subscriber {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    update() {
        console.log(this.name + ' go to store then buy')
    }
}

class AppleStore {
    subscribers: Array<Subscriber> = []

    addSubscribers(subscribers: Array<Subscriber>): void {
        subscribers.forEach(subscriber => this.subscribers.push(subscriber))
    }

    deleteSubscriber(index: number) {
        this.subscribers = this.subscribers.splice(index, 1)
    }

    notify() {
        this.subscribers.forEach(subscriber => subscriber.update())
    }
}

const store = new AppleStore()
const u1 = new NormalSubscriber('Thanh')
const u2 = new NormalSubscriber('Truong')
const u3 = new FanSubscriber('Trung')

store.addSubscribers([u1, u2, u3])
store.notify()