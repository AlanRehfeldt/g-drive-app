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

export function MyDrive() {
    return (
        <Container>
            <Header title="My Drive" />
            <Table files={data} />
        </Container>
    )
}