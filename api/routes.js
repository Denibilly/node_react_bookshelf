const Router = require('@koa/router');
const router = new Router();

const lrProperty = require('./models/lrProperty.js');

router.param('lrPropertyId', async (value, ctx, next) =>
{
	let isNum = /^\d+$/.test(value);
	if(isNum){
		ctx.lrProperty = await new lrProperty({id: value}).fetch({withRelated: ['lrTransactions'], require: false});
	}
	else if(value.length == 5 || value.length == 6 && value.charAt(0) == "E"){
		let outcode = value.slice(0, -3);
		let incode = value.slice(-3);
		ctx.lrProperty = await new lrProperty({outcode: outcode, incode: incode}).fetch({withRelated: ['lrTransactions'], require: false});
	}
	else {
		ctx.lrProperty = await new lrProperty({street: value}).fetch({withRelated: ['lrTransactions'], require: false});
	}

	if(! ctx.lrProperty){
		ctx.status = 404;
		return ctx.body = {error: true, msg: "LRProperty not found"};
	}

	return next();

})

.get('/', async (ctx, next) => 
{
	return ctx.body = "I'm alive!";
})
.get('/lrProperty/:lrPropertyId', async (ctx, next) => 
{
	return ctx.body = {success: true, lrProperty: ctx.lrProperty.toJSON()};
})

module.exports = (app) =>
{
	app
	.use(router.routes())
	.use(router.allowedMethods());
};
