import { cookies } from 'next/headers';

export default function Organizations(): JSX.Element {
  const user = cookies().get('eventbrite_user');
  return (
    <main className="mx-auto w-full max-w-screen-xl p-8">
      <h1 className="my-8 text-center text-3xl">Organizations</h1>
      <div className="mt-8 flex flex-col gap-8 xl:flex-row">
        {user && <p>{user.value}</p>}
      </div>
    </main>
  );
}
