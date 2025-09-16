'use server';

import EmptyDeskList from '../components/EmptyDesksList';
import Greeting from '../components/Greeting';
import { db } from '../../db';

export default async function Index() {
  const desks = await db.query.desk.findMany();

  return (
    <div className="flex gap-2">
      <Greeting />
      <EmptyDeskList desks={desks} />
    </div>
  );
}
