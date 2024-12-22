import { component$, Slot } from "@builder.io/qwik";

import Footer from "~/components/widgets/Footer";
import Header from "~/components/widgets/Header";

const gridItemsHTML = new Array(30)
  .fill(null)
  .map(
    () =>
      `<div class="bg-blue-300 animate-pulse" style="animation-delay: ${Math.random() * 5}s; 
    animation-duration: ${3 + Math.random() * 3}s"></div>`
  )
  .join("");

export default component$(() => {
  return (
    <>
     <div
        class="grid-background absolute inset-0 p-1 -z-10 grid grid-cols-6 gap-1"
        dangerouslySetInnerHTML={gridItemsHTML}
      ></div>
      <Header />
      <main class="px-2">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
