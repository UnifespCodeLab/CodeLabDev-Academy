import type { Course } from '../types'
import lesson1 from './lesson1'
import lesson2 from './lesson2'
import lesson3 from './lesson3'
import lesson4 from './lesson4'
import lesson5 from './lesson5'
import lesson6 from './lesson6'
import lesson7 from './lesson7'


const gitCourse: Course = {
  slug: 'git_github',
  name: 'Git e Github',
  time: '1 hora',
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7]
}

export default gitCourse
