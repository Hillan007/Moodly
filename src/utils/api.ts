import axios from 'axios';

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const SPOTIFY_API_KEY = process.env.REACT_APP_SPOTIFY_API_KEY;

export async function getJournalingPrompt(mood: string): Promise<string> {
    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: `Provide a journaling prompt for someone feeling ${mood}.`,
            max_tokens: 50,
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error fetching journaling prompt:', error);
        throw error;
    }
};

export const fetchMoodBasedMusic = async (mood) => {
    try {
        const response = await axios.get(`https://api.spotify.com/v1/recommendations?seed_genres=${mood}`, {
            headers: {
                'Authorization': `Bearer ${SPOTIFY_API_KEY}`,
            },
        });
        return response.data.tracks;
    } catch (error) {
        console.error('Error fetching mood-based music:', error);
        throw error;
    }
};