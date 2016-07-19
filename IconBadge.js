var React = require('react');
var style = require('./style');
import {
  View,
} from 'react-native';

class IconBadge extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View>
        {
          // main element
          this.props.MainElement
        }
        <View style={[style.IconBadge, (this.props.IconBadgeStyle ? this.props.IconBadgeStyle : {})]}>
          {
            // badge element
            this.props.BadgeElement
          }
        </View>
      </View>
    )
  }
}

module.exports = IconBadge;
