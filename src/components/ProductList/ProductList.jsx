import './productList.css'
import Product from '../Product/Product'
import { products } from '../utilConstants/data'


const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">
                Create & inspire. It's SDportfolio
            </h1>
                <p className="pl-desc">
                    SDportfolio is a creative portfolio that your work has been waiting for.Beautiful homes, stunning portfolio styles & a whole lot more awaits inside.
                </p>
        </div>
        <div className="pl-list">
            {products.map((product) => (
                <Product key={product.id} img={product.img} link={product.link}/>
            ))}
        </div>
    </div>
  )
}

export default ProductList