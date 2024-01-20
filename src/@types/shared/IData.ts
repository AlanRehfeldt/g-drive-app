import { IFolderFile } from "./IFolderFile";

export interface IData {
    dataReturn: IFolderFile[]
    handleEnterFolder: (file: IFolderFile) => void;
}