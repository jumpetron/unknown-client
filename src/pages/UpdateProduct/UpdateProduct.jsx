import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const loadedData = useLoaderData();
  const {
    _id,
    brand,
    name,
    image,
    qty,
    type,
    category,
    shortDescription,
    fullDescription,
    price,
    review,
  } = loadedData;
  console.log(loadedData);
  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const productPhoto = form.productPhoto.value;
    const productQty = form.productQty.value;
    const productType = form.productType.value;
    const category = form.category.value;
    const shortDescription = form.shortDescription.value;
    const fullDescription = form.fullDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const reviewPeople = form.reviewPeople.value;
    const updatedProduct = {
      productName,
      brandName,
      productPhoto,
      productQty,
      productType,
      category,
      shortDescription,
      fullDescription,
      price,
      rating,
      reviewPeople,
    };

    // create new product
    fetch(`https://unknown-server-six.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Updated Successfully!");
        }
      });
  };

  return (
    <div className="container">
      <div className="add-product-content">
        <div>
          <h2>Update Your Product</h2>
        </div>
        <form onSubmit={handleUpdateProduct} className="form-box">
          <div className="field-box">
            <div className="name-field">
              <p>Product Name</p>
              <input
                defaultValue={name}
                name="productName"
                type="text"
                placeholder="Product Name"
              />
            </div>
            <div className="brand-field">
              <p>Brand Name</p>
              <input
                defaultValue={brand}
                name="brandName"
                type="text"
                placeholder="Brand Name"
              />
            </div>
          </div>
          <div className="field-box">
            <div className="image-field">
              <p>Product Image</p>
              <input
                defaultValue={image}
                name="productPhoto"
                type="text"
                placeholder="Product Image URL"
              />
            </div>
            <div className="qty-field">
              <p>Stock</p>
              <input
                defaultValue={qty}
                name="productQty"
                type="text"
                placeholder="Quantity"
              />
            </div>
          </div>
          <div className="field-box two-box">
            <div className="type-field">
              <p>Type</p>
              <input
                defaultValue={type}
                name="productType"
                type="text"
                placeholder="Product Type"
              />
            </div>
            <div className="category-field">
              <p>Select Category</p>
              <select defaultValue={category} name="category">
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kid">Kid</option>
              </select>
            </div>
          </div>
          <div className="text-area short-description">
            <p>Short Details</p>
            <textarea
              defaultValue={shortDescription}
              name="shortDescription"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="text-area full-description">
            <p>Full Details</p>
            <textarea
              defaultValue={fullDescription}
              name="fullDescription"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div className="field-box">
            <div>
              <p>Price</p>
              <input
                defaultValue={price}
                name="price"
                type="text"
                placeholder="$ Price"
              />
            </div>
            <div>
              <p>Rating</p>
              <input
                defaultValue={review.rating}
                name="rating"
                type="text"
                placeholder="Rating Number"
              />
            </div>
            <div>
              <p>Reviewer People</p>
              <input
                defaultValue={review.people}
                name="reviewPeople"
                type="text"
                placeholder="People Number"
              />
            </div>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
