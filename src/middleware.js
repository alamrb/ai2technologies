import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log('request:', request);
    let _user = request.cookies.get("_user");

    if (!_user) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/profile", "/checkout", "/payment"],
}
// matcher: "/connect/:path*",






























// console.log(55, token);
// console.log(55, request.nextUrl.pathname);
// console.log(55, request.url);
// if (!token && request.nextUrl.pathname !== '/login') {
//     console.log(11111);
// } else {
//     console.log(2222);
//     // return NextResponse.redirect(new URL(request.url))
//     return NextResponse.redirect(new URL('/login', request.url))
// }