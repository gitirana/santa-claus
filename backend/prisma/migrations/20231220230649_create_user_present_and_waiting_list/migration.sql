-- CreateTable
CREATE TABLE "presents" (
    "id" TEXT NOT NULL,
    "ebook" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "presents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "waiting_list_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "waiting_lists" (
    "id" TEXT NOT NULL,
    "present_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "waiting_lists_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "presents_ebook_key" ON "presents"("ebook");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "waiting_lists_present_id_key" ON "waiting_lists"("present_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_waiting_list_id_fkey" FOREIGN KEY ("waiting_list_id") REFERENCES "waiting_lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "waiting_lists" ADD CONSTRAINT "waiting_lists_present_id_fkey" FOREIGN KEY ("present_id") REFERENCES "presents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
