-- CreateTable
CREATE TABLE "Empresa" (
    "slug" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "sobre" TEXT NOT NULL,
    "site" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Vaga" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "empresaSlug" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "senioridade" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "aceitaIniciante" BOOLEAN NOT NULL DEFAULT false,
    "descricao" TEXT NOT NULL,
    "criadaEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Vaga_empresaSlug_fkey" FOREIGN KEY ("empresaSlug") REFERENCES "Empresa" ("slug") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Vaga_empresaSlug_idx" ON "Vaga"("empresaSlug");
