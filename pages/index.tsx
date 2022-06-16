import type { NextPage } from 'next'
import About from '../components/about'
import ContainerBlock from '../components/containerBlock'

const Home: NextPage = () => {
  return (
    <ContainerBlock>
      <About/>
    </ContainerBlock>
  )
}

export default Home
