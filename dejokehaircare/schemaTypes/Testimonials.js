export default {
    name: 'testimonials',
    type: 'document',
    title: 'Testimonials',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'content',
        type: 'string',
        title: 'Content'
      },
      {
        name: 'service',
        type: 'string',
        title: 'Service'
      },
      {
        name: 'image',
        type: 'image',
        options: {
            hotspot: true // <-- Defaults to false
          },
        title: 'Image'
      },
    ]
}