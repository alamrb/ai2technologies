import Cookies from "js-cookie";
import { getMETHOD, postMETHOD } from "./http_helper";
import { v4 as uuidv4 } from 'uuid';
import { appStatic } from "@/Config/config";
const _user = Cookies.get('_user') ? JSON.parse(Cookies.get('_user')) : null

export const geolocation = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await getMETHOD('geolocation');
            resolve(apires.data);
        } catch (error) {
            console.log(error);
            reject({ success: false });
        }
    })
}

export const get_exchangerate = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await getMETHOD('get_exchangerate');
            resolve(apires.data);
        } catch (error) {
            console.log(error);
            reject({ success: false });
        }
    })
}

export const getUserData = (params_data) => {
    if (params_data.type === 'set') {
        localStorage.setItem('user_data', JSON.stringify(params_data.data));
        return (params_data.data);
    } else {
        const user = (typeof window !== 'undefined') ? localStorage.getItem('user_data') : null;
        if (user) {
            return (JSON.parse(user));
        } else {
            return (false);
        }
    }
}

export const login = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('login', params_data);
            console.log(46, apires);
            if (apires.data.success) {
                resolve(apires.data)
            } else {
                reject({ success: false, status_phrase: apires.data.status_phrase });
            }
        } catch (error) {
            console.log(error);
            reject({ success: false, status_phrase: apires.data.status_phrase });
        }
    })
}

export const user_send_otp = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('user_send_otp', params_data);
            console.log(91, apires);
            if (apires.data.success) {
                resolve(apires.data)
            } else {
                reject({ success: false, status_phrase: apires.data.status_phrase });
            }
        } catch (error) {
            console.log(error);
            reject({ success: false, status_phrase: 'Something Wrong!!' });
        }
    })
}

export const register = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('register', params_data);
            if (apires.data.success) {
                resolve(apires.data);
            } else {
                resolve({ success: false, status_phrase: apires.data.status_phrase });
            }

        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const email_or_phone_verification = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('email_or_phone_verification', {
                "type": params_data.type,
                "value": params_data.value
            });
            if (apires.data.success) {
                resolve(apires.data);
            } else {
                resolve({ success: false, status_phrase: "Something Wrong!" });
            }

        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const logout = (fingerprint) => {
    return new Promise(async (resolve, reject) => {
        try {
            let parameters = {}
            parameters.user_id = _user._id;
            parameters.server_token = _user.server_token;
            parameters.fingerprint = fingerprint;
            await postMETHOD('logout', parameters);
            localStorage.removeItem('user_data');

            resolve({ success: true, status_phrase: "Logout success" });
        } catch (error) {
            resolve({ success: false, status_phrase: "Something Wrong!" });
            console.log(error)
        }
    })

}

export const deactiveUser = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            let parameters = {}
            parameters.user_id = _user._id;
            parameters.server_token = _user.server_token;
            parameters.old_password = params.old_password;
            console.log("🚀 ~ file: method.js:138 ~ returnnewPromise ~ parameters:", parameters)
            let data = await postMETHOD('deactive_user', parameters);
            console.log("🚀 ~ file: method.js:143 ~ returnnewPromise ~ data:", data)
            // localStorage.removeItem('user_data');
            resolve(data.data);

        } catch (error) {
            resolve({ success: false, status_phrase: "Something Wrong!" });
            console.log(error)
        }
    })

}
export const ForgotPasswordAPI = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('forgot_password', params_data);
            if (apires.data.success) {
                resolve(apires.data);
            } else {
                resolve({ success: false, status_phrase: apires.data.status_phrase });
            }

        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const Forgot_password_verifyAPI = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('forgot_password_verify', params_data);
            if (apires.data.success) {
                resolve(apires.data);
            } else {
                resolve({ success: false, status_phrase: apires.data.status_phrase });
            }

        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const NewPasswordAPI = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('new_password', params_data);
            if (apires.data.success) {
                resolve(apires.data);
            } else {
                resolve({ success: false, status_phrase: apires.data.status_phrase });
            }

        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}


export const get_brands = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await getMETHOD('get_brands', '?domain_id=6591324a818ccbf13df18d76');
            resolve(apires.data);
        } catch (error) {
            console.log(error);
            reject({ success: false });
        }
    })
}

