import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';

export default component$(() => {
  const images = ['meme1.jpg', 'meme2.jpg', 'meme3.jpg', 'meme4.jpg', 'meme1.jpg', 'meme2.jpg', 'meme3.jpg', 'meme4.jpg',];
  const isPlaying = useSignal<boolean>(false);
  const isMobile = useSignal<boolean>(false); // Signal to track mobile status
  const currentSlide = useSignal<number>(0);

  const retweet = $( async (tweetId: string, accessToken: string, accessSecret: string) => {
    const response = await fetch('/api/retweet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tweetId, accessToken, accessSecret }),
    });
  
    if (response.ok) {
      console.log('Retweet successful!');
    } else {
      console.error('Retweet failed.');
    }
  });
  


  const shareOnTwitter = $((image: string) => {
    const tweetText = encodeURIComponent(`Check out this meme!`);
    const url = encodeURIComponent(`${window.location.origin}/images/${image}`);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${url}`;
    window.open(twitterUrl, '_blank');
  });


  useVisibleTask$(() => {
    isPlaying.value = true;
    isMobile.value = window.innerWidth <= 768; // Consider 768px or less as mobile
  });

  return (
    <Carousel.Root class="carousel-root max-w-6xl mx-auto px-0" draggable={false} autoPlayIntervalMs={2000}
    bind:autoplay={isPlaying} slidesPerView={isMobile.value ? 1 : 1} gap={8}>
    
      <Carousel.Scroller class="carousel-scroller ">
          {/* Carousel slides */}
          {images.map((image, index) => (
          <Carousel.Slide key={image} class="carousel-slide ">
            <img height={500} width={500} src={`/images/${image}`} alt={`Meme ${index + 1}`} />
          </Carousel.Slide>
        ))}
      </Carousel.Scroller>
      {/* <Carousel.Pagination class="carousel-pagination">
        {images.map((color, index) => (
          <Carousel.Bullet class="carousel-pagination-bullet" key={color}>
            {index + 1}
          </Carousel.Bullet>
        ))}
      </Carousel.Pagination> */}
  <div class="carousel-buttons flex justify-between items-center w-full p-4">
  <div class="flex items-center space-x-4">
    {/* Left buttons for navigation */}
    <Carousel.Previous>Prev</Carousel.Previous>
    <Carousel.Next>Next</Carousel.Next>
  </div>
  <div class="flex items-center space-x-4">
    {/* Right buttons for sharing */}
    <button
      class="carousel-btn flex items-center space-x-2"
      aria-label="Share on Twitter"
      onClick$={() => retweet}
    >
      Tweet
    </button>
  </div>
</div>

    </Carousel.Root>
  );
});