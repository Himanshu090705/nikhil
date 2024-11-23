/*const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/Client");
    const DtlSchema = new mongoose.Schema({
        name: String
    });
    const Dtl = mongoose.model('dtl', DtlSchema);
    let data = new Dtl({ name: "Sumit" });
    let result = await data.save();
    console.log(result);
};

main().catch((err) => console.error(err));
*/