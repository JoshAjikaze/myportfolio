import Banner from "../Components/Banner"
import Services from "../Components/Services"

function Home() {
  return (
    <main className="w-full xl:px-[50px] min-h-screen bg-white dark:bg-primary-bg dark:text-white flex flex-col items-center">

    <Banner />
    <Services />

    </main>
  )
}

export default Home