CREATE DATABASE IF NOT EXISTS whatsapp_statistics;
CREATE USER 'whatsapp_user'@'%' IDENTIFIED BY 'whatsapp_user00';
GRANT CREATE, ALTER, INDEX, LOCK TABLES, REFERENCES, UPDATE, DELETE, DROP, SELECT, INSERT ON `whatsapp_statistics`.* TO 'whatsapp_user'@'%';

FLUSH PRIVILEGES;

USE whatsapp_statistics;

CREATE TABLE IF NOT EXISTS messages(
    id INT AUTO_INCREMENT PRIMARY KEY,
    channel VARCHAR(200) NOT NULL,
    user VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX channel_index ON messages(channel);

INSERT INTO messages VALUES (NULL, 'channel1', 'user1', 'text 1', NULL);
INSERT INTO messages VALUES (NULL, 'channel1', 'user2', 'text 2', NULL);
INSERT INTO messages VALUES (NULL, 'channel1', 'user3', 'text 3', NULL);
INSERT INTO messages VALUES (NULL, 'channel1', 'user4', 'text 4', NULL);

INSERT INTO messages VALUES (NULL, 'channel2', 'user5', 'text 1', NULL);
INSERT INTO messages VALUES (NULL, 'channel2', 'user6', 'text 2', NULL);
INSERT INTO messages VALUES (NULL, 'channel2', 'user7', 'text 3', NULL);
INSERT INTO messages VALUES (NULL, 'channel2', 'user8', 'text 4', NULL);

INSERT INTO messages VALUES (NULL, 'channel3', 'user11', 'text 1', NULL);
INSERT INTO messages VALUES (NULL, 'channel3', 'user12', 'text 2', NULL);
INSERT INTO messages VALUES (NULL, 'channel3', 'user13', 'text 3', NULL);
INSERT INTO messages VALUES (NULL, 'channel3', 'user14', 'text 4', NULL);

