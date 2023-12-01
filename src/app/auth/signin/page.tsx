"use client";

import PageCenter from "@/components/center";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/react";
import CustomButton from "@/components/button";
import axios from "axios";

const Page = () => {
  return (
    <PageCenter>
      <Card className={"w-1/4"}>
        <CardHeader>
          <h1 className={"text-4xl font-bold w-full text-center"}>Login</h1>
        </CardHeader>
        <CardBody className={"flex flex-col gap-4"}>
          <Input id={"password"} type={"password"} label={"Password"} />
          <CustomButton
            onClickLoading={async (e) => {
              const password =
                (document.getElementById("password") as HTMLInputElement)
                  ?.value || "";
              const res = await axios.post("/api/auth/signin", {
                password: password,
              });
              if (res.data.success) {
                setTimeout(() => {
                  window.location.href =
                    new URLSearchParams(window.location.search).get("next") ||
                    "/admin/";
                }, 750);
                return;
              }
              throw new Error(res.data.message);
            }}
          >
            Sign In
          </CustomButton>
        </CardBody>
      </Card>
    </PageCenter>
  );
};

export default Page;
