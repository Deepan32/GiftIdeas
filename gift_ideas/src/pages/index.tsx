import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import Layout from "../../components/Layout";
import data from '../utils/data'
import ProductItem from '../../components/ProductItem'
import Catogories from "../../components/Catogories"
const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Layout title={"Home page"}> 
        <Catogories />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {data.products.map((product)=>(
             <ProductItem product={product} key={product.slug}></ProductItem> 
          ))}
        </div>
        
      </Layout>
      
    </>
  )
};

export default Home;
