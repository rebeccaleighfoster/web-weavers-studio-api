BEGIN;

INSERT INTO weavers
    (id, first_name, last_name, email, password, experience_level, loom_type, state, bio) 

VALUES
  ( 1,'Ever', 'Woodward',  'ever@wgm.org',  'password',  'Medium',  'Floor Loom',  'Minnesota',  'ever is a bjk jfdksl sdklfsjk'),
  ( 2,"Karin","Knudsen",  "Karin@wgm.org",  "password", "Medium", "Floor Loom",  "Minnesota",  " Karin is a bjk jfdksl sdklfsjk"),
  ( 3,"Betsy","Konop",  "Betsy@wgm.org",  "password",  "Medium", "Floor Loom", "Minnesota",  " Betsy is a bjk jfdksl sdklfsjk"),
  ( 4, "Laura", "Nelson",  "Laura@wgm.org",  "password", "Medium",  "Tapestry/Frame",  "Minnesota",  "Laura is a bjk jfdksl sdklfsjk"),
  


COMMIT;