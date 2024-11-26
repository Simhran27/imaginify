import mongoose,{Mongoose} from'mongoose';

const MONGODB_URL=process.env.MONGODB_URL;

interface MongooseConnection{
    conn: Mongoose | null; //holds the actual database connection once it is successful.
    promise: Promise<Mongoose> | null; //used to track the progress of the connection establishment.
    //For example, the MongooseConnection object might be used in a module that attempts to connect 
    //to MongoDB and stores the connection state to avoid reconnecting multiple times, especially 
    //in a server-side application.
}

//sice next.js works on a serverless application,
//the connection to mongodb database has to be 
//established again and again.
//hence the connection to the database is cashed

declare global{
    var mongoose: MongooseConnection;
}

let cached: MongooseConnection = global.mongoose

if(!cached){
    cached =global.mongoose = {
        conn: null,
        promise: null
    };
}

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URL) throw new Error("Missing MONGODB_URL environment variable");
    
    cached.promise= cached.promise ||mongoose.connect(MONGODB_URL, {dbName:'imaginify',bufferCommands:false});

    cached.conn = await cached.promise;
    return cached.conn;
}

//this was for making sure that there are no multiple connections to the database




