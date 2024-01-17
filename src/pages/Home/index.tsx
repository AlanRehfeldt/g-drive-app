import { useState, useEffect, useCallback } from "react";
import { Container } from "./styles"

import { Table, IData } from "../../components/Table"
import { Header } from "../../components/Header";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

// const mockData = [
//   {
//     name: 'Alan',
//     owner: 'Alan',
//     lastModified: 'Jan 25, 2023',
//     fileSize: 200,
//     path: 'folder',
//   },
//   {
//       name: 'Alan',
//       owner: 'Alan',
//       lastModified: 'Jan 25, 2023',
//       fileSize: 200,
//       path: 'folder',
//     },
//     {
//       name: 'Alan',
//       owner: 'Alan',
//       lastModified: 'Jan 25, 2023',
//       fileSize: 200,
//       path: 'folder',

//     },
//     {
//       name: 'Alan',
//       owner: 'Alan',
//       lastModified: 'Jan 25, 2023',
//       fileSize: 200,
//       path: 'folder',

//     },
// ]

export function Home() {
  const { path } = useParams();
  const [ data, setData ] = useState<IData>();

  const fetchData = useCallback(async () => {
    const response = await api.get(`/folders?path=${path == undefined ? "home" : "home-" + path }`);
    setData(response.data);

  }, [path]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

    return (
        <Container>
            <Header title="Home" />
            <Table dataReturn={data?.dataReturn || []} />
        </Container>
    )
}