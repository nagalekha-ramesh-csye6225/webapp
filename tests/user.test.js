const app = require("../app");
const request = require("supertest");
const assert = require("assert");

//Application server
let server;

before(() => {
    server = app.listen(() => {
        // done();
    });
})

after(() => {
    server.close(() => {
        // done();
    });
})

const fname = "Nagalekha";
const lname = "Ramesh";
const pass = "Qwerty@123";
const uname = "ramesh9.na@northeastern.edu"

describe("Create an account, and using the GET call, validate account exists", () => {
    it("POST and GET account exists", async () => {
        const createUserAccountPayload = {
            first_name: fname,
            last_name: lname,
            password: pass,
            username: uname
        };

        const createUserAccountRes = await request(app)
            .post("/v1/user")
            .send(createUserAccountPayload);

        assert.strictEqual(createUserAccountRes.statusCode, 201);

        const getUserAccountInfoRes = await request(app)
            .get("/v1/user/self")
            .set(
                "Authorization",
                "Basic " + Buffer.from(uname + ":" + pass).toString("base64")
            );
        
        assert.strictEqual(getUserAccountInfoRes.statusCode, 200);
        assert.strictEqual(getUserAccountInfoRes.body.first_name, fname);
        assert.strictEqual(getUserAccountInfoRes.body.last_name, lname);
        assert.strictEqual(getUserAccountInfoRes.body.username, uname);
    })
})

const update_first_name = "Naga";
const update_last_name = "Ram";

describe("Update the account and using the GET call, validate the account was updated", () => {
    it("PUT and GET to validate account details updated", async () => {
        const updateUserAccountPayload = {
            first_name: update_first_name,
            last_name: update_last_name,
        };

        const updateUserAccountRes = await request(app)
            .put("/v1/user/self")
            .set(
                "Authorization",
                "Basic " + Buffer.from(uname + ":" + pass).toString("base64")
            )
            .send(updateUserAccountPayload);

        assert.strictEqual(updateUserAccountRes.statusCode, 204);

        const getUserAccountInfoRes = await request(app)
            .get("/v1/user/self")
            .set(
                "Authorization",
                "Basic " + Buffer.from(uname + ":" + pass).toString("base64")
            );
        
        assert.strictEqual(getUserAccountInfoRes.statusCode, 200);
        assert.strictEqual(getUserAccountInfoRes.body.first_name, update_first_name);
        assert.strictEqual(getUserAccountInfoRes.body.last_name, update_last_name);
        assert.notStrictEqual(getUserAccountInfoRes.body.account_created, getUserAccountInfoRes.body.account_updated);
    })
})

