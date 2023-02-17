-- Adminer 4.8.1 PostgreSQL 10.21 (Debian 10.21-1.pgdg90+1) dump
-- CREATE DATABASE "mydb";
-- \connect  "mydb";

DROP TABLE IF EXISTS "list_table";
DROP SEQUENCE IF EXISTS list_table_id_seq;
CREATE SEQUENCE list_table_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."list_table" (
    "id" integer DEFAULT nextval('list_table_id_seq') NOT NULL,
    "details" text NOT NULL,
    "postedby" text NOT NULL,
    "time_posted" timestamp,
    CONSTRAINT "list_table_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "list_table" ("id", "details", "postedby", "time_posted") VALUES
(2,	'first ',	'post',	'2023-02-08 21:03:58.219959'),
(3,	'second post',	'zubi',	'2023-02-08 21:05:12.089342');

DROP TABLE IF EXISTS "testtable";
DROP SEQUENCE IF EXISTS testtable_id_seq;
CREATE SEQUENCE testtable_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."testtable" (
    "id" integer DEFAULT nextval('testtable_id_seq') NOT NULL,
    "name" character varying(20) NOT NULL,
    CONSTRAINT "testtable_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "testtable" ("id", "name") VALUES
(1,	'zubi');

-- 2023-02-17 13:37:53.653732+00
