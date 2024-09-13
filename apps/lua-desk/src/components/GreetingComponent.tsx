'use client';

import getAllDesksAction from '../app/_actions/getAllDesktsAction';

export default function Greeting() {
  const onClickHandler = async () => {
    const desks = await getAllDesksAction();
  };

  return (
    <div>
      <div className="text-2xl">
        Hallo! Herzlich Willkommen. Hier kannst du deinen Schreibtisch für die
        kommenden 30 Tage reservieren.
      </div>
    </div>
  );
}
