
import React, { useState } from 'react';
import Select from "react-select";
import Switch from "react-switch";
import { LuPlusCircle } from "react-icons/lu";
import DatePicker from 'react-datepicker'; // Import date picker
import 'react-datepicker/dist/react-datepicker.css'; // Import date picker stylesheet
import { SlQuestion } from "react-icons/sl";
import { TfiWrite } from "react-icons/tfi";

import "./jobtemplate.css"
import TextEditor from './TextEditor';
const JobTemplate = () => {
  const [startDate, setStartDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [absoluteDate, setAbsoluteDates] = useState(false)
  const handleAbsolutesDates = (checked) => {
    setAbsoluteDates(checked)
  }
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleDueDateChange = (date) => {
    setDueDate(date);
  };

  return (
    <>
      <div className='job-template-container col-10'>
        <div className='job-template-header' style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
          <h3>Create Job Template</h3>
          <button className=' col-1' style={{ border: 'none', backgroundColor: '#e4e9f7' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'blue', fontSize: '15px', cursor: 'pointer', }}>
              <LuPlusCircle />
              <span>Add </span>
            </div>
          </button>

        </div>
        <hr style={{ margin: '0 10px 0 10px' }} />
        <div className='job-template-form-area'>
          <div className='job-template-create-form col-6' >
            <div>
              <label style={{ fontSize: '14px' }}>Template name</label>
              <input type='text' className='job-input' placeholder='Template name' />
            </div>
            <div>
              <label style={{ fontSize: '14px' }}>Job name</label>
              <input type='text' className='job-input' placeholder='Job name' />
            </div>
            <div style={{margin:'10px 0 30px 0'}}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'blue', fontSize: '15px', cursor: 'pointer', }}>
                <LuPlusCircle />
                <span>Add shortcode </span>
              </div>
            </div>
            <div className='job-template-select-container'>
              <div className='job-template-label-container'>
                <label>Assignees</label>
              </div>
              <Select className='job-template-select-dropdown' />
            </div>
            <div className='job-template-select-container'>
              <div className='job-template-label-container'>
                <label>Priority</label>
              </div>
              <Select className='job-template-select-dropdown' />
            </div>
            <div style={{ marginTop: '20px', }}>
              <TextEditor />
            </div>
            <div className='job-template-dates-switches col-12' style={{ marginTop: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

              <h3>Start and Due Date</h3>
              <div className="job-template-switch-container" style={{ marginTop: '10px' }}>
                <Switch
                  onChange={handleAbsolutesDates}
                  checked={absoluteDate}
                  onColor="#3A91F5"
                  onHandleColor="#FFF"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  height={25}
                  width={45}
                  className="job-template-react-switch"
                />
                <span className="job-template-switch-label" style={{ cursor: "pointer" }}>Absolutes Dates</span>
              </div>

            </div>
            {absoluteDate && (


              <div className='col-12 job-template-absoluteDate ' style={{ display: 'flex', gap: '5px', marginTop: '30px' }}>
                <div className='col-6' >
                  <label style={{ fontSize: '14px' }}>Start Date</label>
                  <div>
                    <DatePicker
                      selected={startDate}
                      onChange={handleStartDateChange}
                      className="date-picker-input "
                      placeholderText='Start Date'
                    />
                  </div>

                </div>
                <div className='col-6'>
                  <label style={{ fontSize: '14px' }}>Due Date</label>
                  <div>
                    <DatePicker selected={dueDate} onChange={handleDueDateChange} className="date-picker-input " placeholderText='Due Date' />
                  </div>

                </div>
              </div>


            )}
            {!absoluteDate && (
              <div className='select-dates-container' style={{ marginTop: '25%' }}>
                <div className='col-12' style={{ display: 'flex', alignItems: 'center', gap: '5px', }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className='col-2'> <p>Starts In </p>
                    <SlQuestion style={{ color: 'blue' }} />
                  </div>
                  <div className='col-5'>
                    <input type='text' className='date-input' />
                  </div>
                  <div className='col-5'>
                    <Select className='job-template-select-dropdown ' />
                  </div>

                </div>
                <div className='col-12' style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className='col-2'> <p>Starts In </p>
                    <SlQuestion style={{ color: 'blue' }} />
                  </div>
                  <div className='col-5'>
                    <input type='text' className='date-input' />
                  </div>
                  <div className='col-5'>
                    <Select className='job-template-select-dropdown ' />
                  </div>

                </div>
              </div>
            )}
          </div>

          <div className="vl"></div>

          <div className='job-template-comments-wiki col-6' style={{ textAlign: 'center', margin: '20% 0 0 0' }} >
            <TfiWrite style={{ fontSize: '100px', color: 'gray' }} />
            <p style={{ margin: '30px 0 0 30px' }}>There are no comments or wiki pages yet</p>
          </div>


        </div>

        <hr style={{ margin: '0 10px 20px 10px' }} />

        <div className='bottom-buttons'>
          <div className='bottom-buttons-group col-6' style={{ display: 'flex', gap: '10px', marginLeft: '10px', marginBottom: '20px' }}>

            <button type='submit' style={{ padding: '10px', borderRadius: '10px', cursor: 'pointer', background: 'blue', color: '#fff', border: 'none', fontSize: '15px' }} className='col-2'>Save & exit</button>
            <button type='reset' style={{ padding: '10px', borderRadius: '10px', cursor: 'pointer', background: '#fff', color: 'blue', border: '1px solid blue', fontSize: '15px' }} className='col-2'>Save</button>
            <button type='reset' style={{ padding: '10px', borderRadius: '10px', cursor: 'pointer', background: '#fff', color: 'blue', border: '1px solid blue', fontSize: '15px' }} className='col-2'>Cancle</button>
          </div>
        </div>
      </div>


    </>
  );
}

export default JobTemplate;
