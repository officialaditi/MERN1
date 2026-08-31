const ProductCard = ({prod }) => {

  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product Info */}
      <div className="p-5">
        {/* Brand + Rating */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-medium text-slate-500">
            {prod.brand}
          </span>

          <span className="rounded-full bg-yellow-50 px-2.5 py-1 text-sm font-medium text-yellow-600">
            ★ {prod.rating}
          </span>
        </div>

        {/* Name */}
        <h2 className="mb-2 text-lg font-semibold text-slate-900">
          {prod.name}
        </h2>

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm leading-5 text-slate-500">
          {prod.description}
        </p>

        {/* Price */}
      <div>
          <p className="mb-4 text-2xl font-bold text-slate-900">
          ₹{prod.price}
        </p>
        {/** quantity */}
        <div>
          <span>

          </span>
        </div>
      </div>

        {/* Bottom */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-sm text-slate-500">
            {prod.quantity > 0
              ? `${prod.quantity} in stock`
              : "Out of stock"}
          </span>

          <button
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700"
            disabled={prod.quantity === 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;