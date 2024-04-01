import { type ICredencial } from "./definitions";


export async function getCredential(): Promise<ICredencial> {
  try {
    // Sample of a fake API
    // const response = await fetch('/api/credentials', {cache: 'no-store'});
    // const data = await response.json();
    // return data;   
    await new Promise((resolve) => {setTimeout(resolve, 3000)});

    const data = {
      name: 'Juan Perez',
      company: 'Musimundo',
      role: 'CEO',
      email: 'jperez@musimundo.com.ar',
    };
    return data;
  } catch (error) {
    throw new Error('Failed to fetch credential data.');
  }
  
}