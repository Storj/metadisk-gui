import React from 'react';

const BucketItem = (props) => {
  const {storage, transfer, status} = props;

  render() {
    return (
      <tr>
        <td className="bucket-icon hidden-xs">
          <img src="img/icon-bucket.svg" alt="">
        </td>
        <td className="bucket-label">
          <a onClick={this.prop.onClick}>{label}</a>
        </td>
        <td className="bucket-storage">
          {storage} GB
        </td>
        <td className="bucket-transfer">
          {transfer} GB
        </td>
        <td className="bucket-status">
          {status}
        </td>
      </tr>
    );
  }
};

BucketItem.propTypes = {
  storage  : React.PropTypes.number.isRequired,
  transfer : React.PropTypes.number.isRequired,
  label    : React.PropTypes.string.isRequired,
  status   : React.PropTypes.string.isRequired
};

export default BucketItem;