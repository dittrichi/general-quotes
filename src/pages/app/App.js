import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import mainImg  from '../../images/main.png';
import {Quotes} from '../../components';
import {getQuote} from '../../services';
import quoteSound from '../../sounds/done.wav';

const audio = new Audio(quoteSound);

export function App(){
    const isMounted = useRef(true);
    
    console.log(isMounted);

    const [quoteState, setQuoteState] = useState({
        quote:'loading quote...',
        speaker: 'loading speaker...'
    });

    const onUpdate = async () => {
        const quote = await getQuote();
        if(isMounted.current){
            audio.play();
            setQuoteState(quote);
        }
    };

    useEffect(() =>{
        onUpdate();

        return () =>{
            isMounted.current = false;
        };
    },[]);// execute only on creation with an empty array

    return(
        <Content>
            <Quotes {...quoteState} onUpdate={onUpdate} />
            <MainImg src={mainImg} alt="Main abstract figure of a head with some wheels"/>
        </Content>
    );
}

const Content = styled.div`
    height: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainImg = styled.img`
    max-width: 50vw;
    align-self: flex-end;
`;