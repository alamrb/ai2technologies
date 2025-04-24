export const geolocation = (typeof window !== 'undefined') ? localStorage.getItem('geolocation') ? JSON.parse(localStorage.getItem('geolocation')) : null : null
export const exchange_rate = (typeof window !== 'undefined') ? localStorage.getItem('exchange_rate') ? JSON.parse(localStorage.getItem('exchange_rate')) : null : null
// export const active_currency = (typeof window !== 'undefined') ? localStorage.getItem('active_currency') ? JSON.parse(localStorage.getItem('active_currency')) : null : null
console.log(444, exchange_rate);


/*export const  get_favs_from_localStorage = (typeof window !== 'undefined') ?
    (localStorage.getItem('favs') ?
            (function () {
                try {
                    return JSON.parse(localStorage.getItem('favs'));
                } catch (error) {
                    console.error(11, "Error parsing 'favs' from localStorage:", error);
                    return null;
                }
            })() : null
    ) : null;*/




export const active_currency = (typeof window !== 'undefined') ?
    (localStorage.getItem('active_currency') ?
        (function () {
            try {
                return JSON.parse(localStorage.getItem('active_currency'));
            } catch (error) {
                console.error(11, "Error parsing 'active_currency' from localStorage:", error);
                return null;
            }
        })() : null
    ) : null;


export const currencyData = [
    { code: "GBP", icon: 'gb', name: "GBP", sign: '£', rate: exchange_rate?.['GBP'] || 1 },
    { code: "USD", icon: 'us', name: "Dollar", sign: '$', rate: exchange_rate?.['USD'] || 1 },
    { code: "EUR", icon: 'eu', name: "Euro", sign: '€', rate: exchange_rate?.['EUR'] || 1 },
    { code: "CAD", icon: 'ca', name: "Dollar", sign: '$', rate: exchange_rate?.['CAD'] || 1 },
    { code: "BDT", icon: 'bd', name: "TK", sign: '৳', rate: exchange_rate?.['BDT'] || 1 },
    { code: "INR", icon: 'in', name: "Rupee", sign: '₹', rate: exchange_rate?.['INR'] || 1 },
    { code: "PKR", icon: 'pk', name: "Rupee", sign: 'Rs', rate: exchange_rate?.['PKR'] || 1 },
];

export const converted_currency = (price) => {
    if (active_currency) {
        return `${active_currency.sign} ${(price * active_currency.rate).toFixed(2)}`
    } else {
        return `${currencyData[0].sign} ${(price * currencyData[0].rate).toFixed(2)}`
    }
}

export const calculatePercentage = (percentage, number) => {
    return (percentage / 100) * number;
};

export const store = {
    address: "RCQ4+GX Dhaka, Bangladesh",
    city_id: "62a61eb49d646638e4c91a5d",
    country_phone_code: "+880",
    email: "appaeuk@gmail.com",
    location: [23.8388125, 90.4074375],
    name: "Real Brands",
    phone: "7903217113",
    products: [
        {
            _id: "6592545d818ccbf13df1af49",
            name: ["Mobile"],
            unique_id: 7,
            image_url: "store_products/6592545d818ccbf13df1af49Ylo8.jpg",
        }
    ],
    _id: "6342a0361d2151beeb670d32"
}

export const city = {
    _id: "62a61eb49d646638e4c91a5d",
    country_id: "62a421a8bfc854bd7be606d5",
    city_code: "Dhaka Division",
    city_name: "Dhaka",
    is_cash_payment_mode: true,
    is_other_payment_mode: true,
    is_promo_apply: false,
    city_locations: [
        [
            90.41526468203125,
            24.00978973497073
        ],
        [
            90.51276834414062,
            23.948306109829353
        ],
        [
            90.60203226015625,
            23.825250963168216
        ],
        [
            90.59791238710937,
            23.699564075252148
        ],
        [
            90.53199441835937,
            23.632900875872863
        ],
        [
            90.37543924257812,
            23.6366751718357
        ],
        [
            90.30540140078125,
            23.723453920882793
        ],
        [
            90.28205545351562,
            23.87298011519364
        ],
        [
            90.33424051210937,
            23.965875853966438
        ],
        [
            90.379559115625,
            24.01355308485137
        ]
    ],
    is_use_radius: true,
    zone_business: false,
    is_ads_visible: false,
    is_business: true,
    payment_gateway: [
        "586f7db95847c8704f537bd5"
    ],
    city_radius: 280,
    deliveries_in_city: [
        "62a81e33b44b7d7ba6796e27",
        "6294b04587ea271b9bd4f3bc",
        "62a6f79125d87c811b696e26",
        "62a82356b44b7d7ba6796e6b",
        "63735c5fe57307541c104bcc",
        "6444cc52acaa49271353b34b",
        "6444cd5dacaa49271353b393"
    ],
    timezone: "Asia/Dhaka",
    city_lat_long: [
        23.810332,
        90.4125181
    ],
    is_check_provider_wallet_amount_for_received_cash_request: false,
    provider_min_wallet_amount_for_received_cash_request: 0,
    is_provider_earning_add_in_wallet_on_cash_payment: true,
    is_store_earning_add_in_wallet_on_cash_payment: true,
    is_provider_earning_add_in_wallet_on_other_payment: true,
    is_store_earning_add_in_wallet_on_other_payment: true,
    daily_cron_date: "2023-10-31T18:00:00.020Z",
    created_at: "2022-06-12T17:13:24.772Z",
    updated_at: "2023-10-31T18:00:00.033Z",
    unique_id: 3,
    __v: 0
}

export const country = {
    _id: "62a421a8bfc854bd7be606d5",
    currency_rate: 1.25,
    country_name: "Bangladesh",
    country_flag: "flags/bangladesh.gif",
    country_code: "BD",
    country_timezone: ["Asia/Dhaka"],
    currency_name: "",
    currency_code: "BDT",
    currency_sign: "৳",
    country_phone_code: "+880",
    country_code_2: "BGD",
    is_ads_visible: true,
    referral_bonus_to_user: 0,
    referral_bonus_to_user_friend: 0,
    no_of_user_use_referral: 0,
    referral_bonus_to_store: 0,
    referral_bonus_to_store_friend: 0,
    no_of_store_use_referral: 0,
    referral_bonus_to_provider: 0,
    referral_bonus_to_provider_friend: 0,
    no_of_provider_use_referral: 0,
    is_business: true,
    is_distance_unit_mile: false,
    is_referral_user: true,
    is_referral_store: true,
    is_referral_provider: true,
    minimum_phone_number_length: 8,
    maximum_phone_number_length: 10,
    is_auto_transfer_for_store: false,
    auto_transfer_day_for_store: 0,
    is_auto_transfer_for_deliveryman: false,
    auto_transfer_day_for_deliveryman: 0,
    taxes: [],
    created_at: "2022-06-11T05:01:28.689Z",
    updated_at: "2022-06-11T05:01:28.689Z",
    unique_id: 3,
    __v: 0
}
