import Link from "next/link"
import React from "react"


export default function ProductItem(product){
    console.log(product.product)
    product=product.product
    return(
        <div className="card">
            <Link href={`/product/${product.slug}`}>
            <a>
                <img
                src={product.image}
                alt={product.name}
                className="rounded shadow"
                />
            </a>
            </Link>

            <div className="flex flex-col items-center justify-center p-5">
                <Link href={`/product/${product.slug}`}>
                    <a>
                        <h2 className="text-lg">{product.name}</h2>
                    </a>
                </Link>
                <p className="mb-2">{product.brand}</p>
                <p className="mb-2">test</p>
                <p>Rs. {product.price}</p>
                <button className="primary-button" type="button">
                    Add to cart
                </button>
            </div>
        </div>
    )
}