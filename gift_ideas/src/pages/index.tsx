import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <div>
      <h1>Test</h1>
      <h2>hello</h2>
    </div>
  )
};

export default Home;
