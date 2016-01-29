import React, { Component } from 'react'
import { Input, Glyphicon, Button, DropdownButton, MenuItem } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '03.2',
    category: 'Atoms - Form Elements',
    title: 'Form Elements Add-ons',
    description: 'Use `addonBefore` and `addonAfter` for normal addons, `buttonBefore` and `buttonAfter` for button addons. ',
    code: `
<form>
    <Input type="text" addonBefore="@" />
    <Input type="text" addonAfter=".00" />
    <Input type="text" addonBefore="$" addonAfter=".00" />
    <Input type="text" addonAfter={innerGlyphicon} />
    <Input type="text" buttonBefore={innerButton} />
    <Input type="text" buttonAfter={innerDropdown} />
    <Input type="text" addonBefore={innerRadio} />
    <Input type="text" addonBefore={innerCheckbox} />
</form>
`
  }

  innerGlyphicon = <Glyphicon glyph="music" />;
  innerButton = <Button>Before</Button>;
  innerDropdown = (
      <DropdownButton title="Action" id="input-dropdown-addon">
        <MenuItem key="1">Item</MenuItem>
      </DropdownButton>
    );
  innerRadio = <input type="radio" aria-label="..." />;
  innerCheckbox = <input type="checkbox" aria-label="..." />;

  render () {
    return (
        <form>
            <Input type="text" addonBefore="@" />
            <Input type="text" addonAfter=".00" />
            <Input type="text" addonBefore="$" addonAfter=".00" />
            <Input type="text" addonAfter={this.innerGlyphicon} />
            <Input type="text" buttonBefore={this.innerButton} />
            <Input type="text" buttonAfter={this.innerDropdown} />
            <Input type="text" addonBefore={this.innerRadio} />
            <Input type="text" addonBefore={this.innerCheckbox} />
        </form>
    )
  }
}
