import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Collection = () => {

  // get category id from URL (optional)
  const { id } = useParams()

  // get products from redux store
  const element = useSelector(state => state.Product)

  const products = element?.productelement || []

  // filter ONLY if category id exists
  const filteredProducts = id
    ? products.filter(
        (item) => item.product_category === Number(id)
      )
    : products

  return (
    <div className='mx-auto py-12 md:px-16 lg:px-4 my-14 pt-[50px]'>

      <h2 className='text-2xl font-bold mb-6 text-center'>
        Collections
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>

        {filteredProducts.length > 0 ? (
          filteredProducts.map((productitems) => (
            <div key={productitems.id}>
              <Product productitems={productitems} />
            </div>
          ))
        ) : (
          <p className='text-center col-span-full'>
            products is loading...
          </p>
        )}

      </div>
    </div>
  )
}

export default Collection
