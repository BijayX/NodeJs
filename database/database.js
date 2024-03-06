//sync => step wise step architecture where execution of each opeartion depend on another completion
//asynchronous => operations are not forced to complete one after the other, they can execute in any     order.
//async => operations are not dependent on the previous one, they can execute in any order.
const mongoose=require("mongoose")
exports.connectdatabase =async()=>{
    //jaba sama connect hudaina taba sama wait garnu paryo
  await  mongoose.connect("mongodb+srv://hell0:Bijay@cluster0.vph4qxz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  console.log("Database  Connecting...");
}