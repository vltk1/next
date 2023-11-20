"use client";

import { Button } from "@components/Atoms/Button";

export default function Inko_channel() {
  return (
    <>
     
     <h1 className="text-[15px] text-[red] w-full">12121212</h1>
     <section className="text-center min-h-[100vh] flex justify-center items-center flex-wrap">
     <Button
        bgcolor="#106558"
        border="#0c4938"
        check={["USA"]}
        color="#dedede"
        height={68}
        label="Hile trang"
        radius={6}
        width={240}
      />
     </section>
    </>
  );
}
