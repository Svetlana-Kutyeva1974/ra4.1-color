import React from 'react';
//import PropTypes from 'prop-types'

function RGB(props) {
   const {value} = props;
   let num = 0;
   let rgb = 'rgb(';
   let message = '';
   console.log('rgb----props', props, value);
   if (value.length === 7){
     const hex= value.slice(1);
     console.log('hex---', hex);
     for (let i=0; i<=4; i= i+2) {
      num = parseInt(hex.slice(i,i+1), 16);
      console.log('num---', num);
      rgb +=num+','; 
      console.log('rgb---', rgb);
     }
     rgb =rgb.slice(0,10) + ')';
     message = rgb;
     console.log('итог rgb---', rgb);
     //alert( parseInt('0xff', 16) ); // 255
   } else{
     rgb = parseInt('#ff0000'.slice(1),16);
     message = "ошибка"
   }
   return (
     <div className='output' style={{backgroundColor: `${rgb}`}}>
        {message}
     </div>
   );
}
/*
IconSwitch.propTypes = {
  onSwitch: PropTypes.func,
  icon: PropTypes.string
}
*/
export default RGB;