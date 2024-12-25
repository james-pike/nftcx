import { TwitterApi } from 'twitter-api-v2';

export default async function handler(req, res) {
  const { oauth_token, oauth_verifier } = req.query;

  const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
  });

  try {
    // Complete the login flow to get an access token and secret
    const { client: loggedInClient, accessToken, accessSecret } =
      await client.login(oauth_token, oauth_verifier);

    // Store accessToken and accessSecret in your database/session for the logged-in user
    res.status(200).json({ accessToken, accessSecret });
  } catch (error) {
    console.error('Error completing login:', error);
    res.status(500).json({ error: 'Failed to authenticate user' });
  }
}
