PGDMP  6                    |         
   PressTrack    16.3    16.3 n    y           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            z           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            {           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            |           1262    16397 
   PressTrack    DATABASE     �   CREATE DATABASE "PressTrack" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE "PressTrack";
                postgres    false            �            1259    16592    current_location    TABLE     �   CREATE TABLE public.current_location (
    section_id integer NOT NULL,
    oc_id integer NOT NULL,
    status text NOT NULL
);
 $   DROP TABLE public.current_location;
       public         heap    postgres    false            �            1259    16427    customer    TABLE     �   CREATE TABLE public.customer (
    customer_id integer NOT NULL,
    full_name text NOT NULL,
    nic text NOT NULL,
    email text NOT NULL,
    contact_no text NOT NULL,
    description text,
    address text
);
    DROP TABLE public.customer;
       public         heap    postgres    false            �            1259    16426    customer_customer_id_seq    SEQUENCE     �   CREATE SEQUENCE public.customer_customer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.customer_customer_id_seq;
       public          postgres    false    220            }           0    0    customer_customer_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.customer_customer_id_seq OWNED BY public.customer.customer_id;
          public          postgres    false    219            �            1259    16610    inventory_items    TABLE     �   CREATE TABLE public.inventory_items (
    item_id integer NOT NULL,
    item_name text NOT NULL,
    stock_available integer NOT NULL,
    description text
);
 #   DROP TABLE public.inventory_items;
       public         heap    postgres    false            �            1259    16609    inventory_items_item_id_seq    SEQUENCE     �   CREATE SEQUENCE public.inventory_items_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.inventory_items_item_id_seq;
       public          postgres    false    235            ~           0    0    inventory_items_item_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.inventory_items_item_id_seq OWNED BY public.inventory_items.item_id;
          public          postgres    false    234            �            1259    16553    invoice    TABLE     �   CREATE TABLE public.invoice (
    invoice_id integer NOT NULL,
    oc_id integer NOT NULL,
    total_amount double precision NOT NULL,
    balance double precision NOT NULL
);
    DROP TABLE public.invoice;
       public         heap    postgres    false            �            1259    16552    invoice_invoice_id_seq    SEQUENCE     �   CREATE SEQUENCE public.invoice_invoice_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.invoice_invoice_id_seq;
       public          postgres    false    228                       0    0    invoice_invoice_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.invoice_invoice_id_seq OWNED BY public.invoice.invoice_id;
          public          postgres    false    227            �            1259    16619    items_per_order    TABLE     �   CREATE TABLE public.items_per_order (
    item_id integer NOT NULL,
    oc_id integer NOT NULL,
    item_required integer NOT NULL,
    stock_required integer NOT NULL,
    description text
);
 #   DROP TABLE public.items_per_order;
       public         heap    postgres    false            �            1259    16399    manager    TABLE     �   CREATE TABLE public.manager (
    manager_id integer NOT NULL,
    nic text NOT NULL,
    full_name text NOT NULL,
    email text NOT NULL,
    contact_no text NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    description text
);
    DROP TABLE public.manager;
       public         heap    postgres    false            �            1259    16398    manager_manager_id_seq    SEQUENCE     �   CREATE SEQUENCE public.manager_manager_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.manager_manager_id_seq;
       public          postgres    false    216            �           0    0    manager_manager_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.manager_manager_id_seq OWNED BY public.manager.manager_id;
          public          postgres    false    215            �            1259    16487    order_confirmed    TABLE     V  CREATE TABLE public.order_confirmed (
    oc_id integer NOT NULL,
    customer_id integer NOT NULL,
    or_id integer NOT NULL,
    deadline timestamp without time zone NOT NULL,
    date_confirmed timestamp without time zone NOT NULL,
    description text NOT NULL,
    final_design bytea NOT NULL,
    advance_payment_slip text NOT NULL
);
 #   DROP TABLE public.order_confirmed;
       public         heap    postgres    false            �            1259    16486    order_confirmed_oc_id_seq    SEQUENCE     �   CREATE SEQUENCE public.order_confirmed_oc_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.order_confirmed_oc_id_seq;
       public          postgres    false    226            �           0    0    order_confirmed_oc_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.order_confirmed_oc_id_seq OWNED BY public.order_confirmed.oc_id;
          public          postgres    false    225            �            1259    16468    order_request    TABLE     �  CREATE TABLE public.order_request (
    or_id integer NOT NULL,
    customer_id integer NOT NULL,
    quotation_id integer,
    date_requested timestamp without time zone NOT NULL,
    service_type text NOT NULL,
    item_type text NOT NULL,
    paper_type text,
    color_option text,
    no_of_pages integer,
    cover_type text,
    quantity integer NOT NULL,
    design bytea,
    laminating_type text,
    additional_info text
);
 !   DROP TABLE public.order_request;
       public         heap    postgres    false            �            1259    16467    order_request_or_id_seq    SEQUENCE     �   CREATE SEQUENCE public.order_request_or_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.order_request_or_id_seq;
       public          postgres    false    224            �           0    0    order_request_or_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.order_request_or_id_seq OWNED BY public.order_request.or_id;
          public          postgres    false    223            �            1259    16412    owner    TABLE     �   CREATE TABLE public.owner (
    owner_id integer NOT NULL,
    full_name text NOT NULL,
    nic text NOT NULL,
    email text NOT NULL,
    contact_no text NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    description text
);
    DROP TABLE public.owner;
       public         heap    postgres    false            �            1259    16411    owner_owner_id_seq    SEQUENCE     �   CREATE SEQUENCE public.owner_owner_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.owner_owner_id_seq;
       public          postgres    false    218            �           0    0    owner_owner_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.owner_owner_id_seq OWNED BY public.owner.owner_id;
          public          postgres    false    217            �            1259    16565    payment    TABLE       CREATE TABLE public.payment (
    payment_id integer NOT NULL,
    invoice_id integer NOT NULL,
    amount_paid double precision NOT NULL,
    date_paid timestamp without time zone NOT NULL,
    description text NOT NULL,
    payment_slip bytea NOT NULL
);
    DROP TABLE public.payment;
       public         heap    postgres    false            �            1259    16564    payment_payment_id_seq    SEQUENCE     �   CREATE SEQUENCE public.payment_payment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.payment_payment_id_seq;
       public          postgres    false    230            �           0    0    payment_payment_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.payment_payment_id_seq OWNED BY public.payment.payment_id;
          public          postgres    false    229            �            1259    16454 	   quotation    TABLE     �   CREATE TABLE public.quotation (
    quotation_id integer NOT NULL,
    customer_id integer NOT NULL,
    total_amount double precision NOT NULL,
    date_created timestamp without time zone NOT NULL,
    description text,
    pdf_path text NOT NULL
);
    DROP TABLE public.quotation;
       public         heap    postgres    false            �            1259    16453    quotation_quotation_id_seq    SEQUENCE     �   CREATE SEQUENCE public.quotation_quotation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.quotation_quotation_id_seq;
       public          postgres    false    222            �           0    0    quotation_quotation_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.quotation_quotation_id_seq OWNED BY public.quotation.quotation_id;
          public          postgres    false    221            �            1259    16579    sections    TABLE     �   CREATE TABLE public.sections (
    section_id integer NOT NULL,
    payment_id integer NOT NULL,
    sname text NOT NULL,
    description text,
    monthly_report bytea,
    yearly_report bytea,
    income double precision[] NOT NULL
);
    DROP TABLE public.sections;
       public         heap    postgres    false            �            1259    16578    sections_section_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sections_section_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.sections_section_id_seq;
       public          postgres    false    232            �           0    0    sections_section_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.sections_section_id_seq OWNED BY public.sections.section_id;
          public          postgres    false    231            �            1259    16637    supplier    TABLE     �   CREATE TABLE public.supplier (
    supplier_id integer NOT NULL,
    supplier_name text NOT NULL,
    contact_no text NOT NULL,
    email text NOT NULL,
    address text NOT NULL
);
    DROP TABLE public.supplier;
       public         heap    postgres    false            �            1259    16645    supplier_item    TABLE     �   CREATE TABLE public.supplier_item (
    supplier_id integer NOT NULL,
    item_id integer NOT NULL,
    price double precision NOT NULL,
    quality text
);
 !   DROP TABLE public.supplier_item;
       public         heap    postgres    false            �            1259    16636    supplier_supplier_id_seq    SEQUENCE     �   CREATE SEQUENCE public.supplier_supplier_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.supplier_supplier_id_seq;
       public          postgres    false    238            �           0    0    supplier_supplier_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.supplier_supplier_id_seq OWNED BY public.supplier.supplier_id;
          public          postgres    false    237            �           2604    16430    customer customer_id    DEFAULT     |   ALTER TABLE ONLY public.customer ALTER COLUMN customer_id SET DEFAULT nextval('public.customer_customer_id_seq'::regclass);
 C   ALTER TABLE public.customer ALTER COLUMN customer_id DROP DEFAULT;
       public          postgres    false    219    220    220            �           2604    16613    inventory_items item_id    DEFAULT     �   ALTER TABLE ONLY public.inventory_items ALTER COLUMN item_id SET DEFAULT nextval('public.inventory_items_item_id_seq'::regclass);
 F   ALTER TABLE public.inventory_items ALTER COLUMN item_id DROP DEFAULT;
       public          postgres    false    234    235    235            �           2604    16556    invoice invoice_id    DEFAULT     x   ALTER TABLE ONLY public.invoice ALTER COLUMN invoice_id SET DEFAULT nextval('public.invoice_invoice_id_seq'::regclass);
 A   ALTER TABLE public.invoice ALTER COLUMN invoice_id DROP DEFAULT;
       public          postgres    false    227    228    228            �           2604    16402    manager manager_id    DEFAULT     x   ALTER TABLE ONLY public.manager ALTER COLUMN manager_id SET DEFAULT nextval('public.manager_manager_id_seq'::regclass);
 A   ALTER TABLE public.manager ALTER COLUMN manager_id DROP DEFAULT;
       public          postgres    false    215    216    216            �           2604    16490    order_confirmed oc_id    DEFAULT     ~   ALTER TABLE ONLY public.order_confirmed ALTER COLUMN oc_id SET DEFAULT nextval('public.order_confirmed_oc_id_seq'::regclass);
 D   ALTER TABLE public.order_confirmed ALTER COLUMN oc_id DROP DEFAULT;
       public          postgres    false    225    226    226            �           2604    16471    order_request or_id    DEFAULT     z   ALTER TABLE ONLY public.order_request ALTER COLUMN or_id SET DEFAULT nextval('public.order_request_or_id_seq'::regclass);
 B   ALTER TABLE public.order_request ALTER COLUMN or_id DROP DEFAULT;
       public          postgres    false    224    223    224            �           2604    16415    owner owner_id    DEFAULT     p   ALTER TABLE ONLY public.owner ALTER COLUMN owner_id SET DEFAULT nextval('public.owner_owner_id_seq'::regclass);
 =   ALTER TABLE public.owner ALTER COLUMN owner_id DROP DEFAULT;
       public          postgres    false    218    217    218            �           2604    16568    payment payment_id    DEFAULT     x   ALTER TABLE ONLY public.payment ALTER COLUMN payment_id SET DEFAULT nextval('public.payment_payment_id_seq'::regclass);
 A   ALTER TABLE public.payment ALTER COLUMN payment_id DROP DEFAULT;
       public          postgres    false    230    229    230            �           2604    16457    quotation quotation_id    DEFAULT     �   ALTER TABLE ONLY public.quotation ALTER COLUMN quotation_id SET DEFAULT nextval('public.quotation_quotation_id_seq'::regclass);
 E   ALTER TABLE public.quotation ALTER COLUMN quotation_id DROP DEFAULT;
       public          postgres    false    221    222    222            �           2604    16582    sections section_id    DEFAULT     z   ALTER TABLE ONLY public.sections ALTER COLUMN section_id SET DEFAULT nextval('public.sections_section_id_seq'::regclass);
 B   ALTER TABLE public.sections ALTER COLUMN section_id DROP DEFAULT;
       public          postgres    false    231    232    232            �           2604    16640    supplier supplier_id    DEFAULT     |   ALTER TABLE ONLY public.supplier ALTER COLUMN supplier_id SET DEFAULT nextval('public.supplier_supplier_id_seq'::regclass);
 C   ALTER TABLE public.supplier ALTER COLUMN supplier_id DROP DEFAULT;
       public          postgres    false    237    238    238            p          0    16592    current_location 
   TABLE DATA           E   COPY public.current_location (section_id, oc_id, status) FROM stdin;
    public          postgres    false    233   r�       c          0    16427    customer 
   TABLE DATA           h   COPY public.customer (customer_id, full_name, nic, email, contact_no, description, address) FROM stdin;
    public          postgres    false    220   ��       r          0    16610    inventory_items 
   TABLE DATA           [   COPY public.inventory_items (item_id, item_name, stock_available, description) FROM stdin;
    public          postgres    false    235   ��       k          0    16553    invoice 
   TABLE DATA           K   COPY public.invoice (invoice_id, oc_id, total_amount, balance) FROM stdin;
    public          postgres    false    228   ɉ       s          0    16619    items_per_order 
   TABLE DATA           e   COPY public.items_per_order (item_id, oc_id, item_required, stock_required, description) FROM stdin;
    public          postgres    false    236   �       _          0    16399    manager 
   TABLE DATA           q   COPY public.manager (manager_id, nic, full_name, email, contact_no, username, password, description) FROM stdin;
    public          postgres    false    216   �       i          0    16487    order_confirmed 
   TABLE DATA           �   COPY public.order_confirmed (oc_id, customer_id, or_id, deadline, date_confirmed, description, final_design, advance_payment_slip) FROM stdin;
    public          postgres    false    226    �       g          0    16468    order_request 
   TABLE DATA           �   COPY public.order_request (or_id, customer_id, quotation_id, date_requested, service_type, item_type, paper_type, color_option, no_of_pages, cover_type, quantity, design, laminating_type, additional_info) FROM stdin;
    public          postgres    false    224   =�       a          0    16412    owner 
   TABLE DATA           m   COPY public.owner (owner_id, full_name, nic, email, contact_no, username, password, description) FROM stdin;
    public          postgres    false    218   Z�       m          0    16565    payment 
   TABLE DATA           l   COPY public.payment (payment_id, invoice_id, amount_paid, date_paid, description, payment_slip) FROM stdin;
    public          postgres    false    230   w�       e          0    16454 	   quotation 
   TABLE DATA           q   COPY public.quotation (quotation_id, customer_id, total_amount, date_created, description, pdf_path) FROM stdin;
    public          postgres    false    222   ��       o          0    16579    sections 
   TABLE DATA           u   COPY public.sections (section_id, payment_id, sname, description, monthly_report, yearly_report, income) FROM stdin;
    public          postgres    false    232   ��       u          0    16637    supplier 
   TABLE DATA           Z   COPY public.supplier (supplier_id, supplier_name, contact_no, email, address) FROM stdin;
    public          postgres    false    238   Ί       v          0    16645    supplier_item 
   TABLE DATA           M   COPY public.supplier_item (supplier_id, item_id, price, quality) FROM stdin;
    public          postgres    false    239   �       �           0    0    customer_customer_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.customer_customer_id_seq', 1, false);
          public          postgres    false    219            �           0    0    inventory_items_item_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.inventory_items_item_id_seq', 1, false);
          public          postgres    false    234            �           0    0    invoice_invoice_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.invoice_invoice_id_seq', 1, false);
          public          postgres    false    227            �           0    0    manager_manager_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.manager_manager_id_seq', 1, false);
          public          postgres    false    215            �           0    0    order_confirmed_oc_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.order_confirmed_oc_id_seq', 1, false);
          public          postgres    false    225            �           0    0    order_request_or_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.order_request_or_id_seq', 1, false);
          public          postgres    false    223            �           0    0    owner_owner_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.owner_owner_id_seq', 1, false);
          public          postgres    false    217            �           0    0    payment_payment_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.payment_payment_id_seq', 1, false);
          public          postgres    false    229            �           0    0    quotation_quotation_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.quotation_quotation_id_seq', 1, false);
          public          postgres    false    221            �           0    0    sections_section_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.sections_section_id_seq', 1, false);
          public          postgres    false    231            �           0    0    supplier_supplier_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.supplier_supplier_id_seq', 1, false);
          public          postgres    false    237            �           2606    16598 &   current_location current_location_pkey 
   CONSTRAINT     s   ALTER TABLE ONLY public.current_location
    ADD CONSTRAINT current_location_pkey PRIMARY KEY (section_id, oc_id);
 P   ALTER TABLE ONLY public.current_location DROP CONSTRAINT current_location_pkey;
       public            postgres    false    233    233            �           2606    16438    customer customer_email_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_email_key UNIQUE (email);
 E   ALTER TABLE ONLY public.customer DROP CONSTRAINT customer_email_key;
       public            postgres    false    220            �           2606    16436    customer customer_nic_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_nic_key UNIQUE (nic);
 C   ALTER TABLE ONLY public.customer DROP CONSTRAINT customer_nic_key;
       public            postgres    false    220            �           2606    16434    customer customer_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (customer_id);
 @   ALTER TABLE ONLY public.customer DROP CONSTRAINT customer_pkey;
       public            postgres    false    220            �           2606    16617 $   inventory_items inventory_items_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.inventory_items
    ADD CONSTRAINT inventory_items_pkey PRIMARY KEY (item_id);
 N   ALTER TABLE ONLY public.inventory_items DROP CONSTRAINT inventory_items_pkey;
       public            postgres    false    235            �           2606    16558    invoice invoice_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.invoice
    ADD CONSTRAINT invoice_pkey PRIMARY KEY (invoice_id);
 >   ALTER TABLE ONLY public.invoice DROP CONSTRAINT invoice_pkey;
       public            postgres    false    228            �           2606    16625 $   items_per_order items_per_order_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.items_per_order
    ADD CONSTRAINT items_per_order_pkey PRIMARY KEY (item_id, oc_id);
 N   ALTER TABLE ONLY public.items_per_order DROP CONSTRAINT items_per_order_pkey;
       public            postgres    false    236    236            �           2606    16408    manager manager_email_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.manager
    ADD CONSTRAINT manager_email_key UNIQUE (email);
 C   ALTER TABLE ONLY public.manager DROP CONSTRAINT manager_email_key;
       public            postgres    false    216            �           2606    16406    manager manager_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.manager
    ADD CONSTRAINT manager_pkey PRIMARY KEY (manager_id);
 >   ALTER TABLE ONLY public.manager DROP CONSTRAINT manager_pkey;
       public            postgres    false    216            �           2606    16410    manager manager_username_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.manager
    ADD CONSTRAINT manager_username_key UNIQUE (username);
 F   ALTER TABLE ONLY public.manager DROP CONSTRAINT manager_username_key;
       public            postgres    false    216            �           2606    16494 $   order_confirmed order_confirmed_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.order_confirmed
    ADD CONSTRAINT order_confirmed_pkey PRIMARY KEY (oc_id);
 N   ALTER TABLE ONLY public.order_confirmed DROP CONSTRAINT order_confirmed_pkey;
       public            postgres    false    226            �           2606    16475     order_request order_request_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.order_request
    ADD CONSTRAINT order_request_pkey PRIMARY KEY (or_id);
 J   ALTER TABLE ONLY public.order_request DROP CONSTRAINT order_request_pkey;
       public            postgres    false    224            �           2606    16423    owner owner_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.owner
    ADD CONSTRAINT owner_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.owner DROP CONSTRAINT owner_email_key;
       public            postgres    false    218            �           2606    16421    owner owner_nic_key 
   CONSTRAINT     M   ALTER TABLE ONLY public.owner
    ADD CONSTRAINT owner_nic_key UNIQUE (nic);
 =   ALTER TABLE ONLY public.owner DROP CONSTRAINT owner_nic_key;
       public            postgres    false    218            �           2606    16419    owner owner_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.owner
    ADD CONSTRAINT owner_pkey PRIMARY KEY (owner_id);
 :   ALTER TABLE ONLY public.owner DROP CONSTRAINT owner_pkey;
       public            postgres    false    218            �           2606    16425    owner owner_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.owner
    ADD CONSTRAINT owner_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public.owner DROP CONSTRAINT owner_username_key;
       public            postgres    false    218            �           2606    16572    payment payment_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_pkey PRIMARY KEY (payment_id);
 >   ALTER TABLE ONLY public.payment DROP CONSTRAINT payment_pkey;
       public            postgres    false    230            �           2606    16461    quotation quotation_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.quotation
    ADD CONSTRAINT quotation_pkey PRIMARY KEY (quotation_id);
 B   ALTER TABLE ONLY public.quotation DROP CONSTRAINT quotation_pkey;
       public            postgres    false    222            �           2606    16586    sections sections_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_pkey PRIMARY KEY (section_id);
 @   ALTER TABLE ONLY public.sections DROP CONSTRAINT sections_pkey;
       public            postgres    false    232            �           2606    16644    supplier supplier_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.supplier
    ADD CONSTRAINT supplier_pkey PRIMARY KEY (supplier_id);
 @   ALTER TABLE ONLY public.supplier DROP CONSTRAINT supplier_pkey;
       public            postgres    false    238            �           2606    16604 ,   current_location current_location_oc_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.current_location
    ADD CONSTRAINT current_location_oc_id_fkey FOREIGN KEY (oc_id) REFERENCES public.order_confirmed(oc_id);
 V   ALTER TABLE ONLY public.current_location DROP CONSTRAINT current_location_oc_id_fkey;
       public          postgres    false    226    4786    233            �           2606    16599 1   current_location current_location_section_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.current_location
    ADD CONSTRAINT current_location_section_id_fkey FOREIGN KEY (section_id) REFERENCES public.sections(section_id);
 [   ALTER TABLE ONLY public.current_location DROP CONSTRAINT current_location_section_id_fkey;
       public          postgres    false    4792    232    233            �           2606    16559    invoice invoice_oc_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.invoice
    ADD CONSTRAINT invoice_oc_id_fkey FOREIGN KEY (oc_id) REFERENCES public.order_confirmed(oc_id);
 D   ALTER TABLE ONLY public.invoice DROP CONSTRAINT invoice_oc_id_fkey;
       public          postgres    false    228    226    4786            �           2606    16626 ,   items_per_order items_per_order_item_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.items_per_order
    ADD CONSTRAINT items_per_order_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.inventory_items(item_id);
 V   ALTER TABLE ONLY public.items_per_order DROP CONSTRAINT items_per_order_item_id_fkey;
       public          postgres    false    4796    236    235            �           2606    16631 *   items_per_order items_per_order_oc_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.items_per_order
    ADD CONSTRAINT items_per_order_oc_id_fkey FOREIGN KEY (oc_id) REFERENCES public.order_confirmed(oc_id);
 T   ALTER TABLE ONLY public.items_per_order DROP CONSTRAINT items_per_order_oc_id_fkey;
       public          postgres    false    226    4786    236            �           2606    16495 0   order_confirmed order_confirmed_customer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.order_confirmed
    ADD CONSTRAINT order_confirmed_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(customer_id);
 Z   ALTER TABLE ONLY public.order_confirmed DROP CONSTRAINT order_confirmed_customer_id_fkey;
       public          postgres    false    226    220    4780            �           2606    16500 *   order_confirmed order_confirmed_or_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.order_confirmed
    ADD CONSTRAINT order_confirmed_or_id_fkey FOREIGN KEY (or_id) REFERENCES public.order_request(or_id);
 T   ALTER TABLE ONLY public.order_confirmed DROP CONSTRAINT order_confirmed_or_id_fkey;
       public          postgres    false    224    226    4784            �           2606    16476 ,   order_request order_request_customer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.order_request
    ADD CONSTRAINT order_request_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(customer_id);
 V   ALTER TABLE ONLY public.order_request DROP CONSTRAINT order_request_customer_id_fkey;
       public          postgres    false    224    4780    220            �           2606    16481 -   order_request order_request_quotation_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.order_request
    ADD CONSTRAINT order_request_quotation_id_fkey FOREIGN KEY (quotation_id) REFERENCES public.quotation(quotation_id);
 W   ALTER TABLE ONLY public.order_request DROP CONSTRAINT order_request_quotation_id_fkey;
       public          postgres    false    222    224    4782            �           2606    16573    payment payment_invoice_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_invoice_id_fkey FOREIGN KEY (invoice_id) REFERENCES public.invoice(invoice_id);
 I   ALTER TABLE ONLY public.payment DROP CONSTRAINT payment_invoice_id_fkey;
       public          postgres    false    4788    230    228            �           2606    16462 $   quotation quotation_customer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.quotation
    ADD CONSTRAINT quotation_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(customer_id);
 N   ALTER TABLE ONLY public.quotation DROP CONSTRAINT quotation_customer_id_fkey;
       public          postgres    false    222    220    4780            �           2606    16587 !   sections sections_payment_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_payment_id_fkey FOREIGN KEY (payment_id) REFERENCES public.payment(payment_id);
 K   ALTER TABLE ONLY public.sections DROP CONSTRAINT sections_payment_id_fkey;
       public          postgres    false    230    232    4790            �           2606    16655 (   supplier_item supplier_item_item_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.supplier_item
    ADD CONSTRAINT supplier_item_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.inventory_items(item_id);
 R   ALTER TABLE ONLY public.supplier_item DROP CONSTRAINT supplier_item_item_id_fkey;
       public          postgres    false    239    235    4796            �           2606    16650 ,   supplier_item supplier_item_supplier_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.supplier_item
    ADD CONSTRAINT supplier_item_supplier_id_fkey FOREIGN KEY (supplier_id) REFERENCES public.supplier(supplier_id);
 V   ALTER TABLE ONLY public.supplier_item DROP CONSTRAINT supplier_item_supplier_id_fkey;
       public          postgres    false    238    4800    239            p      x������ � �      c      x������ � �      r      x������ � �      k      x������ � �      s      x������ � �      _      x������ � �      i      x������ � �      g      x������ � �      a      x������ � �      m      x������ � �      e      x������ � �      o      x������ � �      u      x������ � �      v      x������ � �     