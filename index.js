import { populate } from './db.js'
import { Product } from './model.js'
import mongoose from 'mongoose'
import { serialize } from 'v8'
import { assert } from 'console'

function connectDb() {
	return mongoose.connect(
		'mongodb+srv://root:root@cluster0.tyhbowc.mongodb.net/?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
}

connectDb()
populate()

async function doIt() {
	const product = await Product.findOne({ id: 1 })

	const aggregatedProducts = await Product.aggregate([
		{ $group: { _id: '$category', total: { $sum: '$price' } } },
	])

	// assert.ok()
	serialize(product).length
	console.log({ product })
	console.log({ aggregatedProducts })
	process.exit(1)
}

doIt()
