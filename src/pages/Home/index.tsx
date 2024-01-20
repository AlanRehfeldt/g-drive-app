import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom'
import { api } from "../../services/api";

import { Container } from "./styles"
import { Table } from "../../components/Table"
import { Header } from "../../components/Header";

import { IFolderFile } from "../../@types/shared/IFolderFile";
import { IData } from "../../@types/shared/IData";

export function Home() {
  const [ data, setData ] = useState<IData>();
  const [ searchParams ] = useSearchParams();
  const [ path, setPath ] = useState<string>("home");
  const [ folderList, setFolderList ] = useState<string[]>(["Home"]);

  const navigate = useNavigate();
  const location = useLocation();

  function handleClick(file: IFolderFile) {
    navigate(`${location.pathname}?path=${file.path}-${file.name}`);
    setFolderList((prevState) => {
      const newFolderList = [...prevState];
      return newFolderList  
    });
    const queryPath = searchParams.get("path");
    searchParams.set("queryPath", queryPath as string);
    setPath(() => queryPath as string);
  }

  function handleReturn() {
    const queryParam = searchParams.get("path");
    if (queryParam) {
      const query: string[] = queryParam.split("-");
      query.pop();
      const newQueryParam: string = query.join("-");

      navigate(`${location.pathname}?path=${newQueryParam}`);

      setFolderList((prevState) => {
        const newFolderList = [...prevState];
        console.log(searchParams.get("path"));
        if(prevState.length > 1 || searchParams.get("path") === "home") {
          newFolderList.pop();
        }
        return newFolderList;
      });
      searchParams.set("queryPath", newQueryParam);
      setPath(() => newQueryParam);
    }
  }

  const fetchData = useCallback(async () => {
    const response = await api.get(
      `/folders?path=${path == "home" ? "home" : searchParams.get("path")}`
    );
    setData(response.data);
  }, [searchParams, path, folderList]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      <Header
        title={folderList.join(" -> ")}
        handleReturn={handleReturn}
      />
      <Table dataReturn={data?.dataReturn || []} handleEnterFolder={handleClick} />
    </Container>
  );
}
