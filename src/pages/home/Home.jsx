import React, {useState} from 'react'
import styles from './Home.module.css'
import ReactTutorial from './components/ReactTutorial';
import FetchData from './components/FetchData';
import Authenticate from './components/Authenticate';
import Advanced from './components/Advanced';

const Home = () => {

  const [visible, setVisible] = useState({  'react-tutorial-content': false,
                                            'fetch-data-content'    : false, 
                                            'authenticat-content'   : false, 
                                            'advanced-content'      : false});

  function display(section) {
    setVisible(prevState => ({ ...prevState, [section]: !prevState[section] }));
  }

  return (
    <>
      <h1>Home</h1>
      <div className={styles.content}>
        <button className={styles.button} onClick={() => display('react-tutorial-content')}>REACT TUTORIAL</button>
        <ReactTutorial display={visible['react-tutorial-content']}/>

        <button className={styles.button} onClick={() => display('fetch-data-content')} >FETCH DATA</button>
        <FetchData display={visible['fetch-data-content']}/>

        <button className={styles.button} onClick={() => display('authenticat-content')}>AUTHENTICATE</button>
        <Authenticate display={visible['authenticat-content']}/>

        <button className={styles.button} onClick={() => display('advanced-content')}>ADVANCED</button>
        <Advanced display={visible['advanced-content']}/>
      </div>
      
    </>
  );
};

export default Home;