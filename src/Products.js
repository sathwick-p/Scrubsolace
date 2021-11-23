import React from "react";

import ProductCards from "./ProductCards";
import pic1 from "./imgs/red.1.jpeg";
import pic2 from "./imgs/Lav.jpeg";
import pic8 from "./imgs/Lv.jpeg";
import pic3 from "./imgs/red.jpeg";
import pic4 from "./imgs/peach.jpeg";
import pic5 from "./imgs/green.jpeg";
import pic7 from "./imgs/blue.jpeg";
import pic9 from "./imgs/Himalayan.jpeg";
import pic10 from "./imgs/Lemon.jpeg";
function Products() {
  return (
    <div className="product_display">
      <div className="product_row">
        <ProductCards
          title="Rosemary sugar scrub"
          price={200}
          id="11"
          image={pic1}
        />
      </div>
      <div className="product_row">
        <ProductCards
          title="Lavendar sugar scrub"
          price={200}
          id="14"
          image={pic2}
        />
      </div>

      <div className="product_row">
        <ProductCards
          title="Rose and Sandalwood body scrub"
          price={200}
          id="12"
          image={pic4}
        />
      </div>
      <div className="product_row">
        <ProductCards
          title="Lavendar sugar body scrub"
          price={200}
          id="13"
          image={pic5}
        />
      </div>
      <div className="product_row">
        <ProductCards title="Blue Snow" price={200} id="14" image={pic7} />
      </div>
      <div className="product_row">
        <ProductCards
          title="Jasmine lip scrub"
          price={200}
          id="15"
          image={pic3}
        />
      </div>
      <div className="product_row">
        <ProductCards
          title="Lavendar and Vanilla scrubs"
          price={200}
          id="16"
          image={pic8}
        />
      </div>
      <div className="product_row">
        <ProductCards
          title="Himalayan Pink Salt scrubs"
          price={200}
          id="17"
          image={pic9}
        />
      </div>
      <div className="product_row">
        <ProductCards title="Lemon scrubs" price={200} id="18" image={pic10} />
      </div>
    </div>
  );
}

export default Products;
