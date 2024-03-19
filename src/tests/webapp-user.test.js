const request = require("supertest");
const app = require("../../app.js");

let appServer;

beforeAll(() => {
  appServer = app.listen();
});

afterAll(() => {
  appServer.close();
});

//adding comment for demo pre-test

/* Healthz Test */

describe("Test 1 | HealthCheck Sucess", () => {
  it("GET healthz status", async () => {
    const res = await request(app).get("/healthz");
    expect(res.statusCode).toEqual(200);
  });
});

/* User Integration Test */

const firstName = "Nagalekha";
const lastName = "Ramesh";
const compliantPassword = "Nagalekha@1";
const emailId = "nagalekha020@gmail.com";

const generateBasicAuth = (uname, pass) => {
  return "Basic " + Buffer.from(uname + ":" + pass).toString("base64");
};

const userPath = "/v1/user";
const selfPath = "/v1/user/self";

describe("Test 2 | Create an account, and using the GET call, validate account exists", () => {
  it("POST and GET account exists", async () => {
    const createUserRequestBody = {
      first_name: firstName,
      last_name: lastName,
      password: compliantPassword,
      username: emailId,
    };
    const createUserResponse = await request(app)
      .post(userPath)
      .send(createUserRequestBody);
    expect(createUserResponse.statusCode).toEqual(201);

    const fetchUserResponse = await request(app)
      .get(selfPath)
      .set("Authorization", generateBasicAuth(emailId, compliantPassword));
    expect(fetchUserResponse.statusCode).toEqual(200);
    expect(fetchUserResponse.body.first_name).toEqual(firstName);
    expect(fetchUserResponse.body.last_name).toEqual(lastName);
    expect(fetchUserResponse.body.username).toEqual(emailId);
  });
});

describe("Test 3 | Update the account and using the GET call, validate the account was updated", () => {
  it("PUT and GET to validate account details updated", async () => {
    const updateUserRequestBody = {
      first_name: "Naga",
      last_name: "R",
    };
    const updateUserResponse = await request(app)
      .put(selfPath)
      .send(updateUserRequestBody)
      .set("Authorization", generateBasicAuth(emailId, compliantPassword));
    expect(updateUserResponse.statusCode).toEqual(204);

    const fetchUserResponse = await request(app)
      .get(selfPath)
      .set("Authorization", generateBasicAuth(emailId, compliantPassword));
    expect(fetchUserResponse.statusCode).toEqual(200);
    expect(fetchUserResponse.body.account_created).not.toEqual(
      fetchUserResponse.body.account_updated
    );
    expect(fetchUserResponse.body.first_name).toEqual(
      updateUserRequestBody.first_name
    );
    expect(fetchUserResponse.body.last_name).toEqual(
      updateUserRequestBody.last_name
    );
    expect(fetchUserResponse.body.username).toEqual(emailId);
  });
});
