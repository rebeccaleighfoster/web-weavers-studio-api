# Web Weavers Studio
## Summary

Web Weavers Studio is a fullstack CRUD app that provides users with the opportunity to create and maintain a list of weaving projects. Users can track data on their personal projects along with seeing data on other's projects.

## Motivation
 
Handweaving is a craft that has been passed down by women and men in in person studios and homes for generations. As the people start aging out of the craft, the app intends tor replace some of the in person knowledge sharing by providing users with quick data on projects. Additionally, keeping track of data on personal projects can be daunting as well, so having one place to log projects will simplify notetaking.

## API Endpoints
This CRUD app has several endpoints. The get endpoints include one that returns all the weavers' information, one that returns an individual weaver's information, one that returns all the projects in the database, and one that returns all the projects that a specific weaver has logged. The post end points enable users to create an account, or add a project. The users can also update their project information with a patch endpoint and delete a project with a delete endpoint. 

## Languages/Frameworks Utilized

* [React](https://reactjs.org/)
* [Javascript](https://www.javascript.com/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)

## API Documentation

# Weavers
Returns all weaver profiles
* URL `/weavers`

* Method `GET`
* URL Params:
None
* Data Params:
None
* Success Response:
```
    Code: 200
    Content:{ 
        "id": 1,
        "first_name": "Sarah",
        "last_name": "Woodward",
        "email": "Sarah@wgm.org",
        "experience_level": "Medium",
        "loom_type": "Floor Loom",
        "state": "Minnesota",
        "bio": "Sarah is a weaver"
    }
```
# Add New Weaver
Edits existing weaver profile
* URL `/weaver`
* Method `POST`
* URL Params
weaver_id=[integer]
* Data Params
None
* Success Response:
```
    Code: 204
    Content: { { 
        "id": 2,
        "first_name": "Rebecca",
        "last_name": "Foster",
        "email": "Rebecca@wgm.org",
        "experience_level": "Medium",
        "loom_type": "Floor Loom",
        "state": "Minnesota",
        "bio": "Rebecca is a weaver"
    } }
```
    
### Delete Weaver
Deletes existing weaver profile
* URL `/weaver`
* Method `DELETE`
* URL Params
weaver_id=[integer]
* Data Params
None
* Success Response:
```
    Code: 204
    Content: none
```

### Get One Weaver
Get one weaver

* URL `/weavers/:weaver_id`

* Method `GET`
* URL Params
None
* Data Params
None
* Success Response
```
    Code: 200
    Content:{ 
        "id": 1,
        "first_name": "Sarah",
        "last_name": "Woodward",
        "email": "Sarah@wgm.org",
        "experience_level": "Medium",
        "loom_type": "Floor Loom",
        "state": "Minnesota",
        "bio": "Sarah is a weaver"
    }
```

### Projects
Returns all projects
* URL
/projects
* Method
```
GET
```
* URL Params
None
* Data Params
None
* Success Response
    Code: 200
    Content:{ 
        {
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
    }

### Return one project
Returns one project
* URL `/projects/project/:project_id`
* Method  `GET`
* URL Params
project_id=[integer]
* Data Params
None
* Success Response
    Code: 200
  ```
    Content:{ 
        {
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
    }
    ```


### Get All Projects By Weaver
Returns all projects by one specific weaver
* URL `/projects/:weaver_id`
* Method `GET`
* URL Params
weaver_id=[integer]
* Data Params
None
* Success Response
```
    Code: 200
    Content:{ 
        {
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
    }
```

 ### Add a New Project
Add a new project to the database
* URL `/projects`
* Method `POST`
* URL Params
None
* Data Params
None
* Success Response
```
    Code: 202
    Content:{ 
        {
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
    }
```
### Edit project
Edits and Updates an Existing Project
* URL `/projects/edit/:project_id`
* Method: `PATCH`
* URL Params
project_id = [integer]
* Data Params
None
* Success Response
    Code: 204 (No Content)
    }

### Delete Project
Deletes Existing Project
* URL `/project/:id`
* Method `DELETE`
* URL Params
id=[integer]
* Data Params
None
* Success Response:
    Code: 204
    Content: none


## Live App
[Web Weavers Studio](https://web-weavers-studio-app.now.sh/)

## Client Repository
[Web Weavers Studio](https://github.com/rebeccaleighfoster/web-weavers-studio)