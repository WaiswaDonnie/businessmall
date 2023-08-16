import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import {Picker} from '@react-native-picker/picker';
function CustomSelect({value,setValue,ref,style,options}) {
  return (
    <Picker
    style={[style]}
    ref={ref}
    selectedValue={value}
    onValueChange={(itemValue, itemIndex) =>
      setValue(itemValue)
    }>
        {options.map((option,index)=>    <Picker.Item  key={index} label={option} value={option} />)}
  </Picker>
  )
}

export default CustomSelect