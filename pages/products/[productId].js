const ProductDetails=({details})=>{
    return(
        <>
        <h1>product detail</h1>
        {details.body}
        </>
    )
}

export default ProductDetails

export async function getStaticPaths(){
    return{
        paths:[
            {
                params: {productId : '1'}
            },
            {
                params: {productId : '2'}
            },
            {
                params: {productId : '3'}
            }
        ],
        fallback:false
    }
}

export async function getStaticProps(context){
    const {params}= context
    const apiData= await fetch(`https://jsonplaceholder.typicode.com/posts/${params.productId}`)
    const data = await apiData.json()
    return{
        props:{
            details: data
        }
    }
} 