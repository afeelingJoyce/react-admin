import React from 'react'
import './style.css'
import { useStore } from '../../store/index'




function Home(props) {

  const { state, dispatch } = useStore();

  return (
    <div>
      <p>{state.userInfo.username}</p>
      <p>{state.userInfo.password}</p>
      <h1>Home Page</h1>
    </div>
  )
}

const styles = {
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 'calc(100vh - 64px)'
  }
}

export default Home