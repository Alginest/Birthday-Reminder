import React, { useState } from 'react'

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person
        return (
          <article className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h4>{age} years</h4>
              <button className='btn' onClick={() => removePerson(id)}>
                Delete
              </button>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
