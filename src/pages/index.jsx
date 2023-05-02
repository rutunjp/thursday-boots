import { Mulish } from 'next/font/google'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Card from '../components/card'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
    </>
  )
}
