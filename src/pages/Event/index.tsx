import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Video } from "../../components/Video";

export function Event() {
  const { slug } = useParams<{slug: string}>();
  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <main className="flex-1 lg:flex"> 
        {slug ? 
          <Video slug={slug} /> 
            : 
          <div className="flex-1 justify-center flex items-center">
            <h1 className="text-2xl font-bold uppercase">
              Selecione a aula ao lado
            </h1>
          </div>
        }
        <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </main>  
    </div>
  );
}