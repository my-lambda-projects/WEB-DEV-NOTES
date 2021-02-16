CREATE TABLE "Users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar,
  "email" varchar,
  "hashedPassword" varchar
);

CREATE TABLE "Votes" (
  "id" SERIAL PRIMARY KEY,
  "userId" int,
  "answerId" int
);

CREATE TABLE "Questions" (
  "id" SERIAL PRIMARY KEY,
  "questionText" text,
  "userId" int,
  "created_at" timestamp
);

CREATE TABLE "Answers" (
  "id" SERIAL PRIMARY KEY,
  "answerText" text,
  "questionId" int,
  "userId" int,
  "created_at" timestamp
);

ALTER TABLE "Votes" ADD FOREIGN KEY ("userId") REFERENCES "Users" ("id");

ALTER TABLE "Votes" ADD FOREIGN KEY ("answerId") REFERENCES "Answers" ("id");

ALTER TABLE "Questions" ADD FOREIGN KEY ("userId") REFERENCES "Users" ("id");

ALTER TABLE "Answers" ADD FOREIGN KEY ("questionId") REFERENCES "Questions" ("id");

ALTER TABLE "Answers" ADD FOREIGN KEY ("userId") REFERENCES "Users" ("id");
