export default {
  name: 'ambassador',
  title: 'Ambassador',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "url",
    },
    {
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
    },
    ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
