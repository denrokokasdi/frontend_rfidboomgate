// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { FaBeer, FaCoffee, FaApple, FaAndroid } from 'react-icons/fa';
// import './Home.css'; // Import the CSS file

// const Home = () => {
//   return (
//     <Container className="custom-container" class="bgcolor-warning">
//       <Row className="custom-row">
//         <Col xs={12} md={3}>
//           <Card className="text-center">
//             <Card.Body className="icon-hover">
//               <FaBeer size={50} />
//               <Card.Title>Beerr</Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col xs={12} md={3}>
//           <Card className="text-center">
//             <Card.Body className="icon-hover">
//               <FaCoffee size={50} />
//               <Card.Title>Coffee</Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col xs={12} md={3}>
//           <Card className="text-center">
//             <Card.Body className="icon-hover">
//               <FaApple size={50} />
//               <Card.Title>Apple</Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col xs={12} md={3}>
//           <Card className="text-center">
//             <Card.Body className="icon-hover">
//               <FaAndroid size={50} />
//               <Card.Title>Android</Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Home;


// // useEffect(() => {
// //   const fetchData = async () => {
// //     try {
// //       const response = await axios.get('https://rfidboomgate.vercel.app/api/data/');
// //       setData(response.data);
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //     }
// //   };

// //   fetchData();
// // }, []);

import * as React from "react";
import { ProductCell } from "@/components/ProductCell";
import { PromoBanner } from "@/components/PromoBanner";
import { Button } from "@/components/Button";

