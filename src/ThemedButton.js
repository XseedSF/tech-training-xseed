import React from 'react';
import {Consumer} from './theme-context';
function ThemedButton(props) {
 return (
   <Consumer>
     {theme => (
       <button
         {...props}
         style={{backgroundColor: theme.background}}
       />
     )}
   </Consumer>
 );
}
export default ThemedButton;