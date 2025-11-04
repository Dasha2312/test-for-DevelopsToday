import { useState } from "react";
import type { IInput } from "./interface.ts";

import styles from './input-style.module.css';
import PasswordToggle from "./InputActions/PasswordToggle/PasswordToggle.tsx";
import ClearableToggle from "./InputActions/ClearableToggle/ClearableToggle.tsx";
import usePasswordToggle from "./InputActions/PasswordToggle/usePasswordToggle.ts";

function InputBase({typeInput="text", isClearable = false, placeholderInput='Enter you text'}: IInput) {
  const [inputValue, setInputValue] = useState('');

  const {isVisible, toggleVisibility} = usePasswordToggle(false);

  const isPassword = typeInput == 'password';
  const inputTypeNew = isPassword && isVisible ? 'text' : typeInput;

  return (
    <div className={styles.relative}>
      <input 
        type={inputTypeNew}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholderInput}
        className={`${styles.inputBase} 
          ${isPassword ? styles.passwordType : ''} 
          ${isClearable ? styles.clearableInput : ''}
        `}
        name="input"
      />
      <div className={styles.inputActions}>
        {isClearable && <ClearableToggle onClickIcon={() => setInputValue('')} />}
        {isPassword && <PasswordToggle isVisible={isVisible} onTogglePassword={toggleVisibility} />}
      </div>
    </div>
  );
}

export default InputBase;