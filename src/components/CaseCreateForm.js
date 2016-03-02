import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { Input } from 'react-bootstrap'
export const fields = ['firstName', 'lastName', 'email', 'sex', 'favoriteColor', 'employed', 'notes']

const submit = (values, dispatch) => {
  console.log(values)
}

class CaseCreateForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  render () {
    const {
      fields: {firstName, lastName, email, sex, favoriteColor, employed, notes},
      handleSubmit,
      resetForm,
      submitting
      } = this.props

    return (<form onSubmit={handleSubmit(submit)}>
        <div>
        <Input type='text' label='First name' placeholder='Enter a short description/summary for the case. Press enter to create the case.'
          {...firstName} />
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <input type='text' placeholder='Last Name' {...lastName}/>
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <input type='email' placeholder='Email' {...email}/>
          </div>
        </div>
        <div>
          <label>Sex</label>
          <div>
            <label>
              <input type='radio' {...sex} value='male' checked={sex.value === 'male'}/> Male
            </label>
            <label>
              <input type='radio' {...sex} value='female' checked={sex.value === 'female'}/> Female
            </label>
          </div>
        </div>
        <div>
          <label>Favorite Color</label>
          <div>
            <select

              {...favoriteColor}
              value={favoriteColor.value || ''}  // required syntax for reset form to work
                                                 // undefined will not change value to first empty option
                                                 // when resetting
              >
              <option></option>
              <option value='ff0000'>Red</option>
              <option value='00ff00'>Green</option>
              <option value='0000ff'>Blue</option>
            </select>
          </div>
        </div>
        <div>
          <label>
            <input type='checkbox' {...employed}/> Employed
          </label>
        </div>
        <div>
          <label>Notes</label>
          <div>
            <textarea
              {...notes}
              value={notes.value || ''} // required for reset form to work (only on textarea's)
                                        // see: https://github.com/facebook/react/issues/2533
            />
          </div>
        </div>
        <div>
          <button type='submit' disabled={submitting}>
            {submitting ? <i/> : <i/>} Submit
          </button>
          <button type='button' disabled={submitting} onClick={resetForm}>
            Clear Values
          </button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'simple',
  fields
})(CaseCreateForm)
