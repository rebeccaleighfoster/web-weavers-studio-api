const supertest = require("supertest");
//const supertest =  require('supertest');
const app = require("../src/app");
const { expect } = require("chai");
const knex = require('knex');

const mockData = [{ 
        "id": 1,
        "first_name": "Ever",
        "last_name": "Woodward",
        "email": "ever@wgm.org",
        "experience_level": "Medium",
        "loom_type": "Floor Loom",
        "state": "Minnesota",
        "bio": "ever is a bjk jfdksl sdklfsjk"
    }];

//get
describe("GET /weavers", () => {
  let db;
  before('make knex instance', () => {
      db = knex({
          client: 'pg',
          connection: 'postgres://localhost/web-weavers-test',
      })
      app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())
  
  it("should return an array of weavers", () => {
    return supertest(app)
      .get('/weavers')
      .expect(200, mockData);
  });

//   it("Given there are weavers in the database associated with that weaver id, responds with 200 and the weavers associated with the weaver id", () => {
//     const weaver_id = 1;
//     return supertest(app)
//       .get(`/weavers/${weaver_id}`)
//       .expect(200, mockData);
//   });

//   it("responds with 200 and the weavers associated with the project id", () => {
//     const project_id = 1;
//     return supertest(app)
//       .get(`/weavers/project/${project_id}`)
//       .expect(200, mockData[0]);
//   });
});

// describe(`POST /weavers`, () => {
//   it(`creates a project, responding with 201 and the new project`, () => {
//       const newProject= {
//         id: 2,
//         project_title: "test title",
//         project_description: "test desc",
//         weave_structure: "test structure",
//         warp_material: "test warp mat",
//         warp_size: "test warpsize",
//         weft_material: "test weft mat",
//         weft_size: "test weft size",
//         sett: 5,
//         ppi: 2,
//         size_on_loom: "test size on",
//         size_off_loom: " test size off",
//         weaver_id: 3,
//       }
//       return supertest(app)
//           .post('/weavers')
//           .send(newProject)
//           .expect(201)
//           .expect(res => {
//             expect(res.body.id).to.eql(newProject.id)
//               expect(res.body.project_title).to.eql(newProject.project_title)
//               expect(res.body.project_description).to.eql(newProject.project_description)
//               expect(res.body.weave_structure).to.eql(newProject.weave_structure)
//               expect(res.body.warp_material).to.eql(newProject.warp_material)
//               expect(res.body.weft_material).to.eql(newProject.weft_material)
//               expect(res.body.weft_size).to.eql(newProject.weft_size)
//               expect(res.body.sett).to.eql(newProject.sett)
//               expect(res.body.ppi).to.eql(newProject.ppi)
//               expect(res.body.size_on_loom).to.eql(newProject.size_on_loom)
//               expect(res.body.size_off_loom).to.eql(newProject.size_off_loom)
//               expect(res.body.weaver_id).to.eql(newProject.weaver_id)
//           })
//           .then(res => 
//               supertest(app)
//                   .get(`/weavers/project/${res.body.project_id}`)
//                   .expect(res.body)
//           )
//   })
// })
