import { Product } from './model.js'
import Products from './products.json' assert { type: 'json' }

const populate = async () => {
	// await Product.insertMany([...Products.products], (err, docs) => {
	// 	console.log('An error occurred')
	// })
}

export { populate }
