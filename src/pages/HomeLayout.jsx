import { Outlet } from "react-router-dom";
import { Header } from "../components";
import Navbar from "../components/Navbar";

export default function HomeLayout() {
  return (
    <>
    <Header/>
    <Navbar/>
    <section className="align-element py-20">
      <Outlet/>
    </section>
    </>
  )
}
