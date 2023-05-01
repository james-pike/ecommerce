import c1 from '../public/images/c1.jpg'
import c2 from '../public/images/c2.jpg'
import c3 from '../public/images/c3.jpg'
import c4 from '../public/images/c4.jpg'

export const images: string[] = ['../public/images/c1.jpg', '../public/images/c1.jpg', '../public/images/c1.jpg', '../public/images/c1.jpg']

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex