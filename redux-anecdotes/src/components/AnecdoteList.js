import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { newNotification, reset } from '../reducers/notificationReducer'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {

  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)

    const voteClick = (anecdote) => {
        dispatch(vote(anecdote.id))
        dispatch(newNotification(`you voted '${anecdote.content}'`))
        setTimeout(() => {
          dispatch(reset())
        }, 5000)
    }
    return (
        <div>
            {anecdotes.map(anecdote => 
              <div key={anecdote.id}><div>{anecdote.content}</div>
              <div> has {anecdote.votes} votes
              <button onClick={() => voteClick(anecdote)}>vote</button>
              </div></div>
            )}
        </div>
    )
}

export default AnecdoteList