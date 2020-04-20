BEGIN;

INSERT INTO projects
    (id, project_title, project_description, weave_structure, warp_material, warp_size, weft_material, weft_size, sett, size_on_loom, size_off_loom, weaver_id)

VALUES
  ( 1, 'title 1', 'description one', 'twill', 'cotton',  '3/2',  'wool' , '3/2', 12,  '1x2' , '5x6' , 1 );


COMMIT