export const get_item_by_brand_id = async (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await getMETHOD('get_item_by_brand_id', params);
            resolve(apires.data);
        } catch (error) {
            console.log(error);
            reject({ success: false });
        }
    })
}


export const add_favourite_address = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('add_favourite_address', {
                "user_id": _user._id,
                "server_token": _user.server_token,
                ...params_data
            });
            if (apires.data.success) {
                resolve(apires.data);
            } else {
                resolve({ success: false, status_phrase: "Something Wrong!" });
            }

        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const update_favourite_address = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('update_favourite_address', {
                user_id: _user._id,
                server_token: _user.server_token,
                ...params_data
            });

            if (apires.data.success) {
                resolve(apires.data);
            } else {
                resolve({ success: false, status_phrase: "Something Wrong!" });
            }

        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const get_favoutire_addresses = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('get_favoutire_addresses', {
                id: _user._id,
                server_token: _user.server_token
            });

            if (apires.data.success) {
                resolve(apires.data);
            } else {
                resolve({ success: false, status_phrase: "Something Wrong!" });
            }

        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const delete_favourite_address = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('delete_favourite_address', {
                "user_id": _user._id,
                "server_token": _user.server_token,
                ...params_data
            });
            if (apires.data.success) {
                resolve(apires.data);
            } else {
                resolve({ success: false, status_phrase: "Something Wrong!" });
            }

        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const add_favourite_item = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('add_favourite_item', params);

            if (apires.data.success) {
                resolve(apires.data);
            } else {
                resolve({ success: false, status_phrase: "Something Wrong!" });
            }
        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const get_favourite_item_list = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('get_favourite_item_list', { user_id: _user._id, server_token: _user.server_token });
            if (apires.data.success) {
                resolve(apires.data);
            } else {
                resolve({ success: false, status_phrase: "Something Wrong!" });
            }
        } catch (error) {
            console.log('get_favourite_item_list Error :', error)
            reject({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const remove_favourite_item = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('remove_favourite_item', params);

            if (apires.data.success) {
                resolve(apires.data);
            } else {
                resolve({ success: false, status_phrase: "Something Wrong!" });
            }
        } catch (error) {
            console.log(error)
            reject({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const save_new_cart = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('save_new_cart', params);
            resolve(apires.data)
        } catch (error) {
            console.log(error)
            reject({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const get_save_carts = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('get_save_carts', params);

            if (apires.data.success) {
                resolve(apires.data);
            } else {
                resolve({ success: false, status_phrase: "Something Wrong!" });
            }
        } catch (error) {
            console.log(error)
            reject({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const get_single_save_cart = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('get_single_save_cart', params);
            if (apires.data.success) {
                resolve(apires.data);
            } else {
                resolve({ success: false, status_phrase: "Something Wrong!" });
            }
        } catch (error) {
            console.log(error)
            reject({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const delete_save_cart = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('delete_save_cart', params);
            if (apires.data.success) {
                resolve(apires.data);
            } else {
                resolve({ success: false, status_phrase: "Something Wrong!" });
            }
        } catch (error) {
            console.log(error)
            reject({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const update_single_save_cart = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('update_single_save_cart', params);
            resolve(apires.data)
        } catch (error) {
            console.log(error)
            reject({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

const getMyitemsObj = (i, product_details) => {
    return ({
        items: [
            {
                "item_id": i._id,
                "unique_id": i.unique_id,
                "item_name": i.name[0],
                "item_tax": 0,
                "quantity": i.quantity,
                "image_url": i.image_url,
                "details": "",
                "specifications": i.specifications,
                "item_price": i.price,
                "total_price": 0,
                "tax": i.tax,
                "total_specification_price": 0,
                "total_specification_tax": 0,
                "total_item_price": (i.price * i.quantity),
                "max_item_quantity": 0,
                "total_tax": 0,
                "total_item_tax": 0,
                "note_for_item": "",
                "tax_details": i.item_taxes
            }
        ],
        "product_id": i.product_id,
        "product_name": product_details.name[0],
        "unique_id": product_details.unique_id,
        "total_item_tax": 0,
        "total_item_price": i.price
    })
}

export const add_item_in_cart = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user_details = null;
            let cart_id = null;
            if (user_details) {
                cart_id = localStorage.getItem('cart_id')
            }
            let orderDetails = [];
            let cartPrice = (params_data.item.price * params_data.q);
            for (let i of params_data.items) {
                cartPrice = (cartPrice + (i.price * i.quantity))
                let d = getMyitemsObj(i, i.product_details)
                orderDetails.push(d)
            }
            let d2 = getMyitemsObj({ ...params_data.item, quantity: params_data.q }, params_data.product_details)
            let parameters = {
                user_id: null,
                server_token: null,
                user_type: 1,
                user_type_id: null,
                store_id: params_data.item.store_id,
                cart_id: cart_id ? cart_id : null,
                city: params_data.city._id,
                country: params_data.country._id,
                cart_unique_token: getUniqCartId(),
                order_details: [...orderDetails, d2].filter(v => v.quantity > 0),
                destination_addresses: [
                    {
                        address: appStatic.address,
                        address_type: "destination",
                        city: appStatic.city,
                        delivery_status: 0,
                        flat_no: "",
                        landmark: "",
                        location: [appStatic.latitude, appStatic.longitude],
                        note: "",
                        street: "",
                        user_details: {
                            country_phone_code: user_details ? user_details.country_phone_code : '',
                            email: user_details ? user_details.email : '',
                            name: user_details ? user_details.name : '',
                            phone: user_details ? user_details.phone : ''
                        },
                        user_type: 1
                    }
                ],
                pickup_addresses: [
                    {
                        "delivery_status": 0,
                        "address_type": "pickup",
                        "address": params_data.store_details.address,
                        "city": params_data.store_details.city_id,
                        "location": params_data.store_details.location,
                        "note": "",
                        "user_details": {
                            "name": params_data.store_details.name,
                            "country_phone_code": params_data.store_details.country_phone_code,
                            "phone": params_data.store_details.phone,
                            "email": params_data.store_details.email
                        }
                    }
                ],
                total_cart_price: cartPrice,
                total_item_tax: 0,
                tax_details: 0,
                is_use_item_tax: 0,
                is_tax_included: 0,
                table_no: 0,
                no_of_persons: 0,
                booking_type: 0,
                delivery_type: 0,
                table_id: null,
                order_start_at: 0,
                order_start_at2: 0

            }

            if (user_details) {
                parameters.user_id = user_details._id;
                parameters.server_token = user_details.server_token;
                parameters.user_type = user_details.user_type;
            }
            // console.log(303,parameters)
            let addToCart = await postMETHOD('add_item_in_cart', parameters);
            // console.log(304,addToCart)
            if (addToCart.data.success) {
                localStorage.setItem('cart_id', addToCart.data.cart_id);
                resolve({ success: addToCart.data.success, status_phrase: addToCart.data.status_phrase })
            } else {
                resolve({ success: addToCart.data.success, status_phrase: addToCart.data.status_phrase })
            }
        } catch (error) {
            console.log(error);
            reject(error)
        }
    })
}

export const getUniqCartId = (cart_id = true) => {
    if (typeof window !== 'undefined') {
        const cart_unique_token = localStorage.getItem('_cart_unique_token');
        if (cart_unique_token && cart_id) {
            return (cart_unique_token);
        } else {
            let c = uuidv4();
            // localStorage.setItem(store_id + '_cart_unique_token', c);
            localStorage.setItem('_cart_unique_token', c);
            return (c);
        }
    }
}

export const getDeviceToken = () => {
    if (typeof window !== 'undefined') {
        const device_token = localStorage.getItem('device_token');
        if (device_token) {
            return (device_token);
        } else {
            let c = uuidv4();
            localStorage.setItem('device_token', c);
            return (c);
        }
    }
}

export const get_orders = () => {
    return new Promise(async (resolve, reject) => {
        try {
            if (_user) {
                let apires = await postMETHOD('get_orders', {
                    user_id: _user._id,
                    server_token: _user.server_token
                });

                if (apires.data.success) {
                    resolve(apires.data);
                } else {
                    if (apires.data.status_phrase === "Token Expired") {
                        console.log(1007, apires.data.status_phrase);
                        // logoutUser()
                        window.location.reload();
                    }
                    resolve({ success: false, status_phrase: apires.data.status_phrase });
                }
            } else {
                // logoutUser()
                window.location.reload();
            }

        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const get_order_detail = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('get_order_detail', {
                "user_id": _user._id,
                "server_token": _user.server_token,
                "order_id": params_data.order_id,
            });

            if (apires.data.success) {
                resolve(apires.data);
            } else {
                resolve({ success: false, status_phrase: "Something Wrong!" });
            }

        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const get_delivery_store_list = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await getMETHOD('get_delivery_store_list')
            console.log('get_delivery_store_list:', apires);
            resolve(apires)
        } catch (error) {
            reject(error)
        }
    })
}

export const get_payment_gateway = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let parameters = {
                ...params_data,
                cart_unique_token: getUniqCartId(),
                user_id: _user._id,
                server_token: _user.server_token,
            }
            let data = await postMETHOD('get_payment_gateway', parameters);
            console.log(348, data)
            if (data.data.success) {
                resolve(data.data);
            } else {
                resolve({ success: false, status_phrase: data.data.status_phrase });
            }

        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })

}

export const get_stripe_add_card_intent = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let parameters = {
                ...params_data,
                user_id: _user._id,
                server_token: _user.server_token,
            }
            let data = await postMETHOD('get_stripe_add_card_intent', parameters);
            console.log(348, data)
            if (data.data.success) {
                resolve(data.data);
            } else {
                resolve({ success: false, status_phrase: data.data.status_phrase });
            }

        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })

}

export const get_order_cart_invoice = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let total_cart_price = 0;

            for (let i of params_data.items) {
                total_cart_price = (total_cart_price + (i.quantity * i.price))
            }
            let parameters = {
                booking_fees: 0,
                cart_unique_token: getUniqCartId(),
                cart_id: "",
                city_id: "",
                country_id: "",
                is_tax_included: false,
                is_use_item_tax: false,
                is_user_pick_up_order: false,
                order_type: 7,
                server_token: "",
                store_id: params_data.store._id,
                tax_details: [],
                tip_amount: 0,
                total_cart_amout_without_tax: total_cart_price,
                total_cart_price: total_cart_price,
                total_distance: 0,
                // "total_item_count":total_item_count,
                total_time: 0,
                user_id: "",
                vehicle_id: null,
                order_details: params_data.items,
                items: params_data.items
            }
            if (_user) {
                parameters.user_id = _user._id;
                parameters.server_token = _user.server_token;
            }

            let data = await postMETHOD('get_order_cart_invoice', parameters);
            console.log('invoice', data)
            if (data.data.success) {
                resolve(data.data);
            } else {
                resolve({ success: false, status_phrase: data.data.status_phrase });
            }

        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })

}

export const get_card_list = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let json = {
                server_token: _user.server_token,
                user_id: _user._id,
                type: 7,
                payment_gateway_id: '586f7db95847c8704f537bd5'
            }
            console.log('json', json);
            let APIres = await postMETHOD('get_card_list', json);
            resolve(APIres.data)
        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })

}

