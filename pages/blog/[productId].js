import { useRouter } from "next/dist/client/router"
import Link from 'next/link'

const productId = () => {
    const router = useRouter();
    const productId= router.query.productId
    const clickHandler=()=>{
        router.push('/about')
    }
    return (
        <div>
            <Link href="/about">
                <h1>Product: {productId}</h1>
            </Link>
            
            <button onClick={clickHandler}>place order</button>
        </div>
    )
}

export default productId