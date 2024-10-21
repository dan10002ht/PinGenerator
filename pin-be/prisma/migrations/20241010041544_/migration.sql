-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "username" VARCHAR(100),
    "hashedPassword" TEXT,
    "refreshToken" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "avatarUrl" TEXT,
    "plan" VARCHAR(30) NOT NULL DEFAULT 'free',
    "isSubscribeNews" BOOLEAN DEFAULT false,
    "isEmailVerified" BOOLEAN NOT NULL DEFAULT false,
    "pinCreditLimit" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Template" (
    "id" SERIAL NOT NULL,
    "usedCount" INTEGER NOT NULL DEFAULT 0,
    "isDraft" BOOLEAN,
    "previewImageUrl" TEXT NOT NULL,
    "previewImageGeneratedAt" TIMESTAMP(3),
    "createdBy" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Component" (
    "id" SERIAL NOT NULL,
    "componentType" TEXT NOT NULL,
    "componentName" TEXT NOT NULL,
    "textContent" TEXT,
    "imageUrl" TEXT,
    "wrapperStyles" JSONB,
    "styles" JSONB,
    "pinId" INTEGER,
    "imageStyles" JSONB,
    "componentPosition" INTEGER NOT NULL,
    "templateId" INTEGER,
    "isTemplateComponent" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Component_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pin" (
    "id" SERIAL NOT NULL,
    "sourceTemplateId" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,

    CONSTRAINT "Pin_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_pinId_fkey" FOREIGN KEY ("pinId") REFERENCES "Pin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pin" ADD CONSTRAINT "Pin_sourceTemplateId_fkey" FOREIGN KEY ("sourceTemplateId") REFERENCES "Template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
