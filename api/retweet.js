import { TwitterApi } from 'twitter-api-v2';

export default async function handler(req, res) {
  const { tweetId, accessToken, accessSecret } = req.body;

  const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
    accessToken,
    accessSecret,
  });

  try {
    const response = await client.v2.retweet('me', tweetId); // Retweets as the authenticated user
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error('Error retweeting:', error);
    res.status(500).json({ error: 'Failed to retweet' });
  }
}
