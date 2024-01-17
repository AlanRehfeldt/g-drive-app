import { Container } from "./styles"

import { Table } from "../../components/Table"
import { Header } from "../../components/Header";

const data = [
    {
      name: 'Alan',
      owner: 'Alan',
      lastModified: 'Jan 25, 2023',
      fileSize: 200,
    },
    {
        name: 'Alan',
        owner: 'Alan',
        lastModified: 'Jan 25, 2023',
        fileSize: 200,
      },
      {
        name: 'Alan',
        owner: 'Alan',
        lastModified: 'Jan 25, 2023',
        fileSize: 200,
      },
      {
        name: 'Alan',
        owner: 'Alan',
        lastModified: 'Jan 25, 2023',
        fileSize: 200,
      },
  ];

export function Shared() {
    return (
        <Container>
            <Header title="Shared with me" />
            <Table files={data} />
        </Container>
    )
}