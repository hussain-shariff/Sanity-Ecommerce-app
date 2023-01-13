import React from 'react';
import { client } from '../lib/client';
import { Product, Cart, Footer, FooterBanner, HeroBanner, Layout, Navbar } from '../Components';


const Home = ({ products, bannerData}) => {
  return (
    <>
      <HeroBanner bannerData = {bannerData.length && bannerData[0]}/>
      <div className='products-heading'>
        <h1>Best Selling Products</h1>
        <p>Speakers of many Variations</p>
      </div>

      <div className='products-container'>
       { products?.map(product => <Product
        product = { product }
        key = { product._id }/>)}
      </div>

      <FooterBanner 
      footerBanner = { bannerData[0] }/>
    </>
  )
}
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}
export default Home

  