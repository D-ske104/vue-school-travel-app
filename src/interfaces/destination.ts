import { Experience, experience } from './experience'

const name = "Japan"
const slug = "japan"
const image = "japan.jpg"
const id = 0
const description = "This is Japan."
const experiences = [experience]

const destination = {
  name,
  slug,
  image,
  id,
  description,
  experiences,
}

interface Destination {
  name: string
  slug: string
  image: string
  id: number
  description: string
  experiences: Experience[]
}

// class Destination {
//   name: string = name
//   slug: string = slug
//   image: string = image
//   id: number = id
//   description: string = description
//   experiences: Experience[] = experiences
// }
export { destination }
export type { Destination }
