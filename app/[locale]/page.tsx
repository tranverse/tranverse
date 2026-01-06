import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
export default function Home() {
  return (
    <div className=" ">
      <Header />
      <Banner />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}
