import { sanityFetch } from '@/sanity/lib/live'

const query = `*[_type == "project"]{
    _id,
    title,
    description,
    image,
    category,
    slug
}`

export async function getProjects() {
    const { data } = await sanityFetch({ query })
    return data
}
