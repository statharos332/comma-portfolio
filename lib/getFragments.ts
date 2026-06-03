import { sanityFetch } from '@/sanity/lib/live'

const query = `*[_type == "fragment"] | order(order asc) {
    _id,
    title,
    client,
    category,
    coverImage,
    gallery[] {
        type,
        image,
        videoUrl,
        caption,
    }
}`

export async function getFragments() {
    const { data } = await sanityFetch({ query })
    return data
}
