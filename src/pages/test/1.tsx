import React from "react";

import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import {Button} from "@nextui-org/react";
import CustomButton from "@/components/button";

const Page1 = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full pt-20">
      <CustomButton href={"/test/2"}>Next</CustomButton>
    </main>
  );
};

export default Page1;
export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {},
  };
}
