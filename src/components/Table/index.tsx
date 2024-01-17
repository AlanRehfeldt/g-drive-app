import { useState } from "react";

import { Container, TableHeader, TableData } from "./styles";

import { ButtonIcon } from "../ButtonIcon";
import { ModalForm } from "../ModalForm";
import { Modal } from "../Modal"
import { useNavigate, useLocation } from 'react-router-dom'


import folder from "../../assets/folder.svg"
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
}

export function Table({ dataReturn }: IData) {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleShowModal = (e: React.MouseEvent<HTMLElement>) => {
        setShowModal(true);
        e.stopPropagation();
    };
    
    const handleCloseModal = () => {
        setShowModal(false);
    };
    
    const handleSaveData = (formData: FormData) => {
        console.log(formData);
        handleCloseModal();
        // Enviar dados para o servidor
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
                <tr key={index} onClick={() => navigate(`${location.pathname}/path=${file.path}`)}>
                    <TableData className="biggerColumn">
                        <img src={ folder } alt="" />
                        {file.name}
                    </TableData>
                    <TableData className="smallColumns">{file.name}</TableData>
                    <TableData className="smallColumns">{file.updated_at}</TableData>
                    <TableData className="smallColumns">{file.path}</TableData>
                    <TableData className="smallColumns">
                        <ButtonIcon icon={ people } onClick={ handleShowModal } />
                    </TableData>
                </tr>
                ))}
            </tbody>
            <Modal showModal={showModal} handleClose={ handleCloseModal }>
                <ModalForm saveData={handleSaveData} />
            </Modal>
        </Container>
    )
}