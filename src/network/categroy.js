import { request } from "./request";
export function getCategroy() {
    return request({
        url: '/category'
    })
}