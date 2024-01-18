import { useEffect, useState } from 'react';

import { api } from "../../services/api";

import { Container } from './styles';
import { Button } from '../Button';
import { userProps } from '../../hooks/auth';
import { IFolderFile } from '../Table';
  
interface IModalGrantPermission {
  file: IFolderFile
}

export function ModalGrantPermission({ file }: IModalGrantPermission) {
  const [ data, setData ] = useState<userProps[]>([])
  const [ selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [ selectedPermission, setSelectedPermission ] = useState<number>(1)
  const [ permissionsCreated, setPermissionsCreated ] = useState<boolean>(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const responseList: number[] = []
      if(file.size) {
        selectedUsers.map(async (user_id) => {
          const response = await api.post("/filesPermission", { file_id: file.id, permission_id: selectedPermission, user_id: user_id })
          responseList.push(response.status)
          console.log(response)
      })
      } else {
        selectedUsers.map(async (user_id) => {
          const response = await api.post("/foldersPermission", { folder_id: file.id, permission_id: selectedPermission, user_id: user_id })
          responseList.push(response.status)
          console.log(response)
      })
    }

    responseList.forEach(status => {
      if(status !== 201) {
        alert("Could not share with success")
      } else {
        setPermissionsCreated(true)
      }
    });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch(e: any) {
        if(e.response) {
            alert(e.response.data.message)
        } else {
            alert("Não foi possível criar pasta")
        }
    }
  }

  const handleChange = (userId: string) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers((prevSelectedUsers) => prevSelectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers((prevSelectedUsers) => [...prevSelectedUsers, userId]);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/users");
      setData(response.data);
    }
    fetchData()
  }, []);

  return (
    <Container>
      <label>{ permissionsCreated ? "File/Folder Shared!" : "Share this file/folder with"}</label>
      <div className='permissionSelection'>
        <label>Type of permission</label>
        <select
          value={ selectedPermission }
          onChange={(e) => setSelectedPermission(e.target.value)}
        >
          <option value="1">Read</option>
          <option value="2">Write</option>
          <option value="3">Edit</option>
          <option value="4">Grant Permission</option>
        </select>
      </div>
      {
        data.map((user: userProps) => (
          <label htmlFor="">
            <input type="checkbox" 
              onChange={() => handleChange(user.id)}
            />
            <span>{user.name}</span>
          </label>
        ))
      }

      <Button title="Save" type="button" onClick={handleSubmit} />
    </Container>
  );
}
