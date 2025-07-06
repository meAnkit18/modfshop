import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import {categories} from '../assets/assets'
import ProductCard from '../components/ProductCard'

function ProductCatagory() {
  const {products} = useAppContext()
  const {category} = useParams()
  const searchCatagory = categories.find((item) => item.path.toLowerCase() === category)
  const filterProducts = products.filter((product)=> product.category.toLowerCase()===category)
  return (

  <div className='mt-16'>
    {searchCatagory && (
      <div className=' flex flex-col items-end w-max'>
        <p className='text-2xl font-medium'>{searchCatagory.text.toUpperCase()}</p>
        <div className='w-16 h-0.5 bg-primary rounded-full'></div>

      </div>
    )}
    {filterProducts.length >0?(
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6'>
        {filterProducts.map((product)=>(
          <ProductCard key={product._id} product={product}/>
        ))

        }
      </div>
    ):(
      <div className=' flex items-center justify-center h-[60vh]'>
        <p className='text-2xl font-medium text-primary'>No product found in this Category</p>
      </div>
    )

    }
      
    </div>
  )
}

export default ProductCatagory
