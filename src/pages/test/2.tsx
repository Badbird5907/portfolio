import React from "react";

import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import CustomButton from "@/components/button";

const Page1 = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full pt-20">
      <CustomButton href={"/test/1"}>Previous</CustomButton>
    </main>
  );
};

export default Page1;
export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {},
  };
}
