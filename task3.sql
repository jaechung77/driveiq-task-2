-- Create broker table
CREATE TABLE IF NOT EXISTS broker (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(20) NOT NULL
);

-- Create customer table
CREATE TABLE IF NOT EXISTS customer (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(20) NOT NULL,
amount DOUBLE NOT NULL,
broker_id INT,
INDEX par_ind (broker_id),
CONSTRAINT fk_broker 
FOREIGN KEY(broker_id) 
REFERENCES broker (id)
ON DELETE CASCADE
ON UPDATE CASCADE
);

-- Insert data into broker table
INSERT INTO broker 
(name)
values
('Ted'),
('Mark'),
('Aaron'),
('Luke');

-- Insert data into customer table
INSERT INTO customer
(name, amount, broker_id)
values
("sam", 3000, 4),
("john", 4000, 2),
("mack", 5000, 2),
("test", 3000, 3),
("june", 2000, 3),
("mike", 4000, 1),
("annie", 4000, 2),
("micheal", 2000, 1),
("tom", 2000, 4),
("jason", 6000, 4);

-- Generate No. of customers on each broker in descending order. If same, sort by broker name in ascending order
 SELECT b.name as broker_name, COUNT(c.broker_id) AS count
 FROM broker b
 INNER JOIN customer c 
 ON b.id = c.broker_id
 GROUP BY broker_name
 ORDER BY count DESC, b.name ASC;