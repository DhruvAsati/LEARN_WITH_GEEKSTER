import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState(''); // State for generated password
  const [passwordLength, setPasswordLength] = useState(8); // Default password length
  const [passwordType, setPasswordType] = useState('mixed'); // Default password type
  const inputPassRef = useRef(null); // Ref for the password input

  // Generate random password
  const randomPassword = () => {
    const num = '1234567890';
    const specialChar = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';

    let characterPool = ''; // Pool of characters to generate the password from

    // Set character pool based on selected type
    switch (passwordType) {
      case 'mixed':
        characterPool = num + specialChar + uppercase + lowerCase;
        break;
      case 'uppercase':
        characterPool = uppercase;
        break;
      case 'lowercase':
        characterPool = lowerCase;
        break;
      case 'number':
        characterPool = num;
        break;
      case 'special':
        characterPool = specialChar;
        break;
      default:
        characterPool = num + specialChar + uppercase + lowerCase;
    }

    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      newPassword += characterPool.charAt(randomIndex);
    }

    return newPassword;
  };

  // Refresh password
  const generatePassword = () => {
    const newPass = randomPassword();
    setPassword(newPass); // Update password in state
  };

  // Copy password to clipboard
  const copyPassword = () => {
    if (inputPassRef.current) {
      navigator.clipboard.writeText(inputPassRef.current.value);
      alert('Password copied to clipboard');
    }
  };

  useEffect(() => {
    generatePassword(); // Generate a password when component mounts or when the length/type changes
  }, [passwordLength, passwordType]); // Regenerate password when length or type changes

  return (
    <div id="container">
      <select
        name="Password-size"
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
          placeholder="random Password"
          value={password}
          readOnly
          ref={inputPassRef}
        />
        <button id="refresh" onClick={generatePassword}>
          <span className="material-symbols-outlined">refresh</span>
        </button>
        <button id="copy" onClick={copyPassword}>
          <span className="material-symbols-outlined">content_copy</span>
        </button>
      </div>

      <div id="checkboxes">
        <input
          type="checkbox"
          name="password-type"
          value="mixed"
          checked={passwordType === 'mixed'}
          onChange={(e) => setPasswordType(e.target.value)}
        />
        <label htmlFor="mixed">Mixed</label>

        <input
          type="checkbox"
          name="password-type"
          value="uppercase"
          checked={passwordType === 'uppercase'}
          onChange={(e) => setPasswordType(e.target.value)}
        />
        <label htmlFor="uppercase">Uppercase</label>

        <input
          type="checkbox"
          name="password-type"
          value="lowercase"
          checked={passwordType === 'lowercase'}
          onChange={(e) => setPasswordType(e.target.value)}
        />
        <label htmlFor="lowercase">Lowercase</label>

        <input
          type="checkbox"
          name="password-type"
          value="number"
          checked={passwordType === 'number'}
          onChange={(e) => setPasswordType(e.target.value)}
        />
        <label htmlFor="number">Number</label>

        <input
          type="checkbox"
          name="password-type"
          value="special"
          checked={passwordType === 'special'}
          onChange={(e) => setPasswordType(e.target.value)}
        />
        <label htmlFor="special">Special Character</label>
      </div>
    </div>
  );
}

export default App;
