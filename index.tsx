// ChineseTextInput.jsx
import React, { useState, useRef } from 'react';
import { TextInput, Platform } from 'react-native';

const ChineseTextInput = () => {
    const [customTitle,onchangeCustomTitle,setCustomTitle] = useState('');

    return (
        <TextInput
            // value={customTitle}
            maxLength={5}
            placeholderTextColor="#B0A5C9"
            placeholder='请输入标题'
            keyboardAppearance="default"
            autoCorrect={false}
        />
    );
};

export default ChineseTextInput;
