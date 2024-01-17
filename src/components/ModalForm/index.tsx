import React, { useState } from 'react';

import { Container } from './styles';
import { Input } from '../Input';
import { Button } from '../Button';

interface FormProps {
    saveData: (formData: FormDataType) => void;
  }
  
  interface FormDataType {
    type: string;
    name: string;
    path: string
    extension?: string;
    size?: string;
  }
  
  export function ModalForm({ saveData }: FormProps) {
    const [formData, setFormData] = useState<FormDataType>({
      type: 'folder',
      name: '',
      path: '',
      extension: '',
      size: '',
    });
  
    const handleTypeChange = (type: string) => {
      setFormData({
        ...formData,
        type,
      });
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      saveData(formData);
    };

return (
    <Container>
        <label htmlFor="typeSelect">{`Create new ${formData.type}`}</label>
        <div>
            <label>
            <input
                type="checkbox"
                checked={formData.type === 'folder'}
                onChange={() => handleTypeChange('folder')}
            />
            <span>
                Folder
            </span>
            </label>

            <label>
            <input
                type="checkbox"
                checked={formData.type === 'file'}
                onChange={() => handleTypeChange('file')}
            />
            <span>
                File
            </span>
            </label>
      </div>

        <label htmlFor="nameInput">Name:</label>
        <Input 
            type="text"
            id="nameInput"
            name="name"
            value={formData.name}
            onChange={handleChange}
        />

        {formData.type === 'file' && (
            <>
                <label htmlFor="extensionInput">File extension:</label>
                <Input 
                    type="text"
                    id="extensionInput"
                    name="extension"
                    value={formData.extension}
                    onChange={handleChange}
                />

                <label htmlFor="sizeInput">Size:</label>
                <Input 
                    type="text"
                    id="sizeInput"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                />
            </>
        )}

        <Button 
        title='Save' 
        type="button" 
        onClick={handleSubmit}
        />
    </Container>
);
}
