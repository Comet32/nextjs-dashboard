import React from "react";
import PlaygroundHeader from "../../ui/playground/PlaygroundHeader";

export default function Layout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <section>
      <PlaygroundHeader />
      {children}
    </section>
  );
}
