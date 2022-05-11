import Dropzone from 'react-dropzone';
import './styles.css';

function Upload({ onUpload }) {
    const renderDragMessage = (isDragActive, isDragReject) => {
        // console.log(isDragReject)
        if (!isDragActive) {
            return <p className='uploadMessage'>Arraste arquivos aqui...</p>;
        }

        if (isDragReject) {
            return <p className='uploadMessage error' type='error'>Arquivo não suportado</p>;
        }

        return <p className='uploadMessage success' type='success'>Solte os arquivos aqui</p>;
    };

    return (
        <Dropzone accept='image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document' onDropAccepted={onUpload} maxFiles={5}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <div className='dropContainer'
                    {...getRootProps()}
                    isDragActive={isDragActive}
                    isDragReject={isDragReject}
                >
                    <input {...getInputProps()} />
                    {renderDragMessage(isDragActive, isDragReject)}
                </div>
            )}
        </Dropzone>
    );
}

export default Upload;