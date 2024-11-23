const dbConnect = require('./mongodb')

const insert= async () => {
    const db = await dbConnect();
    const result = await db.insert(
    
        { name: "Dipak", Div: "3B", Branch: "B.Tech(cs)" }
    );
    console.log(result)
}
insert();

