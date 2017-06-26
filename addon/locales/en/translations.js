import EditModes from './components/layers-dialogs/edit-modes';
import FlexberryCSWComponent from './components/flexberry-csw';
import NewPlatformFlexberryGISMapCswConnectionModel from './models/new-platform-flexberry-g-i-s-csw-connection';

export default {
  'models': {
    'new-platform-flexberry-g-i-s-csw-connection': NewPlatformFlexberryGISMapCswConnectionModel
  },
  'components': {
    'layers-dialogs': {
      'edit-modes': EditModes
    },
    'flexberry-csw': FlexberryCSWComponent
  }
};
