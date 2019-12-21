const mongoose=require('mongoose');
mongoose.Promise=global.Promise;


before((done)=>{
    mongoose.connect("mongodb://localhost/learnMochByHitesh", {
        useNewUrlParser: true, useUnifiedTopology: true
    });
    mongoose.connection
        .once('open', () => {
            //console.log('Connected');
            done();
        })
        .on('error', (errors) => {
            console.log("Your Error: " + errors);
        });

});

beforeEach((done)=>{
    mongoose.connection.collections.students.drop(()=>{
        done();
    });
});