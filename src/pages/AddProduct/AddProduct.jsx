import { toast } from "react-hot-toast";
import "./AddProduct.css";

const AddProduct = () => {
  const handleAddProduct = (e) => {
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
    const product = {
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
    fetch("https://unknown-server-rho.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product Add Successfully!");
        form.reset();
        console.log(data);
      });
  };

  return (
    <div className="container">
      <div className="add-product-content">
        <div>
          <h2>Add Your Product</h2>
        </div>
        <form onSubmit={handleAddProduct} className="form-box">
          <div className="field-box">
            <div className="name-field">
              <p>Product Name</p>
              <input
                name="productName"
                type="text"
                placeholder="Product Name"
              />
            </div>
            <div className="brand-field">
              <p>Brand Name</p>
              <input name="brandName" type="text" placeholder="Brand Name" />
            </div>
          </div>
          <div className="field-box">
            <div className="image-field">
              <p>Product Image</p>
              <input
                name="productPhoto"
                type="text"
                placeholder="Product Image URL"
              />
            </div>
            <div className="qty-field">
              <p>Stock</p>
              <input name="productQty" type="text" placeholder="Quantity" />
            </div>
          </div>
          <div className="field-box two-box">
            <div className="type-field">
              <p>Type</p>
              <input
                name="productType"
                type="text"
                placeholder="Product Type"
              />
            </div>
            <div className="category-field">
              <p>Select Category</p>
              <select name="category">
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kid">Kid</option>
              </select>
            </div>
          </div>
          <div className="text-area short-description">
            <p>Short Details</p>
            <textarea name="shortDescription" cols="30" rows="5"></textarea>
          </div>
          <div className="text-area full-description">
            <p>Full Details</p>
            <textarea name="fullDescription" cols="30" rows="10"></textarea>
          </div>

          <div className="field-box">
            <div>
              <p>Price</p>
              <input name="price" type="text" placeholder="$ Price" />
            </div>
            <div>
              <p>Rating</p>
              <input name="rating" type="text" placeholder="Rating Number" />
            </div>
            <div>
              <p>Reviewer People</p>
              <input
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

export default AddProduct;
