--
-- PostgreSQL database dump
--

\restrict Ae80wJg2fUkIWEascHwmtexWocfaL1prlAdsx98pFZbuCw5ajPKLnmmFWYz23Dy

-- Dumped from database version 18.4
-- Dumped by pg_dump version 18.4

-- Started on 2026-08-12 01:22:29

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 861 (class 1247 OID 24597)
-- Name: UserRole; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."UserRole" AS ENUM (
    'User',
    'Admin',
    'Manager'
);


ALTER TYPE public."UserRole" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 24582)
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 32791)
-- Name: account; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.account (
    id text NOT NULL,
    "accountId" text NOT NULL,
    "providerId" text NOT NULL,
    "userId" text NOT NULL,
    "accessToken" text,
    "refreshToken" text,
    "idToken" text,
    "accessTokenExpiresAt" timestamp(3) without time zone,
    "refreshTokenExpiresAt" timestamp(3) without time zone,
    scope text,
    password text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.account OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 33091)
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id text NOT NULL,
    userid text NOT NULL,
    productid text NOT NULL,
    userphone integer NOT NULL,
    ordertitel text NOT NULL,
    orderbreed text NOT NULL,
    orderprice integer NOT NULL,
    orderweight integer NOT NULL,
    username text DEFAULT ''::text NOT NULL
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 24617)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id text NOT NULL,
    title text CONSTRAINT products_titel_not_null NOT NULL,
    type text NOT NULL,
    breed text NOT NULL,
    price integer NOT NULL,
    weight integer NOT NULL,
    age integer NOT NULL,
    description text NOT NULL,
    image text NOT NULL,
    category text NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 32777)
-- Name: session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.session (
    id text NOT NULL,
    "expiresAt" timestamp(3) without time zone NOT NULL,
    token text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "ipAddress" text,
    "userAgent" text,
    "userId" text NOT NULL
);


ALTER TABLE public.session OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 24603)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id text NOT NULL,
    name text NOT NULL,
    "userName" text NOT NULL,
    email text NOT NULL,
    password text,
    role public."UserRole" DEFAULT 'User'::public."UserRole" NOT NULL,
    avatar text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "emailVerified" boolean DEFAULT false NOT NULL,
    image text,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 32805)
-- Name: verification; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.verification (
    id text NOT NULL,
    identifier text NOT NULL,
    value text NOT NULL,
    "expiresAt" timestamp(3) without time zone NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.verification OWNER TO postgres;

--
-- TOC entry 5062 (class 0 OID 24582)
-- Dependencies: 219
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
1e7c6c8d-bd5d-442d-a1de-625512cd3246	229151acb250ae6d44d5a2aefcd1b0031b74edee9116d6e9469573acb62fc7ec	2026-08-10 16:31:56.389917+06	20260810103156_db_migrate	\N	\N	2026-08-10 16:31:56.362202+06	1
\.


--
-- TOC entry 5066 (class 0 OID 32791)
-- Dependencies: 223
-- Data for Name: account; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.account (id, "accountId", "providerId", "userId", "accessToken", "refreshToken", "idToken", "accessTokenExpiresAt", "refreshTokenExpiresAt", scope, password, "createdAt", "updatedAt") FROM stdin;
NiFTPtQABXq2PX2nUrucwOQd6QD3j0VQ	Eto2a7Cbj7BaQ3EkSoTCiInRaeSB3arx	credential	Eto2a7Cbj7BaQ3EkSoTCiInRaeSB3arx	\N	\N	\N	\N	\N	\N	ce17814a83b05f053da482ae6c280284:3d00ede031e0adeb740c40d0d395eecc41026296d32c806aa6a08ae65f824c69804a4c7baed2a8dfcf4a9538f4a3750d201fabddf8f0730546e0ea80b1280fad	2026-08-11 07:23:45.686	2026-08-11 07:23:45.686
\.


--
-- TOC entry 5068 (class 0 OID 33091)
-- Dependencies: 225
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, userid, productid, userphone, ordertitel, orderbreed, orderprice, orderweight, username) FROM stdin;
76309f5d-5897-4ea6-a334-5a917c722597	Eto2a7Cbj7BaQ3EkSoTCiInRaeSB3arx	5824e819-3983-4d15-8118-36de7cb17025	0	Red Sindhi Bull	Sindhi	180000	350	
4f9de8c0-8a51-43f4-b824-d1c12aafee83	Eto2a7Cbj7BaQ3EkSoTCiInRaeSB3arx	90b7e649-a384-43ce-93d3-407a87884524	1634179432	Elite Dairy Cow	Holstein Mix	220000	400	Shanto Dey
\.


