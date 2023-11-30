"use client";

import { Button } from "@nextui-org/react";
import PageCenter from "@/components/center";
import { test } from "@/app/demos/server-actions/actions";

const Page = () => {
  return (
    <PageCenter>
      <Button onClick={async () => await test()}>Server Action</Button>
    </PageCenter>
  );
};

export default Page;
