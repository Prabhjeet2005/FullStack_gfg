db.sales.updateMany(
	{ quantity: { $gte: 10 } },
	{ $mul: { price: 0.9 } }
);
