import { useMutation } from "@apollo/client";
import React from "react";

import { GET_CLIENTS, DELETE_CLIENT } from "../../queries/clientQueries";

import { GET_PROJECTS } from "../../queries/projectQueries";

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });

  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {client.name}
        </th>

        <td className="px-6 py-4">{client.email}</td>
        <td className="px-6 py-4">{client.phone}</td>
        <td className="px-6 py-4 text-right">
          <button
            onClick={deleteClient}
            className="font-medium text-red-600 dark:text-red-500 hover:underline"
          >
            Deletar
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ClientRow;
