import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";

import { api } from "../../services/api";

import { Container } from './styles';
import { Input } from '../Input';
import { Button } from '../Button';
  
export function ModalNewFile() {
  const [ name, setName ] = useState<string>();
  const [ extension, setExtension ] = useState<string>();
  const [ size, setSize ] = useState<number | undefined>(undefined);
  const [ searchParams ] = useSearchParams();
  const [ fileCreated, setFileCreated ] = useState<boolean>(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    let queryPath = searchParams.get("path")
    if(queryPath == null) {
      queryPath = "home"
    }
    console.log(queryPath)
    try {
      const response = await api.post("/files", { name, path: queryPath, extension, size })
      console.log(response)
      if(response.status == 201 ) {
        setFileCreated(true)
      }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch(e: any) {
      if(e.response) {
          alert(e.response.data.message)
      } else {
          alert("Could not create file")
      }
  }
  }

  function handleSizeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    const newSize = inputValue === '' ? undefined : parseInt(inputValue, 10);
    setSize(newSize);
  }

  return (
    <Container>
      <label htmlFor="typeSelect">{`${fileCreated ? "File Created" : "Create new file"}`}</label>
      <label htmlFor="nameInput">Name:</label>
      <Input
        type="text"
        value={ name }
        onChange={e => setName(e.target.value)}
      />
      <label htmlFor="nameInput">Extension:</label>
      <Input
        type="text"
        value={ extension }
        onChange={e => setExtension(e.target.value)}
      />
      <label htmlFor="nameInput">Size:</label>
      <Input
        type="number"
        value={size === undefined ? '' : size}
        onChange={handleSizeChange}
      />

      <Button title="Save" type="button" onClick={handleSubmit} />
    </Container>
  );
}
