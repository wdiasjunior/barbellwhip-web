import React, { useState, useLayoutEffect } from "react";

import oneRMCalc from "./math";
import styles from "./calculatorPageStyles";
import NumberInput from "../../sharedComponents/numberInput/numberInput";
import Header from "../../sharedComponents/header/header";

import { useAtom } from "jotai";
import { activeThemeAtom, selectedLocaleAtom, calculatorPageRepsAtom, calculatorPageWeightAtom, calculatorPageWeightUnitAtom } from "../../helpers/jotai/atomsWithStorage";

interface Props {
  setNavBarOpen: () => void;
}

const CalculatorPage = (props: Props) => {

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);

  const [repsPerformed, setRepsPerformed] = useAtom(calculatorPageRepsAtom);
  const [weightLifted, setWeightLifted] = useAtom(calculatorPageWeightAtom);
  const [showWarning, setShowWarning] = useState(false);
  const [weightUnit, setWeightUnit] = useAtom(calculatorPageWeightUnitAtom); // "kg" || "lbs"
  const [inputLabel, setInputLabel] = useState("");
  const [isModalWeightInputVisible, setModalWeightInputVisible] = useState(false);

  const rmCol1 = [2, 3, 4, 5, 6, 7];
  const rmCol2 = [8, 9, 10, 11, 12, 15];
  const percentCol1 = [0.95, 0.9, 0.85, 0.8, 0.75, 0.7];
  const percentCol2 = [0.65, 0.6, 0.55, 0.5, 0.45, 0.4];
  const percentLabel = (i) => i.toFixed(2).toString().replace("0.", "");

  // const onScreenLoad = () => {
  //   navigation.setOptions({ headerTitle: () =>
  //                 <Header title={selectedLocale.calculatorPage.title} menu={false} />
  //             });
  // }
  //
  // useLayoutEffect(() => {
  //   onScreenLoad();
  // }, [])

  const decrementReps = () => {
    if(repsPerformed > 1) {
      setRepsPerformed(repsPerformed - 1);
    }
    if(repsPerformed <= 12) {
      setShowWarning(false);
    }
  }
  const incrementReps = () => {
    if(repsPerformed < 20) {
      setRepsPerformed(repsPerformed + 1);
    }
    if(repsPerformed > 12) {
      setShowWarning(true);
    }
  }
  const decrementWeight = () => {
    if((weightLifted - 5) < 0) {
      setWeightLifted(0);
    } else {
      setWeightLifted(weightLifted - 5);
    }
  }
  const incrementWeight = () => {
    if((weightLifted + 5) > 2000) {
      setWeightLifted(2000);
    } else {
      setWeightLifted(weightLifted + 5);
    }
  }

  const toggleModal = (value: string, label: string) => {
    if(label == "REPS") {
      if(typeof value === "string" || value instanceof String) {
        const repsUpdated = parseInt(value);
        if(value !== "0" && parseInt(value) <= 20) {
          setRepsPerformed(repsUpdated);
        }
        setInputLabel("REPS");
      }
    } else {
      if(typeof value === "string" || value instanceof String) {
        const weightUpdated = parseFloat(value);
        if(value !== "0" && parseFloat(value) <= 2000) {
          setWeightLifted(weightUpdated);
        }
        setInputLabel(weightUnit);
      }
    }
    setModalWeightInputVisible(!isModalWeightInputVisible);
  };

  return (
    <div style={styles(activeTheme).container}>
      <Header
        title={selectedLocale.calculatorPage.title}
        setNavBarOpen={props.setNavBarOpen}
      />
      <div style={styles(activeTheme).wrapper}>

        <div style={styles(activeTheme).cardIncrement}>

          <div style={styles(activeTheme).rowWrapper}>
            <span style={styles(activeTheme).title}>{selectedLocale.calculatorPage.weightLifted}</span>
            <div style={styles(activeTheme).row}>
              <div onClick={decrementWeight} style={styles(activeTheme).incrementWrapper}>
                <span style={styles(activeTheme).incrementText}>-</span>
              </div>

              <div onClick={() => toggleModal("0", weightUnit)}>
                <span style={styles(activeTheme).repsSets}>{weightLifted}</span>
              </div>

              <div onClick={incrementWeight} style={styles(activeTheme).incrementWrapper}>
                <span style={styles(activeTheme).incrementText}>+</span>
              </div>
            </div>
          </div>

          <div style={styles(activeTheme).rowWrapper}>
            <span style={styles(activeTheme).title}>{selectedLocale.calculatorPage.repsPerformed}</span>
            <div style={styles(activeTheme).row}>
              <div onClick={decrementReps} style={styles(activeTheme).incrementWrapper}>
                <span style={styles(activeTheme).incrementText}>-</span>
              </div>

              <div onClick={() => toggleModal("0", "REPS")}>
                <span style={styles(activeTheme).repsSets}>{repsPerformed}</span>
              </div>

              <div onClick={incrementReps} style={styles(activeTheme).incrementWrapper}>
                <span style={styles(activeTheme).incrementText}>+</span>
              </div>
            </div>
          </div>
        </div>

        {repsPerformed > 12 &&
          <div style={styles(activeTheme).cardWarning}>
            <span style={styles(activeTheme).textWarning}>{selectedLocale.calculatorPage.textWarning}</span>
          </div>
        }

        <div style={styles(activeTheme).card1RM}>
          <span style={styles(activeTheme).title1RM}>{selectedLocale.calculatorPage.rmTitle}</span>

          <div style={styles(activeTheme).card1RMRow1}>
            <div style={styles(activeTheme).card1RMCol}>
              <span style={styles(activeTheme).weightTop}>{oneRMCalc(weightLifted, repsPerformed, 1)} {weightUnit}</span>
              <span style={styles(activeTheme).weightSubTop}>1RM</span>
            </div>
            <div style={styles(activeTheme).card1RMCol}>
              <span style={styles(activeTheme).weightTop}>{oneRMCalc(weightLifted, repsPerformed, 5)} {weightUnit}</span>
              <span style={styles(activeTheme).weightSubTop}>5RM</span>
            </div>
          </div>

          <div style={styles(activeTheme).card1RMRow2}>
            <div style={styles(activeTheme).card1RMCol}>
              {rmCol1.map((item, index) => {
                return (
                  <div style={styles(activeTheme).card1RMColContentRow} key={"key-rmCol1-"+index}>
                    <span style={styles(activeTheme).weightSubBottom}>{item}RM</span>
                    <span style={styles(activeTheme).weightBottom}>{oneRMCalc(weightLifted, repsPerformed, item)} {weightUnit}</span>
                  </div>
                )
              })}
            </div>
            <div style={styles(activeTheme).card1RMCol}>
              {rmCol2.map((item, index) => {
                return (
                  <div style={styles(activeTheme).card1RMColContentRow} key={"key-rmCol2-"+index}>
                    <span style={styles(activeTheme).weightSubBottom}>{item}RM</span>
                    <span style={styles(activeTheme).weightBottom}>{oneRMCalc(weightLifted, repsPerformed, item)} {weightUnit}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div style={styles(activeTheme).cardPercentage}>
          <span style={styles(activeTheme).title1RM}>{selectedLocale.calculatorPage.rmPercentageTitle}</span>

          <div style={styles(activeTheme).card1RMRow1}>
            <div style={styles(activeTheme).card1RMCol}>
              <span style={styles(activeTheme).weightTop}>{Math.floor(weightLifted * 1.05)} {weightUnit}</span>
              <span style={styles(activeTheme).weightSubTop}>105%</span>
            </div>
            <div style={styles(activeTheme).card1RMCol}>
              <span style={styles(activeTheme).weightTop}>{Math.floor(weightLifted * 1.025)} {weightUnit}</span>
              <span style={styles(activeTheme).weightSubTop}>102.5%</span>
            </div>
          </div>

          <div style={styles(activeTheme).card1RMRow2}>
            <div style={styles(activeTheme).card1RMCol}>
              {percentCol1.map((item, index) => {
                return (
                  <div style={styles(activeTheme).card1RMColContentRow} key={"key-percentageCol1-"+index}>
                    <span style={styles(activeTheme).weightSubBottom}>{percentLabel(item)}%</span>
                    <span style={styles(activeTheme).weightBottom}>{Math.floor(weightLifted * item)} {weightUnit}</span>
                  </div>
                )
              })}
            </div>
            <div style={styles(activeTheme).card1RMCol}>
              {percentCol2.map((item, index) => {
                return (
                  <div style={styles(activeTheme).card1RMColContentRow} key={"key-percentageCol2-" + index}>
                    <span style={styles(activeTheme).weightSubBottom}>{percentLabel(item)}%</span>
                    <span style={styles(activeTheme).weightBottom}>{Math.floor(weightLifted * item)} {weightUnit}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/*<Modal
          isVisible={isModalWeightInputVisible}
          onBackButtonClick={() => setModalWeightInputVisible(false)}
          onBackdropPress={() => setModalWeightInputVisible(false)}
          useNativeDriver={true}
          hideModalContentWhileAnimating={true}
          animationInTiming={100}
          animationOutTiming={1}
          backdropTransitionInTiming={100}
          backdropTransitionOutTiming={1}
        >
          <div style={styles(activeTheme).modalContent}>
            <NumberInput toggleModal={toggleModal} inputLabel={inputLabel}/>
          </div>
        </Modal>*/}

      </div>
    </div>
  );
}

export default CalculatorPage;