export const delete_card = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let json = {
                card_id: id,
                server_token: _user.server_token,
                user_id: _user._id,
                type: 7,
            }
            console.log('json', json);
            let APIres = await postMETHOD('delete_card', json);
            resolve(APIres.data)
        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const select_card = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let json = {
                card_id: id,
                server_token: _user.server_token,
                user_id: _user._id,
                type: 7,
            }
            console.log('json', json);
            let APIres = await postMETHOD('select_card', json);
            resolve(APIres.data)
        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const add_card = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let parameters = {
                payment_method: params_data.payment_method,
                user_id: _user._id,
                server_token: _user.server_token,
                last_four: params_data.last_four,
                card_type: params_data.card_type,
                payment_id: params_data.payment_id,
                card_holder_name: _user.first_name + ' ' + _user.last_name,
                card_expiry_date: `${params_data.expiry_month}/${params_data.expiry_year}`,
                type: '7',
            }
            console.log(371, parameters)
            let data = await postMETHOD('add_card', parameters);

            console.log(348, data)
            resolve(data.data);
            // if (data.data.success) {
            // } else {
            //     resolve({ success: false, status_phrase: data.data.status_phrase });
            // }

        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })

}

export const pay_order_payment = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let parameters = {
                is_payment_mode_cash: params_data.is_payment_mode_cash,
                order_payment_id: params_data.order_payment_id,
                payment_mode: params_data.payment_mode,
                delivery_type: 1,
                payment_id: params_data.payment_id,
                server_token: _user.server_token,
                user_id: _user._id,
                payment_currency: params_data.payment_currency,
                view_price_currency: params_data.view_price_currency,
                exchange_rate_website: params_data.exchange_rate_website,
            }
            console.log(371, parameters)
            let apires = await postMETHOD('pay_order_payment', parameters);
            if (apires.data.success) {
                resolve(apires.data);
            } else {
                resolve({ success: false, status_phrase: apires.data.status_phrase });
            }

        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })

}

