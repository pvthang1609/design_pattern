class ContextBuilder {
    static context: ContextBuilder

    count = 1
    constructor() {}
    static getContext() {
        if (!ContextBuilder.context) {
            ContextBuilder.context = new ContextBuilder()
        }
        return ContextBuilder.context
    }

    increment() {
        this.count++
    }
}

const context1 = ContextBuilder.getContext()
context1.increment()
context1.increment()
const context2 = ContextBuilder.getContext()
console.log(context1 === context2)