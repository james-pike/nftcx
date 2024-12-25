import { TwitterApi } from 'twitter-api-v2';

export default async function handler(req, res) {
  const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
  });

  try {
    // Get request token and authorization URL
    const authLink = await client.generateAuthLink(`${process.env.APP_URL}/api/twitter-callback`);

    // Save the request token and secret to your session store
    res.status(200).json(authLink);
  } catch (error) {
    console.error('Error generating auth link:', error);
    res.status(500).json({ error: 'Failed to generate auth link' });
  }
}
