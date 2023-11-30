export const getPostById = async (id: string) => {
  return prisma.post.findUnique({
    where: {
      id,
    },
  });
};
