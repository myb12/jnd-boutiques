import { useAppSelector } from '@/store';
import { selectTotalPrice } from '@/store/features/cart-slice';
import React from 'react';
import { useSelector } from 'react-redux';

const OrderList = () => {
    const { items } = useAppSelector(state => state.cartReducer);
    const totalPrice = useSelector(selectTotalPrice);

    return (
            <div className="bg-white shadow-1 rounded-[10px]">
              <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
                <h3 className="font-medium text-xl text-dark">
                  Your Order
                </h3>
              </div>
              <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
                {/* <!-- title --> */}
                <div className="flex items-center justify-between py-5 border-b border-gray-3">
                  <div>
                    <h4 className="font-medium text-dark">Product</h4>
                  </div>
                  <div>
                    <h4 className="font-medium text-dark text-right">
                      Subtotal
                    </h4>
                  </div>
                </div>
                {/* <!-- product item --> */}
                {
                    items?.map(item => <div key={item.id} className="flex items-center justify-between py-5 border-b border-gray-3">
                                <div>
                                    <p className="text-dark">{item.title} <span className="text-sm text-gray-500">({item.quantity} x ${item.discountedPrice})</span></p>
                                </div>
                                <div>
                                    <p className="text-dark text-right">${item.discountedPrice * item.quantity}</p>
                                </div>
                    </div>)
                }

               
                {/* <!-- total --> */}
                <div className="flex items-center justify-between pt-5">
                  <div>
                    <p className="font-medium text-lg text-dark">Total</p>
                  </div>
                  <div>
                    <p className="font-medium text-lg text-dark text-right">
                      ${totalPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default OrderList;