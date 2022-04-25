import React from 'react';
import PropTypes from 'prop-types';

function RGB(props) {
   const {value} = props;
   let num = 0;
   let rgb = 'rgb(';
   let message = '';
   const regex = /^#([0-9a-f]{6})$/i;
   console.log('rgb----props', props, value, regex.test(value));
   if (value.length === 7 && regex.test(value)){
     const hex= value.slice(1);
     console.log('hex---', hex);
     for (let i=0; i<=4; i= i+2) {
      num = parseInt(hex.slice(i,i+2), 16);
      console.log('num---', num);
      rgb +=num+','; 
      console.log('rgb---', rgb);
     }
     rgb =rgb.slice(0,rgb.length-1) + ')';
     message = rgb;
     console.log('итог rgb---', rgb);
     document.body.style.backgroundColor = `${rgb}`;
   } else if (value.length === 7 && !regex.test(value)) {
     // rgb = parseInt('#ff0000'.slice(1),16);
     rgb = 'rgb(255,0,0)';
     console.log('rgb- ошибка--', rgb);
     message = "ошибка";
     document.body.style.backgroundColor = 'rgb(255,0,0)';
   } else if(value.length < 7 || value.length === 0){
    rgb = 'rgb(255,255,255)';
    console.log('rgb- free--', rgb);
    message = "";
    document.body.style.backgroundColor = 'rgb(255,255,255)';
   }
   return (
     <div className='output'>
       <label htmlFor="rgb">RGB </label>
       <input id="rgb" type="text" value={message} style={{backgroundColor: `${rgb}`}} readOnly />
     </div>
   );
}

RGB.defaultProps = {
  value: ''
}

RGB.propTypes = {
  value: PropTypes.string
}

export default RGB;