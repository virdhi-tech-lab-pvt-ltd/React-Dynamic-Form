import React from 'react';
import TextImage from 'app/assets/Text.svg';
import AudioImage from 'app/assets/Audio.svg';
import VideoImage from 'app/assets/Video.svg';
import CheckBoxImage from 'app/assets/Yes or No.svg';
import DateImage from 'app/assets/Date.svg';
import Image from 'app/assets/Image.svg';
import DropDownImage from 'app/assets/Dropdown.svg';
import NumberImage from 'app/assets/Number .svg';
import TextFieldImage from 'app/assets/Text Field.svg';
import TextAreaImage from 'app/assets/Multi Line.svg';
import RadioImage from 'app/assets/Radio.svg';

let icons = {
  CheckBox: <CheckBoxImage style={{width: '35px', height: '35px'}} / >,
  DatePicker: <DateImage style={{width: '35px', height: '35px'}} />,
  DropDown: <DropDownImage style={{width: '35px', height: '35px'}} />,
  ImageUpload: <Image style={{width: '35px', height: '35px'}} />,
  AudioUpload: <AudioImage style={{width: '35px', height: '35px'}} />,
  VideoUpload: <VideoImage style={{width: '35px', height: '35px'}} />,
  NumberField: <NumberImage style={{width: '35px', height: '35px'}} />,
  TextField: <TextFieldImage style={{width: '35px', height: '35px'}} />,
  TextArea: <TextAreaImage style={{width: '35px', height: '35px'}} />,
  RadioButton: <RadioImage style={{width: '35px', height: '35px'}} />,
  SearchBar: <TextImage style={{width: '35px', height: '35px'}} />
}
export const ImageIndex = (name) => icons[name];
