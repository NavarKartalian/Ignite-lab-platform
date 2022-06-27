import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";
import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from "../../graphql/generated";
import { Footer } from "../Footer";
import { LinkCard } from "../LinkCard";

interface VideoProps {
  slug: string;
}

export function Video({ slug }: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: slug
    },
    fetchPolicy: 'no-cache'
  });

  if(!data || !data.lesson) {
    return (
      <div className="flex-1">
        
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data?.lesson.videoId!} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto mb-20">
        <div className="flex items-start gap-16 flex-col lg:flex-row">
          <div className="flex-1">
            <h1 className="text-lg lg:text-2xl font-bold">
              {data.lesson.title}
            </h1>

            <p className="mt-4 text-gray-200 leading-relaxed text-sm lg:text-base">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img 
                  src={data.lesson.teacher.avatarURL} 
                  alt="Teacher Profile pic" 
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block mb-2 lg:mb-0">{data.lesson.teacher.name}</strong>
                  <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <a href="#" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center 
              hover:bg-green-700 transition-colors">
              <DiscordLogo size={24} />
              Comunidade no Discord
            </a>
            <a href="#" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase 
              gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="lg:gap-8 mt-20 lg:grid lg:grid-cols-2 space-y-4 lg:space-y-0">
          <LinkCard 
            icon={<FileArrowDown size={40} />} 
            href='#' 
            title="Material complementar" 
            description="Acesse o material complementar para acelerar o seu desenvolvimento"
          />

          <LinkCard 
            icon={<Image size={40} />} 
            href='#' 
            title="Wallpapers exclusivos" 
            description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}