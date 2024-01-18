import { useState } from "react";

import { Container, TableHeader, TableData } from "./styles";

import { ButtonIcon } from "../ButtonIcon";
import { ModalGrantPermission } from "../ModalGrantPermission";
import { Modal } from "../Modal"

import { useAuth } from "../../hooks/auth"


import folder from "../../assets/folder.svg"
import sharedfolder from "../../assets/sharedfolder.svg"
import fileIcon from "../../assets/file.svg"
import people from "../../assets/people.svg"

export interface IFolderFile {
    id: string;
    name: string;
    path: string;
    extension?: string;
    size?: number;
    user_id: string;
    created_at: string;
    updated_at: string;
}

export interface IData {
    dataReturn: IFolderFile[]
    handleEnterFolder: (file: IFolderFile) => void;
}

export function Table({ dataReturn, handleEnterFolder }: IData) {
  const [showModal, setShowModal] = useState(false);
  const [fileSelected, setFileSelected] = useState<IFolderFile | undefined>(undefined);

  const { user } = useAuth()

  const handleShowModal = (
    e: React.MouseEvent<HTMLElement>,
    file: IFolderFile
  ) => {
    setShowModal(true);
    setFileSelected(file);
    e.stopPropagation();
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <thead>
        <tr>
          <TableHeader className="biggerColumn">Name</TableHeader>
          <TableHeader className="smallColumns">Owner</TableHeader>
          <TableHeader className="smallColumns">Last Modified</TableHeader>
          <TableHeader className="smallColumns">File Size</TableHeader>
          <TableHeader className="smallColumns">Share</TableHeader>
        </tr>
      </thead>
      <tbody>
        {dataReturn.map((file: IFolderFile, index: number) => (
          <tr
            key={index}
            onClick={() => {
              handleEnterFolder(file);
            }}
          >
            <TableData className="biggerColumn" data-value={file}>
              <img 
                src={file.size ? fileIcon : (file.user_id === user.id ? folder : sharedfolder)}  
                alt="" 
              />
              {file.name}
            </TableData>
            <TableData className="smallColumns">{ file.user_id === user.id ? "me" : "shared" }</TableData>
            <TableData className="smallColumns">{ file.updated_at }</TableData>
            <TableData className="smallColumns">
              {file.size ? file.size : ""}
            </TableData>
            <TableData className="smallColumns">
              <ButtonIcon
                icon={people}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  handleShowModal(e, file);
                }}
              />
            </TableData>
          </tr>
        ))}
      </tbody>
      <Modal showModal={showModal} handleClose={handleCloseModal}>
        <ModalGrantPermission file={fileSelected as IFolderFile} />
      </Modal>
    </Container>
  );
}
