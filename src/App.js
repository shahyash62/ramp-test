import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

function Time() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    });

    return <div>{time}</div>;
}

function Display({ input }) {
    const Output = ({ children }) => <div className={styles.output}>{children}</div>;
    if (typeof input === 'object') {
        if (input instanceof Array) {
            return (
                <Output>
                    <ul className={styles.list}>
                        {input.map((element, index) => (
                            <li key={index}>
                                <div>{element}</div>
                            </li>
                        ))}
                    </ul>
                </Output>
            );
        } else {
            return (
                <Output>
                    <div>{input.toString()}</div>
                </Output>
            );
        }
    } else if (!!input === false) {
        return (
            <Output>
                <div>
                    <Time />
                </div>
            </Output>
        );
    } else {
        return (
            <Output>
                <div>{input}</div>
            </Output>
        );
    }
}

function App() {
    const [input, setInput] = useState('');
    const handleSelectChange = (e) => {
        switch (e.target.value) {
            case 'array':
                setInput(['This', 'is an', 'array!']);
                break;
            case 'undefined':
                setInput(undefined);
                break;
            case 'other':
                setInput(12345);
                break;
            default:
                break;
        }
    };
    return (
        <div className={styles.App}>
            <div className={styles.card}>
                <select defaultValue="undefined" onChange={handleSelectChange} name="inputSelect">
                    <option value="array">Array ['This', 'is an', 'array!']</option>
                    <option value="undefined">Falsy/Undefined</option>
                    <option value="other">Other (number)</option>
                </select>
                <Display input={input} />
            </div>
        </div>
    );
}

export default App;
