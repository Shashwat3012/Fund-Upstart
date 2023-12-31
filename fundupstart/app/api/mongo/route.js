import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  // Replace the uri string with your connection string.
  const uri =
    "mongodb+srv://funding:U3kGGB7USIvT2dHi@localghost.i2ouhm1.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    const database = client.db("fund-upstart");
    const movies = database.collection("login");

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future" };
    const movie = await movies.findOne(query);

    console.log(movie);
    return NextResponse.json({ a: 34 });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
