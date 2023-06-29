import React from 'react'
import Track from '../Track/Track'
export default function List(props) {
  return (
     <ul>
        {props.tracks.map(track=><Track track={track}/>)}
     </ul>
  )
}