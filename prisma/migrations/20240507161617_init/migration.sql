-- CreateTable
CREATE TABLE "categories" (
    "cat_id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "category_name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("cat_id")
);

-- CreateTable
CREATE TABLE "comments" (
    "comment_id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "recipe_id" UUID DEFAULT uuid_generate_v4(),
    "user_id" UUID DEFAULT uuid_generate_v4(),
    "comment" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("comment_id")
);

-- CreateTable
CREATE TABLE "ratings" (
    "rating_id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "recipe_id" UUID DEFAULT uuid_generate_v4(),
    "user_id" UUID DEFAULT uuid_generate_v4(),
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "ratings_pkey" PRIMARY KEY ("rating_id")
);

-- CreateTable
CREATE TABLE "recipes" (
    "recipe_id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "title" TEXT NOT NULL,
    "image_url" TEXT,
    "user_id" UUID DEFAULT uuid_generate_v4(),
    "description" TEXT,
    "ingredients" TEXT,
    "directions" TEXT,
    "cat_id" UUID DEFAULT uuid_generate_v4(),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "recipes_pkey" PRIMARY KEY ("recipe_id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profile_url" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "fk_comments_recipes" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("recipe_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "fk_comments_users" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "fk_ratings_recipes" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("recipe_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "fk_ratings_users" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recipes" ADD CONSTRAINT "fk_recipes_category" FOREIGN KEY ("cat_id") REFERENCES "categories"("cat_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recipes" ADD CONSTRAINT "fk_recipes_users" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
