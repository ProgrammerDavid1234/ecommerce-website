import React from 'react'
import classes from './cart.module.css'
import Tv from '../Assets/Tv.png'
import smallpad from '../Assets/smallpad.png'

const cart = () => {
    return (
        <div className={classes.padding}>
            <div className={classes.space1}>
                <table>
                    <thead>
                        <tr>
                            <td className={classes.align}>Products</td>
                            <td>Price</td>
                            <td className={classes.quantity}>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>

                    <tr className={classes.gapp}>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                    <tbody>
                        <tr>
                            <td className={classes.images}><img src={Tv} alt='' /> <p>LCD Monitor</p></td>
                            <td>$650</td>
                            <td className={classes.quantity}>
                                <input type='number' placeholder='01'>
                                </input>
                            </td>
                            <td>$650</td>
                        </tr>

                        <tr className={classes.gapp}>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                        </tr>

                        <tr>
                            <td className={classes.images}><img src={Tv} alt='' /> <p>LCD Monitor</p></td>
                            <td>$650</td>
                            <td className={classes.quantity}>
                                <input type='number' placeholder='01'>
                                </input>
                            </td>
                            <td>$650</td>
                        </tr>

                        <tr className={classes.gapp}>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td className={classes.images}><img src={Tv} alt='' /> <p>LCD Monitor</p></td>
                            <td>$650</td>
                            <td className={classes.quantity}>
                                <input type='number' placeholder='01'>
                                </input>
                            </td>
                            <td>$650</td>
                        </tr>
                    </tbody>

                </table>
            </div>
            <div className={classes.btns}>
                <button>Return To Shop</button>
                <button>Update Cart</button>
            </div>

            <div className={classes.one}>
                <div className={classes.coupon}>
                    <input type='text' placeholder='Coupon Code' />
                    <button>Apply Coupon</button>
                </div>
                <div className={classes.container}>
                        <div className={classes.margin}>
                            <h2>Cart Total</h2>
                            <div className={classes.straight}>
                                <p>Subtotal:</p>
                                <p>$1750</p>
                            </div>
                            <div className={classes.straight}>
                                <p>Shipping:</p>
                                <p>Free</p>
                            </div>
                            <div className={classes.straight}>
                                <p>Total:</p>
                                <p>$1750</p>
                            </div>
                            <button>Process To Checkout</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default cart
