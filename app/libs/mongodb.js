import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {}

class Singleton {
    static _instance
    client
    clientPromise
    constructor() {
        this.client = new MongoClient(uri, options)
        this.clientPromise = this.client.connect()
        if (process.env.NODE_ENV === 'development') {
            global._mongoClientPromise = this.clientPromise
        }
    }

    static get instance() {
        if (!this._instance) {
            this._instance = new Singleton()
        }
        return this._instance.clientPromise
    }
}
const clientPromise = Singleton.instance
export default clientPromise
