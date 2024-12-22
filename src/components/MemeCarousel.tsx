import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';

export default component$(() => {
  const images = ['meme1.jpg', 'meme2.jpg', 'meme3.jpg', 'meme4.jpg', 'meme1.jpg', 'meme2.jpg', 'meme3.jpg', 'meme4.jpg',];
  const isPlaying = useSignal<boolean>(false);
  const isMobile = useSignal<boolean>(false); // Signal to track mobile status


  useVisibleTask$(() => {
    isPlaying.value = true;
    isMobile.value = window.innerWidth <= 768; // Consider 768px or less as mobile
  });

  return (
    <Carousel.Root class="carousel-root rounded-xl max-w-6xl mx-auto px-2" draggable={false} autoPlayIntervalMs={2000}
    bind:autoplay={isPlaying} slidesPerView={isMobile.value ? 1 : 1} gap={8}>
    
      <Carousel.Scroller class="carousel-scroller">
          {/* Carousel slides */}
          {images.map((image, index) => (
          <Carousel.Slide key={image} class="carousel-slide">
            <img src={`/images/${image}`} alt={`Meme ${index + 1}`} />
          </Carousel.Slide>
        ))}
      </Carousel.Scroller>
      <Carousel.Pagination class="carousel-pagination">
        {images.map((color, index) => (
          <Carousel.Bullet class="carousel-pagination-bullet" key={color}>
            {index + 1}
          </Carousel.Bullet>
        ))}
      </Carousel.Pagination>
      <div class="carousel-buttons">
        <Carousel.Previous>Prev</Carousel.Previous>
        <Carousel.Next>Next</Carousel.Next>
      </div>
    </Carousel.Root>
  );
});