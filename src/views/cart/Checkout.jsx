import React from 'react'
import { ReactComponent as IconCart3 } from 'bootstrap-icons/icons/cart3.svg'
import { useSelector } from 'react-redux'

export const Checkout=()=>{
	const data = useSelector(s=>s.itemsCount)
	return (
    <div>
      <div className='bg-secondary border-top p-4 text-white mb-3'>
        <h1 className='display-6'>Checkout</h1>
      </div>
      <div className='container mb-3'>
        <div className='row'>
          <div className='card-header'>
            <IconCart3 className='i-va' /> Cart <span className='badge bg-secondary float-end'>3</span>
          </div>
          <ul className='list-group list-group-flush'>
            {data?.map((d) => (
              <li className='list-group-item d-flex justify-content-between lh-sm'>
                  <h6 className='my-0'>Product</h6>
                <span className='text-muted'>{d.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}


export default Checkout
