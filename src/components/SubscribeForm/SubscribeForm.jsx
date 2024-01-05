import "./SubscribeForm.css";

const SubscribeForm = () => {
  return (
    <div className="container">
      <div className="subscribe-container">
        <div className="subscribe-form-box">
          <h2>Get Discount Offer In Your Mail</h2>
          <small>Subscribe our newsletter</small>
          <div className="input-box">
            <input type="email" placeholder="Your Email" />
            <input type="submit" value="Subscribe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
