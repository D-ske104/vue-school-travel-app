const name = "Fujiyama"
const slug = "fuji-yama"
const image = "fujiyama.jpg"
const description = "This is Fujiyama"

const experience = {
  name,
  slug,
  image,
  description
}

interface Experience {
  name: string
  slug: string
  image: string
  description: string
}

// class Experience {
//   name: string = name
//   slug: string = slug
//   image: string = image
//   description: string = description
// }
export { experience }
export type { Experience }