--
-- TOC entry 5064 (class 0 OID 24617)
-- Dependencies: 221
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, title, type, breed, price, weight, age, description, image, category) FROM stdin;
5e797411-d48a-4e69-8bf6-bbfc30d07857	Deshi Shahi Cow	Cow	Local Deshi	120000	280	3	Healthy deshi cow suitable for Qurbani. Well fed with natural food.	https://example.com/images/dog-food-1.jpg	Pet Food
7cca419f-a6c8-4764-bbc7-50402d0c0836	Deshi Shahi Cow	Cow	Local Deshi	120000	280	3	Healthy deshi cow suitable for Qurbani. Well fed with natural food.	https://i.pinimg.com/736x/e9/a0/e0/e9a0e0932f337e946583dcb9a96804a4.jpg	Large Animal
5824e819-3983-4d15-8118-36de7cb17025	Red Sindhi Bull	Cow	Sindhi	180000	350	4	Strong and healthy bull, perfect for Qurbani sacrifice.	https://commons.wikimedia.org/wiki/Special:FilePath/Red_Sindhi_Bull_at_Pakistan.jpg?width=800	Large Animal
508749a1-cd76-445b-9dc2-d7945056d121	Black Beauty Goat	Goat	Black Bengal	25000	35	1	Premium Black Bengal goat, healthy and well maintained.	https://i.pinimg.com/736x/fe/a9/fb/fea9fb94f1541d0d427d5084c9f94e91.jpg	Small Animal
0d9a86c1-c9eb-429c-a720-a37a9f1d9c5d	Premium Jamunapari Goat	Goat	Jamunapari	45000	55	2	Large sized Jamunapari goat, ideal for Qurbani.	https://i.pinimg.com/736x/06/ac/ed/06acedd07c9ff8c8b54c523a6af20687.jpg	Small Animal
443c4585-bd76-44dd-81d1-c1bd78d61b07	Farm Fresh Buffalo	Buffalo	Local Buffalo	200000	500	5	Healthy buffalo raised in natural farm environment.	https://i.pinimg.com/736x/95/51/31/95513158fa93e6148bdb6b11c6529adf.jpg	Large Animal
a519bf78-4afe-4efe-beb0-25f23612c16f	White Sheep Qurbani	Sheep	Local Sheep	30000	40	2	Healthy white sheep suitable for Qurbani.	https://www.houseofqurbani.com/cdn/shop/files/HOQ_-_Goat.png?v=1768695503&width=800	Small Animal
575546a6-ab1f-4a81-ad57-543418c8dde6	Deshi Brown Cow	Cow	Deshi Mix	140000	300	3	Well-fed deshi cow with excellent health condition.	https://commons.wikimedia.org/wiki/Special:FilePath/Female_zebu_cattle_(cropped).JPG?width=800	Large Animal
6ff4791b-1646-413e-8a98-dc67f2d30315	Deshi Brown Cow	Cow	Deshi Mix	140000	300	3	Well-fed deshi cow with excellent health condition.	https://commons.wikimedia.org/wiki/Special:FilePath/Female_zebu_cattle_(cropped).JPG?width=800	Large Animal
90b7e649-a384-43ce-93d3-407a87884524	Elite Dairy Cow	Cow	Holstein Mix	220000	400	5	High quality dairy cow, strong and healthy.	https://commons.wikimedia.org/wiki/Special:FilePath/Cow_female_black_white.jpg?width=800	Large Animal
9cbf9f6c-8248-488d-a925-32cf3e9e55d5	Black Goat King	Goat	Black Bengal	52000	60	2	Premium quality large Black Bengal goat.	https://commons.wikimedia.org/wiki/Special:FilePath/Black_Bengal_Goat_00812.JPG?width=800	Small Animal
d41a7566-0ed0-4f7d-b8a8-47321bcf2ab4	Village Ox Power	Cow	Local Ox	170000	420	6	Strong village ox used for farming and Qurbani.	https://commons.wikimedia.org/wiki/Special:FilePath/Female_zebu_cattle_(cropped).JPG?width=800	Large Animal
9aa104da-f81b-4cdf-9012-94475c6ccd75	Healthy Brown Sheep	Sheep	Deshi Sheep	28000	38	1	Well-fed healthy sheep suitable for Qurbani.	https://cache.getarchive.net/Prod/thumb/cdn12/L3Bob3RvLzIwMTYvMTIvMzEvc2hlZXAtc2Nod2FyemJyYXVuZXMtYmVyZ3NjaGFmLWp1cmEtc2hlZXAtYW5pbWFscy0yNzUxYWYtMTAyNC5qcGc%3D/1024/768/jpg	Small Animal
177bb5bd-764d-49e0-a098-aa44b7442c6e	Danielle Russo	Enim ullam et iusto 	Aspernatur dolore do	770	26	2	Blanditiis praesenti	https://i.ibb.co/N6kjQZBc/download.png	sheep
\.


