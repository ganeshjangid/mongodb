const student = require('../app/student');
const assert = require('assert');

describe("Update Records Test", () => {
    let updater;
    beforeEach((done) => {
        updater = new student({ name: "updater" });
        updater.save()
            .then(() => {
                done();
            });

    });

    it("Update a user:updater", (done) => {
        updater.set('name',"Updated");
        updater.save()
            .then(() => {
            student.find({ })
            .then(std => {
                assert(std[0].name !== 'updater');
                done();
            });
            });



    });
});