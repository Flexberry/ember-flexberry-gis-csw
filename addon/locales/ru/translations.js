import EditModes from './components/layers-dialogs/edit-modes';
import FlexberryCSWComponent from './components/flexberry-csw';
import NewPlatformFlexberryGISMapCswConnectionModel from './models/new-platform-flexberry-g-i-s-csw-connection';
import NewPlatformFlexberryGISCswConnectionLForm from './forms/new-platform-flexberry-g-i-s-csw-connection-l';
import NewPlatformFlexberryGISCswConnectionEForm from './forms/new-platform-flexberry-g-i-s-csw-connection-e';

export default {
  'models': {
    'new-platform-flexberry-g-i-s-csw-connection': NewPlatformFlexberryGISMapCswConnectionModel
  },
  'components': {
    'layers-dialogs': {
      'edit-modes': EditModes
    },
    'flexberry-csw': FlexberryCSWComponent
  },
  'forms': {
    'new-platform-flexberry-g-i-s-csw-connection-l': NewPlatformFlexberryGISCswConnectionLForm,
    'new-platform-flexberry-g-i-s-csw-connection-e': NewPlatformFlexberryGISCswConnectionEForm
  }
};