--
-- TOC entry 5065 (class 0 OID 32777)
-- Dependencies: 222
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.session (id, "expiresAt", token, "createdAt", "updatedAt", "ipAddress", "userAgent", "userId") FROM stdin;
T9WpaTmCu5rI0J0K3giLrVAqNBNMOtaS	2026-08-18 07:23:45.694	azeDNoDU1SFa7E5tRLtCjm0dKnDsqCKB	2026-08-11 07:23:45.694	2026-08-11 07:23:45.694	0000:0000:0000:0000:0000:0000:0000:0000	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36	Eto2a7Cbj7BaQ3EkSoTCiInRaeSB3arx
\.


--
-- TOC entry 5063 (class 0 OID 24603)
-- Dependencies: 220
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, "userName", email, password, role, avatar, "createdAt", "emailVerified", image, "updatedAt") FROM stdin;
Eto2a7Cbj7BaQ3EkSoTCiInRaeSB3arx	Shanto	shanto4672	scd@gmail.com	\N	User	\N	2026-08-11 07:23:45.673	f	https://i.ibb.co.com/BKT76vzq/Chat-GPT-Image-Mar-16-2026-11-18-21-PM.png	2026-08-11 17:53:32.447
\.


--
-- TOC entry 5067 (class 0 OID 32805)
-- Dependencies: 224
-- Data for Name: verification; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.verification (id, identifier, value, "expiresAt", "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 4892 (class 2606 OID 24595)
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 4904 (class 2606 OID 32804)
-- Name: account account_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account
    ADD CONSTRAINT account_pkey PRIMARY KEY (id);


--
-- TOC entry 4910 (class 2606 OID 33105)
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- TOC entry 4898 (class 2606 OID 24633)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- TOC entry 4900 (class 2606 OID 32790)
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (id);


--
-- TOC entry 4895 (class 2606 OID 24616)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 4908 (class 2606 OID 32818)
-- Name: verification verification_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.verification
    ADD CONSTRAINT verification_pkey PRIMARY KEY (id);


--
-- TOC entry 4905 (class 1259 OID 32821)
-- Name: account_userId_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "account_userId_idx" ON public.account USING btree ("userId");


--
-- TOC entry 4901 (class 1259 OID 32820)
-- Name: session_token_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX session_token_key ON public.session USING btree (token);


--
-- TOC entry 4902 (class 1259 OID 32819)
-- Name: session_userId_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "session_userId_idx" ON public.session USING btree ("userId");


--
-- TOC entry 4893 (class 1259 OID 32824)
-- Name: users_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);


--
-- TOC entry 4896 (class 1259 OID 32823)
-- Name: users_userName_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "users_userName_key" ON public.users USING btree ("userName");


--
-- TOC entry 4906 (class 1259 OID 32822)
-- Name: verification_identifier_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX verification_identifier_idx ON public.verification USING btree (identifier);


--
-- TOC entry 4912 (class 2606 OID 32830)
-- Name: account account_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account
    ADD CONSTRAINT "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 4913 (class 2606 OID 33111)
-- Name: orders orders_productid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_productid_fkey FOREIGN KEY (productid) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4914 (class 2606 OID 33106)
-- Name: orders orders_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4911 (class 2606 OID 32825)
-- Name: session session_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2026-08-12 01:22:30

--
-- PostgreSQL database dump complete
--

\unrestrict Ae80wJg2fUkIWEascHwmtexWocfaL1prlAdsx98pFZbuCw5ajPKLnmmFWYz23Dy

