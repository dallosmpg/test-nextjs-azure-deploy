export default function Page({ params }: { params: {id: number, slug: string } }) {
    return <div>My Post: {params.slug}</div>
}

export async function generateStaticParams() {
    const posts = [{id: 1, slug: 'a'}, {id: 2, slug: 'b'}, {id: 3, slug: 'c'}]
   
    return posts.map((post) => ({
      slug: post.slug,
      id: post.id
    }))
  }