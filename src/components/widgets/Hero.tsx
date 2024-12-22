import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <section class="relative md:-mt-[76px] not-prose">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-10">
        <div class="pt-0 md:pt-[76px] pointer-events-none"></div>
        <div class="pt-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
          <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto">
            <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              $Froppy <br class="hidden lg:block" />{" "}
              <span class="text-sky-500">The Kaspian Frog</span>
            </h1>
            <div class="max-w-3xl mx-auto lg:max-w-none">
              <p class="text-xl text-muted mb-6 dark:text-slate-300">
                Join the fun with <span class="font-semibold">Froppy</span>—the hottest memecoin on the Kaspa chain. Fast, fun, and ready for the next big trend.
              </p>

              <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl">
                <div class="flex w-full sm:w-auto">
                  <a
                    class="bg-sky-200 dark:bg-sky-400 btn sm:mb-0 w-full"
                    href="/"
                    
                    
                  >
                    Get Froppy
                  </a>
                </div>
                <div class="flex w-full sm:w-auto">
                  <button class="btn w-full bg-red-200 dark:bg-red-400 ">Join Community</button>
                </div>
              </div>
            </div>
          </div>
          
 


          <div class="basis-1/2 -mt-10">
  <Image
    src="/images/froppy.png"
    layout="intrinsic" 
    width={443.7}
    height={554.4}
    alt="Kroppy Hero Image (Fun Dog)"
    class="mx-auto lg:mr-0 w-full max-w-[90%] sm:max-w-[70%] drop-shadow-2xl rounded-md"
    priority={true}
    breakpoints={[320, 480, 640, 768, 1024]}
  />
</div>

        </div>
      </div>

      
    </section>
  );
});