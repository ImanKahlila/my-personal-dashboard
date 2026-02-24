//This is a server component - it fetches data if using private API keys.



export async function GET(){

const apiKey = process.env.NEWS_API_KEY

const url = `https://content.guardianapis.com/search?` + 
`section=technology|us-news&` +
`show-fields=thumbnail,trailText&` +
`order-by=newest&` +
`page-size=8&` +
`api-key=${apiKey}`

const response = await fetch(url)
const data = await response.json()
return Response.json(data)

}

//Each line is a string. + operator concatenates (joins) the strings into one full URL. 
//fetch takes a string URL > sends a request > returns data
//using url makes your code cleaner and more readable, instead of writing one long line.
//+ just joins strings; fetch(url) uses the joined string to get the data.