export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request): Promise<Response> {
  try {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code')
    // const params = new URLSearchParams();
    // params.append('grant_type', 'authorization_code');
    // params.append('client_id', process.env.NEXT_PUBLIC_EVENT_BRITE_API_KEY ?? '');
    // params.append('client_secret', process.env.EVENTBRITE_CLIENT_SECRET ?? '');
    // params.append('code', code ?? '');
    // params.append('redirect_uri', 'http://localhost:3000');
  
    const res = await fetch(`https://www.eventbrite.com/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_EVENT_BRITE_API_KEY}&client_secret=${process.env.EVENTBRITE_CLIENT_SECRET}&code=${code}&redirect_uri=http://localhost:3000/oauth/redirect`,
    })  
    console.log('res', res);
    return Response.json({ res })
  } catch (error) {
    
    console.log('error', error);
    // return Response.json({ error })
    throw error
  }
}