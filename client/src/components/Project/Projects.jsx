import React from "react";
import { useQuery } from "@apollo/client";

import Loading from "../Loading";
import { GET_PROJECTS } from "../../queries/projectQueries";
import AddProject from "./AddProject";
import EditProject from "./EditProject";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Loading />;
  if (error) return console.log(error);

  return (
    <>
      {!loading && !error && (
        <div className="mx-16 my-8 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              <div className="flex">
                <div>
                  <h1>Projetos</h1>
                  <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                    Confira abaixo a tabela de projetos, contendo informações
                    sobre o cliente responsavel e o status do projeto.
                  </p>
                </div>

                <div className="p-5 ">
                  <AddProject />
                </div>
              </div>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Projeto
                </th>
                <th scope="col" className="px-6 py-3">
                  Cliente
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Opções
                </th>
              </tr>
            </thead>
            {data.projects.map((project) => (
              <tbody className="w-full  ">
                <tr className="bg-white border-b dark:bg-gray-800 hover:bg-gray-100 dark:border-gray-700  hover:w-full dark:hover:bg-gray-600">
                  <td className="px-6 py-4 font-bold text-base text-slate-700">
                    {project.name}
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">
                        {project.client.name}
                      </div>
                      <div className="font-normal text-gray-500">
                        {project.client.email}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div
                        className={`h-2.5 w-2.5 rounded-full  mr-2 
                        ${
                          project.status === "Não Iniciado" ? "bg-red-500" : ""
                        } 
                        ${
                          project.status === "Em Progresso"
                            ? "bg-orange-500"
                            : ""
                        }
                        ${
                          project.status === "Completado" ? "bg-green-500" : ""
                        }`}
                      ></div>
                      {project.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 flex">
                    <a
                      href={`/projetos/${project.id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-1  "
                    >
                      Ver
                    </a>
                    |
                    <EditProject key={project.id} project={project} />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </>
  );
};

export default Projects;
