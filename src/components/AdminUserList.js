import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as accountActions } from '../redux/modules/account'
import { UserCreateForm, AdminUserListItem } from './'
import { Table, Collapse, Well, Button, Glyphicon } from 'react-bootstrap'

const mapStateToProps = (state) => ({
  users: state.account.users,
  users_all: state.account.users_all
})

export default class AdminUserList extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      showAddUser: false,
      target: null
    }
  }

  static propTypes = {
    users: PropTypes.object.isRequired,
    users_all: PropTypes.object.isRequired,
    addUser: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
  };

  componentDidMount () {
    // this.props.loadFaqs()
  }

  // handleMessageSubmit (e) {
  //   const text = e.target.value.trim()
  //   if (e.which === 13) {
  //     this.handleMessageSave(text)
  //     e.target.value = ''
  //     this.setState({ text: '' })
  //     e.target.blur()
  //   }
  // }
  //
  // handleMessageChange (e) {
  //   this.setState({ text: e.target.value })
  // }
  //
  // handleMessageSave (text) {
  //   if (text.length !== 0) {
  //     const messageId = Date.now()
  //     this.props.addInternalMessage({id: messageId, body: text, from: 'You', pinned: false})
  //   }
  // }

  userDeactivate (userId) {
    console.log('Deactivating user')
  }

  openNewUser (e) {
    this.setState({ target: e.target, showAddUser: !this.state.showAddUser })
  }

  render () {
    const hasUsers = Object.keys(this.props.users).length > 0
    const header = !hasUsers
      ? <tr><td>There are current no users in this view.</td></tr>
      : null

    const userlist = this.props.users_all.map(user =>
        <AdminUserListItem
          key={user}
          user={this.props.users[user]}
          onUserDeactivateClicked={this.userDeactivate} />
      )
    const newUserForm = (
      <div>
        <Button bsStyle='default' onClick={this.openNewUser.bind(this)}><Glyphicon glyph='plus' /> Add New User</Button>
        <Collapse in={this.state.showAddUser}>
          <div>
            <Well>
              <UserCreateForm />
            </Well>
          </div>
        </Collapse>
      </div>
    )

    return (
      <div>
        { newUserForm }
        <Table responsive striped hover>
          <tbody>
           { header }
           { userlist }
           {this.props.children}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default connect(mapStateToProps, accountActions)(AdminUserList)
