import { PrismaClient, AvailabilityStatus } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient({
    log: ["query"],
  });

  const property = await prisma.property.create({ data: {} });
  const targetDate = new Date("2020-12-03T00:00:00.000Z");

  await prisma.availability.create({
    data: {
      property: { connect: { id: property.id } },
      status: AvailabilityStatus.AVAILABLE,
      date: targetDate,
    },
  });

  const firstUnique = prisma.availability.findUnique({
    where: {
      propertyId_date_status: {
        propertyId: property.id,
        status: AvailabilityStatus.AVAILABLE,
        date: targetDate,
      },
    },
  });

  const secondUnique = prisma.availability.findUnique({
    where: {
      propertyId_date_status: {
        propertyId: property.id,
        status: AvailabilityStatus.AVAILABLE,
        date: targetDate,
      },
    },
  });

  const data = await Promise.all([firstUnique, secondUnique]);

  console.log("DATA RETURNED WITH BATCHING");
  console.log(data);
  const withoutBatch = await prisma.availability.findUnique({
    where: {
      propertyId_date_status: {
        propertyId: property.id,
        status: AvailabilityStatus.AVAILABLE,
        date: targetDate,
      },
    },
  });

  console.log("DATA RETURNED WITHOUT BATCHING");
  console.log(withoutBatch);
  prisma.$disconnect();
}

main();
