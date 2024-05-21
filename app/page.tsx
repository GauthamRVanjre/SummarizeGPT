import prisma from "@/prisma/prisma";

export default async function Home() {
  const users = await prisma.user.findMany({});

  return <h2>{JSON.stringify(users)}</h2>;
}
