import { useState } from 'react'
import { uniqueId } from 'lodash'
import filesize from 'filesize'

import './styles.css'

import Upload from './components/upload'
import FileList from './components/fileList'

function UploadImage() {
    const [uploadedFiles, setUploadedFiles] = useState([])

    const handleUpload = (files) => {
        const uploadedItems = files.map((file) => ({
            file,
            id: uniqueId(),
            name: file.name,
            readableSize: filesize(file.size),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: false,
            error: false,
            url: null,
        }))

        setUploadedFiles((prevFiles) => [...prevFiles, uploadedItems])
    }

    const deleteFile = (fileId) => {
        var array = []
        for (let i = 0; i < uploadedFiles.length; i++) {
            if (uploadedFiles[i][0].id !== fileId) {
                array.push(uploadedFiles[i])
            }
        }
        setUploadedFiles(array)
    }

    return (
        <div className='up-container'>
            <div className='up-content'>
                <Upload onUpload={handleUpload} />
                {!!uploadedFiles.length && <FileList onDelete={deleteFile} files={uploadedFiles} />}
            </div>
        </div>
    )
}

export default UploadImage