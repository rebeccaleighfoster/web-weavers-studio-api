const supertest = require("supertest");
//const supertest =  require('supertest');
const app = require("../src/app");
const { expect } = require("chai");
const knex = require("knex");

const mockData = [
  {
    id: 1,
    first_name: "Ever",
    last_name: "Woodward",
    email: "ever@wgm.org",
    experience_level: "Medium",
    loom_type: "Floor Loom",
    state: "Minnesota",
    bio: "ever is a bjk jfdksl sdklfsjk",
  },
];

describe("GET, PUT, POST DELETE, weavers", () => {
  let db;
  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: "postgres://localhost/web-weavers-test",
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  it("should return an array of weavers", () => {
    return supertest(app).get("/weavers").expect(200, mockData);
  });

  it("Given there are weavers in the database associated with that  id, responds with 200 and the weaver associated with the weaver id", () => {
    const weaver_id = 1;
    return supertest(app)
      .get(`/weavers/weaver/${weaver_id}`)
      .expect(200, mockData[0]);
  });

  it(`creates a weaver, responding with 201 and the new project`, () => {
    const newWeaver = {
      id: Math.floor(1000 + Math.random() * 9000),
      first_name: "EverTEST",
      last_name: "WoodwardTEST",
      email: "TESTever@wgm.org",
      experience_level: "Medium",
      loom_type: "Floor Loom TEST",
      state: "Minnesota",
      bio: "TESTever is a bjk jfdksl sdklfsjk",
    };
    supertest(app)
      .post("/weavers")
      .send(newWeaver)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        expect(res.body.first_name).to.eql(newWeaver.first_name);
        expect(res.body.last_name).to.eql(newWeaver.last_name);
        expect(res.body.email).to.eql(newWeaver.email);
        expect(res.body.experience_level).to.eql(newWeaver.experience_level);
        expect(res.body.loom_type).to.eql(newWeaver.loom_type);
        expect(res.body.state).to.eql(newWeaver.state);
        expect(res.body.bio).to.eql(newWeaver.bio);
        supertest(app)
          .delete(`/weavers`)
          .expect(204)
          .end(function (deleteErr, deleteResp) {
            if (err) throw err;
            done();
          });
      });
  });
});
