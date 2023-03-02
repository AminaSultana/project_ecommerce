import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeart, faShoppingCart, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../store/actions'
import { useLocation } from 'react-router-dom'

const ProductDetailView = () => {
  const dispatch = useDispatch()
  const item = useSelector((s) => s.itemsCount)
  const location = useLocation()
  const id = location.pathname.split("/")[3]

  const handleAddItem = () => {
    dispatch(addItem(id))
  }
  const handleRemoveItem = () => {
      dispatch(removeItem(id))
  }
  const handleAddCart=()=>{
    if(item>0){
      // dispatch(addToCart(id))
    }
  }
  return (
    <div className='container-fluid mt-3'>
      <div className='row'>
        <div className='col-4 text-center'>
          <img src='../../images/products/tshirt_red_480x400.webp' className='img-fluid mb-3' alt='' />
          <img src='../../images/products/tshirt_grey_480x400.webp' className='border border-secondary me-2' width='75' alt='...' />
          <img src='../../images/products/tshirt_black_480x400.webp' className='border border-secondary me-2' width='75' alt='...' />
          <img src='../../images/products/tshirt_green_480x400.webp' className='border border-secondary me-2' width='75' alt='...' />
        </div>
        <div className='col'>
          <h1 className='h5 d-inline me-2'>Product Name</h1>
          <dl className='row small mb-3'>
            <dt className='col-sm-3'>Availability</dt>
            <dd className='col-sm-9'>In stock</dd>
            <dt className='col-sm-3'>Sold by</dt>
            <dd className='col-sm-9'>Authorised Store</dd>
            <dt className='col-sm-3'>Size</dt>
            <dt className='col-sm-3'>Color</dt>
            <dd className='col-sm-9'>
              <button className='btn btn-sm btn-primary p-2 me-2'></button>
              <button className='btn btn-sm btn-secondary p-2 me-2'></button>
              <button className='btn btn-sm btn-success p-2 me-2'></button>
              <button className='btn btn-sm btn-danger p-2 me-2'></button>
              <button className='btn btn-sm btn-warning p-2 me-2'></button>
              <button className='btn btn-sm btn-info p-2 me-2'></button>
              <button className='btn btn-sm btn-dark p-2 me-2'></button>
            </dd>
          </dl>
          <div className='mb-3'>
            <div className='d-inline float-start me-2'>
              <div className='input-group input-group-sm mw-140'>
                <button className='btn btn-primary text-white' type='button' onClick={handleRemoveItem}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <input type='text' className='form-control' defaultValue='1' />
                <button className='btn btn-primary text-white' type='button' onClick={handleAddItem}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <button type='button' className='btn btn-sm btn-primary me-2' title='Add to cart' onClick={handleAddCart}>
              <FontAwesomeIcon icon={faCartPlus} /> Add to cart
            </button>
            <button type='button' className='btn btn-sm btn-warning me-2' title='Buy now'>
              <FontAwesomeIcon icon={faShoppingCart} /> Buy now
            </button>
            <button type='button' className='btn btn-sm btn-outline-secondary' title='Add to wishlist'>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailView
