CREATE DATABASE blog;
USE blog;

CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(10) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(50) NOT NULL, created_at timestamp default current_timestamp, modified_at timestamp NULL);
CREATE TABLE posts(id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, created_at timestamp default current_timestamp, modified_at timestamp NULL);
CREATE TABLE comments(id INT AUTO_INCREMENT PRIMARY KEY, comment VARCHAR(255) NOT NULL, user_id INT, post_id INT, FOREIGN KEY (post_id) REFERENCES posts(id), FOREIGN KEY (user_id) REFERENCES users(id), comment_at timestamp default current_timestamp, modified_at timestamp NULL);

