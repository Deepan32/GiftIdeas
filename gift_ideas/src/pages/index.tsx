import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import Layout from "../../components/Layout";
//import data from '../utils/data'
import db from '../utils/db'
import Product from '../models/Product'
import {ProductDocument} from '../models/Product'
//import productSchema from '../models/Product'
import ProductItem from '../../components/ProductItem'
import mongoose, {Model} from 'mongoose';


const Home: NextPage = ({products}) => {
// const Home = ({products}) => {  
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
//   const products:<{
//     name: { type: String, required: true },
//     slug: { type: String, required: true, unique: true },
//     category: { type: String, required: true },
//     image: { type: String, required: true },
//     price: { type: Number, required: true },
//     brand: { type: String, required: true },
//     rating: { type: Number, required: true, default: 0 },
//     numReviews: { type: Number, required: true, default: 0 },
//     countInStock: { type: Number, required: true, default: 0 },
//     description: { type: String, required: true },
// }> = await Product.find().lean()
const products= await Product.find().lean()
  
  return{
    props:{
      products,
    },
  };
}
export default Home;
