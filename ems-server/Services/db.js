//1. import monjoose
const mongoose =require ('mongoose');

//2. connect mongodb
mongoose.connect('mongodb://127.0.0.1:27017/EMS-system');

const Employee = mongoose.model('Employee' ,{
    id:Number ,
    name:String,
    age: Number ,
    designation :String ,
    salary:Number,
})

//export model
module.exports ={
    Employee
}