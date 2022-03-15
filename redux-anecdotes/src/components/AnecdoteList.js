import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <div onClick={handleClick}>
      {anecdote.content}
      <br></br>has {anecdote.votes} votes
      <button onClick={() => vote(anecdote.id)}>vote</button>
    </div>
  )
}

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)

  return(
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote 
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => 
            dispatch(vote(anecdote.id))
            }
        />
      )}
    </div>
  )
}

export default Anecdotes