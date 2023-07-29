import Image from 'next/image'
import styles from '../styles/Home.module.css'


// Components
import Header from '../components/Header'
import filterData from '../lib/filterdata'
import FoodCard from '../components/FoodCard'
import CreditsFooter from '../components/CreditsFooter'
import SuportButton from '../components/SuportButton'




function Home({ data }) {
  return (
    <div>
      <SuportButton />
      <Header />
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2">
        <FoodCard foodata={data}/>
      </div>
      <CreditsFooter />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  const data = await filterData(await res.json())

  return {
    props: {
      data,
    },
  }
}

export default Home