export const create_order = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let parameters = {
                user_id: _user._id,
                payment_mode_type: params_data.payment_mode_type,
                server_token: _user.server_token,
                cart_id: params_data.order_payment.cart_id,
                destination_addresses: [
                    {
                        address: params_data.destination_addresses.address,
                        address_type: "destination",
                        city: params_data.destination_addresses.city,
                        delivery_status: 1,
                        flat_no: params_data.destination_addresses.houseNo,
                        landmark: params_data.destination_addresses.landmark,
                        location: [params_data.destination_addresses.latitude, params_data.destination_addresses.longitude],
                        street: params_data.destination_addresses.street,
                        note: "",
                        user_details: {
                            country_phone_code: _user ? _user.country_phone_code : '',
                            email: _user ? _user.email : '',
                            name: _user ? _user.name : '',
                            phone: _user ? _user.phone : ''
                        },
                        user_type: 1
                    }
                ],
                order_payment_id: params_data.order_payment._id,
                delivery_note: "",
                delivery_user_name: "",
                delivery_user_phone: "",
                is_user_pick_up_order: false,
                is_schedule_order: false,
                is_allow_contactless_delivery: false,
                order_start_at2: 0,
                order_start_at: 0,
                payment_currency: params_data.payment_currency,
                view_price_currency: params_data.view_price_currency,
                exchange_rate_website: params_data.exchange_rate_website
            }

            localStorage.setItem('cart_id', params_data.order_payment.cart_id)
            let data = await postMETHOD('create_order', parameters);
            if (data.data.success) {
                resolve(data.data);
            } else {
                resolve({ success: false, status_phrase: data.data.status_phrase });
            }

        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })

}

