// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Detail from "./components/Detail";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Banner />
        <Routes>
          <Route
            path="/"
            element={
              <Card
                id={1}
                name="Product Name"
                image="product.jpg"
                departureTime="10:00"
                arrivalTime="12:00"
                price="100"
                discount="10%"
                availableSeats={20}
                description="Product Description"
              />
            }
          />
          <Route path="/detail/:productId" element={<Detail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
