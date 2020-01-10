let name = 'somchai'
//name

let arr = [3,4,5,3] 
let alter = arr.map(value => value * 2)
//alter

let obj = {name: 'Jaid', email: 'jo@go.th'}

let keys = Object.keys(obj)
let values = Object.values(obj)
// keys
// values

let student = {
    run ()  { console.log(this.sex) } ,
    name : 'somchai',
    email : 'som@co.th',
    sex : 'male',
    say  () { console.log(this.name) },
    think  () {
        console.log(this.email)
        let read = () => this.sex
        console.log(read())
    },
    test : function() {console.log(this)}
}

//student.say.bind(student)

student.say()
student.think()
// student.run()
// let xxx = Object.values(student)
// xxx
student.run()
student.test()
