import { component$, $, useSignal } from '@builder.io/qwik';

export const TwitterAuth = component$(() => {
  // A signal for handling loading state (optional)
  const isLoading = useSignal(false);

  const startAuth = $(
    async () => {
      isLoading.value = true; // Set loading state (optional)
      try {
        const response = await fetch('/api/auth-start');
        const data = await response.json();

        // Redirect the user to Twitter for authentication
        window.location.href = data.url;
      } catch (error) {
        console.error('Error starting Twitter authentication:', error);
      } finally {
        isLoading.value = false; // Reset loading state
      }
    }
  );

  return (
    <button onClick$={startAuth} class="btn" disabled={isLoading.value}>
      {isLoading.value ? 'Loading...' : 'Login with Twitter'}
    </button>
  );
});
