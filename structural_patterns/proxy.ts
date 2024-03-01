// Virtual proxy implement

class HeavyWeightService {
    init() {
        console.log('init')
    }
    destroy() {
        console.log('destroy')
    }
}

class VirtualProxy {
    service: HeavyWeightService | false
    
    constructor() {
        this.service = false
    }

    getService() {
        if (!this.service) {
            this.service = new HeavyWeightService()
        }
        return this.service
    }
}

const virtualProxy = new VirtualProxy()
const heavyWeightService = virtualProxy.getService()


// Logging Proxy

interface ApiService {
    create(): void
    read(): void
    update(): void
    delete(): void
}

class InternalService implements ApiService {
    create(): void {
        console.log('Create..')
    }
    read(): void {
        console.log('Read..')
    }
    update(): void {
        console.log('Update..')
    }
    delete(): void {
        console.log('Delete..')
    }
}

class LoggingProxy implements ApiService {
    service: ApiService

    constructor(service: ApiService) {
        this.service = service
    }

    logging(type: string) {
        const now = Date.now()
        console.log(now.toString() + '::LOGGING::' + type)
    }

    create(): void {
        this.logging('create')
        return this.service.create()
    }
    read(): void {
        this.logging('read')
        return this.service.read()
    }
    update(): void {
        this.logging('update')
        return this.service.update()
    }
    delete(): void {
        this.logging('delete')
        return this.service.delete()
    }
}

class Application {
    service: ApiService

    constructor(service: ApiService) {
        this.service = service
    }

    getList() {
        this.service.read()
    }
}
const service = new InternalService()
const logging = new LoggingProxy(service)
const app = new Application(logging);
app.getList()