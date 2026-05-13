import { client } from '@/sanity/lib/client'

export async function getProjects() {
    return client.fetch(`
    *[_type == "project"]{
      _id,
      title,
      description,
      image
    }
  `)
}