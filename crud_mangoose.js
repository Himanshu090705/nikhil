/*const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Client");

const DtlSchema = new mongoose.Schema({
    name: String,
    city: String,
    email: String,
    password: Number
});

const DtlModel = mongoose.model('dtl', DtlSchema);

const saveInDb = async () => {
    let data = new DtlModel({
        name: "prince vidyarthi", city: "surat", email: "vidyarthiprince@gm.com", password: 23626236
    });
    let result = await data.save();
    console.log(result);
};
//update
const updateInDb = async () => {
    let data = await DtlModel.updateOne(
        { name: "prince vidyarthi" },
        { $set: { city: "Pune" ,password:123412} }
    );
    console.log(data);
};

//updateInDb();

//delete
const deleteInDb = async () => {
    let data = await DtlModel.deleteOne(
        { name: "prince vidyarthi" },
        { $set: { city: "Pune" ,password:123412} }
    );
    console.log(data);
};
//deleteInDb();

//find
const findInDb = async () => {
    let data = await DtlModel.find({name:'prince'})
      
    console.log(data);
};
findInDb();
*/
