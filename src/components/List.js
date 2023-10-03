import React from 'react'
import ListItems from './ListItems';

const animals = [
    { name: "dog", head: "🐕" },
    { name: "cat", head: "🐈" },
    { name: "chicken", head: "🐕" },
    { name: "cow", head: "🐕" },
    { name: "sheep", head: "🐕" },
    { name: "horse", head: "🐕" },
  ];
  
export default function List() {
  return (
    <div className="py-10 flex flex-col items-center justify-center">
    <ul className="list-disc">
      {animals.map((animal, index) => (
        <ListItems key = {index} name={animal.name} head={animal.head} />
      ))}
    </ul>
  </div>
  )
}
