import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import Layout from "../../components/Layout";
import data from '../utils/data'
import db from '../utils/db'
import ProductItem from '../../components/ProductItem'
import Product from "../models/Product";
const Home: NextPage = ({products}) => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Layout title={"Home page"}> 
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product)=>(
             <ProductItem product={product} key={product.slug}></ProductItem> 
          ))}
        </div>
        
      </Layout>
      
    </>
  )
};

export async function getServerSideProps(){
  await db.connect()
  const products= await Product.find().lean();
  console.log('hi products')
  console.log(products,'products')
  return (
    {props:
      {products:products.map(db.convertDocToObj)}
    }
  )
}

export default Home;
