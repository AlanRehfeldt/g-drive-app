import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom'
import { api } from "../../services/api";

import { Container } from "./styles"
import { Table } from "../../components/Table"
import { Header } from "../../components/Header";

import { IFolderFile } from "../../@types/shared/IFolderFile";
import { IData } from "../../@types/shared/IData";

export function Shared() {
  const [ data, setData ] = useState<IData>();
  const [ searchParams ] = useSearchParams();
  const [ path, setPath ] = useState<string>("home");
  const [ count, setCount ] = useState<number>(0)

  const navigate = useNavigate();
  const location = useLocation();

  function handleClick(file: IFolderFile) {
    navigate(`${location.pathname}?path=${file.path}-${file.name}`)
    console.log(file.path)
    console.log(file.name)
    setCount((prevState) => prevState + 1)
    const queryPath = searchParams.get("path")
    searchParams.set("queryPath", queryPath as string)
    setPath(() => queryPath as string)
  }

  function handleReturn() {
      const queryParam: string | null = searchParams.get("path");
      if (queryParam) {
        const query: string[] = queryParam.split('-');
        query.pop();
        const newQueryParam: string = query.join('-'); 

        navigate(`${location.pathname}?path=${newQueryParam}`)

        setCount((prevState) => prevState + 1)
        searchParams.set("queryPath", newQueryParam)
        setPath(() => newQueryParam)
      }
  }

  const fetchData = useCallback(async () => {
    const response = await api.get(`/folders/shared?path=${path == "home" ? "home" : searchParams.get("path")}`);
    console.log(response)
    console.log(searchParams.get("path"))
    setData(response.data);

  }, [searchParams, path, count]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

    return (
        <Container>
            <Header 
              title={ "Shared" } 
              handleReturn={ handleReturn }
            />
            <Table dataReturn={data?.dataReturn || []} handleEnterFolder={handleClick} />
        </Container>
    )
}