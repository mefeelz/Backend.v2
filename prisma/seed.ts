import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'bootcamp@gmail.com' },
    update: {},
    create: {
      email: 'bootcamp@gmail.com',
      password: 'bootcamp',
      name: 'peter',
    },
  });

  console.log(admin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
