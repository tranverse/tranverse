import Header from "@/components/Header";
import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/data/project";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
type Props = {
  params: {
    locale: string;
    name: string;
  };
};

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, name } = await params;

  const project = projects.find((p) => p.id === name);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <ProjectDetail project={project} />
      <Footer />
    </>
  );
}
