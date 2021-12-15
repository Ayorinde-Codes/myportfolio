import React, { useEffect, useState } from 'react'
import DataService from "../dashboard/services/Service";

export default function Contact() {

const [subject, setSubject] = useState('');
const [fullname, setFullname] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [status, SetStatus] = useState('');
const [buttonText, setButtonText] = useState('SEND MESSAGE');
const [error, setError] = useState('');

const formSubmit =(e) =>{
    e.preventDefault();

    var data = {
        fullname,
        subject,
        email,
        message,
    }

    setButtonText('Sending...')

    DataService.contactme(data)
    .then(res => {
      if(res.status !== 200) {

            setButtonText('Failed to send');
            SetStatus(false)
            setError('fail')

            setTimeout(() => {
                resetForm()
            }, 6000)
        } else {

            setButtonText('Sent');
            SetStatus(true)
            setError('success')

            setTimeout(() => {
                resetForm();
            }, 6000)
        }
    }).catch( (err) => {

        setButtonText('Failed to send');
        SetStatus(false)
        setError('fail')
    })
}

  const resetForm = () => {
    setButtonText('SEND MESSAGE');
    SetStatus(false)
    setError('')
    setFullname('')
    setMessage('')
    setEmail('')
    setSubject('')
  }

    return (
        <div>
            <div id="contact" className="section contact pad bg-1">
                <div className="container">
                    <div className="row">
                        <div className="clearfix"></div>
                        <div className="spacer-50"></div>
                        <div className="col-sm-12 col-md-8 col-md-offset-2">
                            <div className="section-heading text-center font__color-2">MY <span className="font__color-1">CONTACT </span></div>

                            <div className="spacer-30"></div>
                            
                            <form  className="form-contact text-center" onSubmit={formSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={fullname} onChange={e => {setFullname(e.target.value);}} id="p_name" placeholder="Full Name..." required />
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" value={email} onChange={e => {setEmail(e.target.value);}} id="p_email" placeholder="Enter Address..." required />
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={subject} onChange={e => {setSubject(e.target.value);}} id="subject" placeholder="Subject..." />
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <textarea id="p_message" className="form-control" value={message} onChange={e => {setMessage(e.target.value);}} rows="6" placeholder="Write message"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <div id="success"></div>
                                    <button type="submit" className="btn btn-primary"> {buttonText}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
