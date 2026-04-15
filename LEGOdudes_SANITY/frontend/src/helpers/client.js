import {createClient} from '@sanity/client'
const client = createClient({
    projectId: "6nwf4qw5",
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-04-13"
})

export default client