import { Popup, PopupOption } from "./styles";

import close from "../../assets/close.svg"
import newfolder from "../../assets/newfolder.svg"
import uploadfile from "../../assets/uploadfile.svg"
import uploadfolder from "../../assets/uploadfolder.svg"
import gdocs from "../../assets/gdocs.svg"
import gsheets from "../../assets/gsheets.svg"
import gslides from "../../assets/gslides.svg"
import gforms from "../../assets/gforms.svg"

interface AddButtonPopupProps {
    isopen: boolean;
    onOptionClick: (option: string) => void;
  }
  
  export function AddButtonPopup({ isopen, onOptionClick }: AddButtonPopupProps) {
    const options = ["", 'New Folder', 'File Upload', 'Folder Upload', 'G-Docs', 'G-Sheets', 'G-Slides', 'G-Forms', 'More'];
    const icons = [close, newfolder, uploadfile, uploadfolder, gdocs, gsheets, gslides, gforms]

    const handleOptionClick = (option: string) => {
      onOptionClick(option);
    };
  
    return (
      <Popup isOpen={isopen} >
        {options.map((option, index) => (
          <PopupOption key={index} onClick={() => handleOptionClick(option)} >
            <img src={ icons[index] } alt="" />
            <span>{option}</span>
          </PopupOption>
        ))}
      </Popup>
    );
  }