CREATE DATABASE yelp_clone;

CREATE TABLE user (
    user_email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    is_staff BOOLEAN DEFAULT FALSE,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    user_email VARCHAR(255),
    business_id VARCHAR(255),
    comment VARCHAR(255),
    CONSTRAINT fk_businessID FOREIGN KEY(business_id) REFERENCES business(business_id),
    CONSTRAINT fk_userEmail FOREIGN KEY(user_email) REFERENCES user(user_email)
);

CREATE TABLE pictures (
    business_id VARCHAR(255) PRIMARY KEY,
    picture_name VARCHAR(255),
    user_email VARCHAR(255),
    picture_location VARCHAR(100),
    CONSTRAINT fk_user FOREIGN KEY(user_email) REFERENCES user(user_email)
);

CREATE TABLE business (
    id VARCHAR(255) PRIMARY KEY,
    business_name VARCHAR(255),
    business_address VARCHAR(300),
    business_pictures TEXT[],
    user_email VARCHAR(255),
    rating DECIMAL,
    CONSTRAINT fk_pictures FOREIGN KEY(business_pictures) REFERENCES pictures(id),
    CONSTRAINT fk_userId FOREIGN KEY(user_email) REFERENCES user(user_email)
);
