import { useDispatch, useSelector } from 'react-redux';
/*************  TO DO #5 ******************/
import { setRandomCard } from './store/card';
/*************  TO DO #7 ******************/
import { cards } from './cards.json';

function App() {
    const card = useSelector(({ card }) => card);
    const dispatch = useDispatch();

    /*************  TO DO #7 ******************/
    const randInt = () => Math.floor(Math.random() * cards.length);

    return (
        <div className='main'>
            <h2>Pick a card, any card</h2>
            <img alt='random' src={card.image} />
            {/*************  TO DO #6 ******************/}
            <button onClick={() => dispatch(setRandomCard(cards[randInt()]))}>
                Get Random Card
            </button>
        </div>
    );
}

export default App;
