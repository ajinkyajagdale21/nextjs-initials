import Link from 'next/link'
const Product=({posts})=>{
    return(
      <>
      <h1>Products</h1>
      {posts.map(post=>
        <div key={post.id}>
        <Link href={`products/${post.id}`}>   
            {post.title}
        </Link>
        </div>)}
      </>
    )
}

export default Product

export async function getStaticProps(){
    const apiData= await fetch('https://jsonplaceholder.typicode.com/posts')
    const data= await apiData.json()
    return{
        props:{
            posts:data.slice(0,3)
        }
    }
}