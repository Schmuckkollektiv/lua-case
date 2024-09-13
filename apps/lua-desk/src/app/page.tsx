'use server';

import { db } from 'apps/lua-desk/db';
import EmptyDeskList from '../components/EmptyDesksList';
import Greeting from '../components/Greeting';

export default async function Index() {
  const desks = await db.desk.findMany();

  return (
    <div className="flex gap-2">
      <Greeting />
      <EmptyDeskList desks={desks} />
    </div>
  );
}
