import React from 'react'
import Container from '../component/Container'
import { useSelector,useDispatch } from 'react-redux'
import Btn from '../component/Btn'
import Btnto from '../component/Btnto'

const Home = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <Container>
      <div className="flex justify-center pt-52 items-center ">
      <Btn className={'bg-black text-white mr-10'} btnName={'+'}/>
        <h1 className='text-5xl '>{count}</h1>
        
        <Btnto  className={'bg-black text-white ml-10'}  BtnName={'-'}/>
      </div>
       
    </Container>
  )
}

export default Home