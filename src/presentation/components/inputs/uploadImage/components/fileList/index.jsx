import { CircularProgressbar } from 'react-circular-progressbar'
// import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import './styles.css';

function FileList({ files, onDelete }) {
    return (
        <ul className='container-ul'>
            {files.map((uploadedFile) => (
                <li className='container-li' key={uploadedFile[0].id}>
                    <div className='fileInfo'>
                        <div className='preview' src={uploadedFile[0].preview} />
                        <div className='fileInfo-div'>
                            <strong>{uploadedFile[0].name}</strong>
                            <span className='fileInfo-span'>
                                {uploadedFile[0].readableSize}
                                {/* {!!uploadedFile[0].id && (
                                    <button className="fileInfo-button" onClick={() => onDelete(uploadedFile[0].id)}>
                                        Excluir
                                    </button>
                                )} */}
                            </span>
                        </div>
                    </div>

                    <div>
                        {!!uploadedFile[0].id && (
                            <button className="fileInfo-button" onClick={() => onDelete(uploadedFile[0].id)}>
                                <icon className="fas fa-trash" />
                            </button>
                        )}
                        {/* {!uploadedFile[0].uploaded && !uploadedFile[0].error && (
                            <CircularProgressbar
                                styles={{
                                    root: { width: 24 },
                                    path: { stroke: '#0e2774' },
                                }}
                                strokeWidth={10}
                                percentage={uploadedFile[0].progress}
                            />
                        )} */}

                        {uploadedFile[0].url && (
                            <a
                                href={uploadedFile[0].url}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <icon className='fas fa-user' />
                                {/* <MdLink style={{ marginRight: 8 }} size={24} color='#222' /> */}
                            </a>
                        )}

                        {uploadedFile[0].uploaded && (
                            <icon className='fas fa-user' />
                            // <MdCheckCircle size={24} color='#78e5d5' />
                        )}
                        {uploadedFile[0].error &&
                            <icon className='fas fa-user' />
                            // <MdError size={24} color='#e57878' />
                        }
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default FileList;