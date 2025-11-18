import React from 'react';
import { FaReact, FaPython, FaJava, FaGoogle, FaNodeJs } from 'react-icons/fa';
import { 
  SiMongodb,
  SiFlutter,
  SiJavascript,
  SiMysql,
  SiFirebase,
  SiCplusplus,
  SiSqlite,
  SiAngular,
  SiDotnet
} from 'react-icons/si';

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24">
      
      <h1 className="text-4xl md:text-4xl text-white font-bold mb-10">Skills</h1>

      <div className="flex flex-col md:flex-row md:justify-between gap-10">

        {/* LEFT SIDE — Frontend & Backend */}
        <div className="flex flex-col bg-[#0f1322] p-6 rounded-xl w-full md:w-1/2 border border-white/10">
          <h2 className="text-white text-2xl font-semibold mb-6">Frontend & Backend</h2>

          <div className="flex flex-wrap gap-6">

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaReact color="#61DAFB" size={60} />
            </span>

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiAngular color="#DD0031" size={60} />
            </span>

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiJavascript color="#F7DF1E" size={60} />
            </span>

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiFlutter color="#02569B" size={60} />
            </span>

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaNodeJs color="#339933" size={60} />
            </span>

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaPython color="#3776AB" size={60} />
            </span>

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaJava color="#007396" size={60} />
            </span>

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiDotnet color="#512BD4" size={60} />
            </span>

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiCplusplus color="#00599C" size={60} />
            </span>

          </div>
        </div>

        {/* RIGHT SIDE — Database Skills */}
        <div className="flex flex-col bg-[#0f1322] p-6 rounded-xl w-full md:w-1/2 border border-white/10">
          <h2 className="text-white text-2xl font-semibold mb-6">Database & Cloud</h2>

          <div className="flex flex-wrap gap-6">

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiMysql color="#4479A1" size={60} />
            </span>

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiMongodb color="#47A248" size={60} />
            </span>

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiFirebase color="#FFCA28" size={60} />
            </span>

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiSqlite color="#003B57" size={60} />
            </span>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
