INSERT INTO departments (name)
VALUES  
  ('Design'),
  ('Engineering'),
  ('Accounting');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Manager', 34000, 2),
  ('Accounting lead', 30000, 3),
  ('Back-end lead', 15000, 2),
  ('Frond-end lead', 14500, 1),
  ('Engineer', 10000, 2),
  ('Accountant', 7000, 1); 
  

  INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Robert', 'Vanooyen', 1, NULL),
  ('Tom', 'Smith', 4, 1),
  ('Jim', 'Johnson', 2, 1),
  ('Lisa', 'Simpson', 5, 1),
  ('Marge', 'May', 6, 1);
  