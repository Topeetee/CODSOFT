import React, { useState } from 'react';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    desc: '',
    imageUrl: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', productData.name);
      formData.append('price', productData.price);
      formData.append('desc', productData.desc);
      formData.append('img', event.target.img.files[0]);
      

      // Send a POST request to your server's API endpoint using formData
      const response = await fetch('http://localhost:8080/api/products/addproduct', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Product added successfully, handle the response as needed
        console.log('Product added successfully');
      } else {
        // Handle errors
        console.error('Error adding product:', response.status);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className=' flex flex-col justify-start text-center gap-10 mt-10'>
      <h2 className=' text-2xl font-bold sm:text-lg'>Add Product to products</h2>
      <form onSubmit={handleSubmit}   encType="multipart/form-data" className=' flex flex-col gap-6 justify-center text-center sm:flex sm:flex-col'>
        <div className=''>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            placeholder='NAME'
            required
            className='  py-4 w-96 pl-5 rounded outline-none  '
          />
        </div>
        <div>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            placeholder='PRICE'
            required
            min="0"
            className='  py-4 w-96 pl-5 rounded outline-none'
          />
        </div>
        <div>
          <textarea
            id="desc"
            name="desc"
            value={productData.desc}
            onChange={handleInputChange}
            placeholder='DESRCIPTION'
            required
            className='  py-4 w-96 pl-5 rounded outline-none'
          />
        </div>
        <div>
          <input
            type="file"
            id="img"
            name="img"
            placeholder='Select an Image'
            required
            className='py-4 w-96 pl-5 rounded outline-none'
          />
        </div>
        <div>
          <button type="submit" className=' bg-slate-900 text-white text-base px-8 py-4 rounded-lg'>Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
