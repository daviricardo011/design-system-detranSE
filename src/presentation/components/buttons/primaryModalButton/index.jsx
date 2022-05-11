import React from 'react'

export default function primaryModalButton(props) {
    return (
        <div className='col-md-2'>
            <div>
                <button className='btn btn-primary btn-block' data-toggle='modal' data-target={props.target}>{props.text}</button>
            </div>


            {/* MODAIS */}

            {/* MODAL DE CONFIRMAÇÃO */}
            <div className='modal fade' id='modal-default1'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h4 className='modal-title'>Atenção</h4>
                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                <span aria-hidden='true'>×</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <p>{props.descricao}</p>
                        </div>
                        <div className='modal-footer justify-content-between'>
                            <button type='button' className='btn btn-default' data-dismiss='modal'>Fechar</button>
                            <button type='button' className='btn btn-primary'>Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL DE DATAS */}
            <div className='modal fade' id='modal-default2'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h4 className='modal-title'>Informe as datas e uma justificativa</h4>
                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                <span aria-hidden='true'>×</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label>Data Início:</label>
                                        <div className='input-group date' id='reservationdate' data-target-input='nearest'>
                                            <input type='text' className='form-control datetimepicker-input' data-target='#reservationdate' />
                                            <div className='input-group-append' data-target='#reservationdate' data-toggle='datetimepicker'>
                                                <div className='input-group-text'><i className='fa fa-calendar' /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <label>Data Fim:</label>
                                        <div className='input-group date' id='reservationdate' data-target-input='nearest'>
                                            <input type='text' className='form-control datetimepicker-input' data-target='#reservationdate' />
                                            <div className='input-group-append' data-target='#reservationdate' data-toggle='datetimepicker'>
                                                <div className='input-group-text'><i className='fa fa-calendar' /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='form-group'>
                                            <label htmlFor='exampleInputEmail1' />
                                            <textarea className='form-control' rows={3} placeholder='Justifique ...' defaultValue={''} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='modal-footer justify-content-between'>
                            <button type='button' className='btn btn-default' data-dismiss='modal'>Fechar</button>
                            <button type='button' className='btn btn-primary'>Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
