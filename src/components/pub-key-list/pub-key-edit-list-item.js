import React, {Component, PropTypes} from 'react';
import ReactDOM from'react-dom';

export default class PubKeyEditListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { itemKey: props.rowItem };
  }

  handleKeyChange(e) {
    this.setState({ itemKey: e.target.value });
  }

  componentDidMount() {
    this.focusAndSetCursor(this.refs.pubKeyInput);
  }

  componentDidUpdate() {
    //this.focusAndSetCursor(this.refs.pubKeyInput);
  }

  focusAndSetCursor(inputRef) {
    let dNode = ReactDOM.findDOMNode(inputRef);
    let InputFieldValLength = dNode.value.length;
    dNode.focus();
    dNode.setSelectionRange(InputFieldValLength, InputFieldValLength);
  }

  render() {
    return (
      <tr>
        <td>
          <input
            type    = "checkbox"
            checked = {this.props.isSelected}
            disbled = "true"/>
        </td>
        <td>
          <input
            type        = "text"
            className   = "form-control"
            ref         = "pubKeyInput"
            onChange    = {this.handleKeyChange.bind(this)}
            value       = {this.state.itemKey}
            placeholder = "Enter Public Key"/>
          <button
            className = "btn btn-link btn-sm pull-right"
            onClick   = {(event) => {event.preventDefault(); this.props.editRowItemSaveAction(this.props.rowItem, this.state.itemKey)}}>
            <span>Save</span>
          </button>
          <button
            className = "btn btn-link btn-sm pull-right"
            onClick   = {(event) => {event.preventDefault(); this.props.editRowItemCancelAction()}}>
            <span>Cancel</span>
          </button>
        </td>
      </tr>
    );
  }
};
