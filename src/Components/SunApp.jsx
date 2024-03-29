import React, { Component, useState, useEffect } from 'react'
import './Styles/SunApp.css'
import 'aos/dist/aos.css';

import { ImageAnalyzerTwo } from './Analyzers/ImageAnalyzerTwo'
import { ImageAnalyzerThree } from './Analyzers/ImageAnalyzerThree'
import { ImageAnalyzerFour } from './Analyzers/ImageAnalyzerFour'
import { ImageAnalyzer } from './Analyzers/ImageAnalyzer'
import { AppResults } from './AppResults'
import { AppNavbar } from './AppNavbar'
import { DateSelector } from './DateSelector/DateSelector'

const SunApp = () => {

  const [BOne, setBOne] = useState(0);
  const [BTwo, setBTwo] = useState(0);
  const [BThree, setBThree] = useState(0);
  const [BFour, setBFour] = useState(0);

  const [globalDate, setglobalDate] = useState(0);
  
  // Function for add days 

  const addDays = (str, num) => {
    let last = parseInt(str.slice(-1));
    let newLast = last + num;
    let newStr = str.substring(0, str.length -1) + newLast;
    return newStr;
  }

  // Function for get the day

  const getDayNumber = (num) => {

    let toStr = num.toString().replace('-', '').replace('-', '').slice(-2);
    let toNum = parseInt(toStr)
    return toNum

  }

  /* Setting the dates that every image that the analyzer will use */

  let dateForOne = 0;
  let dateForTwo = 0;
  let dateForThree = 0;
  let dateForFour = 0;

  let dateNumberForOne = 0;
  let dateNumberForTwo = 0;
  let dateNumberForThree = 0;
  let dateNumberForFour = 0;

  if (globalDate != 0) {
    dateForOne = globalDate
    dateForTwo = addDays(globalDate, 1);
    dateForThree = addDays(globalDate, 2);
    dateForFour = addDays(globalDate, 3);

    dateNumberForOne = getDayNumber(dateForOne);
    dateNumberForTwo = getDayNumber(dateForTwo);
    dateNumberForThree = getDayNumber(dateForThree);
    dateNumberForFour = getDayNumber(dateForFour);

  };

  // Function for refreshing the values

  const [refreshCoords, setRefreshCoords] = useState(false)

  const refreshIt = () => {
    setBOne(0);
    setBTwo(0);
    setBThree(0);
    setBFour(0);
    setglobalDate(0);
    setRefreshCoords(true);
  }

  useEffect(() => {
    if (refreshCoords) {
      setBOne(0);
      setBTwo(0);
      setBThree(0);
      setBFour(0);
      setglobalDate(0);
      setRefreshCoords(false); // desactivamos la función
    }
  }, [refreshCoords]);

  return (
    <>
        <div className="mainApp">
          <DateSelector sendingDate={globalDate => setglobalDate(globalDate)} refreshIt={refreshIt}/>
          <AppNavbar />
          <div className="principal-container">
            <div className="display-image">
              <h1 className="refnumber" id='refOne' data-aos="fade-left" data-aos-delay="200">0<span id='HighOne'>1</span></h1>
              <ImageAnalyzer date={dateForOne} sendingB={BOne => setBOne(BOne)} refreshCoords={refreshCoords}/>
              
            </div>
          </div>
          <div className="principal-container">
              <h1 className="refnumber" id='refTwo'>0<span id='HighTwo'>2</span></h1>
              <ImageAnalyzerTwo date={dateForTwo} sendingB={BTwo => setBTwo(BTwo)} refreshCoords={refreshCoords}/>
          </div>
          <div className="principal-container">
              <h1 className="refnumber" id='refThree'>0<span id='HighThree'>3</span></h1>
              <ImageAnalyzerThree date={dateForThree} sendingB={BThree => setBThree(BThree)} refreshCoords={refreshCoords}/>
          </div>
          <div className="principal-container">
              <h1 className="refnumber" id='refFour'>0<span id='HighFour'>4</span></h1>
              <ImageAnalyzerFour date={dateForFour} sendingB={BFour => setBFour(BFour)} refreshCoords={refreshCoords}/>
          </div>
          <div className="principal-container">
              <AppResults bValues={[BOne, BTwo, BThree, BFour]} days={[dateNumberForOne, dateNumberForTwo, dateNumberForThree, dateNumberForFour]}/>
          </div>
        </div>
      </>
  )
}

export default SunApp