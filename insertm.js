const dbConnect = require('./mongodb');

dbConnect().then((resp) => {
    resp.find({ name: "prince" }).toArray().then((data) => {
        console.log(data)

    })
})
S
const main = async () => {
    let data = await dbConnect()
    data = await data.find({ name: "prince" }).toArray();
    console.log(data)

}
main();