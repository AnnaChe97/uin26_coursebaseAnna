const category = {
    name: "category",
    title: "Kategori",
    type: "document",
    fields: [
        {
            name: "categoryname",
            title: "Kategorinavn",
            type: "string"
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
            source: 'categoryname',
            maxLength: 200, // will be ignored if slugify is set
            slugify: input => input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 100)
                },
        },
        {
            name: "categoryimage",
            title: "Kategoribilde",
            type: "image"
        },
    ]
}

export default category