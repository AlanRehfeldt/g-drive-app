import { useState, useEffect, useCallback } from "react";
import { api } from "../../services/api";

import { Container } from "./styles"
import { Table } from "../../components/Table"
import { Header } from "../../components/Header";

import { IFolderFile } from "../../@types/shared/IFolderFile";
import { IData } from "../../@types/shared/IData";

export function Home() {
  const [ data, setData ] = useState<IData>();
  const [ folder, setFolder ] = useState<string>("");
  const [ folderList, setFolderList ] = useState<IFolderFile[]>([]);

  function handleClick(file: IFolderFile) {
    setFolder(file.id)
    setFolderList(prevState => [...prevState, file])
  }

  function handleReturn() {
    const newFolderList = [...folderList]
    newFolderList.pop()
    if (newFolderList) setFolderList(newFolderList)

    setFolder(newFolderList[newFolderList.length - 1]?.id || "")
  }

  const fetchData = useCallback(async () => {
    const response = await api.get(
      `/folders${folder ? `/${folder}` : ""}`
    );
    setData(response.data);
  }, [folder]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      <Header handleReturn={handleReturn} >
        <span>Home</span>
        { folderList.length === 0 ? "" :
          folderList.map(folder => 
            <span key={ folder.id }>{ folder.name }</span>)
        }
      </Header>
      <Table dataReturn={data?.dataReturn || []} handleEnterFolder={handleClick} />
    </Container>
  );
}
