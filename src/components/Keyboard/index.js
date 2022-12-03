
import Button from '../Button'
import { Row } from '../../styles';
import { useContext, useEffect } from 'react';
import { DisplayContext } from '../Reducer';


const Keyboard = () => {

    const { setDisplay } = useContext(DisplayContext);

    const eventHandler = (e) => {
        if (e.key === "0") {
            setDisplay({
                type: 'NUMBER',
                payload: '0'
            })
        }
        else if (e.key === "1") {
            setDisplay({
                type: 'NUMBER',
                payload: '1'
            })
        }
        else if (e.key === "2") {
            setDisplay({
                type: 'NUMBER',
                payload: '2'
            })
        }
        else if (e.key === "3") {
            setDisplay({
                type: 'NUMBER',
                payload: '3'
            })
        }
        else if (e.key === "4") {
            setDisplay({
                type: 'NUMBER',
                payload: '4'
            })
        }
        else if (e.key === "5") {
            setDisplay({
                type: 'NUMBER',
                payload: '5'
            })
        }
        else if (e.key === "6") {
            setDisplay({
                type: 'NUMBER',
                payload: '6'
            })
        }
        else if(e.key === "7") {
            setDisplay({
                type: 'NUMBER',
                payload: '7'
            })
        }
        else if(e.key === "8") {
            setDisplay({
                type: 'NUMBER',
                payload: '8'
            })
        }
        else if(e.key === "9") {
            setDisplay({
                type: 'NUMBER',
                payload: '9'
            })
        }
        else if(e.key === "+") {
            setDisplay({
                type: 'OPERATION',
                payload: ' + '
            })
        }
        else if(e.key === "-") {
            setDisplay({
                type: 'OPERATION',
                payload: ' - '
            })
        }
        else if(e.key === "*") {
            setDisplay({
                type: 'OPERATION',
                payload: ' * '
            })
        }
        else if(e.key === "/") {
            setDisplay({
                type: 'OPERATION',
                payload: ' / '
            })
        }
        else if(e.key === "=") {
            setDisplay({
                type: 'EQUAL',
                payload: '='
            })
        }
        else if(e.key === "Enter") {
            setDisplay({
                type: 'EQUAL',
                payload: '='
            })
        }
        else if(e.key === ".") {
            setDisplay({
                type: 'POINT',
                payload: '.'
            })
        }
        else if(e.key === "Delete") { 
            setDisplay({
            type: 'CLEAR'
        })}
        else if(e.key === "Backspace") {
            setDisplay({
                type: 'CORRECT'
            })
        }
    }

    useEffect(() =>{
        document.addEventListener('keydown', eventHandler)
        
        
        return () => {
            document.removeEventListener('keydown', eventHandler);
          }
    })


return (
    <>
    <Row>
        <Button label="Clear" onClick={() => 
            setDisplay({
                type: 'CLEAR'
            })
        }/>
        <Button label="Correct" onClick={() => 
            setDisplay({
                type: 'CORRECT'
            })
        }/>
    </Row>
    <Row>
        <Button label="7" onClick={() => 
            setDisplay({
                type: 'NUMBER',
                payload: '7'
            })
        }/>
        <Button label="8" onClick={() => 
            setDisplay({
                type: 'NUMBER',
                payload: '8'
            })
        }/>
        <Button label="9" onClick={() => 
            setDisplay({
                type: 'NUMBER',
                payload: '9'
            })
        }/>
        <Button label="/" onClick={() => 
            setDisplay({
                type: 'OPERATION',
                payload: ' / '
            })
        }/>
    </Row>
    <Row>
        <Button label="4" onClick={() => 
            setDisplay({
                type: 'NUMBER',
                payload: '4'
            })
        }/>
        <Button label="5" onClick={() => 
            setDisplay({
                type: 'NUMBER',
                payload: '5'
            })
        }/>
        <Button label="6" onClick={() => 
            setDisplay({
                type: 'NUMBER',
                payload: '6'
            })
        }/>
        <Button label="*" onClick={() => 
            setDisplay({
                type: 'OPERATION',
                payload: ' * '
            })
        }/>
    </Row>
    <Row>
        <Button label="1" onClick={() => 
            setDisplay({
                type: 'NUMBER',
                payload: '1'
            })
        }/>
        <Button label="2" onClick={() => 
            setDisplay({
                type: 'NUMBER',
                payload: '2'
            })
        }/>
        <Button label="3" onClick={() => 
            setDisplay({
                type: 'NUMBER',
                payload: '3'
            })
        }/>
        <Button label="-" onClick={() => 
            setDisplay({
                type: 'OPERATION',
                payload: ' - '
            })
        }/>
    </Row>
    <Row>
        <Button label="." onClick={() => 
            setDisplay({
                type: 'POINT',
                payload: '.'
            })
        }/>
        <Button label="0" onClick={() => 
            setDisplay({
                type: 'NUMBER',
                payload: '0'
            })
        }/>
        <Button label="=" onClick={() => 
            setDisplay({
                type: 'EQUAL',
                payload: '='
            })
        }/>
        <Button label="+" onClick={() => 
            setDisplay({
                type: 'OPERATION',
                payload: ' + '
            })
        }/>
    </Row>
    </>
)};

export default Keyboard;