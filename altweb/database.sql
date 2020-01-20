CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    intra text NOT NULL,
    active boolean NOT NULL DEFAULT false,
    progress text[] NOT NULL DEFAULT '{}'::text[],
    session text NOT NULL
);

CREATE TABLE feedback (
    id SERIAL PRIMARY KEY,
    course_name text NOT NULL,
    user text NOT NULL,
    feedback text NOT NULL
);

CREATE TABLE content (
    id SERIAL PRIMARY KEY,
    url text NOT NULL,
    notes text,
    name text NOT NULL,
    level integer NOT NULL DEFAULT 0
);