function MyComponent() {
  return (
    <>
      <div className="box-border flex relative flex-col shrink-0">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-full max-md:ml-0 max-md:w-full" />
        </div>
      </div>
      <div
        className="box-border flex relative flex-col shrink-0 p-5 min-h-[100px]"
        maxWidth={1200}
        lazyLoad={false}
      >
        <section className="box-border flex relative flex-col grow shrink-0 self-stretch p-5 mx-auto w-full max-w-[1200px] min-h-[100px]">
          <div className="box-border relative shrink-0 mt-5 h-auto text-2xl font-light text-zinc-800">
            <h2>Recently Viewed</h2>
          </div>
          <div className="box-border flex relative flex-col shrink-0 mt-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <ProductCell
                  image="https://cdn.builder.io/api/v1/image/assets%2Fa8b7168136f64220b5633a354f9263d0%2F18de1e7472f14c0aa90cefd2e477df24"
                  title="Women Party Sunglasses"
                  price="12.85"
                  className="box-border flex relative flex-col shrink-0"
                />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <ProductCell
                  image="https://cdn.builder.io/api/v1/image/assets%2Ff0ee2e9abff445808b676e95a820908d%2F7b27f16fc7b74313aeca94b79301ca54"
                  title="Women Stylish Sunglasses"
                  price="14.67"
                  className="box-border flex relative flex-col shrink-0"
                />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <ProductCell
                  image="https://cdn.builder.io/api/v1/image/assets%2Ff0ee2e9abff445808b676e95a820908d%2Fc16711d00fbf4784be27993aa31724bd"
                  title="Men Classic Black Sunglasses"
                  price="13.45"
                  className="box-border flex relative flex-col shrink-0"
                />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <ProductCell
                  image="https://cdn.builder.io/api/v1/image/assets%2Ff0ee2e9abff445808b676e95a820908d%2Ff08523d3a67741589ff3da0716ded35f"
                  title="Men Party Sunglasses"
                  price="11.54"
                  className="box-border flex relative flex-col shrink-0"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className="box-border flex relative flex-col shrink-0 p-5 min-h-[100px]"
        maxWidth={1200}
        lazyLoad={false}
      >
        <section className="box-border flex relative flex-col grow shrink-0 self-stretch p-5 mx-auto w-full max-w-[1200px] min-h-[100px]">
          <PromoBanner
            backgroundColor="#CECEC2"
            label="NEW COLLECTION"
            heading="Winter Fashion"
            body="Get trendy this winter with trendy winter collection inspired by celebrities."
            ctaLabel="Shop Now"
            image="https://cdn.builder.io/api/v1/image/assets%2Fa8b7168136f64220b5633a354f9263d0%2F730dea8776e846a2a03a896c8baa7209"
            className="box-border flex overflow-hidden relative flex-col shrink-0 my-6 rounded-2xl h-[300px] min-h-[300px] max-sm:h-auto"
          />
        </section>
      </div>
      <div
        className="box-border flex relative flex-col shrink-0 p-5 min-h-[100px]"
        maxWidth={1200}
        lazyLoad={false}
      >
        <section className="box-border flex relative flex-col grow shrink-0 self-stretch p-5 mx-auto w-full max-w-[1200px] min-h-[100px]">
          <div className="box-border relative shrink-0 mt-5 h-auto text-2xl font-light text-zinc-800">
            <h2>Trending Now</h2>
          </div>
          <div className="box-border flex relative flex-col shrink-0 mt-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <ProductCell
                  image="https://cdn.builder.io/api/v1/image/assets%2Ff0ee2e9abff445808b676e95a820908d%2F39817cd549ca4bb68a9eaab95db9f7fc"
                  title="Casual Shirt"
                  price="34.56"
                  className="box-border flex relative flex-col shrink-0"
                />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <ProductCell
                  image="https://cdn.builder.io/api/v1/image/assets%2Ff0ee2e9abff445808b676e95a820908d%2F0975b290b7d147b0b20f266af5a95603"
                  title="Men Printed T-shirt"
                  price="12.85"
                  className="box-border flex relative flex-col shrink-0"
                />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <ProductCell
                  image="https://cdn.builder.io/api/v1/image/assets%2Ff0ee2e9abff445808b676e95a820908d%2F412d20c5e3224228970e587926046c6e"
                  title="Women Black Casual Top"
                  price="25.56"
                  className="box-border flex relative flex-col shrink-0"
                />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <ProductCell
                  image="https://cdn.builder.io/api/v1/image/assets%2Ff0ee2e9abff445808b676e95a820908d%2F7595a837887c434a83db33a7af473fee"
                  title="Men Black Jacket and Shirt"
                  price="42.82"
                  className="box-border flex relative flex-col shrink-0"
                />
              </div>
            </div>
          </div>
          <div className="box-border flex relative flex-col shrink-0 mt-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <ProductCell
                  image="https://cdn.builder.io/api/v1/image/assets%2Ff0ee2e9abff445808b676e95a820908d%2F406f5688d30045c0afe1111453387051"
                  title="Hoodie"
                  price="12.85"
                  className="box-border flex relative flex-col shrink-0"
                />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <ProductCell
                  image="https://cdn.builder.io/api/v1/image/assets%2Ff0ee2e9abff445808b676e95a820908d%2Ff45e807d90414b2d9a1473780ba5cb9c"
                  title="Casual Sumer Dress"
                  price="12.85"
                  className="box-border flex relative flex-col shrink-0"
                />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <ProductCell
                  image="https://cdn.builder.io/api/v1/image/assets%2Ff0ee2e9abff445808b676e95a820908d%2Fb9040f48059a44b3a6e6e36afcd59136"
                  title="Men White T-shirt"
                  price="23.45"
                  className="box-border flex relative flex-col shrink-0"
                />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <ProductCell
                  image="https://cdn.builder.io/api/v1/image/assets%2Ff0ee2e9abff445808b676e95a820908d%2F0cb84e4ea3c94f57a1fc8eeb13519970"
                  title="Stylish Women Top"
                  price="32.85"
                  className="box-border flex relative flex-col shrink-0"
                />
              </div>
            </div>
          </div>
          <Button
            buttonText="Show More"
            className="box-border flex relative flex-col shrink-0 mx-auto mt-9"
          />
        </section>
      </div>
      <div
        className="box-border flex relative flex-col shrink-0 p-5 min-h-[100px]"
        maxWidth={1200}
        lazyLoad={false}
      >
        <section className="box-border flex relative flex-col grow shrink-0 self-stretch p-5 mx-auto w-full max-w-[1200px] min-h-[100px]">
          <PromoBanner
            backgroundColor="#d8d7db"
            label="NEW COLLECTION"
            heading="Happy Winter Kids"
            body="Treat your kids with a wonderful splash of warmth and joyful colours."
            ctaLabel="Shop Now"
            image="https://cdn.builder.io/api/v1/image/assets%2Ff0ee2e9abff445808b676e95a820908d%2Ffc5bd79e13a64f4e9ae284082e5e824d"
            className="box-border flex overflow-hidden relative flex-col shrink-0 mb-12 rounded-2xl h-[300px] min-h-[300px] max-sm:h-auto"
          />
        </section>
      </div>
    </>
  );
}

export default MyComponent;