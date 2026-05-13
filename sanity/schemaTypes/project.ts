import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Projects',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),

        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),

        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),

        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),

        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
        }),
    ],
})