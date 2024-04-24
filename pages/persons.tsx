import clientPromise from "../lib/mongodb";
import { GetServerSideProps } from "next";

interface Person {
  _id: string;
  name: string;
}
