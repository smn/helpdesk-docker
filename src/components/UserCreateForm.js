import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { actions as accountActions } from '../redux/modules/account'
import { Input, ButtonInput } from 'react-bootstrap'
// import moment from 'moment'
export const fields = ['username', 'pin', 'name', 'timezone', 'organisation']

const mapStateToProps = (state) => ({
  users: state.account.users,
  users_all: state.account.users_all
})

class UserCreateForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  submit (values, dispatch) {
    // const userId = Date.now()
    // const newUser = {'id': userId, 'username': values.username, 'pin': values.pin, 'created_at': moment().toJSON(), 'name': values.name, 'timezone': values.timezone,
    //   'organisation': values.organisation, active: true}
  }

  render () {
    const {
      fields: {username, pin, name, timezone, organisation},
      handleSubmit,
      submitting
      } = this.props

    return (<form onSubmit={handleSubmit(this.submit)}>
        <Input type='text' label='Username' placeholder='Enter a username (use cellphone)'
          {...username} />

        <Input type='password' label='PIN' placeholder='Enter a PIN (user will reset on first access)'
          {...pin} />

        <Input type='text' label='Name' placeholder='Enter users full name'
          {...name} />

        <Input type='text' label='Timezone' placeholder='Timezone (e.g. Africa/Johannesburg)'
          {...timezone} />

        <div>
          <label>Organisation</label>
          <div>
            <select

              {...organisation}
              value={organisation.value || ''}  // required syntax for reset form to work
                                                 // undefined will not change value to first empty option
                                                 // when resetting
              >
              <option></option>
              <option value='1454665923922'>MomConnect Central Helpdesk Team</option>
            </select>
          </div>
        </div>
        <hr />
        <div>
        <ButtonInput type='submit' value='Create User' disabled={submitting} bsStyle='primary' />
        </div>
      </form>
    )
  }
}

 //
 // <button type='submit' disabled={submitting}>
 //   {submitting ? <i/> : <i/>} Submit
 // </button>

export default reduxForm({
  form: 'newuser',
  fields
}, mapStateToProps, accountActions)(UserCreateForm)
