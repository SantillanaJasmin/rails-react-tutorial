import React from "react";
import { Button } from "antd";

import BeerFormModal from "./BeerFormModal";

class BeerModalToggle extends React.Component {
  state = {
    visible: false
  };

  toggleModal = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  }

  render() {
    return(
      <>
        <Button onClick={this.toggleModal}>{this.props.label}</Button>
        <BeerFormModal 
          beer={this.props.beer} header={this.props.header} method={this.props.method} url={this.props.url} visible={this.state.visible}
          reloadBeers={this.props.reloadBeers} toggleVisibility={this.toggleModal}
          footer={null}
        />
      </>
    );
  }
}

export default BeerModalToggle;