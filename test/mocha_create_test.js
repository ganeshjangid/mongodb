const Student=require('../app/student');
const assert=require('assert');

describe("create a record",()=>{
    it("create user in db",()=>{
       const ganesh=new Student({name:"Ganesh"});
       ganesh.save()
       .then((result) => {
           assert(!ganesh.isNew);
       }).catch((err) => {
           console.log(err);
       });
    });
});