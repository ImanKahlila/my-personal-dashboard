export async function GET(req) {
    const apiKEY = process.env.GUARDIAN_API_KEY; /* This is the API key for The Guardian News API - news slider */
    const response = await fetch(`https://content.guardianapis.com/search?q=technology&api-key=${apiKEY}`
    );
    const data = await response.json();

    
    console.log('data.reponse.results', data.response.results);
    console.log('Fetching Guardian API...', data);
    console.log(data);

    return Response.json(data);
    
}