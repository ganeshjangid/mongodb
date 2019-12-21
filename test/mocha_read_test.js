const student=require('../app/student');
const assert=require('assert');

describe("Read Records Test",()=>{
    let reader;
    beforeEach((done)=>{
        reader=student({name:"Reader"});
        reader.save()
        .then(()=>{
            done();
        });

    });
    
    it("Read a user:Reader",(done)=>{

        const records = student.find({ name:"Reader"});
        records
        .then((std) => {
            assert(reader._id.toString() === std[0]._id.toString());
            done();
        }).catch((err) => {
            console.log(err);
        });


    });
});