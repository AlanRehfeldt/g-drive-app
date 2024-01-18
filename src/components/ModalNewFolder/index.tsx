import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";

import { api } from "../../services/api";

import { Container } from './styles';
import { Input } from '../Input';
import { Button } from '../Button';
  
export function ModalNewFolder() {
  const [ name, setName] = useState<string>();
  const [ searchParams ] = useSearchParams();
  const [ folderCreated, setFolderCreated ] = useState<boolean>(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    let queryPath = searchParams.get("path")
    if(queryPath == null) {
      queryPath = "home"
    }
    console.log(queryPath)
    try {
      const response = await api.post("/folders", { name, path: queryPath })
      console.log(response)
      if(response.status == 201 ) {
        setFolderCreated(true)
      }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch(e: any) {
      if(e.response) {
          alert(e.response.data.message)
      } else {
          alert("Could not create folder")
      }
  }
  }

  return (
    <Container>
      <label htmlFor="typeSelect">{`${folderCreated ? "Folder Created" : "Create new folder"}`}</label>
      <label htmlFor="nameInput">Name:</label>
      <Input
        type="text"
        value={ name }
        onChange={e => setName(e.target.value)}
      />

      <Button title="Save" type="button" onClick={handleSubmit} />
    </Container>
  );
}
