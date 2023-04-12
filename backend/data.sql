CREATE DATABASE yelp;

CREATE TABLE user (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pictures (
    id VARCHAR(255) PRIMARY KEY,
    picture_name VARCHAR(255),
    user_id VARCHAR(255),
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES user(id)
);

CREATE TABLE business (
    id VARCHAR(255) PRIMARY KEY,
    business_name VARCHAR(255),
    business_address VARCHAR(300),
    business_pictures TEXT[],
    user_email VARCHAR(255),
    comments TEXT,
    rating DECIMAL,
    CONSTRAINT fk_pictures FOREIGN KEY(business_pictures) REFERENCES pictures(id),
    CONSTRAINT fk_userId FOREIGN KEY(user_email) REFERENCES user(email)
);
