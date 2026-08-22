import mongoose from "mongoose";

if (!process.env.MONGO_URI) {
  throw new Error("No MongoDB URI");
}

let cache = { connection: null, promise: null };

export default async function DBConnect() {
  if (cache.connection) {
    return cache.connection;
  }
  if (!cache.promise) {
    cache.promise = mongoose.connect(process.env.MONGO_URI);
  }
  try {
    cache.connection = await cache.promise;
  } catch (err) {
    cache.connection = null;
    throw err;
  }
  return cache.connection;
}
