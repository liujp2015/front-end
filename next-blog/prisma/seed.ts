import { faker } from "@faker-js/faker";
import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import { getRandomInt } from "@/lib/random";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export async function main() {
  // await prisma.post.deleteMany();
  await prisma.$executeRaw`TRUNCATE TABLE "posts" RESTART IDENTITY CASCADE`;

  for (let index = 0; index < 22; index++) {
    await prisma.post.create({
      select: { id: true },
      data: {
        // 随机封面图
        thumb: `/uploads/thumb/post-${getRandomInt(1, 8)}.png`,
        // 生成1到3个段落的标题
        title: faker.lorem.paragraph({ min: 1, max: 3 }),
        // 生成3-6个段落的内容并把每个段落用换行符换行
        body: faker.lorem.paragraphs(getRandomInt(3, 6), "\n"),
        // 有49%的机率会生成一段摘要
        summary: Math.random() < 0.5 ? faker.lorem.text() : undefined,
      },
    });
  }
}

main();
