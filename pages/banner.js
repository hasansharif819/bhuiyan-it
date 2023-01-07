// import Navbar from "../components/Navbar";
import Ecosystem from "../components/Ecosystem/Ecosystem";
import Featured from "../components/Featured/Featured";
import HomePage from "../components/HomePage/HomePage";
import Amount from "../components/Amount/Amount";
import Secure from "../components/Secure/Secure";
import Audit from "../components/Audit/Audit";


const Banner = () => {
  return (
    <div>
      {/* <Navbar /> */}
        <main>
          <HomePage />
          <Amount />
          <Secure />
          <Featured />
          <Ecosystem />
          <Audit />
        </main>
    </div>
  )
}

export default Banner