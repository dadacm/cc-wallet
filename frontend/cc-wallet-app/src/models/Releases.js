export default class Release {
constructor(value, description){
    this.id = Math.random().toString(36).substr(2, 5),
    this.value = value,
    this.description = description
}
}