export const user_update = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(876, _user);
            let apires = await postMETHOD('user_update', {
                user_id: _user._id,
                server_token: _user.server_token,
                ...params_data
            });

            console.log(882, apires);

            if (apires.data.success) {
                resolve(apires.data);
            } else {
                resolve({ success: false, status_phrase: "Something Wrong!" });
            }

        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const get_single_forms = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('get_single_forms', params_data);
            resolve(apires.data);
        } catch (error) {
            console.log(error.response.data)
            reject(error.response.data);
        }
    })
}

export const submitPublicForm = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('submit_public_form', params_data);
            resolve(apires.data);
        } catch (error) {
            console.log(error.response.data)
            reject(error.response.data);
        }
    })
}

export const searchItems = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('search_items', {
                store_id: params.store_id,
                search_text: params.search_text,
                page: params.page,
                limit: params.limit,
                domain_id: params.domain_id,
            });

            if (apires.status) {
                resolve(apires.data);
            } else {
                resolve({ success: false, status_phrase: "Something Wrong!" });
            }
        } catch (error) {
            console.log(error)
            resolve({ success: false, status_phrase: "Something Wrong!" });
        }
    })
}

export const upload_file_application = (params_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await postMETHOD('upload_file_application', params_data);
            resolve(apires.data);
        } catch (error) {
            console.log(error.response.data)
            reject(error.response.data);
        }
    })
}

export const get_item_from_product = (params_data) => {
    return new Promise(async (resolve, reject) => {
        let apires = await postMETHOD('get_item_from_product', params_data);
        if (apires.data.success) {
            resolve({
                active_item: apires.data.active_item,
                items: apires.data.items,
                active_product: apires.data.active_product,
                paginate_data: apires.data.paginate_data,
            });
        } else {
            reject({ success: false });
        }
    })
}

export const get_only_job_by_domain_id = (params) => {
    return new Promise(async (resolve, reject) => {
        let apires = await getMETHOD('get_only_job_by_domain_id', params);
        resolve(apires.data);
        // if (apires.success) {
        // } else {
        //     reject({ success: false });
        // }
    })
}

// Platformae APIs

export const get_domain_by_name = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            let apires = await getMETHOD('get_domain_by_name', params)
            // console.log(apires);
            resolve(apires.data)
        } catch (error) {
            console.log(error);
        }
    })
}