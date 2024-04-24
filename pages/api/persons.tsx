import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
try{
  const client = await clientPromise;
  const db = client.db("pragdb");
  const persons = await db
    .collection("persons")
    .find({})
    .sort({ metacritic: -1 })
    .limit(10)
    .toArray();
    res.json(persons);
  }catch(e) {
    console.error(e);
  }
}


