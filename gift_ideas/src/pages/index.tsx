import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import Layout from "../../components/Layout";
//import data from '../utils/data'
import db from '../utils/db'
import Product from '../models/Product'
import ProductItem from '../../components/ProductItem'
import {Model} from 'mongoose';

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
  await db.connect;
  const products:Model<Product> = await Product.find().lean()
  return{
    props:{
      products,
    },
  };
}
export default Home;
