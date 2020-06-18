const supertest = require("supertest");
//const supertest =  require('supertest');
const app = require("../src/app");
const { expect } = require("chai");
const knex = require('knex');

const mockData = [{ 
  id: 1,
  project_title: 'title 1',
  project_description: 'description one',
  weave_structure: 'twill',
  warp_material: 'cotton',
  warp_size: '3/2',
  weft_material: 'wool',
  weft_size: '3/2',
  sett: 12,
  ppi: 12,
  size_on_loom: '1x2',
  size_off_loom: '5x6',
  weaver_id: 1 
}];

//get
describe("GET /projects", () => {
  let db;
  before('make knex instance', () => {
      db = knex({
          client: 'pg',
          connection: 'postgres://localhost/web-weavers-test',
      })
      app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())
  
  it("should return an array of projects", () => {
    return supertest(app)
      .get('/projects')
      .expect(200, mockData);
  });

  it("Given there are projects in the database associated with that weaver id, responds with 200 and the projects associated with the weaver id", () => {
    const weaver_id = 1;
    return supertest(app)
      .get(`/projects/${weaver_id}`)
      .expect(200, mockData);
  });

  it("responds with 200 and the projects associated with the project id", () => {
    const project_id = 1;
    return supertest(app)
      .get(`/projects/project/${project_id}`)
      .expect(200, mockData[0]);
  });
});

describe(`POST /projects`, () => {
  it(`creates a project, responding with 201 and the new project`, () => {
      const newProject= {
        id: 2,
        project_title: "test title",
        project_description: "test desc",
        weave_structure: "test structure",
        warp_material: "test warp mat",
        warp_size: "test warpsize",
        weft_material: "test weft mat",
        weft_size: "test weft size",
        sett: 5,
        ppi: 2,
        size_on_loom: "test size on",
        size_off_loom: " test size off",
        weaver_id: 3,
      }
      return supertest(app)
          .post('/projects')
          .send(newProject)
          .expect(201)
          .expect(res => {
            expect(res.body.id).to.eql(newProject.id)
              expect(res.body.project_title).to.eql(newProject.project_title)
              expect(res.body.project_description).to.eql(newProject.project_description)
              expect(res.body.weave_structure).to.eql(newProject.weave_structure)
              expect(res.body.warp_material).to.eql(newProject.warp_material)
              expect(res.body.weft_material).to.eql(newProject.weft_material)
              expect(res.body.weft_size).to.eql(newProject.weft_size)
              expect(res.body.sett).to.eql(newProject.sett)
              expect(res.body.ppi).to.eql(newProject.ppi)
              expect(res.body.size_on_loom).to.eql(newProject.size_on_loom)
              expect(res.body.size_off_loom).to.eql(newProject.size_off_loom)
              expect(res.body.weaver_id).to.eql(newProject.weaver_id)
          })
          .then(res => 
              supertest(app)
                  .get(`/projects/project/${res.body.project_id}`)
                  .expect(res.body)
          )
  })
})

// //patch project
// describe("Add a new project", () => {
//   it("should create a new project", async () => {
//     const res = await supertest(projects).post("/").send({
//       id: 2,
//       project_title: "Goldenrod",
//       project_description: "Public-key empowering matrix",
//       weave_structure: "Clothing",
//       warp_material: "Dzongkha",
//       warp_size: "8",
//       weft_material: "fds",
//       weft_size: "11",
//       sett: 51,
//       ppi: 12,
//       size_on_loom: "NEW NEW ",
//       size_off_loom: " NEW NEW NEW NEW plant",
//       weaver_id: 2,
//     });
//     expect(res.statusCode).toEqual(201);
//     expect(res.body).toHaveProperty("post");
//   });
// });
// getAllProjects(knex) {
//     return knex.select("*").from("projects");
//   }, DONE

//   deleteProjects(knex, id) {
//     return knex("projects").where({ id }).delete();
//   },

//   getByWeaverId(knex, weaver_id) {
//     return knex.from("projects").select("*").where("weaver_id", weaver_id);
//   }, DONE

//   insertProject(knex, newProject) {
//     return knex
//       .insert(newProject)
//       .into("projects")
//       .returning("*")
//       .then((rows) => {
//         return rows[0];
//       });
//   },

//   getByProjectId(knex, project_id) {
//     return knex("projects").where({ id: project_id }).first();
//   }, DONE

//   updateProjects(knex, id, newProjectFields) {
//     return knex("projects").where({ id }).update(newProjectFields);
//   },
