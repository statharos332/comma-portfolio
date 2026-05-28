import { client } from '@/sanity/lib/client'

export async function getFragments() {
    return client.fetch(`
        *[_type == "fragment"] | order(order asc) {
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
        }
    `)
}
