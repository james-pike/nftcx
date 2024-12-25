import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// import Hero from "~/components/widgets/Hero";
// import Features from "~/components/widgets/Features";
// import Steps from "~/components/widgets/Steps";
// import FAQs from "~/components/widgets/FAQs";
// import Stats from "~/components/widgets/Stats";
// import CallToAction from "~/components/widgets/CallToAction";


import { SITE } from "~/config.mjs";
// import MemeCarousel from "~/components/MemeCarousel";

export default component$(() => {
  return (
    <>
      {/* <Hero /> */}
      <div class="g-container">
    <svg class="g-svg" width="400" height="160" xmlns="http://www.w3.org/2000/svg">
        <path id="svgpath" d="M 350 40 C 1200 1000, -550 1000, 350 1960" stroke="black" fill="transparent" />
    </svg>
    <div class="ball"></div>
    <div class="point point1"></div>
    <div class="point point2"></div>
    <div class="point point3"></div>
    <h2>CSS Scroll Driven</h2>
    <p class="p1">
        CSS Scroll Driven refers to a technique where CSS is used to create visual effects or animations that are triggered by the scrolling behavior of the user. It involves manipulating CSS properties based on the scroll position to create dynamic and interactive elements on a webpage.
    </p>
    <p class="p2">
        1. Parallax scrolling: By adjusting background positions or opacity based on the scroll position.<br/>
        2.Sticky navigation: The navigation bar can have its style modified as the user scrolls, such as changing its background color, size, or position to enhance usability and improve the user experience.
    </p>
    <p class="p3">
        In summary, CSS Scroll Driven involves using CSS and JavaScript to create effects and animations that respond to the user's scrolling behavior. This technique adds interactivity and visual appeal to webpages, making them more engaging for users.
    </p>
</div>
      {/* <Features
        highlight="It's all about the memes"
        title="Share Froppy with your friends!"
        // subtitle="The best memes will be featured."
       
      />
  
      <Steps />
      <FAQs
        title="Frequently Asked Questions"
        subtitle="Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar."
        highlight="FAQs"
        items={[
          {
            title: "What do I need to start?",
            description:
              "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds. Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
          },
          {
            title: "How to install the Qwik + Tailwind CSS template?",
            description:
              "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows.",
          },
          {
            title: "What's something that you don't understand?",
            description:
              "A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear.",
          },
          {
            title: "What's an example of when you changed your mind?",
            description:
              "Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels.",
          },
          {
            title: "What is something that you would like to try again?",
            description:
              "A business big enough that it could be listed on the NASDAQ goes belly up. Disappears! It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in.",
          },
          {
            title: "If you could only ask one question to each person you meet, what would that question be?",
            description:
              "This is not about revenge. This is about justice. A lot of things can change in twelve years, Admiral. Well, that's certainly good to know. About four years. I got tired of hearing how young I looked.",
          },
        ]}
      />
      <Stats />
      <CallToAction /> */}
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
