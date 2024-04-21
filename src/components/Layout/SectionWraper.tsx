import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function SectionWraper({ children }: Props) {
  return (
    <section className="py-5 md:py-10 px-5 md:px-10 container mx-auto">
      {children}
    </section>
  );
}
