const { default: mongoose } = require("mongoose")

const connection = {}
export const connectDB = async () => {
    try {
        if(connection.isConnected) {
            console.log("[-] Using existing db connection...")
            return
        }

        const db = await mongoose.connect(process.env.MONGO_URL)
        connection.isConnected = db.connections[0].readyState
        console.log("[+] Connected to database...")
    } catch (error) {
        console.error(error)
        throw new Error("[!] - Error connecting to DB...")
    }
}