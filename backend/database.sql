CREATE DATABASE yelp;

CREATE TABLE public.business
(
  business_id character varying(50),
  name text,
  neighborhood text,
  address text,
  city character varying(50),
  state character varying(20),
  postal_code character varying(10),
  latitude double precision,
  longitude double precision,
  stars numeric(2,0),
  review_count integer,
  is_open integer,
  attributes text,
  categories text,
  hours text,
  type character varying(20)
);


CREATE TABLE public._user
(
  user_id character varying(50),
  name character varying(100),
  review_count integer,
  yelping_since date,
  friends text,
  useful integer,
  funny integer,
  cool integer,
  fans integer,
  elite text,
  average_stars numeric(2,0),
  compliment_hot integer,
  compliment_more integer,
  compliment_profile integer,
  compliment_cute integer,
  compliment_list integer,
  compliment_note integer,
  compliment_plain integer,
  compliment_cool integer,
  compliment_funny integer,
  compliment_writer integer,
  compliment_photos integer,
  type character varying(20)
);



CREATE TABLE public.business_category
(
  business_id character varying(50),
  category text
);



CREATE TABLE public.review
(
  review_id character varying(50),
  user_id character varying(50),
  business_id character varying(50),
  stars numeric(2,0),
  review_date date,
  review_text text,
  useful integer,
  funny integer,
  cool integer,
  type character varying(20)
);