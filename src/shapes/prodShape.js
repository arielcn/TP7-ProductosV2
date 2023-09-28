import {string,number,shape} from 'prop-types'

export const ProductoShape = shape({
    title:string,
    description:string,
    brand:string,
    price:number,
    discountPercentage:number,
})