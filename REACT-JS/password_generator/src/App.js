import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8); 
    const [passwordType, setPasswordType] = useState('mixed');
    const inputPassRef = useRef(null);

 
  const createRandomPassword = () => {
    const numbers = '1234567890';
    const specialCharacters = '!@#$%^&*()_+~`|}{[]\\:;?><,./-='; 
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';

    let characterOptions = '';
    switch (passwordType) {
      case 'mixed':
        characterOptions = numbers + specialCharacters + upperCaseLetters + lowerCaseLetters;
        break;
      case 'uppercase':
        characterOptions = upperCaseLetters;
        break;
      case 'lowercase':
        characterOptions = lowerCaseLetters;
        break;
      case 'number':
        characterOptions = numbers;
        break;
      case 'special':
        characterOptions = specialCharacters;
        break;
      default:
        characterOptions = numbers + specialCharacters + upperCaseLetters + lowerCaseLetters;
    }
    let newGeneratedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomChar = Math.floor(Math.random() * characterOptions.length);
      newGeneratedPassword += characterOptions.charAt(randomChar);
    }

    return newGeneratedPassword;
  };
  const handleGeneratePassword = () => {
    const newPass = createRandomPassword();
    setPassword(newPass);
  };

  const handleCopyPassword = () => {
    if (inputPassRef.current) {
      navigator.clipboard.writeText(inputPassRef.current.value);
      alert('Password copied to clipboard!');
    }
  };

  useEffect(() => {
    handleGeneratePassword();
  }, [passwordLength, passwordType]);

  return (
    <div id="container">
      <select
        id="Password-Size"
        value={passwordLength}
        onChange={(e) => setPasswordLength(parseInt(e.target.value))}>
        <option value="8" className="length">8</option>
        <option value="10" className="length">10</option>
        <option value="12" className="length">12</option>
        <option value="16" className="length">16</option>
      </select>

      <div className="data">
        <input
          type="text"
          id="Password"
          placeholder="Generated Password"
          value={password}
          readOnly
          ref={inputPassRef}
        />
        <button id="refresh" onClick={handleGeneratePassword}>
          <span className="material-symbols-outlined">refresh</span>
        </button>
        <button id="copy" onClick={handleCopyPassword}>
          <span className="material-symbols-outlined">content_copy</span>
        </button>
      </div>

      <div id="checkboxes">
        <input
          type="checkbox"
          value="mixed"
          checked={passwordType === 'mixed'}
          onChange={(e) => setPasswordType(e.target.value)}
        />
        <label htmlFor="mixed">Mixed</label>

        <input
          type="checkbox"
          value="uppercase"
          checked={passwordType === 'uppercase'}
          onChange={(e) => setPasswordType(e.target.value)}
        />
        <label htmlFor="uppercase">Uppercase</label>

        <input
          type="checkbox"
          value="lowercase"
          checked={passwordType === 'lowercase'}
          onChange={(e) => setPasswordType(e.target.value)}
        />
        <label htmlFor="lowercase">Lowercase</label>

        <input
          type="checkbox"
          value="number"
          checked={passwordType === 'number'}
          onChange={(e) => setPasswordType(e.target.value)}
        />
        <label htmlFor="number">Numbers</label>

        <input
          type="checkbox"
          value="special"
          checked={passwordType === 'special'}
          onChange={(e) => setPasswordType(e.target.value)}
        />
        <label htmlFor="special">Special Characters</label>
      </div>
    </div>
  );
}

export default App;
