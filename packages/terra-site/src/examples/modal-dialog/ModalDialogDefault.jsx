import React from 'react';
import ModalDialog from 'terra-modal-dialog/src/ModalDialog';

class ModalDialogDefault extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <ModalDialog
          ariaLabel="Modal Dialog Example"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
        >
          <ModalDialog.Header onClick={this.handleCloseModal} >Modal Dialog Header</ModalDialog.Header>
          <ModalDialog.ContentHeader>{'Static Content Header'}</ModalDialog.ContentHeader>
          <ModalDialog.Content>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus velit non vehicula gravida. Nullam tempor erat at eros interdum, eget sodales mi finibus. Donec ac lorem enim. Donec imperdiet arcu sit amet interdum egestas. Aliquam quam quam, accumsan et egestas sed, imperdiet et purus. Vestibulum lacus ante, pulvinar sit amet turpis non, ultrices molestie nunc. Nam mollis pharetra felis sit amet eleifend. Nunc sagittis aliquet efficitur. Integer gravida, augue in mollis ultrices, felis diam maximus turpis, vitae pretium augue libero sit amet leo. Curabitur vel magna ac nulla laoreet viverra ac et mauris. In eleifend ex quis ipsum tristique, ut efficitur ligula luctus. Nullam id pretium nisl. Sed nec vehicula dolor, quis facilisis odio. Sed volutpat magna ut tincidunt fermentum. Mauris cursus metus id laoreet consectetur.</p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc nisl ipsum, laoreet nec tincidunt ut, sodales eget tortor. Pellentesque pharetra mauris eget dignissim lobortis. Mauris nec convallis nunc. Morbi in accumsan lectus, a ultrices elit. Donec pharetra tristique tortor, in consectetur massa commodo auctor. Maecenas at sollicitudin odio, in vehicula arcu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <p>Aliquam mattis urna et nulla suscipit, id consequat dolor gravida. Cras varius purus eu massa aliquet, nec suscipit erat volutpat. In sit amet cursus tellus. Sed sit amet massa id metus sagittis ornare at eu ligula. Donec nec mi vel ipsum vulputate porta. Integer et justo urna. Donec scelerisque hendrerit felis at finibus. Duis in est ac nulla sodales luctus non vitae lectus. Suspendisse vel libero vel nisl accumsan dapibus ac non ipsum.</p></ModalDialog.Content>
          <ModalDialog.Footer>{'Footer'}</ModalDialog.Footer>
        </ModalDialog>
        <button onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    )
  }
}

export default ModalDialogDefault;
