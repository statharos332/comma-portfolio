import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'fragment',
    title: 'Fragments',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),

        defineField({
            name: 'client',
            title: 'Client / Brand',
            type: 'string',
        }),

        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Campaigns', value: 'campaigns' },
                    { title: 'Social Media', value: 'socialMedia' },
                    { title: 'Branding', value: 'branding' },
                    { title: 'Digital Strategy', value: 'digitalStrategy' },
                    { title: 'E-commerce', value: 'ecommerce' },
                    { title: 'Email Marketing', value: 'emailMarketing' },
                ],
            },
        }),

        defineField({
            name: 'coverImage',
            title: 'Cover Image (thumbnail in grid)',
            type: 'image',
            options: { hotspot: true },
        }),

        defineField({
            name: 'gallery',
            title: 'Gallery (photos + videos)',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'galleryItem',
                    title: 'Gallery Item',
                    fields: [
                        defineField({
                            name: 'type',
                            title: 'Type',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Image', value: 'image' },
                                    { title: 'Video (URL)', value: 'video' },
                                ],
                                layout: 'radio',
                            },
                            initialValue: 'image',
                        }),
                        defineField({
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: { hotspot: true },
                            hidden: ({ parent }) => parent?.type !== 'image',
                        }),
                        defineField({
                            name: 'videoUrl',
                            title: 'Video URL (Vimeo / YouTube embed)',
                            type: 'url',
                            hidden: ({ parent }) => parent?.type !== 'video',
                        }),
                        defineField({
                            name: 'caption',
                            title: 'Caption (optional)',
                            type: 'string',
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'caption',
                            type: 'type',
                            media: 'image',
                        },
                        prepare({ title, type, media }) {
                            return {
                                title: title || (type === 'video' ? '▶ Video' : 'Image'),
                                media,
                            }
                        },
                    },
                },
            ],
        }),

        defineField({
            name: 'order',
            title: 'Order (lower = first)',
            type: 'number',
            initialValue: 0,
        }),
    ],

    orderings: [
        {
            title: 'Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],

    preview: {
        select: {
            title: 'title',
            subtitle: 'client',
            media: 'coverImage',
        },
    },
})
