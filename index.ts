import Handlebars from 'handlebars'

const template = Handlebars.compile('Name: {{name}}')
const result = template({ name: 'Nils' })

console.log(result)
