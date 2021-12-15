import React, { Component } from 'react';

export default class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.onScriptLoad = this.onScriptLoad.bind(this)
      }
    
      onScriptLoad() {
        const map = new window.google.maps.Map(
          document.getElementById(this.props.id),
          this.props.options);
        this.props.onMapLoad(map)
      }
     
      componentDidMount() {
        if (!window.google) {
          var s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = `https://maps.google.com/maps/api/js?key=AIzaSyD4C0TVTYEftV1h8L4aF0raPcC6zUTawdY`;
          var x = document.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
          // Below is important. 
          //We cannot access google.maps until it's finished loading
          s.addEventListener('load', e => {
            this.onScriptLoad()
          })
        } else {
          this.onScriptLoad()
        }
      }
    
      render() {
        return (
          <div style={{ width: '100%', height: 500 }} id={this.props.id} />
        );
      }
    }