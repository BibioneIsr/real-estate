import React, {useContext, useState} from 'react';
import {ContextLang} from '../context';
import '../assets/css/ClearAllButton.css';

const ClearAllButton = () => {
    return (
        <button className="ClearAllButton"> Clear All </button>
    );
};

export default ClearAllButton;