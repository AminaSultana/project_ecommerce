import React, { lazy } from 'react'
import { ReactComponent as IconLaptop } from 'bootstrap-icons/icons/laptop.svg'
import { ReactComponent as IconHeadset } from 'bootstrap-icons/icons/headset.svg'
import { ReactComponent as IconPhone } from 'bootstrap-icons/icons/phone.svg'
import { ReactComponent as IconTv } from 'bootstrap-icons/icons/tv.svg'

const Banner = lazy(() => import('../components/carousel/Banner'))
const CardIcon = lazy(() => import('../components/card/CardIcon'))

const dummy_data = [
  {
    to: '/product/detail/1',
    img: IconLaptop,
    title: 'Laptop',
    text: ' Upto 20% off',
    tips: 'Sony, Dell, Lenovo',
  },
  {
    to: '/product/detail/2',
    img: IconHeadset,
    title: 'Headset',
    text: ' Upto 50% off',
    tips: 'Sony, Dell, Lenovo',
  },
  {
    to: '/product/detail/3',
    img: IconPhone,
    title: 'Phone',
    text: ' Upto 20% off',
    tips: 'Sony, Dell, Lenovo',
  },
  {
    to: '/product/detail/4',
    img: IconTv,
    title: 'TV',
    text: ' Upto 25% off',
    tips: 'Sony, Dell, Lenovo',
  },
  {
    to: '/product/detail/5',
    img: IconLaptop,
    title: 'Laptop',
    text: ' Upto 20% off',
    tips: 'Sony, Dell, Lenovo',
  },
  {
    to: '/product/detail/6',
    img: IconHeadset,
    title: 'Headset',
    text: ' Upto 50% off',
    tips: 'Sony, Dell, Lenovo',
  },
  {
    to: '/product/detail/7',
    img: IconPhone,
    title: 'Phone',
    text: ' Upto 20% off',
    tips: 'Sony, Dell, Lenovo',
  },
  {
    to: '/product/detail/8',
    img: IconTv,
    title: 'TV',
    text: ' Upto 25% off',
    tips: 'Sony, Dell, Lenovo',
  },
  {
    to: '/product/detail/9',
    img: IconLaptop,
    title: 'Laptop',
    text: ' Upto 20% off',
    tips: 'Sony, Dell, Lenovo',
  },
  {
    to: '/product/detail/10',
    img: IconHeadset,
    title: 'Headset',
    text: ' Upto 50% off',
    tips: 'Sony, Dell, Lenovo',
  },
  {
    to: '/product/detail/11',
    img: IconPhone,
    title: 'Phone',
    text: ' Upto 20% off',
    tips: 'Sony, Dell, Lenovo',
  },
  {
    to: '/product/detail/12',
    img: IconTv,
    title: 'TV',
    text: ' Upto 25% off',
    tips: 'Sony, Dell, Lenovo',
  },
]

const HomeView = () => {
  return (
    <>
    <Banner/>
      <div className='container'>
        <div className="row">
          {dummy_data.map((data, idx) => {
            return (
              <div key={idx} className='col-3'>
                <CardIcon title={data.title} text={data.text} tips={data.tips} to={data.to} Img={data.img} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default HomeView
