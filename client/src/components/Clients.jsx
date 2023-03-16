import React from "react";
import { useMutation, useQuery } from "@apollo/client";

import Loading from "./Loading";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "../queries/clientQueries";

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Loading />;
  if (error) return <>Error</>;

  return (
    <>
      {!loading && !error && (
        <div class="mx-16 my-8 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Clientes
              <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Confira abaixo a tabela de clientes, contendo informações sobre
                seu perfil e comportamento de compra.
              </p>
            </caption>
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Nome
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Telefone
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Editar</span>
                </th>
              </tr>
            </thead>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </table>
        </div>
      )}
    </>
  );
};

export default Clients;
