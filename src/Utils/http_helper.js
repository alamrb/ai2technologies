import axios from "axios";
import { baseURL } from "../Config/config";
// import { baseURL } from "@/Config/Config";

let jwt_token = '';
// user_details ? jwt_token = user_details.jwt_token : jwt_token = '';
var langIndex = 0;
let headers = {
    'lang': langIndex.toString(),
    'type': '7',
    'jwt_token': jwt_token,
}

const API = {
    geolocation: 'https://api.db-ip.com/v2/free/self',
    get_brands: baseURL + 'api/real_brand/get_brands',
    get_item_by_brand_id: baseURL + 'api/real_brand/get_item_by_brand_id',
    register: baseURL + 'api/user/register',
    email_or_phone_verification: baseURL + 'api/user/email_or_phone_verification',
    login: baseURL + 'api/user/login',
    logout: baseURL + 'api/user/logout',
    deactive_user: baseURL + 'api/user/deactive_user',
    user_send_otp: baseURL + 'api/user/user_send_otp',
    get_exchangerate: baseURL + 'api/get_exchangerate',
    get_favoutire_addresses: baseURL + 'api/user/get_favoutire_addresses',
    add_favourite_address: baseURL + 'api/user/add_favourite_address',
    update_favourite_address: baseURL + 'api/user/update_favourite_address',
    delete_favourite_address: baseURL + 'api/user/delete_favourite_address',
    add_favourite_item: baseURL + 'api/user/add_favourite_item',
    get_favourite_item_list: baseURL + 'api/user/get_favourite_item_list',
    remove_favourite_item: baseURL + 'api/user/remove_favourite_item',
    save_new_cart: baseURL + 'api/user/save_new_cart',
    get_save_carts: baseURL + 'api/user/get_save_carts',
    get_single_save_cart: baseURL + 'api/user/get_single_save_cart',
    update_single_save_cart: baseURL + 'api/user/update_single_save_cart',
    delete_save_cart: baseURL + 'api/user/delete_save_cart',
    get_orders: baseURL + 'api/user/get_orders',
    get_order_detail: baseURL + 'api/user/get_order_detail',
    get_payment_gateway: baseURL + 'api/user/get_payment_gateway',
    get_stripe_add_card_intent: baseURL + 'api/user/get_stripe_add_card_intent',
    get_order_cart_invoice: baseURL + 'api/user/get_order_cart_invoice',
    get_delivery_store_list: baseURL + 'api/user/get_delivery_store_list',
    get_card_list: baseURL + 'api/user/get_card_list',
    delete_card: baseURL + 'api/user/delete_card',
    select_card: baseURL + 'api/user/select_card',
    add_card: baseURL + 'api/user/add_card',
    pay_order_payment: baseURL + 'api/user/pay_order_payment',
    create_order: baseURL + 'api/user/create_order',
    add_item_in_cart: baseURL + 'api/user/add_item_in_cart',
    user_update: baseURL + 'api/user/update',
    get_single_forms: baseURL + 'api/dynamic_form/get_single_form',
    submit_public_form: baseURL + 'api/dynamic_form/submit_public_form',
    search_items: baseURL + 'api/user/search_items',
    upload_file_application: baseURL + 'api/dynamic_form/upload_file',
    get_only_job_by_domain_id: baseURL + 'api/get_only_job_by_domain_id',
    get_item_from_product: baseURL + 'api/user/get_item_from_product',
    forgot_password: baseURL + 'api/admin/forgot_password',
    forgot_password_verify: baseURL + 'api/admin/forgot_password_verify',
    new_password: baseURL + 'api/admin/new_password',

    // Platformae APIs
    get_domain_by_name: baseURL + 'api/domain/get_domain_by_name',
}

const postMETHOD = (key, data) => {
    return new Promise((resolve, reject) => {
        axios.post(API[key], data, { headers })
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            })
    })

}

const getMETHOD = (key, params = "") => {
    return new Promise((resolve, reject) => {
        axios.get(API[key] + params, { headers })
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            })
    })

}
export {
    postMETHOD,
    getMETHOD
} 