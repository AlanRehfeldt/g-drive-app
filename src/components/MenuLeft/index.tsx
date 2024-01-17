import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import { useAuth } from "../../hooks/auth";

import { Container, MenuContent, StorageData } from "./styles";
import { AddButton } from "../AddButton";
import { SubMenu } from "../SubMenu"
import { ModalForm } from "../ModalForm";
import { Modal } from "../Modal"
import { AddButtonPopup } from "../AddButtonPopup";

import priority from "../../assets/priority.svg"
import mydrive from "../../assets/mydrive.svg"
import people from "../../assets/people.svg"
import watch from "../../assets/watch.svg"
import star from "../../assets/star.svg"
import trash from "../../assets/trash.svg"
import cloud from "../../assets/cloud.svg"

interface MenuLeftProps {}

export function MenuLeft(): MenuLeftProps {
    const [showModal, setShowModal] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const buttonRef = useRef<HTMLDivElement | null>(null);

    const navigate = useNavigate()
    const { SignOut } = useAuth()
    
    function handleShowModal() {
        setShowModal(true);
    }
    
    function handleCloseModal() {
        setShowModal(false);
        setShowPopup(false)
    }
    
    function handleSaveData() {
        handleCloseModal();
        // Enviar dados para o servidor
    }

    function handleAddButtonClick() {
        setShowPopup(!showPopup);
        document.addEventListener("click", handleOutsideClick);
      }
    
    function handleOptionClick(option: string) {
        console.log(`Option clicked: ${option}`);

        if (["New Folder", "File Upload", "Folder Upload"].includes(option)) {
            handleShowModal();
        }

        setShowPopup(false);
        document.removeEventListener("click", handleOutsideClick);
    }

    function handleOutsideClick(event: MouseEvent) {
        if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
            setShowPopup(false);
            document.removeEventListener("click", handleOutsideClick);
        }
    }

    function handleSignOut() {
        navigate("/")
        SignOut()
    }
    
      useEffect(() => {
        return () => {
          document.removeEventListener("click", handleOutsideClick);
        };
      }, [handleOutsideClick]);

    return (
        <Container>
            <AddButton onClick={ handleAddButtonClick } />
            <Modal showModal={ showModal } handleClose={ handleCloseModal }>
                <ModalForm saveData={ handleSaveData } />
            </Modal>
            <AddButtonPopup isopen={showPopup} onOptionClick={handleOptionClick}/>
            <MenuContent>
                <SubMenu to="/" logo={ priority } label="All" />
                <SubMenu to="mydrive" logo={ mydrive } label="My Drive" selected />
                <SubMenu to="shared" logo={ people } label="Shared with me" />
                <SubMenu to="#" logo={ watch } label="Recents" />
                <SubMenu to="#" logo={ star } label="Stared" />
                <SubMenu to="/" logo={ trash } label="Trash" onClick={ handleSignOut } />
            </MenuContent>
            <StorageData>
                <SubMenu to="#" logo={ cloud } label="Storage" />
                <div className="storageData">
                    <div className="progress_container">
                        <div className="progress_bar"></div>
                    </div>
                    <span>23.19 GB of 30 GB used </span>
                    <button>Manage storage</button>
                </div>
            </StorageData>
        </Container>
    )
}