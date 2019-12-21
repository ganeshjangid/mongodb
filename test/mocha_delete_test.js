const student=require('../app/student');
const assert=require('assert');

describe("Delete A records",()=>{
    let deleter;
    beforeEach((done)=>{
        deleter=new student({name:"nagesh"});
        deleter.save()
        .then((result) => {
            done();
        });
    });

    it("delete Deleter ",(done)=>{
        student.findByIdAndDelete(deleter._id)
        .then((result) => {
            student.findOne({ name:"nagesh"})
            .then(std=>{
                assert(std === null);
                done();
            });
        });

    });

});
